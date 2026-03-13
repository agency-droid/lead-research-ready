import { motion } from "framer-motion";
import { Play, ExternalLink, Image } from "lucide-react";
import { socialVideos, ease } from "@/lib/profile-data";
import { useState } from "react";

interface ContentShowcaseBarProps {
  delay?: number;
  theme?: "dark" | "light-blue" | "light-green";
}

const showcaseItems = [
  ...socialVideos,
  { title: "Client Success Story", platform: "Instagram", video: "", href: "#" },
  { title: "Behind the Scenes", platform: "LinkedIn", video: "", href: "#" },
  { title: "Industry Tips", platform: "Facebook", video: "", href: "#" },
];

const themes = {
  dark: {
    heading: "text-muted-foreground",
    cardBg: "bg-glass",
    title: "text-foreground",
    subtitle: "text-muted-foreground",
    placeholder: "bg-secondary text-muted-foreground",
    hoverText: "hover:text-primary",
  },
  "light-blue": {
    heading: "#64748b",
    cardBg: "#ffffff",
    cardBorder: "#e2e8f0",
    title: "#0f172a",
    subtitle: "#94a3b8",
    placeholder: "#f1f5f9",
    placeholderText: "#94a3b8",
    accent: "#3b82f6",
  },
  "light-green": {
    heading: "#78716c",
    cardBg: "#ffffff",
    cardBorder: "#e7e5e4",
    title: "#0c0a09",
    subtitle: "#a8a29e",
    placeholder: "#f0fdf4",
    placeholderText: "#a8a29e",
    accent: "#16a34a",
  },
};

const ContentShowcaseBar = ({ delay = 0, theme = "dark" }: ContentShowcaseBarProps) => {
  if (theme === "dark") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease }}
        className="w-full"
      >
        <h3 className="text-sm font-medium text-muted-foreground mb-4">Our Work & Content</h3>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-3">
          {showcaseItems.map((item, i) => (
            <div key={i} className="flex-shrink-0 w-36 group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-glass cursor-pointer">
                {item.video ? (
                  <video src={item.video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <Image className="w-8 h-8 text-muted-foreground/40" />
                  </div>
                )}
              </div>
              <div className="mt-2">
                <p className="text-xs font-medium text-foreground truncate">{item.title}</p>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground flex items-center gap-1 hover:text-primary transition-colors">
                  {item.platform} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  const t = theme === "light-blue" ? themes["light-blue"] : themes["light-green"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease }}
      className="w-full"
    >
      <h3 className="text-sm font-medium mb-4" style={{ color: t.heading as string }}> Our Work & Content</h3>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-3">
        {showcaseItems.map((item, i) => (
          <div key={i} className="flex-shrink-0 w-36 group">
            <div
              className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer"
              style={{ background: t.cardBg as string, border: `1px solid ${t.cardBorder}` }}
            >
              {item.video ? (
                <video src={item.video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center" style={{ background: t.placeholder as string }}>
                  <Image className="w-8 h-8" style={{ color: `${t.placeholderText}66` }} />
                </div>
              )}
            </div>
            <div className="mt-2">
              <p className="text-xs font-medium truncate" style={{ color: t.title as string }}>{item.title}</p>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 transition-colors" style={{ color: t.subtitle as string }}>
                {item.platform} <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContentShowcaseBar;
