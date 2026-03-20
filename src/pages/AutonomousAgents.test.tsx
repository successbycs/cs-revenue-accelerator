import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import AutonomousAgents from "./AutonomousAgents";

describe("AutonomousAgents", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.stubGlobal("fetch", vi.fn());
  });

  it("submits the early access form to the lead API and shows success feedback", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      text: async () => JSON.stringify({ ok: true }),
    } as Response);

    render(
      <MemoryRouter>
        <AutonomousAgents />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "Chris" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email Address"), {
      target: { value: "chris@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: /get early access/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        "/api/lead",
        expect.objectContaining({
          body: JSON.stringify({
            email: "chris@example.com",
            name: "Chris",
            type: "early-access",
          }),
          method: "POST",
        }),
      );
    });

    expect(
      await screen.findByText(/your request has been sent and chris can reply directly to your email/i),
    ).toBeInTheDocument();
  });

  it("shows an error when early access submission fails", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      text: async () => JSON.stringify({ error: "Lead capture is unavailable." }),
    } as Response);

    render(
      <MemoryRouter>
        <AutonomousAgents />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "Chris" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email Address"), {
      target: { value: "chris@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: /get early access/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent("Lead capture is unavailable.");
  });

  it("submits the diagram request and exposes the fallback download link", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      text: async () => JSON.stringify({ ok: true }),
    } as Response);

    const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(() => {});

    render(
      <MemoryRouter>
        <AutonomousAgents />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: /download the architecture diagram/i }));
    fireEvent.change(screen.getByPlaceholderText("Your Name"), {
      target: { value: "Chris" },
    });
    fireEvent.change(screen.getAllByPlaceholderText("Email Address")[1], {
      target: { value: "chris@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send me the diagram/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        "/api/lead",
        expect.objectContaining({
          body: JSON.stringify({
            email: "chris@example.com",
            name: "Chris",
            type: "architecture-download",
          }),
          method: "POST",
        }),
      );
    });

    expect(await screen.findByText(/the download should start automatically/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /download the diagram again/i })).toHaveAttribute(
      "href",
      "/architecture-case-study.png",
    );
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });
});
