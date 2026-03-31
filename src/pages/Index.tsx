import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Zap, Palette, BarChart3, Shield, Target, Eye, ArrowRight } from 'lucide-react';
import { BlurText } from '@/components/animations/BlurText';
import { HLSVideo } from '@/components/video/HLSVideo';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/AnimatedSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const stackContainerRef = useRef<HTMLDivElement>(null);
  const stackCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      stackCardsRef.current.forEach((card, i) => {
        if (!card) return;
        
        // Pin the card
        ScrollTrigger.create({
          trigger: card,
          start: `top ${100 + i * 30}px`,
          endTrigger: stackContainerRef.current,
          end: `bottom ${200 + i * 30}px`,
          pin: true,
          pinSpacing: false,
        });

        // Scale down effect when the NEXT card comes up
        if (stackCardsRef.current[i + 1]) {
          gsap.to(card, {
            scale: 0.95,
            opacity: 0.5,
            scrollTrigger: {
              trigger: stackCardsRef.current[i + 1],
              start: `top ${100 + (i + 1) * 30}px`,
              end: "top top",
              scrub: true,
            }
          });
        }
      });
    }, stackContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background overflow-visible font-sans selection:bg-primary-orange/30">
      {/* SECTION 2 — HERO */}
      <section className="relative h-[1000px] w-full overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="absolute top-[20%] w-full h-auto object-contain z-0">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/40 z-[1]" />
          <div className="absolute bottom-0 left-0 right-0 z-[2] h-[300px]" style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }} />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-start h-full pt-[150px] text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="cyber-glass px-3 py-1 mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse" />
            <span className="text-xs font-medium text-white/90">High-performance web development.</span>
          </motion.div>

          <BlurText 
            text="The Technical Authority Your Brand Deserves"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium text-foreground tracking-tight leading-[1] max-w-5xl"
          />

          <motion.p initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ delay: 0.8, duration: 0.8 }} className="mt-8 text-white/70 font-light text-base md:text-lg max-w-2xl leading-relaxed">
            Stunning design. Blazing performance. Engineered by experts. This is web development, wildly reimagined.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-12">
            <Link to="/contact" className="cyber-glass-strong px-8 py-3 text-white font-medium flex items-center gap-2 group hover:border-primary-orange/50 transition-all">
              Initiate Contact
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* SECTION 3 — PARTNERS BAR */}
          <div className="mt-auto pb-12 w-full max-w-5xl">
            <div className="flex flex-col items-center gap-8">
              <div className="cyber-glass px-4 py-1 text-[10px] uppercase tracking-widest text-white/50 font-bold">
                Trusted by the teams behind
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {["Horological Society of Kenya", "Munirumar.org", "HCIS"].map((partner) => (
                  <span key={partner} className="text-xl md:text-2xl font-medium text-white/80 hover:text-white transition-colors cursor-default">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW — WHAT WE DO */}
      <section className="py-32 relative bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <AnimatedSection>
            <div className="cyber-glass px-3.5 py-1 text-xs font-medium text-white inline-block mb-4">What We Do</div>
            <h3 className="text-3xl md:text-4xl font-medium mb-6 text-foreground tracking-tight">
              Alphasight Online converts raw technical material into visual authority.
            </h3>
            <p className="text-white/70 text-lg mb-8 font-light leading-relaxed">
              We take what you have already built and present it in a way that signals competence, confidence, and scale.
            </p>
            <p className="text-primary-orange font-semibold text-lg tracking-wide uppercase text-xs">No hype. No oversimplification.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="relative min-h-[800px] py-32 px-6 md:px-16 lg:px-24 flex items-center overflow-hidden">
        <HLSVideo src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8" fadeTop fadeBottom className="absolute inset-0 z-0" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="cyber-glass rounded-2xl overflow-hidden group col-span-1 row-span-2 relative h-[500px]">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Technical Vision" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              <div className="cyber-glass rounded-2xl overflow-hidden group col-span-1 h-[240px] relative">
                <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1000" alt="Design Architecture" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              <div className="cyber-glass rounded-2xl overflow-hidden group col-span-1 h-[240px] relative mt-auto">
                <img src="https://images.unsplash.com/photo-1531297172867-6cd85f470a7b?auto=format&fit=crop&q=80&w=1000" alt="Code Implementation" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
          <div className="text-left">
            <div className="cyber-glass px-3.5 py-1 text-xs font-medium text-white inline-block mb-4">How It Works</div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">You dream it. We engineer it.</h2>
            <p className="text-white/70 font-light text-lg mb-10 max-w-xl leading-relaxed">
              Share your vision. Our team handles the rest—architecture, design, code, launch. All in days, not quarters.
            </p>
            <Link to="/contact" className="cyber-glass-strong px-8 py-3 text-white font-medium flex items-center gap-2 group hover:border-primary-orange/50 transition-all w-fit">
              Secure Your Spot
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW — WHO THIS IS FOR */}
      <section className="py-32 relative bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <AnimatedSection>
            <div className="cyber-glass px-3.5 py-1 text-xs font-medium text-white inline-block mb-8 whitespace-nowrap">Who This Is For</div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="space-y-6">
                <div className="cyber-glass rounded-2xl p-8 flex items-start gap-5">
                  <div className="cyber-glass-strong w-12 h-12 shrink-0 flex items-center justify-center text-primary-orange"><Target size={24} /></div>
                  <div>
                    <h4 className="text-xl font-medium mb-2 text-white">Creators establishing digital authority.</h4>
                    <p className="text-white/60 font-light">Personal brands, artists, and influencers wanting to outlast trends.</p>
                  </div>
                </div>
                <div className="cyber-glass rounded-2xl p-8 flex items-start gap-5">
                  <div className="cyber-glass-strong w-12 h-12 shrink-0 flex items-center justify-center text-primary-blue"><Zap size={24} /></div>
                  <div>
                    <h4 className="text-xl font-medium mb-2 text-white">Businesses expanding digital real estate.</h4>
                    <p className="text-white/60 font-light">Agencies, retailers, and service companies upgrading their showcases.</p>
                  </div>
                </div>
              </div>
              <div className="cyber-glass-strong rounded-2xl p-10 flex items-center justify-center border-primary-orange/20">
                <p className="text-xl md:text-2xl font-light italic text-center leading-relaxed text-white/90">
                  "If your work is exceptional but your website feels like a template, this fits."
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 — FEATURES CHESS */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 align-center">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-medium text-white tracking-tight">Designed to convert. <br />Built to perform.</h3>
              <p className="text-white/70 font-light leading-relaxed">Every pixel is intentional. Our team studies what works across thousands of top sites—then engineers yours to outperform them all.</p>
              <Link to="/services/audit" className="cyber-glass-strong px-6 py-2.5 text-white text-sm font-medium flex items-center gap-2 hover:border-primary-orange/50 transition-all w-fit">Audit Details</Link>
            </div>
            <div className="flex-1 w-full aspect-video cyber-glass overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-primary-orange/20 mix-blend-overlay z-10" />
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" alt="Feature 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-medium text-white tracking-tight">Built to scale. <br />Flawlessly.</h3>
              <p className="text-white/70 font-light leading-relaxed">Your site is engineered for peak performance from day one. We monitor conversion data and optimize architecture so you never fall behind.</p>
              <Link to="/protocol" className="cyber-glass-strong px-6 py-2.5 text-white text-sm font-medium flex items-center gap-2 hover:border-primary-blue/50 transition-all w-fit">View Protocol</Link>
            </div>
            <div className="flex-1 w-full aspect-video cyber-glass overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary-orange/20 to-primary-blue/20 mix-blend-overlay z-10" />
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Data Optimization" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* NEW — THE PROBLEM & OUTCOME */}
      <section className="py-32 relative bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="cyber-glass rounded-2xl p-10 md:p-12 h-full border-primary-orange/10">
                <h2 className="text-2xl font-medium mb-8 text-white">The Problem</h2>
                <div className="space-y-6 text-lg">
                  <p><span className="font-bold text-primary-orange">Investors do not study. They scan.</span></p>
                  <p className="text-white/60 font-light">Dense decks, whitepapers, and technical language signal risk when presented poorly.</p>
                  <p className="text-white/60 font-light">Strong products lose funding because their visuals fail to communicate trust.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="cyber-glass-strong rounded-2xl p-10 md:p-12 h-full border-primary-blue/20">
                <h2 className="text-2xl font-medium mb-8 text-white">The Outcome</h2>
                <div className="space-y-8">
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4 text-xl font-light text-white/90"><div className="cyber-glass-strong w-10 h-10 flex items-center justify-center rounded-full text-primary-blue"><Eye size={20} /></div>Clear visuals.</li>
                    <li className="flex items-center gap-4 text-xl font-light text-white/90"><div className="cyber-glass-strong w-10 h-10 flex items-center justify-center rounded-full text-primary-orange"><Zap size={20} /></div>Faster understanding.</li>
                    <li className="flex items-center gap-4 text-xl font-light text-white/90"><div className="cyber-glass-strong w-10 h-10 flex items-center justify-center rounded-full text-primary-blue"><Target size={20} /></div>Stronger investor confidence.</li>
                  </ul>
                  <p className="text-xl font-medium pt-4 text-primary-blue">Your product speaks for itself.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FEATURES GRID */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="cyber-glass px-3.5 py-1 text-xs font-medium text-white inline-block mb-4">Why Us</div>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">The difference is everything.</h2>
          </div>
          <div ref={stackContainerRef} className="flex flex-col gap-16 relative">
            {[
              { icon: <Zap className="w-8 h-8 text-primary-orange" />, title: "Days, Not Months", desc: "Concept to launch at a pace that redefines fast. We skip the bloat." },
              { icon: <Palette className="w-8 h-8 text-primary-blue" />, title: "Obsessively Crafted", desc: "Every detail considered. Every element refined. Built for maximum visual authority." },
              { icon: <BarChart3 className="w-8 h-8 text-primary-orange" />, title: "Built to Convert", desc: "Layouts informed by data. Decisions engineered by performance metrics." },
              { icon: <Shield className="w-8 h-8 text-primary-blue" />, title: "Secure by Default", desc: "Enterprise-grade protection comes standard without compromising speed." }
            ].map((card, idx) => (
              <div 
                key={idx} 
                ref={(el) => (stackCardsRef.current[idx] = el)}
                className="cyber-glass p-12 flex flex-col md:flex-row items-center gap-10 group hover:border-white/20 transition-all shadow-2xl origin-top mx-auto w-full max-w-4xl bg-background/95"
              >
                <div className="cyber-glass-strong w-24 h-24 rounded-full flex items-center justify-center relative shrink-0">
                  {card.icon}
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h4 className="text-3xl font-medium text-white tracking-tight">{card.title}</h4>
                  <p className="text-xl font-light text-white/70 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — PROOF STATS */}
      <section className="relative py-32 px-6 overflow-hidden">
        <HLSVideo src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8" fadeTop fadeBottom overlayClassName="bg-background/70" className="absolute inset-0 z-0 brightness-50" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16"><div className="cyber-glass px-3.5 py-1 text-xs font-medium text-white inline-block">Proof</div></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "27+", label: "Websites Built" },
              { value: "3 Days", label: "Average Turnaround" },
              { value: "Complete", label: "Total Domain Ownership" }
            ].map((stat, idx) => (
              <div key={idx} className="cyber-glass p-12 text-center group hover:border-primary-orange/20 transition-all">
                <div className="text-5xl md:text-6xl font-medium text-white tracking-tighter mb-4 group-hover:text-primary-orange transition-colors">{stat.value}</div>
                <div className="text-white/50 font-light text-sm uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — TESTIMONIALS */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="cyber-glass px-3.5 py-1 text-xs font-medium text-white inline-block mb-4">What They Say</div>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">Don't take our word for it.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ text: "A complete rebuild in five days. Their technical architecture is flawless, but the visual polish is what really sets them apart.", name: "Sarah Chen", role: "CEO Luminary" },
              { text: "Conversions up 4x within the first month. The performance engineering is like having a top-tier growth team.", name: "Marcus Webb", role: "Head of Growth Arcline" },
              { text: "They didn't just design our site; they engineered our entire digital future. The technical depth is staggering.", name: "Elena Voss", role: "Brand Director Helix" }
            ].map((t, idx) => (
              <div key={idx} className="cyber-glass p-8 flex flex-col justify-between group hover:border-white/20 transition-all">
                <p className="text-white/80 font-light text-sm italic leading-relaxed mb-8">"{t.text}"</p>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-white/50 font-light text-xs uppercase tracking-wider mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — CTA FOOTER */}
      <section className="relative min-h-[900px] flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden">
        <HLSVideo src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8" fadeTop className="absolute inset-0 z-0" />
        <div className="relative z-10 text-center max-w-4xl mx-auto flex-1 flex flex-col justify-center">
          <div className="cyber-glass px-3.5 py-1 text-xs font-medium text-white inline-block mb-8 mx-auto">Capacity</div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tighter mb-8 max-w-3xl mx-auto leading-[1]">Your next website starts here.</h2>
          <p className="text-white/70 font-light text-lg mb-12 max-w-xl mx-auto">
            We onboard two founders per month. Quality stays absolute. Book a free strategy call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="cyber-glass-strong px-10 py-4 text-white font-medium flex items-center gap-2 group hover:border-primary-orange/50 transition-all w-full sm:w-auto">
              Book Strategy Call
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/40 text-xs font-light">© 2026 Alphasight Online. All rights reserved.</div>
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a key={link} href="#" className="text-white/40 text-xs hover:text-white transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;