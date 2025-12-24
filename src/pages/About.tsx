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
              Based in Nairobi, AlphaFrame is a specialized agency redefining how Deep-Tech 
              and Climate-Tech founders communicate their value to the world.
            </p>
          </div>
        </AnimatedSection>

        {/* Company Overview */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-section mb-8">Our Philosophy</h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  AlphaFrame was born from a brutal truth: technical brilliance is often invisible. 
                  Founders with world-changing ideas were losing capital to louder, less capable competitors 
                  simply because they lacked visual authority.
                </p>
                <p>
                  We are not a traditional marketing agency. We are a strategic asset firm. 
                  We use Advanced processes leveraged with AI Algorithms.... and elite art direction to 
                  translate complex engineering data into "Investor-Grade" narratives.
                </p>
                <p>
                  We believe that in the high-ticket B2B space, design isn't just decoration. 
                  It is a signal of competence, precision, and scalability.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <Building2 className="text-primary mb-4" size={40} />
                  <h3 className="text-2xl font-bold mb-2">2025</h3>
                  <p className="text-muted-foreground">Protocol Launched</p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <Users className="text-primary mb-4" size={40} />
                  <h3 className="text-2xl font-bold mb-2">Exclusive</h3>
                  <p className="text-muted-foreground">Capped Client List</p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <Globe className="text-accent-foreground mb-4" size={40} />
                  <h3 className="text-2xl font-bold mb-2">Global</h3>
                  <p className="text-muted-foreground">Remote Operations</p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <Award className="text-accent-foreground mb-4" size={40} />
                  <h3 className="text-2xl font-bold mb-2">100%</h3>
                  <p className="text-muted-foreground">Success Rate</p>
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
                <h3 className="text-3xl font-bold mb-6">Vision</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  To become the "Secret Weapon" for Series A founders, ensuring that 
                  no world-changing technology fails due to poor communication.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-12 rounded-3xl border border-border">
                <h3 className="text-3xl font-bold mb-6">Mission</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  To provide "Big Agency" strategy at the speed of AI, allowing 
                  founders to maintain a lean operation while projecting the image 
                  of a billion-dollar enterprise.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Portfolio Structure */}
        <section className="mb-32">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-section mb-6">The Output</h2>
              <p className="text-subtitle max-w-2xl mx-auto">
                Three pillars of Visual Authority that define our delivery protocol.
              </p>
            </div>
            
            <div className="bg-card/30 p-12 rounded-3xl border border-border">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">01</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Strategic Narrative</h3>
                  <p className="text-muted-foreground">LinkedIn Carousels & Whitepaper Audits</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">02</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cinematic Visuals</h3>
                  <p className="text-muted-foreground">carefully curated loops & Product Renders</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">03</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Brand Authority</h3>
                  <p className="text-muted-foreground">Investor Deck Redesigns & Positioning</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Values */}
        <section>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-section mb-6">Our Code</h2>
              <p className="text-subtitle max-w-2xl mx-auto">
                The principles that keep our agency lean, aggressive, and profitable.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Technical First",
                  description: "We don't dumb it down. We elevate the complexity to a visual art form."
                },
                {
                  title: "Precision",
                  description: "We leverage cutting-edge hardware to deliver assets that would take teams weeks, in days."
                },
                {
                  title: "Minimalist Impact",
                  description: "No fluff. Every pixel must serve the purpose of increasing sellability."
                },
                {
                  title: "Faceless Power",
                  description: "The focus is always on the Founder's authority, never on the agency's ego."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-card p-8 rounded-2xl border border-border text-center"
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