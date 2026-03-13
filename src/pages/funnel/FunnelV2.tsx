import { motion } from "framer-motion";
import { Phone, Check, ArrowRight, Star, ChevronRight } from "lucide-react";
import { ownerName, businessName, profession, phoneDisplay, phoneNumber, stats, ease } from "@/lib/profile-data";
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

const benefits = [
  "Competitive rates tailored to your business",
  "Fast approval — decisions in days, not weeks",
  "Flexible repayment terms up to 25 years",
  "Personal banker, not a call center",
  "SBA preferred lender",
  "No hidden fees or prepayment penalties",
];

const steps = [
  { num: "01", title: "Schedule a Call", desc: "Book a free 30-minute consultation to discuss your business needs." },
  { num: "02", title: "Get Your Plan", desc: "Receive a customized lending proposal with competitive terms." },
  { num: "03", title: "Secure Funding", desc: "Close your loan quickly and start growing your business." },
];

const testimonials = [
  { name: "Sarah M.", role: "Restaurant Owner", quote: "Joey made the entire lending process seamless. We secured our loan in record time!" },
  { name: "Michael T.", role: "Construction CEO", quote: "Finally, a banker who actually picks up the phone. $2M funded in 3 weeks." },
  { name: "Lisa R.", role: "Medical Practice", quote: "The personalized attention from Bonvenu Bank is unmatched. Highly recommend!" },
];

const FunnelV2 = () => (
  <div className="min-h-screen" style={{ background: "#ffffff", color: "#292524" }}>
    {/* Top bar */}
    <div className="py-3 px-6 text-center text-xs font-medium" style={{ background: "#f0fdf4", color: "#16a34a" }}>
      Need help? <a href={`tel:${phoneNumber}`} className="underline font-bold">{phoneDisplay}</a>
    </div>

    {/* Hero */}
    <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-20">
      <motion.div {...fade(0)} className="flex justify-center md:justify-start">
        <div className="relative">
          <div className="w-72 h-80 rounded-3xl overflow-hidden shadow-xl" style={{ border: "1px solid #e7e5e4" }}>
            <img src={heroFull} alt={ownerName} className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl shadow-lg" style={{ background: "#16a34a", color: "#fff" }}>
            <p className="text-xs font-bold">{stats[0].val} {stats[0].label}</p>
          </div>
        </div>
      </motion.div>
      <motion.div {...fade(0.1)} className="space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0c0a09" }}>
          Get the <span style={{ color: "#16a34a" }}>Business Funding</span> You Need — Without the Runaround
        </h1>
        <p style={{ color: "#78716c" }}>
          Work directly with {ownerName}, {profession} at {businessName}. Personal service, fast approvals, real results.
        </p>
        <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm" style={{ background: "#16a34a", boxShadow: "0 8px 30px -8px rgba(22,163,74,0.4)" }}>
          <Phone className="w-5 h-5" />
          Call Now — {phoneDisplay}
        </a>
      </motion.div>
    </section>

    {/* Testimonial strip */}
    <motion.section {...fade(0)} className="py-8 px-6" style={{ background: "#fafaf9", borderTop: "1px solid #e7e5e4", borderBottom: "1px solid #e7e5e4" }}>
      <div className="max-w-3xl mx-auto flex items-start gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0" style={{ border: "2px solid #dcfce7" }}>
          <img src={heroPortrait} alt="testimonial" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-sm italic" style={{ color: "#57534e" }}>
            "{testimonials[0].quote}"
          </p>
          <p className="text-xs font-medium mt-1" style={{ color: "#a8a29e" }}>— {testimonials[0].name}, {testimonials[0].role}</p>
        </div>
      </div>
    </motion.section>

    {/* Alternating benefit blocks */}
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fade(0.1)} className="space-y-6">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0c0a09" }}>
              Banking the Way It Should Be
            </h2>
            <p style={{ color: "#78716c" }}>
              Stop dealing with automated systems and generic loan officers. Get a dedicated banker who knows your name, your business, and your goals.
            </p>
            <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white" style={{ background: "#16a34a" }}>
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.div {...fade(0.2)}>
            <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid #e7e5e4" }}>
              <img src={heroFull} alt="business" className="w-full h-72 object-cover" />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fade(0.1)} className="md:order-2 space-y-6">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0c0a09" }}>
              Why Business Owners Choose Us
            </h2>
            <div className="space-y-3">
              {benefits.slice(0, 4).map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#f0fdf4" }}>
                    <Check className="w-3.5 h-3.5" style={{ color: "#16a34a" }} />
                  </div>
                  <p className="text-sm" style={{ color: "#57534e" }}>{b}</p>
                </div>
              ))}
            </div>
            <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white" style={{ background: "#16a34a" }}>
              Schedule a Call
            </a>
          </motion.div>
          <motion.div {...fade(0.2)} className="md:order-1">
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden" style={{ border: "3px solid #dcfce7" }}>
              <img src={heroPortrait} alt={ownerName} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Process Steps */}
    <section className="py-24 px-6" style={{ background: "#fafaf9" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div {...fade(0.1)} className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0c0a09" }}>
            How It Works
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div key={i} {...fade(0.1 + i * 0.1)} className="text-center space-y-4 rounded-2xl p-6 border" style={{ background: "#ffffff", borderColor: "#e7e5e4" }}>
              <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center" style={{ background: "#f0fdf4", color: "#16a34a" }}>
                <Check className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold" style={{ color: "#16a34a" }}>Step {s.num}</p>
              <h3 className="font-bold" style={{ color: "#0c0a09" }}>{s.title}</h3>
              <p className="text-sm" style={{ color: "#78716c" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fade(0.4)} className="flex justify-center mt-12">
          <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm" style={{ background: "#16a34a" }}>
            Get Started Today <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>

    {/* Testimonials Grid */}
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fade(0.1)} className="text-center mb-12">
          <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0c0a09" }}>
            What People Are Saying
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} {...fade(0.1 + i * 0.1)} className="rounded-2xl overflow-hidden border" style={{ borderColor: "#e7e5e4" }}>
              <div className="h-40 overflow-hidden">
                <img src={heroFull} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 space-y-3" style={{ background: "#ffffff" }}>
                <p className="font-bold text-sm" style={{ color: "#0c0a09" }}>"{t.quote.split(".")[0]}!"</p>
                <p className="text-xs" style={{ color: "#78716c" }}>{t.quote}</p>
                <p className="text-xs font-medium" style={{ color: "#a8a29e" }}>— {t.name}, {t.role}</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#f59e0b" }} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Calendar Embed */}
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <CalendarEmbed theme="light-green" />
      </div>
    </section>

    {/* Content Showcase */}
    <section className="py-16 px-6" style={{ background: "#fafaf9" }}>
      <div className="max-w-5xl mx-auto">
        <ContentShowcaseBar delay={0.2} theme="light-green" />
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-24 px-6" style={{ background: "#fafaf9" }}>
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <motion.h2 {...fade(0.1)} className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0c0a09" }}>
          Are You Ready to Get Started?
        </motion.h2>
        <motion.p {...fade(0.15)} style={{ color: "#78716c" }}>
          One call is all it takes. Let's discuss what your business needs.
        </motion.p>
        <motion.div {...fade(0.2)}>
          <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white" style={{ background: "#16a34a", boxShadow: "0 8px 30px -8px rgba(22,163,74,0.4)" }}>
            <Phone className="w-5 h-5" />
            Schedule Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>

    <footer className="border-t py-8 px-6" style={{ borderColor: "#e7e5e4" }}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs" style={{ color: "#a8a29e" }}>© {new Date().getFullYear()} {ownerName} × {businessName}. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default FunnelV2;
