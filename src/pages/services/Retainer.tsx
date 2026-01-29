import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Retainer = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.h1 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="text-hero mb-4">
              The <span className="text-primary">Authority</span> Retainer
            </motion.h1>
            <p className="text-subtitle max-w-3xl mx-auto">The full Alphasight Online protocol, deployed monthly. Capped at 2 clients.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card/30 backdrop-blur rounded-2xl border-[0.5px] border-border p-8">
            <div className="flex items-start gap-6">
              <div className="text-primary mt-1"><Award size={40} /></div>
              <div>
                <div className="flex gap-4 mb-4"><div className="text-xs font-medium text-muted-foreground">Value Props</div></div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-background/10 border-[0.5px] border-border">
                    <div className="font-semibold">4 Deep-Dives / Month</div>
                    <div className="text-sm text-muted-foreground mt-2">Continuous narrative production.</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/10 border-[0.5px] border-border">
                    <div className="font-semibold">24/7 Strategic Access</div>
                    <div className="text-sm text-muted-foreground mt-2">On-demand strategy and prioritization.</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/10 border-[0.5px] border-border">
                    <div className="font-semibold">Priority Rendering</div>
                    <div className="text-sm text-muted-foreground mt-2">Faster turnaround on creative assets.</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">This is the partnership tier. We become your dedicated visual wing. You get priority access to our render farm, weekly strategy calls, and a continuous stream of high-ticket assets.</p>

                <Link to="/contact"><Button className="bg-primary text-primary-foreground hover:bg-primary/90">Apply for Waitlist</Button></Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Retainer;
