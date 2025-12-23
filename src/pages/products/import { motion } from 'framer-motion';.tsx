import { motion } from 'framer-motion';
import { Users, Calendar, BarChart, Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';

const features = [
	{
		icon: Users,
		title: 'Customer Relationship Management',
		description:
			'Complete CRM system with contact management, lead tracking, and sales pipeline automation.',
	},
	{
		icon: Calendar,
		title: 'Project Management',
		description:
			'Comprehensive project planning, task management, and team collaboration tools.',
	},
	{
		icon: BarChart,
		title: 'Business Analytics',
		description:
			'Real-time business insights with customizable dashboards and automated reporting.',
	},
	{
		icon: Settings,
		title: 'Business Automation',
		description:
			'Workflow automation to streamline operations and reduce manual processes.',
	},
];

const Alpha = () => {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="py-32 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

				<div className="container mx-auto px-6 relative z-10">
					<div className="max-w-4xl mx-auto text-center">
						<AnimatedSection>
							<h1 className="text-hero mb-8">
								<span className="text-primary">Complete Business</span> Management
								Suite
							</h1>
							<p className="text-subtitle max-w-2xl mx-auto mb-12">
								Core business management platform with integrated CRM, project
								management, and analytics tools designed for growing African
								businesses.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button
									size="lg"
									className="bg-primary text-primary-foreground hover:bg-primary/90"
								>
									Start Free Trial
									<ArrowRight className="ml-2" size={20} />
								</Button>
								<Button
									variant="outline"
									size="lg"
									className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
								>
									Watch Demo
								</Button>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Features Overview */}
			<section className="py-32 bg-card/20">
				<div className="container mx-auto px-6">
					<AnimatedSection>
						<div className="text-center mb-16">
							<h2 className="text-section mb-6">Everything You Need to Scale</h2>
							<p className="text-subtitle max-w-2xl mx-auto">
								Alpha brings together all essential business tools in one integrated
								platform.
							</p>
						</div>
					</AnimatedSection>

					<div className="grid md:grid-cols-2 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.6 }}
								className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
							>
								<feature.icon
									className="text-primary mb-6 group-hover:scale-110 transition-transform"
									size={48}
								/>
								<h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
								<p className="text-muted-foreground leading-relaxed">
									{feature.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CRM Focus Section */}
			<section className="py-32">
				<div className="container mx-auto px-6">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<AnimatedSection>
							<h2 className="text-section mb-8">CRM That Works for Africa</h2>
							<div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
								<p>
									Alpha's CRM is built to handle the complexity of African business
									relationships - from multi-location companies to family businesses
									with extended networks.
								</p>
								<p>
									Track leads across multiple channels, manage customer relationships
									in local languages, and automate follow-ups based on cultural
									preferences and business customs.
								</p>
							</div>

							<div className="mt-12 space-y-4">
								<div className="flex items-center space-x-4">
									<div className="w-2 h-2 bg-primary rounded-full" />
									<span>Multi-language contact management</span>
								</div>
								<div className="flex items-center space-x-4">
									<div className="w-2 h-2 bg-primary rounded-full" />
									<span>Mobile-first lead capture</span>
								</div>
								<div className="flex items-center space-x-4">
									<div className="w-2 h-2 bg-primary rounded-full" />
									<span>
										Integration with popular African communication tools
									</span>
								</div>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<div className="bg-card p-8 rounded-3xl border border-border">
								<h3 className="text-2xl font-bold mb-8 text-center">
									CRM Dashboard
								</h3>

								{/* Mock CRM Interface */}
								<div className="space-y-4">
									<div className="bg-background p-4 rounded-xl">
										<div className="flex justify-between items-center mb-2">
											<span className="font-medium">Active Leads</span>
											<span className="text-2xl font-bold text-primary">
												847
											</span>
										</div>
										<div className="w-full bg-muted rounded-full h-2">
											<div className="bg-primary h-2 rounded-full w-[73%]" />
										</div>
									</div>

									<div className="grid grid-cols-3 gap-4">
										<div className="bg-background p-4 rounded-xl text-center">
											<div className="text-sm text-muted-foreground mb-1">
												New
											</div>
											<div className="text-xl font-bold text-primary">
												124
											</div>
										</div>
										<div className="bg-background p-4 rounded-xl text-center">
											<div className="text-sm text-muted-foreground mb-1">
												Qualified
											</div>
											<div className="text-xl font-bold text-accent-foreground">
												89
											</div>
										</div>
										<div className="bg-background p-4 rounded-xl text-center">
											<div className="text-sm text-muted-foreground mb-1">
												Closed
											</div>
											<div className="text-xl font-bold text-primary">
												42
											</div>
										</div>
									</div>

									<div className="bg-background p-4 rounded-xl">
										<h4 className="font-medium mb-3">Recent Activities</h4>
										<div className="space-y-2 text-sm">
											<div className="flex justify-between">
												<span>Call with Acme Corp</span>
												<span className="text-muted-foreground">
													2 hours ago
												</span>
											</div>
											<div className="flex justify-between">
												<span>Email to Tech Solutions Ltd</span>
												<span className="text-muted-foreground">
													5 hours ago
												</span>
											</div>
											<div className="flex justify-between">
												<span>Meeting scheduled</span>
												<span className="text-muted-foreground">
													Yesterday
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Integration Showcase */}
			<section className="py-32 bg-gradient-to-br from-accent/10 via-background to-primary/10">
				<div className="container mx-auto px-6">
					<AnimatedSection>
						<div className="text-center mb-16">
							<h2 className="text-section mb-6">Built to Integrate</h2>
							<p className="text-subtitle max-w-2xl mx-auto">
								Alpha seamlessly connects with the tools your business already uses.
							</p>
						</div>
					</AnimatedSection>

					<div className="grid md:grid-cols-3 gap-8">
						<AnimatedSection>
							<div className="bg-card p-8 rounded-2xl border border-border text-center">
								<div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
									<Users className="text-primary" size={32} />
								</div>
								<h3 className="text-xl font-bold mb-4">Communication</h3>
								<p className="text-muted-foreground">
									WhatsApp Business, Telegram, SMS platforms
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.1}>
							<div className="bg-card p-8 rounded-2xl border border-border text-center">
								<div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
									<BarChart className="text-primary" size={32} />
								</div>
								<h3 className="text-xl font-bold mb-4">Analytics</h3>
								<p className="text-muted-foreground">
									Google Analytics, Facebook Pixel, Custom tracking
								</p>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<div className="bg-card p-8 rounded-2xl border border-border text-center">
								<div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
									<Settings className="text-primary" size={32} />
								</div>
								<h3 className="text-xl font-bold mb-4">Business Tools</h3>
								<p className="text-muted-foreground">
									Accounting software, Payment gateways, Cloud storage
								</p>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-32">
				<div className="container mx-auto px-6">
					<AnimatedSection>
						<div className="text-center max-w-3xl mx-auto">
							<h2 className="text-section mb-8">
								Ready to Streamline Your Business?
							</h2>
							<p className="text-subtitle mb-12">
								Join thousands of African businesses using Alpha to manage customers,
								projects, and growth all in one place.
							</p>

							<div className="flex flex-col sm:flex-row gap-6 justify-center">
								<Button
									size="lg"
									className="bg-primary text-primary-foreground hover:bg-primary/90"
								>
									Start Free 14-Day Trial
								</Button>
								<Button
									variant="outline"
									size="lg"
									className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
								>
									Schedule Live Demo
								</Button>
							</div>

							<div className="mt-8 text-sm text-muted-foreground">
								Free trial includes full access • No setup fees • Cancel anytime
							</div>
						</div>
					</AnimatedSection>
				</div>
			</section>
		</div>
	);
};

export default Alpha;