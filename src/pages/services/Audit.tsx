import { motion } from 'framer-motion';
import { Clipboard } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Audit = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-hero mb-4"
            >
              The Narrative <span className="text-primary">Audit</span>
            </motion.h1>
            <p className="text-subtitle max-w-3xl mx-auto">
              We deconstruct your current visual presence and expose the gaps costing you capital.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card/30 backdrop-blur rounded-2xl border-[0.5px] border-border p-8">
            <div className="flex items-start gap-6">
              <div className="text-primary mt-1">
                <Clipboard size={40} />
              </div>
              <div>
                <div className="flex gap-4 mb-4">
                  <div className="text-xs font-medium text-muted-foreground">Value Props</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-background/10 border-[0.5px] border-border">
                    <div className="font-semibold">Competitor Benchmarking</div>
                    <div className="text-sm text-muted-foreground mt-2">Snapshot vs. the top 1% in your niche.</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/10 border-[0.5px] border-border">
                    <div className="font-semibold">Logic Gap Analysis</div>
                    <div className="text-sm text-muted-foreground mt-2">Identify contraditions and weak claims in your narrative.</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/10 border-[0.5px] border-border">
                    <div className="font-semibold">Visual Health Score</div>
                    <div className="text-sm text-muted-foreground mt-2">A single metric for visual authority and trust.</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Most founders think their deck is fine. We prove it isn't. We analyze your last 10 posts and your pitch deck against the top 1% of your niche. We deliver a brutal, honest report on where you are leaking authority.
                </p>

                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Request Audit</Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Audit;
