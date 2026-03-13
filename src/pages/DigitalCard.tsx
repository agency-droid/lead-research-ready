import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleUser, Maximize } from "lucide-react";
import CardLayout from "@/components/card/CardLayout";
import FullHeroLayout from "@/components/card/FullHeroLayout";
import { ownerName, businessName } from "@/lib/profile-data";

type Layout = "classic" | "hero";

const DigitalCard = () => {
  const [layout, setLayout] = useState<Layout>("classic");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Logo */}
      <motion.div
        className="fixed top-5 left-5 z-50"
        animate={{ opacity: scrolled ? 0.4 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-bold text-lg text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
          {businessName}
        </p>
      </motion.div>

      {/* Layout Switcher */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-1 rounded-full bg-glass px-1.5 py-1.5">
        <button
          onClick={() => setLayout("classic")}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            layout === "classic" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label="Classic card layout"
        >
          <CircleUser className="w-4 h-4" />
        </button>
        <button
          onClick={() => setLayout("hero")}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            layout === "hero" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label="Full hero layout"
        >
          <Maximize className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {layout === "classic" ? (
          <motion.div
            key="classic"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <CardLayout />
          </motion.div>
        ) : (
          <motion.div
            key="hero"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <FullHeroLayout />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DigitalCard;
