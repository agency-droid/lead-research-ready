import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Shield, Users, TrendingUp, Phone, MapPin, Mail, ChevronRight } from "lucide-react";
import { ownerName, businessName, profession, bioText, stats, phoneDisplay, phoneNumber, email, socials, ease } from "@/lib/profile-data";
import heroFull from "@/assets/hero-portrait-full.jpg";
import heroPortrait from "@/assets/hero-portrait.png";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease },
});

const services = [
  { icon: Briefcase, title: "Commercial Loans", desc: "Tailored lending solutions for businesses of all sizes with competitive rates." },
  { icon: Shield, title: "SBA Loans", desc: "Government-backed loan programs to help your business grow with favorable terms." },
  { icon: TrendingUp, title: "Lines of Credit", desc: "Flexible revolving credit lines to manage cash flow and seize opportunities." },
  { icon: Users, title: "Business Banking", desc: "Full-service banking relationships built on trust and personalized attention." },
];

const FullSite = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <p className="font-bold text-lg text-foreground" style={{ fontFamily: "var(--font-heading)" }}>{businessName}</p>
          <nav className="hidden sm:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <Button asChild variant="hero" size="sm">
              <a href={`tel:${phoneNumber}`}>Get Started</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center pt-20">
          <motion.div {...fade(0.1)} className="space-y-6">
            <p className="text-primary font-medium tracking-wider uppercase text-sm">{businessName}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Your Business <span className="text-gradient">Deserves Better</span> Banking
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">{bioText}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <a href={`tel:${phoneNumber}`}>
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <a href="#services">Our Services</a>
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-foreground">{s.val}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fade(0.3)} className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden border border-border/50 shadow-card">
                <img src={heroFull} alt={ownerName} className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-glass rounded-2xl p-4">
                <p className="text-sm font-bold text-foreground">{ownerName}</p>
                <p className="text-xs text-primary">{profession}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fade(0.1)} className="flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-primary/20">
              <img src={heroPortrait} alt={ownerName} className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div {...fade(0.2)} className="space-y-6">
            <p className="text-primary font-medium tracking-wider uppercase text-sm">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Two Decades of Building Business Relationships</h2>
            <p className="text-muted-foreground leading-relaxed">
              With over 20 years in commercial banking, {ownerName} has funded more than $200M in business loans, 
              helping companies across Louisiana secure the capital they need to grow. As VP of Commercial Lending at {businessName}, 
              Joey brings a personal touch to every client relationship.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're looking for a commercial loan, line of credit, or SBA financing, you'll work directly with 
              a dedicated banker who understands your business goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fade(0.1)} className="text-center mb-16 space-y-4">
            <p className="text-primary font-medium tracking-wider uppercase text-sm">Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Commercial Lending Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive business financing options tailored to your unique needs.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} {...fade(0.1 + i * 0.1)} className="bg-glass rounded-2xl p-8 space-y-4 hover:border-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <a href={`tel:${phoneNumber}`} className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div {...fade(0.1)} className="space-y-4">
            <p className="text-primary font-medium tracking-wider uppercase text-sm">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Ready to Grow Your Business?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Schedule a free consultation to discuss your financing needs.
            </p>
          </motion.div>
          <motion.div {...fade(0.2)} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 bg-glass rounded-2xl px-6 py-4 hover:border-primary/30 transition-all">
              <Phone className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">{phoneDisplay}</p>
                <p className="text-xs text-muted-foreground">Call anytime</p>
              </div>
            </a>
            <a href={`mailto:${email}`} className="flex items-center gap-3 bg-glass rounded-2xl px-6 py-4 hover:border-primary/30 transition-all">
              <Mail className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">{email}</p>
                <p className="text-xs text-muted-foreground">Email me</p>
              </div>
            </a>
          </motion.div>
          <motion.div {...fade(0.3)} className="flex justify-center gap-3 pt-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>{businessName}</p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {ownerName} × {businessName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FullSite;
