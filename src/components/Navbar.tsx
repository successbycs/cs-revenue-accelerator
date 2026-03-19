import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "How I Help", href: "#how-i-help" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
];

const agentsDropdown = [
  { label: "Autonomous Agents", href: "/case-study/autonomous-agents" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [agentsOpen, setAgentsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAgentsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between py-4">
        <a href="/" className="font-heading text-xl font-bold tracking-tight text-foreground">
          SuccessBy<span className="text-accent-builder">CS</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}

          {/* Agents Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setAgentsOpen(true)}
            onMouseLeave={() => setAgentsOpen(false)}
          >
            <button
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setAgentsOpen(!agentsOpen)}
              aria-expanded={agentsOpen}
              aria-haspopup="true"
            >
              Agents
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${agentsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {agentsOpen && (
              <div className="absolute left-0 top-full z-50 min-w-[220px] pt-2">
                <div className="rounded-lg border border-border bg-popover p-1 shadow-lg">
                  {agentsDropdown.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-popover-foreground transition-colors hover:bg-muted"
                      onClick={() => setAgentsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-4 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-foreground"
            >
              {l.label}
            </a>
          ))}
          {/* Mobile Agents section */}
          <div className="border-t border-border pt-3 mt-3">
            <p className="py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Agents</p>
            {agentsDropdown.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block py-3 pl-3 text-sm font-medium text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
