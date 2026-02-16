import { Link } from 'react-router-dom';
import { Twitter } from 'lucide-react';

export const Footer = () => {
    const navSections = [
        {
            title: 'Services',
            links: [
                { label: 'Narrative Audit', href: '/services/audit' },
                { label: 'Deep Dives', href: '/services/deep-dives' },
                { label: 'Cinematic', href: '/services/cinematic' },
                { label: 'Decks', href: '/services/decks' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About', href: '/about' },
                { label: 'Protocol', href: '/protocol' },
                { label: 'For Creators', href: '/for-creators' },
                { label: 'Contact', href: '/contact' },
            ],
        },
        {
            title: 'Programs',
            links: [
                { label: 'Hunter Program', href: '/hunter-program' },
                { label: 'Audit Portfolio', href: '/audit-portfolio' },
                { label: 'Retainer', href: '/services/retainer' },
                { label: 'Ghost', href: '/services/ghost' },
            ],
        },
    ];

    return (
        <footer className="relative border-t border-white/[0.06] mt-20">
            {/* Top glow line */}
            <div className="light-trail" />

            <div className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-5 gap-12 mb-16">
                    {/* Logo section */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <span className="text-4xl md:text-5xl font-bold text-gradient-orange">
                                Alphasight
                            </span>
                            <span className="text-4xl md:text-5xl font-bold text-foreground ml-2">
                                Online
                            </span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm leading-relaxed">
                            Engineering rigor meets visual rigor. The administrative and strategic brain behind the Visual Authority engine.
                        </p>
                    </div>

                    {/* Nav sections */}
                    {navSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            to={link.href}
                                            className="text-muted-foreground/70 hover:text-foreground transition-colors duration-300 text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="light-trail-orange mb-8" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted-foreground/50 text-sm">
                        © {new Date().getFullYear()} Alphasight Online. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://x.com/alphasightke"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground/50 hover:text-primary transition-colors duration-300"
                        >
                            <Twitter size={18} />
                        </a>
                        <a
                            href="https://www.instagram.com/alphasightonline/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground/50 hover:text-primary transition-colors duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10z" />
                                <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zM17.5 6a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
