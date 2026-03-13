import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <p className="font-bold text-lg text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          [Brand]
        </p>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          <button onClick={() => scrollTo("about")} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            About
          </button>
          <button onClick={() => scrollTo("services")} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Services
          </button>
          <Button variant="hero" size="sm" onClick={() => scrollTo("book")}>
            Book a Call
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button className="sm:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-background/95 backdrop-blur-lg border-b border-border px-6 pb-6 space-y-4">
          <button onClick={() => scrollTo("about")} className="block text-foreground text-sm">About</button>
          <button onClick={() => scrollTo("services")} className="block text-foreground text-sm">Services</button>
          <Button variant="hero" size="sm" className="w-full" onClick={() => scrollTo("book")}>
            Book a Call
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
