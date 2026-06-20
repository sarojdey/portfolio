import { useState, useEffect } from "react";
import { Terminal, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-text-primary no-underline group"
        >
          <Terminal
            size={24}
            className="text-chrome-400 group-hover:text-chrome-200 transition-colors"
          />
          <span className="font-semibold text-xl tracking-wider uppercase">
            skd
          </span>
        </a>

        {/* Desktop Links + Toggle */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase text-text-muted hover:text-text-primary transition-colors duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <Sun size={18} className="icon-sun" />
            <Moon size={18} className="icon-moon" />
          </button>
        </div>

        {/* Mobile: Toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <Sun size={18} className="icon-sun" />
            <Moon size={18} className="icon-moon" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-5 h-3.5 flex flex-col justify-between items-center focus:outline-none cursor-pointer border-none bg-transparent"
            aria-label="Toggle menu"
          >
            <span
              className={`block absolute h-0.5 w-5 bg-chrome-400 transform transition-all duration-300 ease-in-out ${
                mobileOpen ? "rotate-45 top-1.5" : "top-0"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-5 bg-chrome-400 transform transition-all duration-300 ease-in-out top-1.5 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-5 bg-chrome-400 transform transition-all duration-300 ease-in-out ${
                mobileOpen ? "-rotate-45 top-1.5" : "top-3"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-bg-secondary/95 backdrop-blur-md border-t border-border-subtle overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-xs tracking-widest uppercase text-text-muted hover:text-text-primary transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
