import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Shield, Users, TrendingUp, Phone, Mail, Star, ChevronRight, Check } from "lucide-react";
import { ownerName, businessName, profession, bioText, stats, phoneDisplay, phoneNumber, email, socials, ease } from "@/lib/profile-data";
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

const SiteV2 = () => (
  <div className="min-h-screen" style={{ background: "#ffffff", color: "#1e293b" }}>
    {/* Navbar */}
    <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)", borderColor: "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <p className="font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0f172a" }}>{businessName}</p>
        <nav className="hidden sm:flex items-center gap-8">
          <a href="#about" className="text-sm transition-colors" style={{ color: "#64748b" }}>About</a>
          <a href="#services" className="text-sm transition-colors" style={{ color: "#64748b" }}>Services</a>
          <a href="#contact" className="text-sm transition-colors" style={{ color: "#64748b" }}>Contact</a>
          <a href={`tel:${phoneNumber}`} className="px-5 py-2.5 rounded-full text-sm font-semibold text-white" style={{ background: "#3b82f6" }}>
            Get Started
          </a>
        </nav>
      </div>
    </header>

    {/* Hero */}
    <section className="relative overflow-hidden pt-20" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}>
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-30 blur-[120px] pointer-events-none" style={{ background: "#3b82f6" }} />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] rounded-full opacity-20 blur-[80px] pointer-events-none" style={{ background: "#8b5cf6" }} />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-24">
        <motion.div {...fade(0.1)} className="space-y-6">
          <div className="flex gap-2">
            {["Trusted", "Reliable", "Personal"].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium" style={{ background: "#eff6ff", color: "#3b82f6" }}>
                <Check className="w-3 h-3" /> {badge}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0f172a" }}>
            Your Business Deserves Better Banking
          </h1>
          <p className="text-lg max-w-md" style={{ color: "#64748b" }}>{bioText}</p>
          <div className="flex gap-4">
            <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white text-sm" style={{ background: "#3b82f6" }}>
              Book Appointment <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm border" style={{ color: "#0f172a", borderColor: "#e2e8f0" }}>
              Explore More <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex gap-8 pt-4">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-bold" style={{ color: "#0f172a" }}>{s.val}</p>
                <p className="text-xs" style={{ color: "#94a3b8" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fade(0.3)} className="hidden md:flex justify-center relative">
          <div className="w-96 h-[500px] rounded-3xl overflow-hidden shadow-2xl" style={{ border: "1px solid #e2e8f0" }}>
            <img src={heroFull} alt={ownerName} className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl p-4 shadow-lg" style={{ background: "#ffffff", border: "1px solid #e2e8f0" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={heroPortrait} alt={ownerName} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: "#0f172a" }}>{ownerName}</p>
                <p className="text-xs" style={{ color: "#3b82f6" }}>{profession}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* About */}
    <section id="about" className="py-24 px-6" style={{ background: "#f8fafc" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div {...fade(0.1)} className="flex justify-center">
          <div className="w-72 h-72 rounded-3xl overflow-hidden shadow-lg" style={{ border: "1px solid #e2e8f0" }}>
            <img src={heroFull} alt={ownerName} className="w-full h-full object-cover" />
          </div>
        </motion.div>
        <motion.div {...fade(0.2)} className="space-y-6">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#3b82f6" }}>About</span>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0f172a" }}>
            Two Decades of Building Business Relationships
          </h2>
          <p style={{ color: "#64748b" }} className="leading-relaxed">
            With over 20 years in commercial banking, {ownerName} has funded more than $200M in business loans,
            helping companies across Louisiana secure the capital they need to grow.
          </p>
          <p style={{ color: "#64748b" }} className="leading-relaxed">
            Whether you're looking for a commercial loan, line of credit, or SBA financing, you'll work directly with
            a dedicated banker who understands your business goals.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fade(0.1)} className="text-center mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#3b82f6" }}>Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0f172a" }}>
            Commercial Lending Solutions
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} {...fade(0.1 + i * 0.1)} className="rounded-2xl p-8 space-y-4 border transition-all hover:shadow-lg group" style={{ background: "#ffffff", borderColor: "#e2e8f0" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#eff6ff", color: "#3b82f6" }}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold" style={{ color: "#0f172a" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact */}
    <section id="contact" className="py-24 px-6" style={{ background: "#f8fafc" }}>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div {...fade(0.1)} className="space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#3b82f6" }}>Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0f172a" }}>
            Ready to Grow Your Business?
          </h2>
        </motion.div>
        <motion.div {...fade(0.2)} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 rounded-2xl px-6 py-4 border" style={{ background: "#ffffff", borderColor: "#e2e8f0" }}>
            <Phone className="w-5 h-5" style={{ color: "#3b82f6" }} />
            <div className="text-left">
              <p className="text-sm font-medium" style={{ color: "#0f172a" }}>{phoneDisplay}</p>
              <p className="text-xs" style={{ color: "#94a3b8" }}>Call anytime</p>
            </div>
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-3 rounded-2xl px-6 py-4 border" style={{ background: "#ffffff", borderColor: "#e2e8f0" }}>
            <Mail className="w-5 h-5" style={{ color: "#3b82f6" }} />
            <div className="text-left">
              <p className="text-sm font-medium" style={{ color: "#0f172a" }}>{email}</p>
              <p className="text-xs" style={{ color: "#94a3b8" }}>Email me</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t py-8 px-6" style={{ borderColor: "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs" style={{ color: "#94a3b8" }}>© {new Date().getFullYear()} {ownerName} × {businessName}. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default SiteV2;
