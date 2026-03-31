import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services/audit', label: 'Audit' },
    { href: '/audit-portfolio', label: 'Portfolio' },
    { href: '/protocol', label: 'Protocol' },
    { href: '/hunter-program', label: 'Hunter Program', isBlue: true },
    { href: '/for-creators', label: 'For Creators' },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8 px-6 py-2 cyber-glass">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              to={item.href} 
              className={`text-sm font-medium transition-colors ${item.isBlue ? 'text-foreground/90 hover:text-primary-blue' : 'text-foreground/90 hover:text-primary-orange'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link to="/contact" className="bg-foreground text-background px-5 py-2 rounded-md text-sm font-medium hover:bg-primary-orange hover:text-white transition-all flex items-center gap-2 group">
            Start Project
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white cyber-glass rounded-lg"
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
          className="md:hidden absolute top-20 left-6 right-6 cyber-glass p-6 rounded-2xl pointer-events-auto"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-lg font-medium transition-colors py-1 ${item.isBlue ? 'text-foreground/90 hover:text-primary-blue' : 'text-foreground/90 hover:text-primary-orange'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 bg-foreground text-background px-5 py-3 rounded-md text-center text-sm font-medium hover:bg-primary-orange hover:text-white transition-all flex items-center justify-center gap-2 group">
              Start Project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};