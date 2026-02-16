import { motion } from 'framer-motion';
import { Aperture } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';

const Cinematic = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.h1 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="text-hero mb-4">
              Cinematic <span className="text-gradient-orange">Loops</span>
            </motion.h1>
            <p className="text-subtitle max-w-3xl mx-auto">Technical Visualization for hardware and deep-tech concepts.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass-card glow-blue rounded-3xl p-8 md:p-10">
            <div className="flex items-start gap-6">
              <div className="glow-badge-blue shrink-0"><Aperture size={28} /></div>
              <div>
                <div className="text-xs font-mono tracking-wider text-[#0094ff]/60 mb-4">VALUE PROPS</div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="glass-card p-4 rounded-xl">
                    <div className="font-semibold">Realistic Aesthetics</div>
                    <div className="text-sm text-muted-foreground mt-2">Cinematic lighting & material detail.</div>
                  </div>
                  <div className="glass-card p-4 rounded-xl">
                    <div className="font-semibold">Seamless Looping</div>
                    <div className="text-sm text-muted-foreground mt-2">Perfectly tileable motion for social formats.</div>
                  </div>
                  <div className="glass-card p-4 rounded-xl">
                    <div className="font-semibold">Abstract Industrialism</div>
                    <div className="text-sm text-muted-foreground mt-2">High-level visual metaphors for complex tech.</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">Static images look cheap. We generate high-end, moving visualizations of your technology—whether it's a carbon capture facility or a quantum processor. These assets scream 'High Valuation' before you say a word.</p>

                <Link to="/contact"><GradientButton>Visualize Tech</GradientButton></Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Cinematic;
