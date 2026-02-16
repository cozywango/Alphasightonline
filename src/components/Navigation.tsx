import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ href: '/', label: 'Overview' },
		{ href: '/protocol', label: 'The Protocol' },
		{ href: '/hunter-program', label: 'The Hunter Program' },
		{ href: '/for-creators', label: 'For Creators' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' },
	];

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.06]"
			style={{ boxShadow: '0 1px 20px rgba(255, 138, 0, 0.03)' }}
		>
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<Link
						to="/"
						className="flex items-center text-2xl font-bold"
					>
						<img
							src="/logo.png"
							alt="Alphasight Online logo"
							className="h-8 w-auto mr-3"
						/>
						<span className="text-gradient-orange">Alphasight</span>
						<span className="text-foreground ml-1">Online</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.href}
								to={item.href}
								className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
							>
								{item.label}
							</Link>
						))}
						<Link to="/audit-portfolio">
							<GradientButton size="sm" className="w-fit">Audit Portfolio</GradientButton>
						</Link>
					</div>

					{/* Mobile Menu Toggle */}
					<button
						className="md:hidden p-2 text-muted-foreground hover:text-foreground"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="md:hidden py-6 border-t border-white/[0.06]"
					>
						<div className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<Link
									key={item.href}
									to={item.href}
									className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-1"
									onClick={() => setIsOpen(false)}
								>
									{item.label}
								</Link>
							))}
							<Link to="/audit-portfolio" onClick={() => setIsOpen(false)}>
								<GradientButton size="sm" className="w-fit">Audit Portfolio</GradientButton>
							</Link>
						</div>
					</motion.div>
				)}
			</div>
		</nav>
	);
};