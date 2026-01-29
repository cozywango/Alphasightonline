import { motion } from 'framer-motion';
import { Cpu, Scan, Layers, Zap, Database, Aperture, ArrowRight } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

const Protocol = () => {
  const steps = [
    {
      id: "01",
      title: "Technical Ingestion",
      icon: <Database className="text-primary" size={32} />,
      description: "You provide raw material.",
      detail: (
        <div className="space-y-4">
          <div>
            <span className="text-primary/80">We ingest:</span>
            <ul className="list-disc list-inside pl-2 mt-1 space-y-1">
              <li>Whitepapers</li>
              <li>Patents</li>
              <li>Technical documentation</li>
              <li>Research decks</li>
            </ul>
          </div>
          <div>
            <span className="text-primary/80">We analyze to identify:</span>
            <ul className="list-disc list-inside pl-2 mt-1 space-y-1">
              <li>What matters to investors</li>
              <li>What differentiates you</li>
              <li>What gets ignored or misunderstood</li>
            </ul>
          </div>
          <p className="italic pt-2">The goal is extraction of signal, not summarization.</p>
        </div>
      )
    },
    {
      id: "02",
      title: "Narrative Architecture",
      icon: <Layers className="text-primary" size={32} />,
      description: "We design the argument before the visuals.",
      detail: (
        <div className="space-y-4">
          <p>Your content is structured into a 10-slide investor logic framework.</p>
          <div>
            <span className="text-primary/80">Each slide has a defined role:</span>
            <ul className="list-disc list-inside pl-2 mt-1 space-y-1">
              <li>Introduce the problem</li>
              <li>Establish credibility</li>
              <li>Clarify the mechanism</li>
              <li>Signal scale and defensibility</li>
              <li>Create conviction</li>
            </ul>
          </div>
          <p className="italic pt-2">Nothing decorative. Everything intentional.</p>
        </div>
      )
    },
    {
      id: "03",
      title: "Visual Synthesis",
      icon: <Aperture className="text-primary" size={32} />,
      description: "We create visuals built for concepts that lack physical form.",
      detail: (
        <div className="space-y-4">
          <div>
            <span className="text-primary/80">Using generative and custom visual systems, we produce:</span>
            <ul className="list-disc list-inside pl-2 mt-1 space-y-1">
              <li>Abstract technical imagery</li>
              <li>System-level representations</li>
              <li>Hardware and process visualizations</li>
            </ul>
          </div>
          <p className="italic pt-2">Every image exists to explain, not impress.</p>
        </div>
      )
    },
    {
      id: "04",
      title: "Design Refinement",
      icon: <Cpu className="text-primary" size={32} />,
      description: "Automation stops before credibility breaks.",
      detail: (
        <div className="space-y-4">
          <div>
            <span className="text-primary/80">Every asset passes through a manual design process:</span>
            <ul className="list-disc list-inside pl-2 mt-1 space-y-1">
              <li>Typography refinement</li>
              <li>Color grading</li>
              <li>Texture and contrast tuning</li>
              <li>Consistency across the full narrative</li>
            </ul>
          </div>
          <p className="italic pt-2">The result feels precise, controlled, and human.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">

        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <h1 className="text-hero mb-6">
              The AlphaFrame <span className="text-primary">Protocol</span>
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto mb-8">
              A structured workflow that converts technical material into investor-grade visual assets.
            </p>
            <p className="text-lg font-medium text-muted-foreground/80">
              No briefs. No guesswork. No dilution of complexity.
            </p>
          </div>
        </AnimatedSection>

        {/* Workflow Steps */}
        <section className="mb-24">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-card/40 backdrop-blur rounded-2xl border-[0.5px] border-border p-8 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-xl text-primary">
                          {step.icon}
                        </div>
                        <div>
                          <div className="text-xs font-mono tracking-widest text-primary/60 mb-1">PHASE {step.id}</div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg font-medium mb-6">{step.description}</p>

                    <div className="text-sm text-muted-foreground leading-relaxed mt-auto">
                      {step.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* The Deliverables */}
        <section className="mb-24">
          <AnimatedSection>
            <div className="bg-card/20 backdrop-blur rounded-3xl border-[0.5px] border-border p-12">
              <div className="text-center mb-16">
                <h2 className="text-section mb-4">The Output</h2>
                <p className="text-xl text-muted-foreground">
                  Deployment-ready assets built for investor scrutiny.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-lg font-bold text-primary">
                    <Layers size={24} />
                    <span>Narrative Carousel</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    A 10-slide visual narrative explaining a single technical concept with clarity. <br />
                    Used for investor outreach, presentations, and authority signaling.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-lg font-bold text-primary">
                    <Aperture size={24} />
                    <span>Technical Loop</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    An 8-second, 4K visual loop representing hardware, systems, or processes. <br />
                    Designed for decks, landing pages, and visual reinforcement.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-lg font-bold text-primary">
                    <Scan size={24} />
                    <span>Visual Audit</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    A recurring report outlining: <br />
                    • Competitor visual gaps <br />
                    • Missed authority signals <br />
                    • Opportunities for differentiation
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <AnimatedSection>
            <div className="text-center bg-gradient-to-br from-primary/5 via-card/40 to-accent/5 backdrop-blur p-16 rounded-3xl border-[0.5px] border-border">
              <h2 className="text-3xl font-bold mb-4">Deployment</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                The AlphaFrame Protocol runs on limited capacity. We cap active engagements to protect quality.
                <br /><span className="text-primary font-medium">First-come. Carefully selected.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <GradientButton className="min-w-[200px] h-12 text-base">Initiate Protocol</GradientButton>
                </Link>
                <Link to="/audit-portfolio">
                  <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">See Case Studies</Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </section>

      </div>
    </div>
  );
};

export default Protocol;