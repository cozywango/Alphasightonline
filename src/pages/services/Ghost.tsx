import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Ghost = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.h1 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="text-hero mb-4">
              Ghost <span className="text-primary">Strategy</span>
            </motion.h1>
            <p className="text-subtitle max-w-3xl mx-auto">Complete faceless execution for high-profile founders.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card/30 backdrop-blur rounded-2xl border-[0.5px] border-border p-8">
            <div className="flex items-start gap-6">
              <div className="text-primary mt-1"><User size={40} /></div>
              <div>
                <div className="flex gap-4 mb-4"><div className="text-xs font-medium text-muted-foreground">Value Props</div></div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-background/10 border-[0.5px] border-border">
                    <div className="font-semibold">Zero Time Investment</div>
                    <div className="text-sm text-muted-foreground mt-2">We handle everything on your behalf.</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/10 border-[0.5px] border-border">
                    <div className="font-semibold">Strategic Posting</div>
                    <div className="text-sm text-muted-foreground mt-2">Cadence, voice, and timing optimized for investors.</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">You run a company; you don't have time to be a creator. We operate your Social Media presence entirely in the background. We write, design, and post as you, ensuring your authority grows while you sleep.</p>

                <Link to="/contact"><Button className="bg-primary text-primary-foreground hover:bg-primary/90">Go Ghost</Button></Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Ghost;
