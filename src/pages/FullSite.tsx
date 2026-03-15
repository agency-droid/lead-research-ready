import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Check, Play, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { ownerName, businessName, phoneDisplay, email, ease } from "@/lib/profile-data";
import heroPortrait from "@/assets/hero-portrait.png";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease },
});

const specialties = ["Hormones", "NAD+", "Peptides", "Longevity", "Weight", "Aesthetics", "IV Therapy", "Genetics"];

const services = [
  {
    title: "Vitality Blueprint",
    desc: "124 wellness biomarkers — the most comprehensive diagnostic in Baton Rouge.",
    gradient: "from-teal-600 to-teal-400",
  },
  {
    title: "Hormone Optimization",
    desc: "Bioidentical BHRT tailored to your biology. Pellets, creams, troches.",
    gradient: "from-slate-600 to-slate-400",
  },
  {
    title: "NAD+ & IV Therapy",
    desc: "NAD+ infusions, peptide therapy, and IV hydration to restore cellular health.",
    gradient: "from-teal-800 to-teal-600",
  },
  {
    title: "Weight & Metabolic Health",
    desc: "Root-cause weight management with GLP-1, hormone balancing & nutrition.",
    gradient: "from-slate-700 to-slate-500",
  },
];

const values = [
  "Patient-first, root-cause medicine",
  "PharmD + IFM-certified MD + NP on your team",
  "124 biomarkers — not a generic checkup",
  "Personalized. Never generic.",
];

const partners = ["PCCA", "EVEXIAS", "A4M", "EvexiPEL", "BBB A+", "Audible Podcast"];

const FullSite = () => {
  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <p className="font-bold text-xl text-slate-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {businessName}<span className="text-teal-500">.</span>
          </p>
          <nav className="hidden sm:flex items-center gap-8">
            <a href="#about" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">About</a>
            <a href="#services" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Services</a>
            <a href="#contact" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Contact</a>
            <a
              href="https://links.journeywell.io/widget/booking/zhpX7oUADvHcPFEJGOYl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              Get Started Free
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden pt-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

          {/* Left */}
          <motion.div {...fade(0.1)} className="space-y-6">
            <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
              Integrative · Functional · Personalized Medicine
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Pioneering a <span className="text-teal-500">New Era</span> in Healthcare.
            </h1>
            <p className="text-lg text-slate-500 max-w-md leading-relaxed">
              Not sick but not feeling optimal either? After 18 years watching patients leave with more prescriptions and less health, Dr. Angie Huff built something different.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://links.journeywell.io/widget/booking/zhpX7oUADvHcPFEJGOYl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg shadow-teal-200"
              >
                Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border border-slate-200 text-slate-700 hover:border-teal-400 hover:text-teal-600 font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4 border-t border-slate-100">
              {[
                { val: "18+", label: "Years Experience" },
                { val: "124", label: "Biomarkers Tested" },
                { val: "3", label: "Clinicians On Team" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-slate-900">{s.val}</p>
                  <p className="text-xs text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — photo + floating card */}
          <motion.div {...fade(0.3)} className="hidden md:flex justify-center relative">
            <div className="w-[360px] h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white">
              <img src={heroPortrait} alt={ownerName} className="w-full h-full object-cover object-top" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
              <p className="text-sm font-bold text-slate-900">{ownerName}</p>
              <p className="text-xs text-teal-500">PharmD · Founder & Wellness Visionary</p>
              <p className="text-xs text-slate-400 mt-1">SYNC Life · Baton Rouge, LA</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERTISE BAR ── */}
      <section className="bg-slate-900 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 flex-shrink-0">
            <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our Expertise<span className="text-teal-400">.</span>
            </h3>
            <ArrowRight className="w-5 h-5 text-slate-400" />
          </div>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
            {specialties.map((s, i) => (
              <span key={i} className="bg-teal-500/20 text-teal-300 border border-teal-500/30 text-sm font-medium px-5 py-2 rounded-full">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE SECTION ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fade(0.1)} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Root-Cause Medicine,<br />Powered by 18 Years of<br />Clinical Expertise.
            </h2>
          </motion.div>
          <motion.div {...fade(0.2)} className="space-y-4">
            <p className="text-slate-500 leading-relaxed">
              SYNC Life combines a PharmD, an IFM-certified MD, and a nurse practitioner in one clinic — measuring 124 wellness biomarkers to build a fully personalized care plan for every patient. This isn't symptom management. It's root-cause medicine.
            </p>
            <a
              href="#services"
              className="inline-flex items-center text-teal-500 font-semibold hover:gap-3 gap-2 transition-all group text-sm"
            >
              Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="bg-slate-900 py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          <motion.div {...fade(0.1)} className="flex items-center justify-between">
            <h2 className="text-white text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              About Us<span className="text-teal-400">.</span>
            </h2>
            <a href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
          <motion.div {...fade(0.2)} className="relative rounded-3xl overflow-hidden h-80 sm:h-[440px] border border-slate-700">
            <img src={heroPortrait} alt={ownerName} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 space-y-2">
              <p className="text-white text-xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                "After 18 years watching patients leave with more prescriptions and less health — I built something different."
              </p>
              <p className="text-teal-400 text-sm font-medium">— Dr. Angie Huff, PharmD · Founder, SYNC Life</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
              <Play className="w-6 h-6 text-white ml-1" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div {...fade(0.1)}>
            <h2 className="text-slate-900 text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our Services<span className="text-teal-500">.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} {...fade(0.1 + i * 0.08)} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md hover:border-teal-200 transition-all duration-300">
                <div className={`h-40 bg-gradient-to-br ${s.gradient} flex items-end p-6`}>
                  <span className="text-white/60 text-xs font-medium uppercase tracking-widest">SYNC Life</span>
                </div>
                <div className="p-6 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-slate-900 font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <a
                    href="https://links.journeywell.io/widget/booking/zhpX7oUADvHcPFEJGOYl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-9 h-9 rounded-full border border-slate-200 group-hover:border-teal-400 group-hover:bg-teal-50 flex items-center justify-center transition-all"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INNOVATION CTA ── */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fade(0.1)} className="space-y-8">
            <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Transforming Healthcare from the Inside Out<span className="text-teal-400">.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              SYNC Life was built on a simple truth: feeling "fine" isn't good enough. Their Assess → Plan → Optimize process addresses every pillar of health — sleep, stress, movement, nutrition, mindset — with clinical precision.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-teal-400" />
                  </div>
                  <p className="text-slate-300 text-sm">{v}</p>
                </div>
              ))}
            </div>
            <a
              href="https://links.journeywell.io/widget/booking/zhpX7oUADvHcPFEJGOYl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg shadow-teal-900/30"
            >
              Book Free Vitality Consult <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
          <motion.div {...fade(0.2)} className="hidden md:block relative rounded-3xl overflow-hidden h-[400px] border border-slate-700">
            <img src={heroPortrait} alt={ownerName} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fade(0.1)} className="mb-10">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-2">Credentials & Affiliations</p>
            <h2 className="text-slate-900 text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Trusted by Many<span className="text-teal-500">.</span>
            </h2>
          </motion.div>
          <motion.div {...fade(0.2)} className="flex flex-wrap gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-full px-6 py-3 text-sm font-semibold text-slate-600">
                {p}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── NEWSLETTER / BOOK CTA ── */}
      <section className="bg-slate-50 py-20 px-6 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div {...fade(0.1)} className="space-y-3">
            <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Ready to feel like yourself again?
            </h2>
            <p className="text-slate-500">One conversation. Real answers. Book your free Vitality Consultation today.</p>
          </motion.div>
          <motion.div {...fade(0.2)} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <a
              href="https://links.journeywell.io/widget/booking/zhpX7oUADvHcPFEJGOYl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg shadow-teal-200"
            >
              Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-1">
            <p className="text-white font-bold text-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {businessName}<span className="text-teal-400">.</span>
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Integrative medicine for people who want real answers. Root-cause care. Personalized plans. Baton Rouge, LA.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/angiehuffpharmd/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/synclifebr/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest">Navigate</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="https://www.instagram.com/angiehuffpharmd/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">Instagram</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact" className="space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-teal-400" /> {phoneDisplay}</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-teal-400" /> {email}</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" /> 18303 Perkins Rd E, Suite 403<br />Baton Rouge, LA 70810</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} {ownerName} × {businessName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FullSite;
