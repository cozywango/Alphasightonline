import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, Zap } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Link, useNavigate } from 'react-router-dom';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import ShaderBackground from '@/components/ui/shader-background';

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

import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const username = user?.user_metadata?.username;

	const handleAuthCheck = (e: React.MouseEvent) => {
		if (!user) {
			e.preventDefault();
			navigate('/auth');
		}
	};

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
				{/* Insert shader only for this hero area (absolute and behind content) */}
				{/* Shader sits at z-0 so we can layer a dimming overlay behind or above it if needed */}
				<ShaderBackground className="absolute inset-0 h-full w-full z-0 pointer-events-none" />

				{/* Background Gradient layers moved behind the shader (negative z) */}
				<div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-background" />
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_hsl(24_100%_50%/0.1)_0%,_transparent_50%)]" />

				{/* Floating Elements */}
				<div className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
				<div
					className="absolute bottom-32 left-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float"
					style={{ animationDelay: '2s' }}
				/>

				<div className="container mx-auto px-6 text-center relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-4xl mx-auto"
					>
						{username ? (
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								className="mb-4"
							>
								<span className="text-xl md:text-2xl font-medium text-primary">
									Welcome {username}
								</span>
							</motion.div>
						) : null}
						<h1 className="text-hero mb-8">
							Engineering Brilliance, <br />
							<span className="text-primary">Made Visible.</span>
						</h1>
						<p className="text-subtitle max-w-2xl mx-auto mb-12">
							Technical genius is often invisible. We deploy the Black Box Protocol to translate dense data into "Fortune 500" grade visual assets in 48 hours.
						</p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.6 }}
							className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						>
							<div className="relative inline-block">
								<GlowingEffect disabled={false} glow className="pointer-events-none rounded-md" />
								<Link to="/contact" className="relative z-10 inline-block" onClick={handleAuthCheck}>
									<GradientButton className="group">
										Deep tech, shown clearly
										<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
									</GradientButton>
								</Link>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* What We Do Section */}
			<section className="py-24 bg-card/10">
				<div className="container mx-auto px-6 max-w-4xl text-center">
					<AnimatedSection>
						<h2 className="text-section mb-6">What We Do</h2>
						<h3 className="text-2xl md:text-3xl font-medium mb-6">
							AlphaFrame converts raw technical material into visual authority.
						</h3>
						<p className="text-muted-foreground text-lg mb-4">
							We take what you have already built and present it in a way that signals competence, confidence, and scale.
						</p>
						<p className="text-primary font-medium">No hype. No oversimplification.</p>
					</AnimatedSection>
				</div>
			</section>

			{/* Who This Is For */}
			<section className="py-24">
				<div className="container mx-auto px-6 max-w-4xl">
					<AnimatedSection>
						<h2 className="text-section mb-12 text-center">Who This Is For</h2>
						<div className="grid md:grid-cols-2 gap-12 items-center">
							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="bg-primary/10 p-3 rounded-lg">
										<Target className="text-primary" size={24} />
									</div>
									<div>
										<h4 className="text-xl font-bold mb-2">Founders building complex products.</h4>
										<p className="text-muted-foreground">Deep-tech, climate, infrastructure, AI, hardware.</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<div className="bg-accent/10 p-3 rounded-lg">
										<Zap className="text-accent" size={24} />
									</div>
									<div>
										<h4 className="text-xl font-bold mb-2">Teams raising capital.</h4>
										<p className="text-muted-foreground">Or preparing for serious investor scrutiny.</p>
									</div>
								</div>
							</div>
							<div className="bg-card/20 p-8 rounded-2xl border border-border text-center">
								<p className="text-xl font-medium italic">
									"If your work sounds impressive but looks confusing, this fits."
								</p>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</section>

			{/* The Problem & Outcome */}
			<section className="py-32 bg-card/30">
				<div className="container mx-auto px-6">
					<div className="grid lg:grid-cols-2 gap-16">
						<AnimatedSection>
							<h2 className="text-section mb-8">The Problem</h2>
							<div className="space-y-6 text-lg">
								<p>
									<span className="font-bold text-primary">Investors do not study. They scan.</span>
								</p>
								<p className="text-muted-foreground">
									Dense decks, whitepapers, and technical language signal risk when presented poorly.
								</p>
								<p className="text-muted-foreground">
									Strong products lose funding because their visuals fail to communicate trust.
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<h2 className="text-section mb-8">The Outcome</h2>
							<div className="space-y-6">
								<ul className="space-y-4">
									<li className="flex items-center gap-3 text-xl">
										<Eye className="text-primary" /> Clear visuals.
									</li>
									<li className="flex items-center gap-3 text-xl">
										<Zap className="text-primary" /> Faster understanding.
									</li>
									<li className="flex items-center gap-3 text-xl">
										<Target className="text-primary" /> Stronger investor confidence.
									</li>
								</ul>
								<p className="text-xl font-medium pt-4">Your product speaks for itself.</p>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* How AlphaFrame Works */}
			<section className="py-32">
				<div className="container mx-auto px-6">
					<AnimatedSection className="text-center mb-20">
						<h2 className="text-section mb-6">How AlphaFrame Works</h2>
					</AnimatedSection>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Step 1 */}
						<AnimatedSection delay={0.1}>
							<div className="h-full bg-card/40 border border-border p-8 rounded-2xl">
								<div className="text-primary text-sm font-mono mb-4">STEP ONE</div>
								<h3 className="text-2xl font-bold mb-4">Narrative Audit</h3>
								<p className="text-muted-foreground mb-6">
									We review your current materials and your competitive landscape.
								</p>
								<div className="space-y-2 text-sm text-muted-foreground">
									<p>• What confuses investors</p>
									<p>• Where attention drops</p>
									<p>• Which visual signals weaken trust</p>
								</div>
							</div>
						</AnimatedSection>

						{/* Step 2 */}
						<AnimatedSection delay={0.2}>
							<div className="h-full bg-card/40 border border-border p-8 rounded-2xl">
								<div className="text-primary text-sm font-mono mb-4">STEP TWO</div>
								<h3 className="text-2xl font-bold mb-4">Investor-Grade Visuals</h3>
								<p className="text-muted-foreground mb-6">
									We convert your technical content into high-fidelity deliverables.
								</p>
								<div className="space-y-2 text-sm text-muted-foreground">
									<p>• Visual narratives from patents</p>
									<p>• Psychological deck redesigns</p>
									<p>• Cinematic visual loops</p>
								</div>
							</div>
						</AnimatedSection>

						{/* Step 3 */}
						<AnimatedSection delay={0.3}>
							<div className="h-full bg-card/40 border border-border p-8 rounded-2xl">
								<div className="text-primary text-sm font-mono mb-4">STEP THREE (OPTIONAL)</div>
								<h3 className="text-2xl font-bold mb-4">Authority Execution</h3>
								<p className="text-muted-foreground mb-6">For founders who prefer distance.</p>
								<div className="space-y-2 text-sm text-muted-foreground">
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
			<section className="py-32 bg-card/20">
				<div className="container mx-auto px-6">
					<AnimatedSection className="text-center mb-20">
						<h2 className="text-section mb-6">Core Engagements</h2>
					</AnimatedSection>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{products.map((product, index) => (
							<ProductCard
								key={product.name}
								name={product.name}
								description={product.description}
								href={product.href}
								index={index}
								onClick={handleAuthCheck}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Why AlphaFrame Exists (Vision) */}
			<section className="py-24">
				<div className="container mx-auto px-6 text-center max-w-3xl">
					<AnimatedSection>
						<h2 className="text-section mb-8">Why AlphaFrame Exists</h2>
						<h3 className="text-3xl md:text-4xl font-bold mb-8">
							Brilliant work disappears in visual noise.
						</h3>
						<p className="text-xl text-muted-foreground">
							We remove friction between intelligence and trust.
						</p>
					</AnimatedSection>
				</div>
			</section>

			{/* Proof (Stats) */}
			<AnimatedSection className="py-24 border-y border-border bg-card/20">
				<div className="container mx-auto px-6">
					<h2 className="text-section text-center mb-12">Proof</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
						{stats.map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.5 }}
								className="text-center"
							>
								<div className="text-4xl md:text-5xl font-bold text-primary mb-2">
									{stat.value}
								</div>
								<div className="text-muted-foreground font-medium">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</AnimatedSection>

			{/* Capacity (CTA) */}
			<section className="py-32">
				<div className="container mx-auto px-6">
					<AnimatedSection>
						<div className="text-center bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-16 rounded-3xl border border-border">
							<h2 className="text-section mb-6">Capacity</h2>
							<p className="text-subtitle max-w-2xl mx-auto mb-12">
								We onboard two founders per month.
								<br className="hidden sm:block" /> Quality stays absolute.
							</p>

							<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
								<Link to="/contact" onClick={handleAuthCheck}>
									<Button
										size="lg"
										className="bg-primary text-primary-foreground hover:bg-primary/90 animate-glow-pulse"
									>
										Apply to Enter AlphaFrame
									</Button>
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