import { motion } from 'framer-motion';
import { ArrowRight, Box, Target, Zap } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

// Animated Diagram 1: Business Extraction
const ExtractionDiagram = () => (
  <div className="w-full h-40 flex items-center justify-center relative overflow-hidden bg-black/20 rounded-xl border border-white/5">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-orange/50 to-transparent" />
    <svg viewBox="0 0 200 100" className="w-full h-full stroke-primary-orange/40 stroke-[2] fill-none">
      <motion.path 
        d="M 20 20 L 180 20 L 130 80 L 70 80 Z" 
        className="fill-primary-orange/5 stroke-primary-orange/60"
      />
      {/* Filtering dots */}
      {[...Array(8)].map((_, i) => (
        <motion.circle
          key={i}
          cx={40 + i * 17}
          cy={20}
          r={2}
          className="fill-primary-blue stroke-none"
          animate={{
            cy: [20, 45, 75, 100],
            cx: [40 + i * 17, 70 + (i % 4) * 15, 100, 100],
            opacity: [1, 1, 0.5, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  </div>
);

// Animated Diagram 2: Conversion Architecture
const ArchitectureDiagram = () => (
  <div className="w-full h-40 flex items-center justify-center relative overflow-hidden bg-black/20 rounded-xl border border-white/5">
    <svg viewBox="0 0 200 100" className="w-full h-full">
      {/* Moving line through flow */}
      <motion.path
        d="M 20 50 L 60 50 L 80 20 L 120 20 L 140 80 L 180 80"
        className="stroke-primary-blue/30 stroke-[3] fill-none"
      />
      <motion.path
        d="M 20 50 L 60 50 L 80 20 L 120 20 L 140 80 L 180 80"
        className="stroke-primary-orange stroke-[3] fill-none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Nodes */}
      {[
        { x: 20, y: 50 }, { x: 60, y: 50 }, { x: 80, y: 20 },
        { x: 120, y: 20 }, { x: 140, y: 80 }, { x: 180, y: 80 }
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={5}
          className="fill-background stroke-primary-blue stroke-[2]"
          animate={{ r: [5, 7, 5] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </svg>
  </div>
);

// Animated Diagram 3: Design & Build
const LayoutDiagram = () => (
  <div className="w-full h-40 flex items-center justify-center relative overflow-hidden bg-black/20 rounded-xl border border-white/5 p-4">
    <div className="w-full h-full flex flex-col gap-2">
      <motion.div 
        className="w-full h-1/3 bg-gradient-to-r from-primary-orange/20 to-transparent rounded-md border border-primary-orange/20"
        animate={{ opacity: [0.3, 0.8, 0.3], x: [-5, 0, -5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="flex gap-2 h-2/3">
        <motion.div 
          className="w-1/3 h-full bg-primary-blue/10 rounded-md border border-primary-blue/20"
          animate={{ opacity: [0.3, 0.7, 0.3], y: [5, 0, 5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div 
          className="w-2/3 h-full bg-white/5 rounded-md border border-white/10"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>
    </div>
  </div>
);

// Animated Diagram 4: Optimization Layer
const OptimizationDiagram = () => (
  <div className="w-full h-40 flex items-center justify-center relative overflow-hidden bg-black/20 rounded-xl border border-white/5">
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      {/* Target rings */}
      <circle cx="50" cy="50" r="40" className="stroke-white/10 stroke-[2] fill-none" />
      <circle cx="50" cy="50" r="25" className="stroke-white/20 stroke-[2] fill-none" />
      {/* Scanning radar */}
      <motion.path
        d="M 50 50 L 50 10 A 40 40 0 0 1 90 50 Z"
        className="fill-primary-orange/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ originX: "50px", originY: "50px" }}
      />
      {/* Data blips */}
      <motion.circle cx="70" cy="30" r="3" className="fill-primary-blue"
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle cx="30" cy="65" r="3" className="fill-primary-orange"
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
      />
    </svg>
  </div>
);

const Protocol = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-6xl">

        <AnimatedSection>
          <div className="text-center mb-24">
            <h1 className="text-hero mb-6">
              The AlphaSight Website <span className="text-gradient-orange">Protocol</span>
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto mb-6 text-white/80">
              A structured system for building websites that attract attention, build trust, and convert visitors into customers.
            </p>
            <p className="text-primary-orange font-medium text-lg uppercase tracking-wider text-sm">
              No templates. No guesswork. No wasted traffic.
            </p>
          </div>
        </AnimatedSection>

        {/* BENTO GRID: PHASES */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Phase 01 */}
            <AnimatedSection delay={0.1}>
              <div className="glass-card rounded-3xl p-8 md:p-10 h-full flex flex-col group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-primary-orange font-mono text-sm tracking-widest mb-2">PHASE 01</div>
                  <h2 className="text-3xl font-bold mb-6">Business Extraction</h2>
                  <ExtractionDiagram />
                  <p className="text-xl font-medium mt-8 mb-4">You bring the idea. We break it down.</p>
                  <p className="text-white/60 mb-2">We look at:</p>
                  <ul className="list-disc list-inside text-white/60 space-y-1 mb-6 pl-2 marker:text-primary-orange">
                    <li>What you sell</li>
                    <li>Who you sell to</li>
                    <li>Why anyone should care</li>
                    <li>Where you are losing attention</li>
                  </ul>
                  <p className="text-white/80 leading-relaxed mt-auto">
                    Most websites fail here. They look good but say nothing. 
                    <br/><br/>
                    <span className="text-white italic">The goal is clarity. If the message is weak, the design will fail.</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Phase 02 */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-3xl p-8 md:p-10 h-full flex flex-col group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-primary-blue font-mono text-sm tracking-widest mb-2">PHASE 02</div>
                  <h2 className="text-3xl font-bold mb-6">Conversion Architecture</h2>
                  <ArchitectureDiagram />
                  <p className="text-xl font-medium mt-8 mb-4">We design the structure before the visuals.</p>
                  <p className="text-white/60 mb-2">Your website is mapped into a clear flow:</p>
                  <ul className="list-disc list-inside text-white/60 space-y-1 mb-6 pl-2 marker:text-primary-blue">
                    <li>Hook the visitor in seconds</li>
                    <li>Explain the offer with precision</li>
                    <li>Build trust fast</li>
                    <li>Remove objections</li>
                    <li>Drive action</li>
                  </ul>
                  <p className="text-white/80 leading-relaxed mt-auto">
                    Every section has a job. Every scroll moves the user closer to a decision.
                    <br/><br/>
                    <span className="text-white italic">No filler. No empty sections.</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Phase 03 */}
            <AnimatedSection delay={0.3}>
              <div className="glass-card rounded-3xl p-8 md:p-10 h-full flex flex-col group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-primary-orange font-mono text-sm tracking-widest mb-2">PHASE 03</div>
                  <h2 className="text-3xl font-bold mb-6">Design & Build</h2>
                  <LayoutDiagram />
                  <p className="text-xl font-medium mt-8 mb-4">We create a site that feels modern, fast, and intentional.</p>
                  <p className="text-white/60 mb-2">You get:</p>
                  <ul className="list-disc list-inside text-white/60 space-y-1 mb-6 pl-2 marker:text-primary-orange">
                    <li>Clean, responsive layouts</li>
                    <li>Strong visual hierarchy</li>
                    <li>Mobile-first design</li>
                    <li>Fast load speeds</li>
                    <li>Smooth interactions</li>
                  </ul>
                  <p className="text-white/80 italic mt-auto">
                    Built using scalable systems so you are not stuck rebuilding later.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Phase 04 */}
            <AnimatedSection delay={0.4}>
              <div className="glass-card rounded-3xl p-8 md:p-10 h-full flex flex-col group relative overflow-hidden border-t border-t-primary-blue/20">
                <div className="absolute inset-0 bg-gradient-to-tl from-primary-blue/10 to-transparent opacity-10 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-primary-blue font-mono text-sm tracking-widest mb-2">PHASE 04</div>
                  <h2 className="text-3xl font-bold mb-6">Optimization Layer</h2>
                  <OptimizationDiagram />
                  <p className="text-xl font-medium mt-8 mb-4">We refine until it performs.</p>
                  <p className="text-white/60 mb-2">We focus on:</p>
                  <ul className="list-disc list-inside text-white/60 space-y-1 mb-6 pl-2 marker:text-primary-blue">
                    <li>Copy clarity</li>
                    <li>Call-to-action strength</li>
                    <li>Layout improvements</li>
                    <li>Speed and usability</li>
                  </ul>
                  <p className="text-white/80 italic mt-auto">
                    Small changes here drive real revenue differences.
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </section>

        {/* THE OUTPUT */}
        <section className="mb-32">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="bracket-title mb-4">The Output</h2>
              <p className="text-2xl font-light text-white/90">A website built to do one thing well. <span className="text-primary-orange font-medium">Convert.</span></p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="cyber-glass rounded-2xl p-8 hover:-translate-y-1 transition-transform">
                <Box className="w-10 h-10 text-primary-orange mb-6" />
                <h3 className="text-xl font-bold mb-4">Core Website</h3>
                <p className="text-white/60 leading-relaxed">
                  A complete, high-performance site designed for your business or brand. <br/><br/>
                  Clear messaging. Strong structure. Built to scale.
                </p>
              </div>

              <div className="cyber-glass rounded-2xl p-8 hover:-translate-y-1 transition-transform">
                <Zap className="w-10 h-10 text-primary-blue mb-6" />
                <h3 className="text-xl font-bold mb-4">Landing Pages</h3>
                <p className="text-white/60 leading-relaxed">
                  Focused pages for specific offers or campaigns. <br/><br/>
                  Built for traffic conversion. No distractions.
                </p>
              </div>

              <div className="cyber-glass rounded-2xl p-8 hover:-translate-y-1 transition-transform">
                <Target className="w-10 h-10 text-primary-orange mb-6" />
                <h3 className="text-xl font-bold mb-4">Ongoing Improvements</h3>
                <p className="text-white/60 leading-relaxed">
                  Continuous updates based on how users interact with your site. <br/><br/>
                  Fix what leaks. Double down on what works.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* DEPLOYMENT CTA */}
        <section className="mb-16">
          <AnimatedSection>
            <div className="glass-card glow-orange rounded-3xl p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-primary-orange/20 blur-[100px] pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold mb-6">Deployment</h2>
                <div className="space-y-4 text-lg text-white/70 mb-10">
                  <p>AlphaSight works with a limited number of clients at a time.</p>
                  <p>This keeps quality high and timelines tight.</p>
                  <p className="text-white font-medium uppercase tracking-widest text-sm pt-4">Access is selective.</p>
                </div>
                
                <Link to="/contact">
                  <GradientButton className="text-lg px-8 py-4">Begin Engagement <ArrowRight className="inline ml-2" size={18} /></GradientButton>
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