import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Phone, Smartphone } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import SocialVideoBar from "./SocialVideoBar";
import {
  ownerName, businessName, profession, licenseId, location as loc,
  bioText, stats, linkCards, socials, phoneDisplay, phoneNumber, vCardData, ease
} from "@/lib/profile-data";
import heroFull from "@/assets/hero-portrait-full.jpg";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease },
});

const FullHeroLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Full-bleed hero image */}
      <div className="relative h-[70vh] sm:h-[80vh] w-full">
        <img
          src={heroFull}
          alt={ownerName}
          className="w-full h-full object-cover object-top"
          style={{
            maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Content overlapping hero */}
      <div className="relative -mt-[30vh] z-10 max-w-lg mx-auto px-4 pb-20 space-y-8">
        {/* Glass Identity Card */}
        <motion.div {...fade(0.1)} className="bg-glass rounded-3xl p-8 space-y-6">
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>{ownerName}</h1>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">{licenseId}</p>
            <p className="text-primary font-medium">{profession}</p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> {loc}
            </p>
          </div>

          <p className="text-sm text-muted-foreground text-center leading-relaxed">{bioText}</p>

          {/* Stats */}
          <div className="flex justify-center gap-8 py-4 border-y border-border/50">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-xl font-bold text-foreground">{s.val}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bento Link Grid */}
        <motion.div {...fade(0.3)} className="grid grid-cols-2 gap-3">
          {linkCards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-3 p-5 rounded-2xl bg-glass hover:border-primary/30 transition-all duration-300 group text-center ${
                i === linkCards.length - 1 && linkCards.length % 2 !== 0 ? "col-span-2" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary">
                <card.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{card.title}</p>
                <p className="text-xs text-muted-foreground">{card.subtitle}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* Videos */}
        <SocialVideoBar delay={0.5} />

        {/* QR Code */}
        <motion.div {...fade(0.7)} className="bg-glass rounded-2xl p-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Smartphone className="w-4 h-4" />
            <p className="text-xs font-medium uppercase tracking-wider">Save Contact</p>
          </div>
          <div className="bg-foreground/90 rounded-xl p-4 inline-block">
            <QRCodeSVG value={vCardData} size={140} fgColor="hsl(207, 40%, 15%)" bgColor="transparent" />
          </div>
          <p className="text-xs text-muted-foreground">Scan to add to your contacts</p>
        </motion.div>

        {/* CTA */}
        <motion.div {...fade(0.8)} className="flex justify-center">
          <Button asChild variant="hero" size="xl" className="rounded-full">
            <a href={`tel:${phoneNumber}`}>
              <Phone className="w-4 h-4 mr-2" />
              {phoneDisplay}
            </a>
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.p {...fade(0.9)} className="text-center text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} {ownerName} × {businessName}. All rights reserved.
        </motion.p>

        {/* Decorative watermark */}
        <div className="pointer-events-none select-none">
          <p className="text-center text-6xl font-bold text-gradient opacity-[0.03] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
            {ownerName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullHeroLayout;
