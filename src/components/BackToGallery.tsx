import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, LayoutGrid } from "lucide-react";

const BackToGallery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") return null;

  // Derive version label from path
  const parts = location.pathname.split("/");
  const type = parts[1] === "card" ? "Card" : parts[1] === "site" ? "Site" : "Funnel";
  const version = parts[2]?.toUpperCase() || "";

  return (
    <div className="fixed top-4 left-4 z-[60] flex items-center gap-2">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-xl transition-all duration-300"
        style={{
          background: "rgba(0,0,0,0.6)",
          color: "#ffffff",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Gallery
      </button>
      <span
        className="px-3 py-2 rounded-full text-xs font-mono backdrop-blur-xl"
        style={{
          background: "rgba(0,0,0,0.6)",
          color: "rgba(255,255,255,0.6)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {type} · {version}
      </span>
    </div>
  );
};

export default BackToGallery;
