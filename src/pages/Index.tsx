import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, Zap } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '@/components/ui/animated-shader-hero';

const products = [
	{
		name: 'The Authority Retainer',
		description:
			'A monthly partnership for founders shaping perception while raising capital. Includes ongoing narrative audits, continuous visual production, and pitch deck refinement.',
		href: '/services/retainer',
	},
	{
		name: 'The Black Box Protocol',
		description:
			'For teams with heavy technical documentation. We convert whitepapers and patents into investor-ready visual narratives and board-level clarity.',
		href: '/protocol',
	},
	{
		name: 'The Hunter Program',
		description:
			'High-performance websites built for clarity and conversion. Two tracks: Creator Series and Business Series. Fast. Focused. Built to sell.',
		href: '/hunter-program',
	},
];

const stats = [
	{ value: '$50M+', label: 'Capital Influenced' },
	{ value: '3 Days', label: 'Average Turnaround' },
	{ value: 'Available', label: 'Faceless Execution' },
];

const Index = () => {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen">
			{/* Hero Section — PRESERVED */}
			<Hero
				headline={{
					line1: "Engineering Brilliance,",
					line2: "Made Visible."
				}}
				subtitle='Technical genius is often invisible. We deploy the Black Box Protocol to translate dense data into "Fortune 500" grade visual assets in 48 hours.'
				buttons={{
					primary: {
						text: "Deep tech, shown clearly",
						onClick: () => navigate('/contact'),
					},
				}}
			/>

			{/* What We Do Section */}
			<section className="py-28 relative">
				<div className="light-trail mb-20" />
				<div className="container mx-auto px-6 max-w-4xl text-center">
					<AnimatedSection>
						<h2 className="bracket-title mb-8">What We Do</h2>
						<h3 className="text-2xl md:text-3xl font-medium mb-6 text-foreground">
							Alphasight Online converts raw technical material into visual authority.
						</h3>
						<p className="text-muted-foreground text-lg mb-4">
							We take what you have already built and present it in a way that signals competence, confidence, and scale.
						</p>
						<p className="text-gradient-orange font-semibold text-lg">No hype. No oversimplification.</p>
					</AnimatedSection>
				</div>
			</section>

			{/* Who This Is For */}
			<section className="py-28 relative">
				<div className="container mx-auto px-6 max-w-5xl">
					<AnimatedSection>
						<h2 className="bracket-title mb-16">Who This Is For</h2>
						<div className="grid md:grid-cols-2 gap-8 items-stretch">
							{/* Cards */}
							<div className="space-y-6">
								<div className="glass-card rounded-2xl p-8 flex items-start gap-5">
									<div className="glow-badge shrink-0">
										<Target size={24} />
									</div>
									<div>
										<h4 className="text-xl font-bold mb-2">Founders building complex products.</h4>
										<p className="text-muted-foreground">Deep-tech, climate, infrastructure, AI, hardware.</p>
									</div>
								</div>
								<div className="glass-card glass-card-blue rounded-2xl p-8 flex items-start gap-5">
									<div className="glow-badge-blue shrink-0">
										<Zap size={24} />
									</div>
									<div>
										<h4 className="text-xl font-bold mb-2">Teams raising capital.</h4>
										<p className="text-muted-foreground">Or preparing for serious investor scrutiny.</p>
									</div>
								</div>
							</div>

							{/* Quote card */}
							<div className="glass-card glow-orange rounded-2xl p-10 flex items-center justify-center">
								<p className="text-xl md:text-2xl font-medium italic text-center leading-relaxed">
									"If your work sounds impressive but looks confusing, this fits."
								</p>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* The Problem & Outcome */}
			<section className="py-28 relative">
				<div className="light-trail mb-20" />
				<div className="container mx-auto px-6">
					<div className="grid lg:grid-cols-2 gap-8">
						<AnimatedSection>
							<div className="glass-card rounded-2xl p-10 md:p-12 h-full">
								<h2 className="text-section mb-8">The Problem</h2>
								<div className="space-y-6 text-lg">
									<p>
										<span className="font-bold text-gradient-orange">Investors do not study. They scan.</span>
									</p>
									<p className="text-muted-foreground">
										Dense decks, whitepapers, and technical language signal risk when presented poorly.
									</p>
									<p className="text-muted-foreground">
										Strong products lose funding because their visuals fail to communicate trust.
									</p>
								</div>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<div className="glass-card glass-card-blue rounded-2xl p-10 md:p-12 h-full">
								<h2 className="text-section mb-8">The Outcome</h2>
								<div className="space-y-6">
									<ul className="space-y-5">
										<li className="flex items-center gap-4 text-xl">
											<div className="glow-badge shrink-0 w-10 h-10 text-sm">
												<Eye size={20} />
											</div>
											Clear visuals.
										</li>
										<li className="flex items-center gap-4 text-xl">
											<div className="glow-badge shrink-0 w-10 h-10 text-sm">
												<Zap size={20} />
											</div>
											Faster understanding.
										</li>
										<li className="flex items-center gap-4 text-xl">
											<div className="glow-badge shrink-0 w-10 h-10 text-sm">
												<Target size={20} />
											</div>
											Stronger investor confidence.
										</li>
									</ul>
									<p className="text-xl font-medium pt-4 text-gradient-blue">Your product speaks for itself.</p>
								</div>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* How Alphasight Online Works */}
			<section className="py-28 relative">
				<div className="container mx-auto px-6">
					<AnimatedSection className="text-center mb-16">
						<h2 className="bracket-title mb-6">How Alphasight Online Works</h2>
					</AnimatedSection>

					<div className="grid md:grid-cols-3 gap-6 relative">
						{/* Connecting light trail behind cards */}
						<div className="hidden md:block absolute top-1/2 left-0 right-0 light-trail-orange -translate-y-1/2 z-0" />

						{/* Step 1 */}
						<AnimatedSection delay={0.1}>
							<div className="glass-card rounded-2xl p-8 h-full relative z-10">
								<div className="glow-badge mb-6">01</div>
								<h3 className="text-2xl font-bold mb-4">Narrative Audit</h3>
								<p className="text-muted-foreground mb-6">
									We review your current materials and your competitive landscape.
								</p>
								<div className="space-y-2 text-sm text-muted-foreground/80">
									<p>• What confuses investors</p>
									<p>• Where attention drops</p>
									<p>• Which visual signals weaken trust</p>
								</div>
							</div>
						</AnimatedSection>

						{/* Step 2 */}
						<AnimatedSection delay={0.2}>
							<div className="glass-card rounded-2xl p-8 h-full relative z-10">
								<div className="glow-badge mb-6">02</div>
								<h3 className="text-2xl font-bold mb-4">Investor-Grade Visuals</h3>
								<p className="text-muted-foreground mb-6">
									We convert your technical content into high-fidelity deliverables.
								</p>
								<div className="space-y-2 text-sm text-muted-foreground/80">
									<p>• Visual narratives from patents</p>
									<p>• Psychological deck redesigns</p>
									<p>• Cinematic visual loops</p>
								</div>
							</div>
						</AnimatedSection>

						{/* Step 3 */}
						<AnimatedSection delay={0.3}>
							<div className="glass-card rounded-2xl p-8 h-full relative z-10">
								<div className="glow-badge-blue mb-6">03</div>
								<h3 className="text-2xl font-bold mb-4">Authority Execution</h3>
								<p className="text-muted-foreground mb-6">For founders who prefer distance.</p>
								<div className="space-y-2 text-sm text-muted-foreground/80">
									<p>• Visual presence management</p>
									<p>• Authority on LinkedIn and X</p>
									<p>• No time drain on your side</p>
								</div>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Core Engagements (Products Section) */}
			<section className="py-28 relative">
				<div className="light-trail mb-20" />
				<div className="container mx-auto px-6">
					<AnimatedSection className="text-center mb-16">
						<h2 className="bracket-title mb-6">Core Engagements</h2>
					</AnimatedSection>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{products.map((product, index) => (
							<ProductCard
								key={product.name}
								name={product.name}
								description={product.description}
								href={product.href}
								index={index}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Why Alphasight Online Exists (Vision) */}
			<section className="py-28 relative overflow-hidden">
				<div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
					<AnimatedSection>
						<div className="glass-card glow-blue rounded-3xl p-12 md:p-16">
							<h2 className="text-section mb-8">Why Alphasight Online Exists</h2>
							<h3 className="text-3xl md:text-4xl font-bold mb-8 text-gradient-mixed">
								Brilliant work disappears in visual noise.
							</h3>
							<p className="text-xl text-muted-foreground">
								We remove friction between intelligence and trust.
							</p>
						</div>
					</AnimatedSection>
				</div>
				{/* Background glow */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(0,148,255,0.06)_0%,_transparent_70%)] pointer-events-none" />
			</section>

			{/* Proof (Stats) */}
			<section className="py-28 relative">
				<div className="light-trail mb-20" />
				<div className="container mx-auto px-6">
					<AnimatedSection>
						<h2 className="bracket-title mb-16">Proof</h2>
					</AnimatedSection>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
						{stats.map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.5 }}
								className="text-center glass-card rounded-2xl p-8 w-full"
							>
								<div className="text-4xl md:text-5xl font-bold text-gradient-orange mb-3">
									{stat.value}
								</div>
								<div className="text-muted-foreground font-medium">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Capacity (CTA) */}
			<section className="py-28 relative">
				<div className="container mx-auto px-6">
					<AnimatedSection>
						<div className="text-center glass-card glow-orange rounded-3xl p-12 md:p-16 relative overflow-hidden">
							{/* Background decoration */}
							<div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_rgba(255,138,0,0.08)_0%,_transparent_70%)] pointer-events-none" />
							<div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle,_rgba(0,148,255,0.06)_0%,_transparent_70%)] pointer-events-none" />

							<div className="relative z-10">
								<h2 className="text-section mb-6">Capacity</h2>
								<p className="text-subtitle max-w-2xl mx-auto mb-12">
									We onboard two founders per month.
									<br className="hidden sm:block" /> Quality stays absolute.
								</p>

								<Link to="/contact">
									<GradientButton className="group">
										Apply to Enter Alphasight Online
										<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
									</GradientButton>
								</Link>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</section>
		</div>
	);
};

export default Index;