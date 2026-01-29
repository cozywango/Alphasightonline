import { motion } from 'framer-motion';
import { Building2, Users, Globe, Award } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const About = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <h1 className="text-hero mb-8">
              Refining the <span className="text-primary">Lens</span> of Authority
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto">
              Alphasight Online is a Nairobi-based agency helping deep-tech and climate-tech founders communicate their value with precision.
            </p>
            <p className="mt-6 text-lg text-muted-foreground font-medium">
              We work globally. We operate remotely. We focus narrowly.
            </p>
          </div>
        </AnimatedSection>

        {/* Company Overview */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-section mb-8">What We Believe</h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Technical excellence often goes unseen.
                </p>
                <p>
                  Founders with strong ideas lose capital to louder competitors because their work lacks visual authority.
                </p>
                <p className="text-foreground font-medium">
                  Alphasight Online exists to correct that imbalance.
                </p>
                <div className="pl-6 border-l-2 border-primary my-8 py-2">
                  <p className="italic">We are not a marketing agency.<br />We function as a strategic asset partner.</p>
                </div>
                <p>
                  We combine advanced workflows, AI-assisted analysis, and disciplined art direction to convert complex engineering into investor-grade narratives. In high-value B2B markets, design signals competence, precision, and scale.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <Building2 className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-1">2025</h3>
                  <p className="text-sm text-muted-foreground">Protocol Launched</p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <Users className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-1">Capped</h3>
                  <p className="text-sm text-muted-foreground">Client list by design</p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <Globe className="text-accent-foreground mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-1">Global</h3>
                  <p className="text-sm text-muted-foreground">Remote Operations</p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <Award className="text-accent-foreground mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-1">Record</h3>
                  <p className="text-sm text-muted-foreground">Consistent delivery</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-32">
          <AnimatedSection>
            <h2 className="text-section text-center mb-16">The Core</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-3xl border border-border">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-primary rounded-full"></span> Vision
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  To become the quiet advantage behind Series A founders.
                </p>
                <p className="text-lg font-medium text-foreground">
                  No transformative technology should fail because it was poorly communicated.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-12 rounded-3xl border border-border">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-accent-foreground rounded-full"></span> Mission
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  Deliver big-agency strategic output at machine speed.
                </p>
                <p className="text-lg font-medium text-foreground">
                  Founders stay lean while presenting with the authority of a billion-dollar company.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Portfolio Structure */}
        <section className="mb-32">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-section mb-6">What We Deliver</h2>
              <p className="text-subtitle max-w-2xl mx-auto">
                Three pillars define Alphasight Online output.
              </p>
            </div>

            <div className="bg-card/30 p-12 rounded-3xl border border-border">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center group">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-primary">01</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Strategic Narrative</h3>
                  <p className="text-muted-foreground mb-4">Visual breakdowns of complex ideas.</p>
                  <ul className="text-sm text-muted-foreground/80 space-y-1">
                    <li>LinkedIn carousels</li>
                    <li>Whitepaper and technical audits</li>
                  </ul>
                </div>

                <div className="text-center group">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-primary">02</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Cinematic Visuals</h3>
                  <p className="text-muted-foreground mb-4">High-fidelity visuals for abstract or complex systems.</p>
                  <ul className="text-sm text-muted-foreground/80 space-y-1">
                    <li>Cinematic loops</li>
                    <li>Product and system renders</li>
                  </ul>
                </div>

                <div className="text-center group">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-primary">03</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Brand Authority</h3>
                  <p className="text-muted-foreground mb-4">Assets built for investor scrutiny.</p>
                  <ul className="text-sm text-muted-foreground/80 space-y-1">
                    <li>Pitch deck redesigns</li>
                    <li>Positioning refinement</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Operating Code */}
        <section>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-section mb-6">Our Operating Code</h2>
              <p className="text-subtitle max-w-2xl mx-auto">
                These principles keep Alphasight Online focused and effective.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Technical First",
                  description: "We preserve complexity. We elevate it visually."
                },
                {
                  title: "Precision",
                  description: "We use advanced hardware and tight workflows to deliver in days, not weeks."
                },
                {
                  title: "Minimalist Impact",
                  description: "No excess. Every element exists to increase sellability."
                },
                {
                  title: "Faceless Power",
                  description: "The spotlight stays on the founder. The agency remains invisible."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-card p-8 rounded-2xl border border-border text-center hover:border-primary/40 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
};

export default About;