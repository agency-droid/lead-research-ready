import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, Globe, Zap } from "lucide-react";

const navItems = [
  { path: "/", label: "Card", icon: CreditCard },
  { path: "/site", label: "Website", icon: Globe },
  { path: "/funnel", label: "Funnel", icon: Zap },
];

const SectionNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full bg-glass px-2 py-2 shadow-card">
      {navItems.map((item) => {
        const active = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              active
                ? "bg-primary text-primary-foreground shadow-glow"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span className={active ? "" : "hidden sm:inline"}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SectionNav;
