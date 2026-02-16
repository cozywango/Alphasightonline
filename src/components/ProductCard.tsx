import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { FC } from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  href: string;
  index: number;
}

export const ProductCard: FC<ProductCardProps> = ({ name, description, href, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link to={href}>
        <div className="glass-card rounded-2xl p-8 relative overflow-hidden h-full">
          {/* Subtle inner glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">
                {name}
              </h3>
              <ArrowUpRight
                className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                size={24}
              />
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>

            {/* Bottom accent line */}
            <div className="mt-8 h-px bg-gradient-to-r from-primary/30 via-[#0094ff]/20 to-transparent" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};