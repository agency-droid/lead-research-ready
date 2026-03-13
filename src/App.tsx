import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Gallery from "./pages/Gallery";
import CardV1 from "./pages/card/CardV1";
import CardV2 from "./pages/card/CardV2";
import CardV3 from "./pages/card/CardV3";
import SiteV1 from "./pages/site/SiteV1";
import SiteV2 from "./pages/site/SiteV2";
import SiteV3 from "./pages/site/SiteV3";
import FunnelV1 from "./pages/funnel/FunnelV1";
import FunnelV2 from "./pages/funnel/FunnelV2";
import FunnelV3 from "./pages/funnel/FunnelV3";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/card/v1" element={<CardV1 />} />
          <Route path="/card/v2" element={<CardV2 />} />
          <Route path="/card/v3" element={<CardV3 />} />
          <Route path="/site/v1" element={<SiteV1 />} />
          <Route path="/site/v2" element={<SiteV2 />} />
          <Route path="/site/v3" element={<SiteV3 />} />
          <Route path="/funnel/v1" element={<FunnelV1 />} />
          <Route path="/funnel/v2" element={<FunnelV2 />} />
          <Route path="/funnel/v3" element={<FunnelV3 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
