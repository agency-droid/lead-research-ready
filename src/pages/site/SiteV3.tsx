import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Shield, Users, TrendingUp, Phone, Mail, Check } from "lucide-react";
import { ownerName, businessName, profession, bioText, stats, phoneDisplay, phoneNumber, email, ease } from "@/lib/profile-data";
import heroPortrait from "@/assets/hero-portrait.png";
import heroFull from "@/assets/hero-portrait-full.jpg";

const fade = (d: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: d, ease },
});

const services = [
  { icon: Briefcase, title: "Commercial Loans", desc: "Tailored lending solutions for businesses of all sizes." },
  { icon: Shield, title: "SBA Loans", desc: "Government-backed programs with favorable terms." },
  { icon: TrendingUp, title: "Lines of Credit", desc: "Flexible revolving credit to manage cash flow." },
  { icon: Users, title: "Business Banking", desc: "Full-service banking built on trust." },
];

const SiteV3 = () => (
  <div className="min-h-screen" style={{ background: "#ffffff", color: "#292524" }}>
    {/* Navbar */}
    <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderColor: "#e7e5e4" }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <p className="font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0c0a09" }}>{businessName}</p>
        <nav className="hidden sm:flex items-center gap-8">
          <a href="#about" className="text-sm" style={{ color: "#78716c" }}>About</a>
          <a href="#services" className="text-sm" style={{ color: "#78716c" }}>Services</a>
          <a href="#contact" className="text-sm" style={{ color: "#78716c" }}>Contact</a>
          <a href={`tel:${phoneNumber}`} className="px-5 py-2.5 rounded-full text-sm font-semibold text-white" style={{ background: "#16a34a" }}>
            Let's Talk
          </a>
        </nav>
      </div>
    </header>

    {/* Hero */}
    <section className="relative pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-24">
        <motion.div {...fade(0.1)} className="space-y-6">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#16a34a" }}>
            {businessName} · Commercial Lending
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0c0a09" }}>
            Funding Solutions That{" "}
            <span style={{ color: "#16a34a" }}>Grow With You</span>
          </h1>
          <p className="text-lg" style={{ color: "#78716c" }}>{bioText}</p>
          <div className="flex gap-4">
            <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white text-sm" style={{ background: "#16a34a" }}>
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm border" style={{ color: "#0c0a09", borderColor: "#e7e5e4" }}>
              Our Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
        <motion.div {...fade(0.3)} className="hidden md:block">
          <div className="rounded-3xl overflow-hidden shadow-xl" style={{ border: "1px solid #e7e5e4" }}>
            <img src={heroFull} alt={ownerName} className="w-full h-[450px] object-cover object-top" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats strip */}
    <section className="py-8 border-y" style={{ background: "#f0fdf4", borderColor: "#dcfce7" }}>
      <div className="max-w-4xl mx-auto flex justify-center gap-16">
        {stats.map((s, i) => (
          <motion.div key={i} {...fade(i * 0.1)} className="text-center">
            <p className="text-3xl font-bold" style={{ color: "#16a34a" }}>{s.val}</p>
            <p className="text-xs" style={{ color: "#78716c" }}>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* About — alternating blocks */}
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Block 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fade(0.1)} className="space-y-6">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0c0a09" }}>
              Meet {ownerName}
            </h2>
            <p style={{ color: "#78716c" }} className="leading-relaxed">
              With over 20 years in commercial banking, {ownerName} has funded more than $200M in business loans,
              helping companies across Louisiana secure the capital they need to grow.
            </p>
            <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white" style={{ background: "#16a34a" }}>
              Schedule a Call
            </a>
          </motion.div>
          <motion.div {...fade(0.2)}>
            <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid #e7e5e4" }}>
              <img src={heroFull} alt={ownerName} className="w-full h-80 object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Block 2 — reversed */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fade(0.1)} className="md:order-2 space-y-6">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0c0a09" }}>
              Why Choose {businessName}?
            </h2>
            <p style={{ color: "#78716c" }} className="leading-relaxed">
              Whether you're looking for a commercial loan, line of credit, or SBA financing, you'll work directly with
              a dedicated banker who understands your business goals. No phone trees. No runaround.
            </p>
            {["Personal attention from day one", "Fast approvals, flexible terms", "SBA preferred lender"].map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-5 h-5" style={{ color: "#16a34a" }} />
                <span className="text-sm font-medium" style={{ color: "#0c0a09" }}>{b}</span>
              </div>
            ))}
          </motion.div>
          <motion.div {...fade(0.2)} className="md:order-1">
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden" style={{ border: "3px solid #dcfce7" }}>
              <img src={heroPortrait} alt={ownerName} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section id="services" className="py-24 px-6" style={{ background: "#fafaf9" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div {...fade(0.1)} className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0c0a09" }}>
            Our Services
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} {...fade(0.1 + i * 0.1)} className="rounded-2xl p-6 border text-center space-y-4" style={{ background: "#ffffff", borderColor: "#e7e5e4" }}>
              <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center" style={{ background: "#f0fdf4", color: "#16a34a" }}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold" style={{ color: "#0c0a09" }}>{s.title}</h3>
              <p className="text-sm" style={{ color: "#78716c" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.div {...fade(0.1)} className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0c0a09" }}>
            Ready to Get Started?
          </h2>
          <p style={{ color: "#78716c" }}>Schedule a free consultation to discuss your financing needs.</p>
        </motion.div>
        <motion.div {...fade(0.2)}>
          <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white" style={{ background: "#16a34a", boxShadow: "0 8px 30px -8px rgba(22,163,74,0.4)" }}>
            <Phone className="w-5 h-5" />
            {phoneDisplay}
          </a>
        </motion.div>
      </div>
    </section>

    <footer className="border-t py-8 px-6" style={{ borderColor: "#e7e5e4" }}>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs" style={{ color: "#a8a29e" }}>© {new Date().getFullYear()} {ownerName} × {businessName}. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default SiteV3;
