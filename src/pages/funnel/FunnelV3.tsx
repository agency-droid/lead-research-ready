import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Check, ChevronDown, Shield, Clock, Star, DollarSign } from "lucide-react";
import { ownerName, businessName, profession, phoneDisplay, phoneNumber, stats, email, ease } from "@/lib/profile-data";
import heroPortrait from "@/assets/hero-portrait.png";
import heroFull from "@/assets/hero-portrait-full.jpg";
import CalendarEmbed from "@/components/CalendarEmbed";
import ContentShowcaseBar from "@/components/ContentShowcaseBar";

const fade = (d: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: d, ease },
});

const steps = [
  { num: "01", title: "Fill Out the Form", desc: "Share your basic information and lending needs." },
  { num: "02", title: "Get a Callback", desc: "Joey will personally reach out within 24 hours." },
  { num: "03", title: "Secure Your Funding", desc: "Receive a customized plan and close quickly." },
];

const trustPoints = [
  { icon: DollarSign, title: "$200M+ Funded", desc: "Across Louisiana businesses" },
  { icon: Clock, title: "Fast Approvals", desc: "Decisions in days, not weeks" },
  { icon: Shield, title: "FDIC Insured", desc: "Your deposits are protected" },
];

const faqs = [
  { q: "What types of loans do you offer?", a: "We offer commercial loans, SBA loans, lines of credit, and full business banking services tailored to your needs." },
  { q: "How long does the approval process take?", a: "Most applications receive a decision within 3-5 business days. Our streamlined process ensures fast turnaround." },
  { q: "What documents do I need?", a: "Typically, we need your business financials, tax returns, and a brief business plan. Joey will walk you through everything." },
  { q: "Is there a minimum loan amount?", a: "We work with businesses of all sizes. Contact us to discuss your specific needs and we'll find the right solution." },
];

const FAQ = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "#e2e8f0" }}>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-4 text-left">
        <span className="font-medium text-sm" style={{ color: open ? "#0284c7" : "#0f172a" }}>{q}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} style={{ color: "#94a3b8" }} />
      </button>
      {open && <p className="pb-4 text-sm" style={{ color: "#64748b" }}>{a}</p>}
    </div>
  );
};

const FunnelV3 = () => (
  <div className="min-h-screen" style={{ background: "#ffffff", color: "#1e293b" }}>
    {/* Navbar */}
    <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderColor: "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <p className="font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0f172a" }}>{businessName}</p>
        <a href={`tel:${phoneNumber}`} className="px-5 py-2 rounded-full text-sm font-semibold text-white" style={{ background: "#0284c7" }}>
          Let's Talk
        </a>
      </div>
    </header>

    {/* Hero with form */}
    <section className="pt-20" style={{ background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-20">
        <motion.div {...fade(0.1)} className="space-y-6">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#0284c7" }}>
            Your Trusted Banker in {ownerName.split(" ").pop()}'s Louisiana
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0f172a" }}>
            The Ultimate Guide to <span style={{ color: "#0284c7" }}>Business Lending</span>
          </h1>
          <p style={{ color: "#64748b" }}>
            Book a free consultation and find out how {businessName} can help your business secure the right funding — fast, personal, and hassle-free.
          </p>
          <div className="relative w-64 h-72 rounded-2xl overflow-hidden md:hidden" style={{ border: "1px solid #e2e8f0" }}>
            <img src={heroFull} alt={ownerName} className="w-full h-full object-cover object-top" />
          </div>
        </motion.div>

        {/* Form */}
        <motion.div {...fade(0.2)} className="rounded-2xl p-8 space-y-5 shadow-lg" style={{ background: "#ffffff", border: "1px solid #e2e8f0" }}>
          <h3 className="font-bold text-lg" style={{ color: "#0f172a" }}>Get Your Free Consultation</h3>
          {["Name", "Email", "Phone"].map((label) => (
            <div key={label}>
              <label className="text-xs font-medium mb-1 block" style={{ color: "#64748b" }}>{label}</label>
              <input
                type={label === "Email" ? "email" : "text"}
                placeholder={label === "Name" ? "Your full name" : label === "Email" ? "you@company.com" : "(555) 000-0000"}
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0", color: "#0f172a" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#0284c7")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#e2e8f0")}
              />
            </div>
          ))}
          <button className="w-full py-3.5 rounded-lg font-bold text-white text-sm" style={{ background: "#0284c7" }}>
            Submit
          </button>
          <p className="text-xs text-center" style={{ color: "#94a3b8" }}>Free consultation · No obligation</p>
        </motion.div>
      </div>
    </section>

    {/* About */}
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div {...fade(0.1)} className="space-y-6">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#0284c7" }}>Meet Your Banker</span>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0f172a" }}>{ownerName}</h2>
          <p style={{ color: "#64748b" }} className="leading-relaxed">
            With 20+ years in commercial banking and $200M+ funded, {ownerName} delivers a personal banking experience that big banks simply can't match.
          </p>
          <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white" style={{ background: "#0284c7" }}>
            Schedule a Call
          </a>
        </motion.div>
        <motion.div {...fade(0.2)} className="hidden md:block">
          <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
            <img src={heroFull} alt={ownerName} className="w-full h-80 object-cover" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* What's Inside */}
    <section className="py-24 px-6" style={{ background: "#f0f9ff" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div {...fade(0.1)} className="md:order-2">
          <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
            <img src={heroFull} alt="interior" className="w-full h-80 object-cover object-center" />
          </div>
        </motion.div>
        <motion.div {...fade(0.2)} className="md:order-1 space-y-6">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#0284c7" }}>What You'll Get</span>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0f172a" }}>
            Your Personalized Lending Roadmap
          </h2>
          {["Custom rate analysis for your business", "Complete application walkthrough", "Direct access to your dedicated banker", "Fast-track SBA processing"].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#0284c7" }} />
              <span className="text-sm" style={{ color: "#334155" }}>{item}</span>
            </div>
          ))}
          <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm border" style={{ color: "#0284c7", borderColor: "#0284c7" }}>
            Schedule a Call
          </a>
        </motion.div>
      </div>
    </section>

    {/* Process Steps */}
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fade(0.1)} className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0f172a" }}>
            Take the First Step
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div key={i} {...fade(0.1 + i * 0.1)} className="text-center space-y-4">
              <p className="text-4xl font-bold" style={{ color: "#bfdbfe" }}>{s.num}</p>
              <h3 className="font-bold" style={{ color: "#0f172a" }}>{s.title}</h3>
              <p className="text-sm" style={{ color: "#64748b" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust strip */}
    <section className="py-12 px-6" style={{ background: "#f0f9ff" }}>
      <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8">
        {trustPoints.map((t, i) => (
          <motion.div key={i} {...fade(i * 0.1)} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#dbeafe", color: "#0284c7" }}>
              <t.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-sm" style={{ color: "#0f172a" }}>{t.title}</p>
              <p className="text-xs" style={{ color: "#64748b" }}>{t.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fade(0.1)} className="text-center mb-12 space-y-2">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#0284c7" }}>FAQ</span>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0f172a" }}>
            Frequently Asked Questions
          </h2>
        </motion.div>
        <motion.div {...fade(0.2)}>
          {faqs.map((f, i) => <FAQ key={i} {...f} />)}
        </motion.div>
      </div>
    </section>

    {/* Calendar Embed */}
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <CalendarEmbed theme="light-blue" />
      </div>
    </section>

    {/* Content Showcase */}
    <section className="py-16 px-6" style={{ background: "#f0f9ff" }}>
      <div className="max-w-5xl mx-auto">
        <ContentShowcaseBar delay={0.2} theme="light-blue" />
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-24 px-6" style={{ background: "#0f172a" }}>
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <motion.h2 {...fade(0.1)} className="text-3xl font-bold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Don't Let Uncertainty Hold You Back
        </motion.h2>
        <motion.p {...fade(0.15)} style={{ color: "#94a3b8" }}>
          With expert guidance and the right funding, you're already a step ahead.
        </motion.p>
        <motion.div {...fade(0.2)}>
          <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white" style={{ background: "#0284c7", boxShadow: "0 8px 30px -8px rgba(2,132,199,0.5)" }}>
            <Phone className="w-5 h-5" />
            Schedule a Call
          </a>
        </motion.div>
      </div>
    </section>

    <footer className="border-t py-8 px-6" style={{ borderColor: "#e2e8f0" }}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs" style={{ color: "#94a3b8" }}>© {new Date().getFullYear()} {ownerName} × {businessName}. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default FunnelV3;
