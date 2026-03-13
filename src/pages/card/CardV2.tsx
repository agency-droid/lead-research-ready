import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";
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

const CardV2 = () => (
  <div className="min-h-screen" style={{ background: "#f8fafc", color: "#1e293b" }}>
    {/* Top accent bar */}
    <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #3b82f6, #6366f1)" }} />

    <div className="max-w-md mx-auto px-5 py-12 space-y-8">
      {/* Avatar */}
      <motion.div {...fade(0)} className="flex justify-center">
        <div className="relative">
          <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <img src={heroPortrait} alt={ownerName} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-[3px] border-[#f8fafc]" />
        </div>
      </motion.div>

      {/* Identity */}
      <motion.div {...fade(0.1)} className="text-center space-y-1">
        <h1 className="text-2xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "#0f172a" }}>
          {ownerName}
        </h1>
        <p className="text-xs tracking-widest uppercase" style={{ color: "#94a3b8" }}>{licenseId}</p>
        <p className="font-semibold text-sm" style={{ color: "#3b82f6" }}>{profession}</p>
        <p className="text-sm flex items-center justify-center gap-1" style={{ color: "#64748b" }}>
          <MapPin className="w-3.5 h-3.5" /> {loc}
        </p>
      </motion.div>

      {/* Bio */}
      <motion.p {...fade(0.15)} className="text-sm text-center leading-relaxed" style={{ color: "#64748b" }}>
        {bioText}
      </motion.p>

      {/* Stats */}
      <motion.div {...fade(0.2)} className="flex justify-center gap-12 py-5">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="text-2xl font-bold" style={{ color: "#0f172a" }}>{s.val}</p>
            <p className="text-xs" style={{ color: "#94a3b8" }}>{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Social Icons */}
      <motion.div {...fade(0.25)} className="flex justify-center gap-3">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: "#e2e8f0",
              color: "#475569",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#3b82f6";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#e2e8f0";
              e.currentTarget.style.color = "#475569";
            }}
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
            {...fade(0.3 + i * 0.05)}
            className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group"
            style={{
              background: "#ffffff",
              borderColor: "#e2e8f0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#3b82f6";
              e.currentTarget.style.boxShadow = "0 4px 20px -4px rgba(59,130,246,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e2e8f0";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#eff6ff", color: "#3b82f6" }}>
              <card.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold" style={{ color: "#0f172a" }}>{card.title}</p>
              <p className="text-xs" style={{ color: "#94a3b8" }}>{card.subtitle}</p>
            </div>
            <ArrowUpRight className="w-4 h-4" style={{ color: "#94a3b8" }} />
          </motion.a>
        ))}
      </div>

      {/* QR Code */}
      <motion.div {...fade(0.6)} className="rounded-2xl p-6 text-center space-y-3" style={{ background: "#ffffff", border: "1px solid #e2e8f0" }}>
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#94a3b8" }}>Save Contact</p>
        <div className="inline-block p-3 rounded-xl" style={{ background: "#f1f5f9" }}>
          <QRCodeSVG value={vCardData} size={120} fgColor="#0f172a" bgColor="transparent" />
        </div>
        <p className="text-xs" style={{ color: "#94a3b8" }}>Scan to add to your contacts</p>
      </motion.div>

      {/* CTA */}
      <motion.div {...fade(0.7)} className="flex justify-center">
        <a
          href={`tel:${phoneNumber}`}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300"
          style={{ background: "#3b82f6", boxShadow: "0 4px 20px -4px rgba(59,130,246,0.4)" }}
        >
          <Phone className="w-4 h-4" />
          {phoneDisplay}
        </a>
      </motion.div>

      {/* Footer */}
      <motion.p {...fade(0.8)} className="text-center text-xs" style={{ color: "#cbd5e1" }}>
        © {new Date().getFullYear()} {ownerName} × {businessName}
      </motion.p>
    </div>
  </div>
);

export default CardV2;
