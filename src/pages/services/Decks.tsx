import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Decks = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.h1 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="text-hero mb-4">
              Investor <span className="text-primary">Decks</span>
            </motion.h1>
            <p className="text-subtitle max-w-3xl mx-auto">We rebuild your pitch deck to control the dopamine of the room.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card/30 backdrop-blur rounded-2xl border-[0.5px] border-border p-8">
            <div className="flex items-start gap-6">
              <div className="text-primary mt-1"><FileText size={40} /></div>
              <div>
                <div className="flex gap-4 mb-4"><div className="text-xs font-medium text-muted-foreground">Value Props</div></div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-background/10 border-[0.5px] border-border">
                    <div className="font-semibold">Narrative Arc Design</div>
                    <div className="text-sm text-muted-foreground mt-2">A slide sequence that builds irreversible conviction.</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/10 border-[0.5px] border-border">
                    <div className="font-semibold">Data Visualization</div>
                    <div className="text-sm text-muted-foreground mt-2">Turn metrics into compelling visual evidence.</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/10 border-[0.5px] border-border">
                    <div className="font-semibold">Emotional Pacing</div>
                    <div className="text-sm text-muted-foreground mt-2">Control the room with color, tempo, and tension.</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">Your deck is not a document; it is a performance. We redesign your slides to function as visual anchors. We strip away the noise and focus the investor's eye on your 'Alpha'—the one thing that makes you undeniable.</p>

                <Link to="/contact"><Button className="bg-primary text-primary-foreground hover:bg-primary/90">Fix My Deck</Button></Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Decks;
