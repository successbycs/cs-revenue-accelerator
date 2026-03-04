import React from "react";

type WhatsAppWidgetProps = {
  message?: string;
};

export default function WhatsAppWidget({
  message = "Hi Chris, I found you via successbycs.com and would like to chat about improving our Customer Success performance.",
}: WhatsAppWidgetProps) {
  const phoneNumber = "6421574696";
  const url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Chris on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-xl transition-transform hover:scale-105 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-400"
    >
      Chat on WhatsApp
    </a>
  );
}
