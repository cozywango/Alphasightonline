import { AnimatedSection } from '@/components/AnimatedSection';
import { GradientButton } from '@/components/ui/gradient-button';
import OrderModal from '@/components/OrderModal';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ForCreators = () => {
  const [selectedTier, setSelectedTier] = useState<{ tierName: string; basePrice: number; hostingLabel: string; tierId: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApply = (tierName: string, basePrice: number, hostingLabel: string, tierId: string) => {
    setSelectedTier({ tierName, basePrice, hostingLabel, tierId });
    setIsModalOpen(true);
  };

  const creatorTiers = [
    { name: 'Tier One. Bio-Link', desc: 'Single long-scroll page', price: '$250', basePrice: 250, tierId: 'bio-link', features: ['Bio and social links', 'One featured image or video', 'Contact button'], hosting: false, hostingLabel: '', product: 'Creator Tier 1' },
    { name: 'Tier Two. Portfolio', desc: 'Home, About, and Work pages', price: '$750', basePrice: 750, tierId: 'portfolio', features: ['Ten-item gallery', 'Downloadable CV or media kit', 'Mobile optimized'], hosting: false, hostingLabel: '', product: 'Creator Tier 2' },
    { name: 'Tier Three. Content Hub', desc: 'Home plus blog or newsletter', price: '$1,350', basePrice: 1350, tierId: 'content-hub', features: ['Dynamic content feed', 'Email capture', 'Mobile and desktop optimized'], hosting: true, hostingLabel: '+ $25/mo Hosting', product: 'Creator Tier 3' },
    { name: 'Tier Four. Icon', desc: 'Five-page personal site', price: '$2,200', basePrice: 2200, tierId: 'icon', features: ['Motion effects', 'Press and media section', 'Custom domain setup'], hosting: true, hostingLabel: '', product: 'Creator Tier 4' },
  ];

  const businessTiers = [
    { name: 'Tier One. The Card', desc: 'Single landing page', price: '$300', basePrice: 300, tierId: 'the-card', features: ['Business details and map', 'WhatsApp contact button', 'Hero image'], hosting: false, hostingLabel: '', product: 'Business Tier 1' },
    { name: 'Tier Two. The Catalog', desc: 'Product gallery up to twenty items', price: '$1,800', basePrice: 1800, tierId: 'the-catalog', features: ['Categorized layouts', 'Product detail pop-ups', 'Direct-to-message buttons'], hosting: false, hostingLabel: '', product: 'Business Tier 2' },
    { name: 'Tier Three. The Firm', desc: 'Service menus and pricing', price: '$2,400', basePrice: 2400, tierId: 'the-firm', features: ['Team profiles & Client testimonials', 'Booking link integration', 'Mobile and desktop optimized'], hosting: true, hostingLabel: '', product: 'Business Tier 3' },
    { name: 'Tier Four. Enterprise Lite', desc: 'Multi-page structure', price: '$4,500', basePrice: 4500, tierId: 'enterprise-lite', features: ['Advanced motion visuals', 'Case studies', 'Competitor visual audit'], hosting: true, hostingLabel: '', product: 'Business Tier 4' },
  ];

  return (
    <div className="min-h-screen py-16">
      <OrderModal
        tierName={selectedTier?.tierName ?? ''}
        basePrice={selectedTier?.basePrice ?? 0}
        hostingLabel={selectedTier?.hostingLabel}
        tierId={selectedTier?.tierId ?? ''}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />

      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-hero mb-4">
              Don't Just Post. <span className="text-gradient-orange">Publish.</span>
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto mb-6">
              Alphasight Online builds high-performance, Catalog-Mode websites for creators and businesses who want lasting visual authority.
            </p>
            <p className="text-lg text-muted-foreground">
              We bring deep-tech design discipline to personal brands and commercial catalogs.
            </p>
          </div>
        </AnimatedSection>

        {/* What We Believe */}
        <AnimatedSection>
          <div className="glass-card rounded-3xl p-10 mb-16">
            <h2 className="bracket-title mb-6">What We Believe</h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4 mb-8">
              <p>Social platforms do not belong to you.<br />Algorithms change. Reach disappears.</p>
              <p className="text-gradient-orange font-semibold text-xl">A website is permanent.</p>
              <p>Alphasight Online builds owned digital assets designed to outlast platforms and trends.</p>
              <p>We do not use generic templates. We apply the same visual psychology used in venture-backed deep-tech companies, adapted for creators and businesses.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { title: 'Speed', desc: 'Sites delivered in days, not months.' },
                { title: 'Polish', desc: 'Enterprise-grade design built to signal credibility.' },
                { title: 'Simplicity', desc: 'Frontend-only architecture. No plugins. No fragile systems.' },
              ].map((item, i) => (
                <div key={i} className={`glass-card ${i === 1 ? 'glass-card-blue' : ''} p-6 rounded-xl`}>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Catalog Mode Standard */}
        <AnimatedSection>
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="bracket-title mb-6">The Catalog-Mode Standard</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We do not build shopping carts. <span className="text-gradient-orange font-medium">We build showcases.</span>
            </p>
            <p className="text-muted-foreground mb-12">
              Your site creates desire. You close sales through WhatsApp, direct messages, or external payment links.
              This keeps everything fast, reliable, and maintenance-free.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { title: 'Zero transaction fees', desc: 'We never touch your revenue.' },
                { title: 'Visual-first', desc: 'Your work appears like a curated gallery, not a storefront.' },
                { title: 'Mobile-native', desc: 'Designed for link-in-bio traffic and small screens first.' },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl">
                  <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Creator Series Pricing */}
        <AnimatedSection>
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="bracket-title mb-4">Creator Series</h2>
              <p className="text-muted-foreground">Built for creators, influencers, artists, and personal brands.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {creatorTiers.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="glass-card rounded-2xl p-8 group hover:border-primary/30 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground">{tier.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-gradient-orange font-mono">{tier.price}</span>
                      {tier.hostingLabel && (
                        <div className="text-xs text-primary/60 font-mono mt-1">{tier.hostingLabel}</div>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                    {tier.features.map((f, j) => (
                      <li key={j}>• {f}</li>
                    ))}
                    <li className={tier.hosting ? 'text-primary/70 font-medium' : 'opacity-70 italic'}>
                      • Hosting {tier.hosting ? 'included' : 'not included'}
                    </li>
                  </ul>
                  <div onClick={() => handleApply(tier.name, tier.basePrice, tier.hostingLabel, tier.tierId)}>
                    <GradientButton className="w-full">Interested</GradientButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Business Series Pricing */}
        <AnimatedSection>
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="bracket-title mb-4">Business Series</h2>
              <p className="text-muted-foreground">Built for agencies, retailers, and service-based companies.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {businessTiers.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="glass-card glass-card-blue rounded-2xl p-8 group hover:border-[#0094ff]/30 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground">{tier.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-gradient-blue font-mono">{tier.price}</span>
                      {tier.hostingLabel && (
                        <div className="text-xs text-[#0094ff]/60 font-mono mt-1">{tier.hostingLabel}</div>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                    {tier.features.map((f, j) => (
                      <li key={j}>• {f}</li>
                    ))}
                    <li className={tier.hosting ? 'text-[#0094ff]/70 font-medium' : 'opacity-70 italic'}>
                      • Hosting {tier.hosting ? 'included' : 'not included'}
                    </li>
                  </ul>
                  <div onClick={() => handleApply(tier.name, tier.basePrice, tier.hostingLabel, tier.tierId)}>
                    <GradientButton className="w-full">Interested</GradientButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Process */}
        <AnimatedSection>
          <div className="mb-24 max-w-4xl mx-auto">
            <h2 className="bracket-title mb-12">How the Alphasight Process Works</h2>
            <div className="grid md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 light-trail-orange -translate-y-1/2 z-0" />
              {[
                { step: '01', title: 'Brief', desc: 'You complete a structured visual questionnaire.' },
                { step: '02', title: 'Build', desc: 'We construct your site using Alphasight visual systems.' },
                { step: '03', title: 'Review', desc: 'One round of focused revisions.' },
                { step: '04', title: 'Handover', desc: 'Full ownership transfers to you.' },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-xl relative z-10">
                  <div className="glow-badge mb-4 text-sm">{item.step}</div>
                  <div className="text-primary font-bold mb-2">{item.title}</div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-24">
            <h2 className="bracket-title mb-12">FAQ</h2>
            <div className="space-y-6">
              {[
                { q: 'Payments', a: 'We do not process payments. Buttons link to Stripe links, PayPal, WhatsApp Business, or direct messages. This keeps your site lightweight and secure.' },
                { q: 'Hosting', a: 'We build on modern platforms such as Framer, Webflow, or Vercel. Hosting usually costs between zero and twenty dollars per month, paid directly to the provider.' },
                { q: 'Why Alphasight Online', a: 'We design for quantum computing and biotech companies under investor scrutiny. We apply the same clarity, precision, and speed to creators and businesses.' },
                { q: 'Custom Domains', a: 'We assist with domain registration and setup. Typical cost ranges from twenty to one hundred dollars depending on availability and extension. Domain setup can be included during onboarding for any tier.' },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-2xl p-8">
                  <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  )
}

export default ForCreators;
