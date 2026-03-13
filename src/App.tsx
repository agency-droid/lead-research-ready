import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SectionNav from "@/components/SectionNav";
import DigitalCard from "./pages/DigitalCard";
import FullSite from "./pages/FullSite";
import SalesFunnel from "./pages/SalesFunnel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SectionNav />
        <Routes>
          <Route path="/" element={<DigitalCard />} />
          <Route path="/site" element={<FullSite />} />
          <Route path="/funnel" element={<SalesFunnel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
