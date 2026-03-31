
import { AnimatedSection } from '@/components/AnimatedSection';
import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const HunterProgram = () => {
    return (
        <div className="min-h-screen py-24">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <AnimatedSection>
                    <div className="text-center mb-24">
                        <h1 className="text-hero mb-6">The Hunter Program</h1>
                        <p className="text-3xl md:text-4xl font-light text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                            Deploy visual authority. <span className="text-gradient-orange font-medium">Earn independent revenue.</span>
                        </p>
                    </div>
                </AnimatedSection>

                {/* What This Is */}
                <AnimatedSection>
                    <div className="mb-24 max-w-4xl mx-auto text-center">
                        <span className="text-sm font-mono text-primary mb-4 block">WHAT THIS IS</span>
                        <h2 className="bracket-title mb-6">The Partnership</h2>
                        <div className="text-xl text-muted-foreground leading-relaxed space-y-6">
                            <p>The Hunter Program is a revenue partnership.</p>
                            <ul className="list-none space-y-2">
                                <li>You introduce clients who need stronger digital presence.</li>
                                <li>Alphasight Online builds the asset.</li>
                                <li>You earn commission.</li>
                            </ul>
                            <p className="pt-4 font-medium text-foreground">
                                This is not affiliate marketing.<br />
                                This is distribution for a premium product.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Why It Exists - BENTO UI */}
                <AnimatedSection>
                    <div className="mb-32">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            <div className="lg:col-span-3 glass-card rounded-3xl p-10 group hover:scale-[1.01] transition-transform duration-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-primary-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative z-10">
                                    <span className="text-sm font-mono text-primary mb-4 block">WHY IT EXISTS</span>
                                    <h2 className="text-section mb-6">Visual Authority</h2>
                                    <div className="text-lg text-muted-foreground space-y-6">
                                        <p>
                                            Alphasight Online translates complex technical work into authority-driven visuals.
                                        </p>
                                        <p>
                                            To fund that work without compromising independence, we partner with trusted operators through the Hunter Program.
                                        </p>
                                        <p>
                                            We apply the same psychological design principles used in deep-tech and biotech to creators, small businesses, and agencies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="lg:col-span-2 glass-card glow-orange rounded-3xl p-10 group hover:-translate-y-1 transition-transform duration-500 relative flex flex-col justify-center">
                                <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-primary-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <h3 className="text-xl font-bold mb-6 relative z-10">The Objective</h3>
                                <p className="text-muted-foreground mb-6 relative z-10">
                                    Identify people stuck in digital noise and upgrade their online presence to visual authority.
                                </p>
                                <div className="space-y-4 relative z-10">
                                    {[
                                        'Creators with large audiences and weak websites',
                                        'Small businesses relying on social platforms alone',
                                        'Agencies needing fast, high-quality client assets',
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                                            <p className="text-sm">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* The Asset - BENTO UI */}
                <AnimatedSection>
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <span className="text-sm font-mono text-[#0094ff] mb-4 block">THE ASSET</span>
                            <h2 className="bracket-title mb-6">Catalog-Mode Websites</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                We do not build stores or platforms. We build showcases.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-1 space-y-6 flex flex-col">
                                <div className="glass-card rounded-3xl p-8 flex-1 group hover:scale-[1.02] transition-transform duration-500 relative">
                                    <h3 className="font-bold text-xl mb-4 text-red-500">The Problem</h3>
                                    <p className="text-muted-foreground mb-4">Most personal and business sites fail because they are:</p>
                                    <ul className="space-y-3">
                                        {['Slow', 'Overbuilt', 'Template-driven', 'Hard to maintain'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />{item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="glass-card glow-orange rounded-3xl p-8 flex-1 group hover:scale-[1.02] transition-transform duration-500 relative">
                                    <h3 className="font-bold text-xl mb-4 text-primary">The Solution</h3>
                                    <p className="text-muted-foreground mb-4">Catalog-Mode sites are:</p>
                                    <ul className="space-y-3">
                                        {['Fast-loading', 'Mobile-first', 'Zero-friction', 'Permanent real estate'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />{item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:col-span-2 glass-card rounded-3xl p-10 flex flex-col justify-center relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
                                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <h3 className="text-2xl font-bold mb-10 relative z-10">What Makes Them Different</h3>
                                <div className="grid sm:grid-cols-2 gap-8 relative z-10">
                                    {[
                                        { title: 'Speed', desc: 'Delivered in days, not months' },
                                        { title: 'Polish', desc: 'Enterprise-grade design without artificial artifacts' },
                                        { title: 'Simplicity', desc: 'Frontend-only architecture. No plugins. No maintenance' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col gap-3">
                                            <div className="glow-badge w-10 h-10 shrink-0 flex items-center justify-center">
                                                <CheckCircle2 size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 glass-card rounded-2xl p-6 border-l-4 border-primary bg-background/50 relative z-10">
                                    <p className="text-xl font-medium italic text-foreground/90">
                                        "Do not post content endlessly. Publish a destination."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* How The Program Works */}
                <AnimatedSection>
                    <div className="mb-32 glass-card rounded-3xl p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h2 className="bracket-title">How the Program Works</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="glass-card glow-orange rounded-2xl p-8">
                                <div className="text-sm font-mono text-primary mb-4">YOUR ROLE</div>
                                <h3 className="text-2xl font-bold mb-4">The Hunter</h3>
                                <ul className="space-y-3 text-muted-foreground mb-8">
                                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-primary" />You identify the client.</li>
                                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-primary" />You make the introduction.</li>
                                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-primary" />You close the deal.</li>
                                </ul>
                                <p className="font-medium">No design work. No build work.</p>
                            </div>
                            <div className="glass-card glow-blue rounded-2xl p-8">
                                <div className="text-sm font-mono text-[#0094ff] mb-4">OUR ROLE</div>
                                <h3 className="text-2xl font-bold mb-4">The Engine</h3>
                                <ul className="space-y-3 text-muted-foreground mb-8">
                                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-[#0094ff]" />We handle Design.</li>
                                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-[#0094ff]" />We handle Development.</li>
                                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-[#0094ff]" />We handle Delivery.</li>
                                </ul>
                                <p className="font-medium">You stay focused on distribution.</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Compensation */}
                <AnimatedSection>
                    <div className="mb-32 text-center">
                        <span className="text-sm font-mono text-primary mb-4 block">COMPENSATION</span>
                        <h2 className="bracket-title mb-12">Financial Logic</h2>
                        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {[
                                { val: '20%', label: 'Commission per sale' },
                                { val: 'Instant', label: 'Paid after deposit' },
                                { val: 'Uncapped', label: 'No volume limits' }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-8 rounded-2xl"
                                >
                                    <div className="text-4xl font-bold text-gradient-orange mb-2">{stat.val}</div>
                                    <div className="text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                        <p className="mt-8 text-muted-foreground">Scale stays in your control.</p>
                    </div>
                </AnimatedSection>

                {/* Product Inventory - BENTO UI */}
                <AnimatedSection>
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <span className="text-sm font-mono text-primary mb-4 block">INVENTORY</span>
                            <h2 className="bracket-title mb-6">Product Inventory</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                All products use fixed pricing to protect authority and positioning.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Creator Series */}
                            <div className="glass-card rounded-3xl p-10 group hover:-translate-y-1 transition-transform duration-500 relative">
                                <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-primary-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <h3 className="text-3xl font-bold mb-2">Creator Series</h3>
                                <p className="text-sm text-muted-foreground italic mb-10">Built for creators, artists, and personal brands.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { name: 'Bio Link', price: '$80 – $150', desc: 'A clean, professional digital card' },
                                        { name: 'Portfolio', price: '$170 – $270', desc: 'Work gallery with profile and CV' },
                                        { name: 'Content Hub', price: '$290 – $390', desc: 'Feeds and email capture' },
                                        { name: 'Icon', price: '$400+', desc: 'Flagship site with motion and custom domain' }
                                    ].map((item, i) => (
                                        <div key={i} className="glass-card p-6 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300">
                                            <div className="font-bold text-primary mb-1 text-lg">{item.name}</div>
                                            <div className="font-mono font-bold text-gradient-orange mb-3">{item.price}</div>
                                            <div className="text-sm text-muted-foreground">{item.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Business Series */}
                            <div className="glass-card glass-card-blue rounded-3xl p-10 group hover:-translate-y-1 transition-transform duration-500 relative">
                                <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-[#0094ff]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <h3 className="text-3xl font-bold mb-2">Business Series</h3>
                                <p className="text-sm text-muted-foreground italic mb-10">Built for agencies, retailers, and service businesses.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { name: 'The Card', price: '$120 – $220', desc: 'Single-page site with WhatsApp contact' },
                                        { name: 'The Catalog', price: '$250 – $350', desc: 'Product galleries with direct messaging sales' },
                                        { name: 'The Firm', price: '$380 – $480', desc: 'Services, menus, and booking integration' },
                                        { name: 'Enterprise Lite', price: '$800+', desc: 'Multi-page site with competitor review' }
                                    ].map((item, i) => (
                                        <div key={i} className="glass-card p-6 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300">
                                            <div className="font-bold text-[#0094ff] mb-1 text-lg">{item.name}</div>
                                            <div className="font-mono font-bold text-gradient-blue mb-3">{item.price}</div>
                                            <div className="text-sm text-muted-foreground">{item.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Who This Is For & Operational Details */}
                <AnimatedSection>
                    <div className="mb-32 grid md:grid-cols-2 gap-12">
                        <div className="glass-card rounded-3xl p-10">
                            <h2 className="text-2xl font-bold mb-6">Who This Is For</h2>
                            <p className="text-muted-foreground mb-6">
                                You do not need technical skills. You need market awareness.
                            </p>
                            <p className="font-medium mb-4">This fits if:</p>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                {[
                                    'You know people with strong businesses and weak websites',
                                    'You understand social platforms do not provide ownership',
                                    'You value speed, clarity, and clean execution',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle2 size={16} className="text-primary mt-0.5" />{item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass-card glass-card-blue rounded-3xl p-10">
                            <h2 className="text-2xl font-bold mb-6">Operational Details</h2>

                            <div className="mb-8">
                                <h3 className="font-bold mb-2 text-primary">Sales Tracking</h3>
                                <p className="text-sm text-muted-foreground">
                                    You route the client to our acquisition lead with a clear request.
                                    Once the deposit is paid, your commission is released.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold mb-2 text-[#0094ff]">Catalog-Mode Explained</h3>
                                <p className="text-sm text-muted-foreground mb-2">We remove complexity. No carts. No backends.</p>
                                <p className="text-sm text-muted-foreground">
                                    Sales happen through WhatsApp, Stripe links, or direct messages.
                                    This keeps the site fast, reliable, and maintenance-free.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Closing / Why Alphasight Online */}
                <AnimatedSection>
                    <div className="text-center max-w-3xl mx-auto glass-card glow-orange rounded-3xl p-12 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,_rgba(255,138,0,0.08)_0%,_transparent_70%)] pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-section mb-6">Why Alphasight Online</h2>
                            <p className="text-xl text-muted-foreground mb-12">
                                We design for deep-tech companies under investor scrutiny.
                                The Hunter Program brings that same visual discipline to creators and businesses.
                            </p>

                            <Link to="/contact?type=marketer">
                                <GradientButton className="text-lg group">
                                    INITIATE HUNTER APPLICATION
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                </GradientButton>
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default HunterProgram;
