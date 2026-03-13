import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Phone } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import {
  ownerName, businessName, profession, licenseId, location as loc,
  bioText, stats, linkCards, socials, phoneDisplay, phoneNumber, vCardData, ease
} from "@/lib/profile-data";
import heroPortrait from "@/assets/hero-portrait.png";

const fade = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: d, ease },
});

const CardV3 = () => (
  <div className="min-h-screen" style={{ background: "#fafaf9", color: "#292524" }}>
    {/* Header strip */}
    <div className="py-4 px-6 flex justify-center">
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#16a34a" }}>
        {businessName}
      </span>
    </div>

    <div className="max-w-md mx-auto px-5 py-8 space-y-8">
      {/* Hero card with portrait */}
      <motion.div
        {...fade(0)}
        className="rounded-3xl overflow-hidden"
        style={{ background: "#ffffff", border: "1px solid #e7e5e4", boxShadow: "0 8px 30px -12px rgba(0,0,0,0.08)" }}
      >
        {/* Green gradient header */}
        <div className="h-24" style={{ background: "linear-gradient(135deg, #16a34a, #22c55e)" }} />
        <div className="flex justify-center -mt-14">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4" style={{ borderColor: "#ffffff" }}>
            <img src={heroPortrait} alt={ownerName} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="text-center px-6 pb-6 pt-3 space-y-1">
          <h1 className="text-xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0c0a09" }}>
            {ownerName}
          </h1>
          <p className="text-xs tracking-widest uppercase" style={{ color: "#a8a29e" }}>{licenseId}</p>
          <p className="font-semibold text-sm" style={{ color: "#16a34a" }}>{profession}</p>
          <p className="text-sm flex items-center justify-center gap-1" style={{ color: "#78716c" }}>
            <MapPin className="w-3.5 h-3.5" /> {loc}
          </p>
        </div>
      </motion.div>

      {/* Bio */}
      <motion.p {...fade(0.1)} className="text-sm text-center leading-relaxed" style={{ color: "#78716c" }}>
        {bioText}
      </motion.p>

      {/* Stats */}
      <motion.div {...fade(0.15)} className="grid grid-cols-2 gap-3">
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl p-4 text-center"
            style={{ background: "#ffffff", border: "1px solid #e7e5e4" }}
          >
            <p className="text-2xl font-bold" style={{ color: "#16a34a" }}>{s.val}</p>
            <p className="text-xs" style={{ color: "#a8a29e" }}>{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Social Icons */}
      <motion.div {...fade(0.2)} className="flex justify-center gap-2">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{ background: "#f0fdf4", color: "#16a34a", border: "1px solid #dcfce7" }}
          >
            <s.icon className="w-4 h-4" />
          </a>
        ))}
      </motion.div>

      {/* Link Cards */}
      <div className="space-y-3">
        {linkCards.map((card, i) => (
          <motion.a
            key={i}
            href={card.href}
            target={card.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            {...fade(0.25 + i * 0.05)}
            className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group"
            style={{ background: "#ffffff", borderColor: "#e7e5e4" }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#f0fdf4", color: "#16a34a" }}>
              <card.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold" style={{ color: "#0c0a09" }}>{card.title}</p>
              <p className="text-xs" style={{ color: "#a8a29e" }}>{card.subtitle}</p>
            </div>
            <ArrowUpRight className="w-4 h-4" style={{ color: "#a8a29e" }} />
          </motion.a>
        ))}
      </div>

      {/* QR */}
      <motion.div
        {...fade(0.5)}
        className="rounded-2xl p-6 text-center space-y-3"
        style={{ background: "#ffffff", border: "1px solid #e7e5e4" }}
      >
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#a8a29e" }}>Save Contact</p>
        <div className="inline-block p-3 rounded-xl" style={{ background: "#f0fdf4" }}>
          <QRCodeSVG value={vCardData} size={120} fgColor="#0c0a09" bgColor="transparent" />
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div {...fade(0.6)} className="flex justify-center">
        <a
          href={`tel:${phoneNumber}`}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-all"
          style={{ background: "#16a34a", boxShadow: "0 4px 20px -4px rgba(22,163,74,0.4)" }}
        >
          <Phone className="w-4 h-4" />
          {phoneDisplay}
        </a>
      </motion.div>

      <motion.p {...fade(0.7)} className="text-center text-xs" style={{ color: "#d6d3d1" }}>
        © {new Date().getFullYear()} {ownerName} × {businessName}
      </motion.p>
    </div>
  </div>
);

export default CardV3;
