import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CreditCard, Globe, Zap } from "lucide-react";

const designs = [
  {
    category: "Digital Business Card",
    icon: CreditCard,
    variants: [
      { path: "/card/v1", name: "V1 — Dark Teal", desc: "Dark navy with teal accents, glassmorphism, dual layout switcher" },
      { path: "/card/v2", name: "V2 — Clean White", desc: "Minimal white card with blue accent, modern and airy" },
      { path: "/card/v3", name: "V3 — Warm Light", desc: "Light background with green accent, friendly and approachable" },
    ],
  },
  {
    category: "Full Website",
    icon: Globe,
    variants: [
      { path: "/site/v1", name: "V1 — Dark Professional", desc: "Dark theme, hero with portrait, services grid, contact section" },
      { path: "/site/v2", name: "V2 — Light Modern", desc: "Clean white/blue layout, large hero image, trust badges" },
      { path: "/site/v3", name: "V3 — Fresh Green", desc: "White background, green accents, alternating content blocks" },
    ],
  },
  {
    category: "Sales Funnel",
    icon: Zap,
    variants: [
      { path: "/funnel/v1", name: "V1 — Dark Conversion", desc: "Dark navy, bold headlines, trust points, single CTA focus" },
      { path: "/funnel/v2", name: "V2 — Lead Magnet", desc: "White with green CTAs, process steps, testimonials grid" },
      { path: "/funnel/v3", name: "V3 — Form Capture", desc: "Light with blue/teal, hero form, alternating sections, FAQ" },
    ],
  },
];

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[hsl(220,15%,8%)] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-cyan-400">Pocket Profile</p>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Design Gallery
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            3 product types × 3 design directions = 9 unique concepts. Click any card to preview.
          </p>
        </motion.div>

        {designs.map((group, gi) => (
          <motion.div
            key={gi}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * gi }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <group.icon className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {group.category}
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {group.variants.map((v, vi) => (
                <motion.button
                  key={vi}
                  onClick={() => navigate(v.path)}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-left p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-300 space-y-3 group"
                >
                  <span className="text-xs font-mono text-cyan-400 tracking-wider">{v.name}</span>
                  <p className="text-sm text-gray-300 leading-relaxed">{v.desc}</p>
                  <span className="text-xs text-gray-500 group-hover:text-cyan-400 transition-colors">
                    Click to preview →
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
