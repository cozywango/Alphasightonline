import React from 'react';
import AnimatedFolder from '@/components/ui/3d-folder';
import { AnimatedSection } from '@/components/AnimatedSection';

const portfolioData = [
	{
		title: 'Visual Authority',
		gradient: 'linear-gradient(135deg, #e73827, #f85032)',
		projects: [
			{
				id: 'b1',
				image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
				title: 'Lumnia Identity',
			},
			{
				id: 'b2',
				image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
				title: 'Prism Collective',
			},
			{
				id: 'b3',
				image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800',
				title: 'Vertex Studio',
			},
		],
	},
	{
		title: 'Web Design',
		gradient: 'linear-gradient(to right, #f7b733, #fc4a1a)',
		projects: [
			{
				id: 'w1',
				image: '/laylamumo.png',
				title: 'Tier 1 Creator Website',
				link: 'https://layla-mumo-bio.vercel.app/',
			},
			{
				id: 'w4',
				image: '/zuritier2.png',
				title: 'Tier 2 Creator Website',
				link: 'https://zuritier2.vercel.app/',
			},
			{
				id: 'w5',
				image: '/davidtier3.png',
				title: 'Tier 3 Creator Website',
				link: 'https://danieltier3.vercel.app/',
			},
			{
				id: 'w3',
				image: '/niatier4.png',
				title: 'Tier 4 Creator Website',
				link: 'https://niatier4creator.vercel.app/',
			},
			{
				id: 'w2',
				image: '/TierFour Agency.png',
				title: 'Tier 1 Business Website',
				link: 'https://tierfour-agency.vercel.app/',
			},
			{
				id: 'w6',
				image: '/businesstier2.png',
				title: 'Tier 2 Business Website',
				link: 'https://azuretier2.vercel.app/',
			},
			{
				id: 'w7',
				image: '/businesstier3.png',
				title: 'Tier 3 Business Website',
				link: 'https://stratumtier3.vercel.app/',
			},
			{
				id: 'w8',
				image: '/businesstier4.png',
				title: 'Tier 4 Business Website',
				link: 'https://vantagepoint-theta.vercel.app/',
			},
		],
	},
	{
		title: 'Brands',
		gradient: 'linear-gradient(to right, #11998e, #38ef7d)',
		projects: [
			{
				id: 'br1',
				image: '/howcuteisthis.png',
				title: 'How Cute Is This',
				description: 'This is a Tier 3 business catalogue website built for How Cute Is This, a Nairobi-based perfume store seeking a permanent online home for their products. The site features WhatsApp integration for direct customer communication, a responsive cart experience, and clean, high-quality styling that adapts seamlessly across devices.',
				link: 'https://howcuteisthis.vercel.app/',
			},
			{
				id: 'br2',
				image: '/hskenya.png',
				title: 'Horological Society of Kenya',
				description: 'The Horological Society of Kenya presents a refined, invitation-only digital space dedicated to serious collectors of exceptional mechanical timepieces. The site reflects a business tier 4 website standard, combining editorial depth, private membership access, and a high-end visual identity rooted in precision and heritage. Every detail signals discretion, authority, and a curated approach to horology tailored for a discerning audience.',
				link: 'https://hskenya.vercel.app/',
			},
		],
	},
];

const AuditPortfolioPage = () => {
	return (
		<div className="min-h-screen py-24">
			<div className="container mx-auto px-6">
				<AnimatedSection>
					<h1 className="text-hero mb-6">Audit Portfolio</h1>
					<p className="text-muted-foreground mb-12">A curated selection of recent work.</p>
				</AnimatedSection>

				<div className="grid md:grid-cols-2 gap-8">
					{portfolioData.map((group) => (
						<AnimatedFolder key={group.title} title={group.title} gradient={group.gradient} projects={group.projects} />
					))}
				</div>
			</div>
		</div>
	);
};

export default AuditPortfolioPage;
