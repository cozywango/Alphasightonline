import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DeepDives = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.h1 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="text-hero mb-4">
              Visual <span className="text-primary">Deep-Dives</span>
            </motion.h1>
            <p className="text-subtitle max-w-3xl mx-auto">
              High-fidelity technical carousels that translate complexity into conviction.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card/30 backdrop-blur rounded-2xl border-[0.5px] border-border p-8">
            <div className="flex items-start gap-6">
              <div className="text-primary mt-1"><Layers size={40} /></div>
              <div>
                <div className="flex gap-4 mb-4"><div className="text-xs font-medium text-muted-foreground">Value Props</div></div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-background/10 border-[0.5px] border-border">
                    <div className="font-semibold">10-Slide Architecture</div>
                    <div className="text-sm text-muted-foreground mt-2">A surgical narrative mapped to investor psychology.</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/10 border-[0.5px] border-border">
                    <div className="font-semibold">Polished Visuals</div>
                    <div className="text-sm text-muted-foreground mt-2">High-fidelity layouts and motion-ready assets.</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/10 border-[0.5px] border-border">
                    <div className="font-semibold">Investor Psychology Hooks</div>
                    <div className="text-sm text-muted-foreground mt-2">Tactical triggers that increase retention and action.</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">We take your dense 50-page whitepaper and distill it into a high-impact LinkedIn carousel. We don't dumb it down; we visualize the genius so investors can't scroll past it.</p>

                <Link to="/contact"><Button className="bg-primary text-primary-foreground hover:bg-primary/90">See Examples</Button></Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default DeepDives;
