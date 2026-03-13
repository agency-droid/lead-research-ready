import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Phone, Smartphone } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import SocialVideoBar from "./SocialVideoBar";
import {
  ownerName, businessName, profession, licenseId, location as loc,
  bioText, stats, linkCards, socials, phoneDisplay, phoneNumber, vCardData, ease
} from "@/lib/profile-data";
import heroPortrait from "@/assets/hero-portrait.png";

const stagger = (i: number) => ({ opacity: 0, y: 20 });
const staggerTo = { opacity: 1, y: 0 };
const staggerT = (i: number) => ({ duration: 0.5, delay: 0.1 * i, ease });

const CardLayout = () => {
  return (
    <div className="max-w-lg mx-auto px-4 py-20 space-y-8">
      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [...ease] }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-primary/20">
            <img src={heroPortrait} alt={ownerName} className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-green-500 border-2 border-background" />
        </div>
      </motion.div>

      {/* Identity */}
      <motion.div initial={stagger(1)} animate={staggerTo} transition={staggerT(1)} className="text-center space-y-1">
        <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>{ownerName}</h1>
        <p className="text-xs tracking-widest text-muted-foreground uppercase">{licenseId}</p>
        <p className="text-primary font-medium">{profession}</p>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          <MapPin className="w-3.5 h-3.5" /> {loc}
        </p>
      </motion.div>

      {/* Bio */}
      <motion.p initial={stagger(2)} animate={staggerTo} transition={staggerT(2)} className="text-sm text-muted-foreground text-center max-w-sm mx-auto leading-relaxed">
        {bioText}
      </motion.p>

      {/* Stats */}
      <motion.div initial={stagger(3)} animate={staggerTo} transition={staggerT(3)} className="flex justify-center gap-8 py-4 border-y border-border/50">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="text-xl font-bold text-foreground">{s.val}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Social Icons */}
      <motion.div initial={stagger(4)} animate={staggerTo} transition={staggerT(4)} className="flex justify-center gap-3">
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
      </motion.div>

      {/* Link Cards */}
      <div className="space-y-3">
        {linkCards.map((card, i) => (
          <motion.a
            key={i}
            href={card.href}
            target={card.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={stagger(5 + i)}
            animate={staggerTo}
            transition={staggerT(5 + i)}
            className="flex items-center gap-4 p-4 rounded-2xl bg-glass hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary">
              <card.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{card.title}</p>
              <p className="text-xs text-muted-foreground">{card.subtitle}</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>
        ))}
      </div>

      {/* Social Videos */}
      <SocialVideoBar delay={0.9} />

      {/* QR Code */}
      <motion.div
        initial={stagger(10)}
        animate={staggerTo}
        transition={staggerT(10)}
        className="bg-glass rounded-2xl p-6 text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Smartphone className="w-4 h-4" />
          <p className="text-xs font-medium uppercase tracking-wider">Save Contact</p>
        </div>
        <div className="bg-foreground/90 rounded-xl p-4 inline-block">
          <QRCodeSVG
            value={vCardData}
            size={140}
            fgColor="hsl(207, 40%, 15%)"
            bgColor="transparent"
          />
        </div>
        <p className="text-xs text-muted-foreground">Scan to add to your contacts</p>
      </motion.div>

      {/* CTA Button */}
      <motion.div initial={stagger(11)} animate={staggerTo} transition={staggerT(11)} className="flex justify-center">
        <Button asChild variant="hero" size="xl" className="rounded-full">
          <a href={`tel:${phoneNumber}`}>
            <Phone className="w-4 h-4 mr-2" />
            {phoneDisplay}
          </a>
        </Button>
      </motion.div>

      {/* Footer */}
      <motion.p initial={stagger(12)} animate={staggerTo} transition={staggerT(12)} className="text-center text-xs text-muted-foreground/50">
        © {new Date().getFullYear()} {ownerName} × {businessName}. All rights reserved.
      </motion.p>

      {/* Watermark */}
      <div className="pointer-events-none select-none">
        <p className="text-center text-6xl font-bold text-gradient opacity-[0.03] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
          {ownerName}
        </p>
      </div>
    </div>
  );
};

export default CardLayout;
