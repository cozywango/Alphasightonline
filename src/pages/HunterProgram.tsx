
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, CheckCircle2 } from 'lucide-react';

const HunterProgram = () => {
    return (
        <div className="min-h-screen py-24">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <AnimatedSection>
                    <div className="text-center mb-24">
                        <h1 className="text-hero mb-6">The Hunter Program</h1>
                        <p className="text-3xl md:text-4xl font-light text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                            Deploy visual authority. <span className="text-orange-500 font-medium">Earn independent revenue.</span>
                        </p>
                    </div>
                </AnimatedSection>

                {/* What This Is */}
                <AnimatedSection>
                    <div className="mb-24 max-w-4xl mx-auto text-center">
                        <span className="text-sm font-mono text-primary mb-4 block">WHAT THIS IS</span>
                        <h2 className="text-section mb-6">The Partnership</h2>
                        <div className="text-xl text-muted-foreground leading-relaxed space-y-6">
                            <p>The Hunter Program is a revenue partnership.</p>
                            <ul className="list-none space-y-2">
                                <li>You introduce clients who need stronger digital presence.</li>
                                <li>AlphaFrame builds the asset.</li>
                                <li>You earn commission.</li>
                            </ul>
                            <p className="pt-4 font-medium text-foreground">
                                This is not affiliate marketing.<br />
                                This is distribution for a premium product.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Why It Exists */}
                <AnimatedSection>
                    <div className="mb-32 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-sm font-mono text-primary mb-4 block">WHY IT EXISTS</span>
                            <h2 className="text-section mb-6">Visual Authority</h2>
                            <div className="text-lg text-muted-foreground space-y-6">
                                <p>
                                    AlphaFrame translates complex technical work into authority-driven visuals.
                                </p>
                                <p>
                                    To fund that work without compromising independence, we partner with trusted operators through the Hunter Program.
                                </p>
                                <p>
                                    We apply the same psychological design principles used in deep-tech and biotech to creators, small businesses, and agencies.
                                </p>
                            </div>
                        </div>
                        <div className="bg-card/30 p-8 rounded-3xl border border-border">
                            <h3 className="text-xl font-bold mb-6">The Objective</h3>
                            <p className="text-muted-foreground mb-6">
                                Identify people stuck in digital noise and upgrade their online presence to visual authority.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={20} />
                                    <p className="text-sm">Creators with large audiences and weak websites</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={20} />
                                    <p className="text-sm">Small businesses relying on social platforms alone</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={20} />
                                    <p className="text-sm">Agencies needing fast, high-quality client assets</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* The Asset */}
                <AnimatedSection>
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <span className="text-sm font-mono text-primary mb-4 block">THE ASSET</span>
                            <h2 className="text-section mb-6">Catalog-Mode Websites</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                We do not build stores or platforms. We build showcases.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="bg-card/20 p-8 rounded-2xl border border-border">
                                    <h3 className="font-bold text-xl mb-4 text-red-400">The Problem</h3>
                                    <p className="text-muted-foreground mb-4">Most personal and business sites fail because they are:</p>
                                    <ul className="grid grid-cols-2 gap-4">
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-red-400" />Slow</li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-red-400" />Overbuilt</li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-red-400" />Template-driven</li>
                                        <li className="flex items-center gap-2 text-sm text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-red-400" />Hard to maintain</li>
                                    </ul>
                                </div>
                                <div className="bg-card/40 p-8 rounded-2xl border border-primary/20">
                                    <h3 className="font-bold text-xl mb-4 text-primary">The Solution</h3>
                                    <p className="text-muted-foreground mb-4">Catalog-Mode sites are:</p>
                                    <ul className="grid grid-cols-2 gap-4">
                                        <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-primary" />Fast-loading</li>
                                        <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-primary" />Mobile-first</li>
                                        <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-primary" />Zero-friction</li>
                                        <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-primary" />Permanent real estate</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-8">What Makes Them Different</h3>
                                <div className="space-y-6">
                                    {[
                                        { title: 'Speed', desc: 'Delivered in days, not months' },
                                        { title: 'Polish', desc: 'Enterprise-grade design without artificial artifacts' },
                                        { title: 'Simplicity', desc: 'Frontend-only architecture. No plugins. No maintenance' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                                <CheckCircle2 size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">{item.title}</h4>
                                                <p className="text-muted-foreground">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-8 text-xl font-medium italic border-l-4 border-primary pl-6 py-2">
                                    "Do not post content endlessly. Publish a destination."
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* How The Program Works */}
                <AnimatedSection>
                    <div className="mb-32 bg-card/10 rounded-3xl p-8 md:p-12 border border-border">
                        <div className="text-center mb-12">
                            <h2 className="text-section">How the Program Works</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="relative p-8 rounded-2xl bg-card/40 border border-border">
                                <div className="text-sm font-mono text-orange-500 mb-4">YOUR ROLE</div>
                                <h3 className="text-2xl font-bold mb-4">The Hunter</h3>
                                <ul className="space-y-3 text-muted-foreground mb-8">
                                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-orange-500" />You identify the client.</li>
                                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-orange-500" />You make the introduction.</li>
                                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-orange-500" />You close the deal.</li>
                                </ul>
                                <p className="font-medium">No design work. No build work.</p>
                            </div>
                            <div className="relative p-8 rounded-2xl bg-card/40 border border-border">
                                <div className="text-sm font-mono text-primary mb-4">OUR ROLE</div>
                                <h3 className="text-2xl font-bold mb-4">The Engine</h3>
                                <ul className="space-y-3 text-muted-foreground mb-8">
                                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-primary" />We handle Design.</li>
                                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-primary" />We handle Development.</li>
                                    <li className="flex items-center gap-2"><ArrowRight size={16} className="text-primary" />We handle Delivery.</li>
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
                        <h2 className="text-section mb-12">Financial Logic</h2>
                        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {[
                                { val: '20%', label: 'Commission per sale' },
                                { val: 'Instant', label: 'Paid after deposit' },
                                { val: 'Uncapped', label: 'No volume limits' }
                            ].map((stat, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-card/30 border border-border">
                                    <div className="text-4xl font-bold text-primary mb-2">{stat.val}</div>
                                    <div className="text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-muted-foreground">Scale stays in your control.</p>
                    </div>
                </AnimatedSection>

                {/* Product Inventory */}
                <AnimatedSection>
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <span className="text-sm font-mono text-primary mb-4 block">INVENTORY</span>
                            <h2 className="text-section mb-6">Product Inventory</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                All products use fixed pricing to protect authority and positioning.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Creator Series */}
                            <div className="space-y-6">
                                <div className="p-8 rounded-3xl bg-card border border-border">
                                    <h3 className="text-2xl font-bold mb-2">Creator Series</h3>
                                    <p className="text-sm text-muted-foreground italic mb-8">Built for creators, artists, and personal brands.</p>
                                    <div className="space-y-6">
                                        {[
                                            { tier: 'Tier I', name: 'Bio Link', price: '$80 – $150', desc: 'A clean, professional digital card' },
                                            { tier: 'Tier II', name: 'Portfolio', price: '$170 – $270', desc: 'Work gallery with profile and CV' },
                                            { tier: 'Tier III', name: 'Content Hub', price: '$290 – $390', desc: 'Feeds and email capture' },
                                            { tier: 'Tier IV', name: 'Icon', price: '$400+', desc: 'Flagship site with motion and custom domain' }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between items-start pb-6 border-b border-border last:border-0 last:pb-0">
                                                <div>
                                                    <div className="font-bold text-primary mb-1">{item.name}</div>
                                                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                                                </div>
                                                <div className="font-mono font-bold text-right text-sm">{item.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Business Series */}
                            <div className="space-y-6">
                                <div className="p-8 rounded-3xl bg-card border border-border">
                                    <h3 className="text-2xl font-bold mb-2">Business Series</h3>
                                    <p className="text-sm text-muted-foreground italic mb-8">Built for agencies, retailers, and service businesses.</p>
                                    <div className="space-y-6">
                                        {[
                                            { tier: 'Tier I', name: 'The Card', price: '$120 – $220', desc: 'Single-page site with WhatsApp contact' },
                                            { tier: 'Tier II', name: 'The Catalog', price: '$250 – $350', desc: 'Product galleries with direct messaging sales' },
                                            { tier: 'Tier III', name: 'The Firm', price: '$380 – $480', desc: 'Services, menus, and booking integration' },
                                            { tier: 'Tier IV', name: 'Enterprise Lite', price: '$800+', desc: 'Multi-page site with competitor review' }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between items-start pb-6 border-b border-border last:border-0 last:pb-0">
                                                <div>
                                                    <div className="font-bold text-primary mb-1">{item.name}</div>
                                                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                                                </div>
                                                <div className="font-mono font-bold text-right text-sm">{item.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Who This Is For & Operational Details */}
                <AnimatedSection>
                    <div className="mb-32 grid md:grid-cols-2 gap-12">
                        <div className="bg-card/20 p-10 rounded-3xl border border-border">
                            <h2 className="text-2xl font-bold mb-6">Who This Is For</h2>
                            <p className="text-muted-foreground mb-6">
                                You do not need technical skills. You need market awareness.
                            </p>
                            <p className="font-medium mb-4">This fits if:</p>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5" />You know people with strong businesses and weak websites</li>
                                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5" />You understand social platforms do not provide ownership</li>
                                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5" />You value speed, clarity, and clean execution</li>
                            </ul>
                        </div>

                        <div className="bg-card/20 p-10 rounded-3xl border border-border">
                            <h2 className="text-2xl font-bold mb-6">Operational Details</h2>

                            <div className="mb-8">
                                <h3 className="font-bold mb-2 text-primary">Sales Tracking</h3>
                                <p className="text-sm text-muted-foreground">
                                    You route the client to our acquisition lead with a clear request.
                                    Once the deposit is paid, your commission is released.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold mb-2 text-primary">Catalog-Mode Explained</h3>
                                <p className="text-sm text-muted-foreground mb-2">We remove complexity. No carts. No backends.</p>
                                <p className="text-sm text-muted-foreground">
                                    Sales happen through WhatsApp, Stripe links, or direct messages.
                                    This keeps the site fast, reliable, and maintenance-free.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Closing / Why AlphaFrame */}
                <AnimatedSection>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-section mb-6">Why AlphaFrame</h2>
                        <p className="text-xl text-muted-foreground mb-12">
                            We design for deep-tech companies under investor scrutiny.
                            The Hunter Program brings that same visual discipline to creators and businesses.
                        </p>

                        <Link to="/contact?type=marketer">
                            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 rounded-xl text-lg shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse">
                                INITIATE HUNTER APPLICATION
                            </Button>
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default HunterProgram;
