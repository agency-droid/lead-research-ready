const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-bold text-lg text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            [Business Name]
          </p>
          <p className="text-muted-foreground text-sm mt-1">[Prospect Name]</p>
        </div>

        <nav className="flex gap-8">
          <button onClick={() => scrollTo("about")} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            About
          </button>
          <button onClick={() => scrollTo("services")} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Services
          </button>
          <button onClick={() => scrollTo("book")} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Book a Call
          </button>
        </nav>

        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
