
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
                    <div className="text-center mb-24 transition-all duration-700 hover:scale-[1.01]">
                        <h1 className="text-hero mb-6">The Hunter Program</h1>
                        <p className="text-3xl md:text-4xl font-light text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                            Deploy Visual Authority. <span className="text-orange-500 font-medium">Secure Sovereign Revenue.</span>
                        </p>
                    </div>
                </AnimatedSection>

                {/* 01. The Executive Mandate */}
                <AnimatedSection>
                    <div className="mb-32">
                        <div className="bg-card/30 backdrop-blur rounded-3xl border border-border p-8 md:p-12 hover:border-primary/20 transition-all duration-500">
                            <span className="text-sm font-mono text-primary mb-4 block">01. THE MANDATE</span>
                            <h2 className="text-section mb-6">The Executive Mandate</h2>
                            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                                <p>
                                    AlphaFrame exists to translate the complex truths of Deep-Tech into inevitability. To fuel this mission without compromising our independence, we have engaged the <strong className="text-foreground">Hunter Program</strong>.
                                </p>
                                <p>
                                    This is not a traditional affiliate scheme. It is a strategic revenue protocol. We are taking the psychological design principles reserved for Quantum Computing and Biotech ventures and adapting them for the high-volume creator economy.
                                </p>
                                <div className="bg-background/20 rounded-xl p-6 border-l-2 border-primary mt-8">
                                    <h3 className="text-foreground font-bold mb-2">The Objective:</h3>
                                    <p>We identify high-value targets (Creators, SMBs, Agencies) trapped in the "gray noise" of the internet and upgrade them to <strong className="text-foreground">Visual Authority</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* 02. The Product */}
                <AnimatedSection>
                    <div className="mb-32">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-sm font-mono text-primary mb-4 block">02. THE ASSET</span>
                                <h2 className="text-section mb-6">The Product: "Catalog-Mode"</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Most personal websites are failures—bloated with plugins, slow to load, or built on "cookie-cutter" templates that signal mediocrity.
                                </p>
                                <p className="text-lg text-muted-foreground mb-8">
                                    We do not build shopping carts. <strong className="text-foreground">We build Showcases.</strong><br />
                                    We deploy "Catalog-Mode" sites: High-fidelity, zero-friction, mobile-native assets that serve as permanent digital real estate.
                                </p>
                                <h3 className="text-xl font-bold mb-4">The Pitch is Simple:</h3>
                                <p className="italic text-2xl text-muted-foreground border-l-4 border-orange-500 pl-6 py-2">
                                    "Don't Just Post. Publish."
                                </p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { title: 'Speed', desc: 'Deployed in days, not months.' },
                                    { title: 'Polish', desc: 'Fortune-500 grade aesthetics. No AI artifacts.' },
                                    { title: 'Simplicity', desc: 'No complex backends. Just pure, hack-proof frontend code.' }
                                ].map((item, i) => (
                                    <div key={i} className="bg-card/50 p-6 rounded-2xl border border-border flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                                        <CheckCircle2 className="text-primary shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* 03. The Hunter Protocol */}
                <AnimatedSection>
                    <div className="mb-32">
                        <div className="bg-gradient-to-br from-card to-background rounded-3xl border border-border p-8 md:p-16 text-center relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />

                            <span className="text-sm font-mono text-orange-500 mb-4 block">03. THE PROTOCOL</span>
                            <h2 className="text-section mb-12">The Hunter Protocol</h2>

                            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16 text-left">
                                <div className="bg-background/40 p-8 rounded-2xl border border-border/50 transition-all duration-300 hover:border-orange-500/30">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="text-orange-500">01</span> You (The Hunter)
                                    </h3>
                                    <p className="text-muted-foreground">Identify the target. Open the door. Close the deal.</p>
                                </div>
                                <div className="bg-background/40 p-8 rounded-2xl border border-border/50 transition-all duration-300 hover:border-primary/30">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="text-primary">02</span> Us (The Engine)
                                    </h3>
                                    <p className="text-muted-foreground">We deploy the "Black Box" logic to generate the asset. We handle the design, build, and handover.</p>
                                </div>
                            </div>

                            <div className="bg-orange-500/10 rounded-2xl p-8 max-w-3xl mx-auto border border-orange-500/20">
                                <h3 className="text-2xl font-bold mb-6 text-orange-500">Your Compensation</h3>
                                <div className="grid sm:grid-cols-3 gap-8">
                                    {[
                                        { label: 'Commission', value: '20%', sub: 'On every asset' },
                                        { label: 'Payouts', value: 'Instant', sub: 'Upon ignition' },
                                        { label: 'Volume', value: 'No Cap', sub: 'Scale indefinitely' }
                                    ].map((stat, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                                            <div className="text-sm font-bold text-orange-500 mb-1">{stat.label}</div>
                                            <div className="text-xs text-muted-foreground">{stat.sub}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* 04. The Inventory */}
                <AnimatedSection>
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <span className="text-sm font-mono text-primary mb-4 block">04. THE INVENTORY</span>
                            <h2 className="text-section mb-6">The Inventory</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                You will be armed with two distinct product tracks, with fixed, non-negotiable pricing to maintain authority.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Track A */}
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-card border border-border">
                                    <h3 className="text-2xl font-bold mb-2">A. The Creator Series</h3>
                                    <p className="text-sm text-muted-foreground italic mb-6">Engineered for influencers, artists, and personal brands.</p>
                                    <div className="space-y-4">
                                        {[
                                            { tier: 'Tier I', name: 'Bio-Link', price: '$80–150', desc: 'The ultimate business card.' },
                                            { tier: 'Tier II', name: 'Portfolio', price: '$170–270', desc: 'Full gallery and CV integration.' },
                                            { tier: 'Tier III', name: 'Content Hub', price: '$290–390', desc: 'Dynamic feeds and email capture.' },
                                            { tier: 'Tier IV', name: 'Icon', price: '$400+', desc: 'The flagship. Motion effects and custom domains.' }
                                        ].map((item, i) => (
                                            <div key={i} className="p-4 rounded-xl bg-background/50 border border-border/50 flex justify-between items-center gap-4 transition-all duration-300 hover:bg-background hover:border-primary/20">
                                                <div>
                                                    <div className="font-bold text-sm text-primary mb-0.5">{item.tier} — {item.name}</div>
                                                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                                                </div>
                                                <div className="font-mono font-bold text-right whitespace-nowrap">{item.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Track B */}
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-card border border-border">
                                    <h3 className="text-2xl font-bold mb-2">B. The Business Series</h3>
                                    <p className="text-sm text-muted-foreground italic mb-6">Architected for agencies, retailers, and entities.</p>
                                    <div className="space-y-4">
                                        {[
                                            { tier: 'Tier I', name: 'The Card', price: '$120–220', desc: 'Single landing page with "WhatsApp Us" utility.' },
                                            { tier: 'Tier II', name: 'The Catalog', price: '$250–350', desc: 'Product galleries with direct-to-DM purchasing.' },
                                            { tier: 'Tier III', name: 'The Firm', price: '$380–480', desc: 'Service menus and booking integration.' },
                                            { tier: 'Tier IV', name: 'Enterprise Lite', price: '$800+', desc: 'Multi-page architecture with competitor analysis.' }
                                        ].map((item, i) => (
                                            <div key={i} className="p-4 rounded-xl bg-background/50 border border-border/50 flex justify-between items-center gap-4 transition-all duration-300 hover:bg-background hover:border-primary/20">
                                                <div>
                                                    <div className="font-bold text-sm text-primary mb-0.5">{item.tier} — {item.name}</div>
                                                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                                                </div>
                                                <div className="font-mono font-bold text-right whitespace-nowrap">{item.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* 05. Who We Are Looking For */}
                <AnimatedSection>
                    <div className="mb-32">
                        <div className="bg-card p-12 rounded-3xl border border-border text-center">
                            <span className="text-sm font-mono text-primary mb-4 block">05. INTELLIGENCE</span>
                            <h2 className="text-section mb-8">Who We Are Looking For</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                                The Hunter Program is not for everyone. We do not require technical skills; we require <strong className="text-foreground">Market Intelligence</strong>.
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
                                {[
                                    "You have a network of high-value individuals with low-resolution digital presence.",
                                    "You understand that 'Social Media is Rented Land' and that creators need permanent assets.",
                                    "You value speed, precision, and financial discipline."
                                ].map((text, i) => (
                                    <div key={i} className="bg-background/50 p-6 rounded-2xl border border-border/50">
                                        <CheckCircle2 className="text-orange-500 mb-4 h-8 w-8" />
                                        <p className="text-sm font-medium leading-relaxed">{text}</p>
                                    </div>
                                ))}
                            </div>

                            <Link to="/contact?type=marketer">
                                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 rounded-xl text-lg shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse">
                                    INITIATE HUNTER APPLICATION
                                </Button>
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>

                {/* 06. FAQ */}
                <AnimatedSection>
                    <div className="max-w-3xl mx-auto">
                        <span className="text-sm font-mono text-primary mb-4 block text-center">06. FAQ</span>
                        <h2 className="text-section mb-12 text-center">Operational Logic</h2>

                        <div className="space-y-8">
                            {[
                                {
                                    q: "How do I track my sales?",
                                    a: "Hunters are assigned to our Head of Client Acquisition, whereby you will forward the brief, what exactly our client requires from us and once the deposit is paid, you will receive your 20% commission on the sale."
                                },
                                {
                                    q: "What is the \"Catalog-Mode\" philosophy?",
                                    a: "We reject complexity. We focus on Desire, not Logistics. We build the frontend experience; the client handles sales via WhatsApp, Stripe Links, or DM. This keeps the site lightweight and maintenance-free."
                                },
                                {
                                    q: "Why AlphaFrame?",
                                    a: "Because we usually design for Deep-Tech ventures. We bring that same level of \"Visual Authority\" to the personal brand market."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-card/20 p-8 rounded-2xl border border-border hover:bg-card/40 transition-colors">
                                    <h3 className="font-bold text-lg mb-3 flex items-start gap-3">
                                        <Info className="shrink-0 mt-1 text-primary h-5 w-5" />
                                        {item.q}
                                    </h3>
                                    <p className="text-muted-foreground pl-8 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default HunterProgram;
