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

        {/* What We Believe - BENTO UI */}
        <AnimatedSection>
          <div className="mb-24">
            <h2 className="bracket-title mb-10 text-center">What We Believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
              {/* Large highlighted belief card */}
              <div className="md:col-span-2 glass-card rounded-3xl p-10 group hover:scale-[1.01] transition-transform duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-primary-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>Social platforms do not belong to you.<br />Algorithms change. Reach disappears.</p>
                  <p className="text-gradient-orange font-semibold text-2xl">A website is permanent.</p>
                  <p>Alphasight Online builds owned digital assets designed to outlast platforms and trends.</p>
                </div>
              </div>
              
              {/* Focus point card */}
              <div className="glass-card rounded-3xl p-10 group hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden flex items-center justify-center text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed">We do not use generic templates. We apply the same visual psychology used in venture-backed deep-tech companies, adapted for creators and businesses.</p>
                </div>
              </div>

              {/* Stats/Pillars cards */}
              {[
                { title: 'Speed', desc: 'Sites delivered in days, not months.', glow: 'orange' },
                { title: 'Polish', desc: 'Enterprise-grade design built to signal credibility.', glow: 'blue' },
                { title: 'Simplicity', desc: 'Frontend-only architecture. No plugins. No fragile systems.', glow: 'orange' },
              ].map((item, i) => (
                <div key={i} className={`glass-card p-8 rounded-2xl group hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-t from-primary-${item.glow}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`absolute -inset-[-1px] rounded-2xl border border-transparent group-hover:border-primary-${item.glow}/30 transition-colors duration-500 pointer-events-none`} />
                  <div className="relative z-10">
                    <h3 className="font-bold text-xl mb-3 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Catalog Mode Standard - BENTO UI */}
        <AnimatedSection>
          <div className="mb-24 max-w-5xl mx-auto">
            <h2 className="bracket-title mb-10 text-center">The Catalog-Mode Standard</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="md:col-span-3 glass-card rounded-3xl p-10 group hover:scale-[1.01] transition-all duration-500 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-2xl text-muted-foreground mb-6">
                  We do not build shopping carts. <span className="text-gradient-orange font-medium">We build showcases.</span>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Your site creates desire. You close sales through WhatsApp, direct messages, or external payment links.
                  This keeps everything fast, reliable, and maintenance-free.
                </p>
              </div>

              <div className="md:col-span-2 flex flex-col gap-6">
                {[
                  { title: 'Zero transaction fees', desc: 'We never touch your revenue.' },
                  { title: 'Visual-first', desc: 'Your work appears like a curated gallery, not a storefront.' },
                  { title: 'Mobile-native', desc: 'Designed for link-in-bio traffic and small screens first.' },
                ].map((item, i) => (
                  <div key={i} className={`glass-card p-6 rounded-2xl group hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden flex-1 flex flex-col justify-center`}>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-orange via-primary-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 pl-2">
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Creator Series Pricing - BENTO UI */}
        <AnimatedSection>
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="bracket-title mb-4">Creator Series</h2>
              <p className="text-muted-foreground">Built for creators, influencers, artists, and personal brands.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {creatorTiers.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`glass-card rounded-3xl p-8 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(255,138,0,0.15)] transition-all duration-500 relative flex flex-col justify-between ${i === 3 ? 'lg:col-span-2 lg:row-span-2 bg-gradient-to-b from-background to-primary-orange/5' : ''}`}
                >
                  <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-primary-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div>
                    <div className="flex flex-col mb-8">
                      <h3 className={`font-bold mb-2 ${i === 3 ? 'text-3xl' : 'text-xl'}`}>{tier.name}</h3>
                      <p className="text-sm text-muted-foreground">{tier.desc}</p>
                    </div>
                    
                    <div className="mb-8">
                      <span className={`font-bold text-gradient-orange font-mono ${i === 3 ? 'text-5xl' : 'text-3xl'}`}>{tier.price}</span>
                      {tier.hostingLabel && (
                        <div className="text-xs text-primary/60 font-mono mt-2">{tier.hostingLabel}</div>
                      )}
                    </div>

                    <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                      {tier.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-orange/50" /> {f}
                        </li>
                      ))}
                      <li className={`flex items-center gap-2 ${tier.hosting ? 'text-primary/70 font-medium' : 'opacity-70 italic'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${tier.hosting ? 'bg-primary-orange' : 'bg-muted-foreground/50'}`} />
                        Hosting {tier.hosting ? 'included' : 'not included'}
                      </li>
                    </ul>
                  </div>

                  <div onClick={() => handleApply(tier.name, tier.basePrice, tier.hostingLabel, tier.tierId)} className="mt-auto">
                    <GradientButton className="w-full">Interested</GradientButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Business Series Pricing - BENTO UI */}
        <AnimatedSection>
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="bracket-title mb-4">Business Series</h2>
              <p className="text-muted-foreground">Built for agencies, retailers, and service-based companies.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {businessTiers.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`glass-card glass-card-blue rounded-3xl p-8 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,148,255,0.15)] transition-all duration-500 relative flex flex-col justify-between ${i === 3 ? 'lg:col-span-2 lg:row-span-2 bg-gradient-to-b from-background to-[#0094ff]/5' : ''}`}
                >
                  <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-[#0094ff]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div>
                    <div className="flex flex-col mb-8">
                      <h3 className={`font-bold mb-2 ${i === 3 ? 'text-3xl' : 'text-xl'}`}>{tier.name}</h3>
                      <p className="text-sm text-muted-foreground">{tier.desc}</p>
                    </div>
                    
                    <div className="mb-8">
                      <span className={`font-bold text-gradient-blue font-mono ${i === 3 ? 'text-5xl' : 'text-3xl'}`}>{tier.price}</span>
                      {tier.hostingLabel && (
                        <div className="text-xs text-[#0094ff]/60 font-mono mt-2">{tier.hostingLabel}</div>
                      )}
                    </div>

                    <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                      {tier.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0094ff]/50" /> {f}
                        </li>
                      ))}
                      <li className={`flex items-center gap-2 ${tier.hosting ? 'text-[#0094ff]/70 font-medium' : 'opacity-70 italic'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${tier.hosting ? 'bg-[#0094ff]' : 'bg-muted-foreground/50'}`} />
                        Hosting {tier.hosting ? 'included' : 'not included'}
                      </li>
                    </ul>
                  </div>

                  <div onClick={() => handleApply(tier.name, tier.basePrice, tier.hostingLabel, tier.tierId)} className="mt-auto">
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
