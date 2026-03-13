import { motion } from "framer-motion";
import { ease } from "@/lib/profile-data";

interface CalendarEmbedProps {
  theme?: "dark" | "light-blue" | "light-green";
}

const CalendarEmbed = ({ theme = "dark" }: CalendarEmbedProps) => {
  // Replace this placeholder div with your GHL embed code
  // e.g. <iframe src="https://api.leadconnectorhq.com/widget/booking/..." .../>

  const styles = {
    dark: {
      bg: "bg-glass",
      border: "border-border/50",
      text: "text-foreground",
      sub: "text-muted-foreground",
      dotted: "border-border/30",
    },
    "light-blue": {
      bg: "#ffffff",
      border: "#e2e8f0",
      text: "#0f172a",
      sub: "#64748b",
      dotted: "#e2e8f0",
    },
    "light-green": {
      bg: "#ffffff",
      border: "#e7e5e4",
      text: "#0c0a09",
      sub: "#78716c",
      dotted: "#e7e5e4",
    },
  };

  if (theme === "dark") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="w-full"
      >
        <div className="bg-glass rounded-2xl p-8 text-center space-y-4">
          <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Book Your Free Consultation
          </h3>
          <p className="text-sm text-muted-foreground">Pick a time that works for you</p>
          {/* ── GHL CALENDAR EMBED GOES HERE ── */}
          <div
            id="ghl-calendar-embed"
            className="w-full min-h-[500px] rounded-xl border border-dashed border-border/30 flex items-center justify-center"
          >
            <p className="text-xs text-muted-foreground/50 uppercase tracking-wider">
              GHL Calendar Embed
            </p>
          </div>
          {/* ── END EMBED ── */}
        </div>
      </motion.div>
    );
  }

  const t = styles[theme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease }}
      className="w-full"
    >
      <div
        className="rounded-2xl p-8 text-center space-y-4"
        style={{ background: t.bg as string, border: `1px solid ${t.border}` }}
      >
        <h3 className="text-lg font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: t.text as string }}>
          Book Your Free Consultation
        </h3>
        <p className="text-sm" style={{ color: t.sub as string }}>Pick a time that works for you</p>
        {/* ── GHL CALENDAR EMBED GOES HERE ── */}
        <div
          id="ghl-calendar-embed"
          className="w-full min-h-[500px] rounded-xl border border-dashed flex items-center justify-center"
          style={{ borderColor: t.dotted as string }}
        >
          <p className="text-xs uppercase tracking-wider" style={{ color: `${t.sub}88` }}>
            GHL Calendar Embed
          </p>
        </div>
        {/* ── END EMBED ── */}
      </div>
    </motion.div>
  );
};

export default CalendarEmbed;
