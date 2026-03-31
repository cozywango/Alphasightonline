import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Protocol from "./pages/Protocol";
import Audit from "./pages/services/Audit";
import DeepDives from "./pages/services/DeepDives";
import Cinematic from "./pages/services/Cinematic";
import Decks from "./pages/services/Decks";
import Ghost from "./pages/services/Ghost";
import Retainer from "./pages/services/Retainer";
import ForCreators from './pages/ForCreators';
import AuditPortfolio from './app/audit-portfolio/page';
import HunterProgram from './pages/HunterProgram';
import GoogleAnalytics from "./components/GoogleAnalytics";
import Lenis from 'lenis';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const queryClient = new QueryClient();

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

import { useLocation } from "react-router-dom";

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/for-creators" element={<PageTransition><ForCreators /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/protocol" element={<PageTransition><Protocol /></PageTransition>} />
            <Route path="/audit-portfolio" element={<PageTransition><AuditPortfolio /></PageTransition>} />
            <Route path="/hunter-program" element={<PageTransition><HunterProgram /></PageTransition>} />

            {/* services routes */}
            <Route path="/services/audit" element={<PageTransition><Audit /></PageTransition>} />
            <Route path="/services/deep-dives" element={<PageTransition><DeepDives /></PageTransition>} />
            <Route path="/services/cinematic" element={<PageTransition><Cinematic /></PageTransition>} />
            <Route path="/services/decks" element={<PageTransition><Decks /></PageTransition>} />
            <Route path="/services/ghost" element={<PageTransition><Ghost /></PageTransition>} />
            <Route path="/services/retainer" element={<PageTransition><Retainer /></PageTransition>} />

            {/* catch-all */}
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GoogleAnalytics />
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
