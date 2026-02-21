import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How I Help", href: "#how-i-help" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between py-4">
        <a href="#" className="font-heading text-xl font-bold tracking-tight text-foreground">
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
          <a
            href="#build-path"
            className="rounded-md bg-accent-builder px-5 py-2.5 text-sm font-semibold text-on-dark transition-opacity hover:opacity-90"
          >
            Get the Audit Checklist
          </a>
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
          <a
            href="#build-path"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-block rounded-md bg-accent-builder px-5 py-2.5 text-sm font-semibold text-on-dark"
          >
            Get the Audit Checklist
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
