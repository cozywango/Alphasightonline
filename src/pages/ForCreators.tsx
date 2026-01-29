import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { GlowButton } from '@/components/ui/glow-button';
import ProductInquiryModal from '@/components/ProductInquiryModal';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const ForCreators = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAuthCheck = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault();
      navigate('/auth');
    }
  };

  const handleApply = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen py-16">
      <ProductInquiryModal
        productName={selectedProduct}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />

      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-hero mb-4">
              Don’t Just Post. <span className="text-primary">Publish.</span>
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
          <div className="bg-card/30 backdrop-blur rounded-3xl border-[0.5px] border-border p-10 mb-16">
            <h2 className="text-section mb-6">What We Believe</h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4 mb-8">
              <p>Social platforms do not belong to you.<br />Algorithms change. Reach disappears.</p>
              <p className="text-primary font-medium text-xl">A website is permanent.</p>
              <p>Alphasight Online builds owned digital assets designed to outlast platforms and trends.</p>
              <p>We do not use generic templates. We apply the same visual psychology used in venture-backed deep-tech companies, adapted for creators and businesses.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-background/20 p-6 rounded-xl border border-border/50">
                <h3 className="font-bold text-lg mb-2 text-foreground">Speed</h3>
                <p className="text-sm text-muted-foreground">Sites delivered in days, not months.</p>
              </div>
              <div className="bg-background/20 p-6 rounded-xl border border-border/50">
                <h3 className="font-bold text-lg mb-2 text-foreground">Polish</h3>
                <p className="text-sm text-muted-foreground">Enterprise-grade design built to signal credibility.</p>
              </div>
              <div className="bg-background/20 p-6 rounded-xl border border-border/50">
                <h3 className="font-bold text-lg mb-2 text-foreground">Simplicity</h3>
                <p className="text-sm text-muted-foreground">Frontend-only architecture. No plugins. No fragile systems.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Catalog Mode Standard */}
        <AnimatedSection>
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-section mb-6">The Catalog-Mode Standard</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We do not build shopping carts. <span className="text-primary font-medium">We build showcases.</span>
            </p>
            <p className="text-muted-foreground mb-12">
              Your site creates desire. You close sales through WhatsApp, direct messages, or external payment links.
              This keeps everything fast, reliable, and maintenance-free.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h4 className="font-bold text-primary mb-2">Zero transaction fees</h4>
                <p className="text-sm text-muted-foreground">We never touch your revenue.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h4 className="font-bold text-primary mb-2">Visual-first</h4>
                <p className="text-sm text-muted-foreground">Your work appears like a curated gallery, not a storefront.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h4 className="font-bold text-primary mb-2">Mobile-native</h4>
                <p className="text-sm text-muted-foreground">Designed for link-in-bio traffic and small screens first.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Creator Series Pricing */}
        <AnimatedSection>
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="text-section mb-4">Creator Series</h2>
              <p className="text-muted-foreground">Built for creators, influencers, artists, and personal brands.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Tier 1 */}
              <div className="p-8 bg-card/20 rounded-2xl border border-border hover:border-primary/30 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Tier One. Bio-Link</h3>
                    <p className="text-sm text-muted-foreground">Single long-scroll page</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-primary">$80 - $150</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                  <li>• Bio and social links</li>
                  <li>• One featured image or video</li>
                  <li>• Contact button</li>
                  <li className="opacity-70 italic">• Hosting not included</li>
                </ul>
                <div onClick={() => handleApply('Creator Tier 1')}>
                  <GlowButton className="w-full">Interested</GlowButton>
                </div>
              </div>

              {/* Tier 2 */}
              <div className="p-8 bg-card/20 rounded-2xl border border-border hover:border-primary/30 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Tier Two. Portfolio</h3>
                    <p className="text-sm text-muted-foreground">Home, About, and Work pages</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-primary">$170 - $270</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                  <li>• Ten-item gallery</li>
                  <li>• Downloadable CV or media kit</li>
                  <li>• Mobile optimized</li>
                  <li className="opacity-70 italic">• Hosting not included</li>
                </ul>
                <div onClick={() => handleApply('Creator Tier 2')}>
                  <GlowButton className="w-full">Interested</GlowButton>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="p-8 bg-card/20 rounded-2xl border border-border hover:border-primary/30 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Tier Three. Content Hub</h3>
                    <p className="text-sm text-muted-foreground">Home plus blog or newsletter</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-primary">$290 - $390</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                  <li>• Dynamic content feed</li>
                  <li>• Email capture</li>
                  <li>• Mobile and desktop optimized</li>
                  <li className="text-primary/70 font-medium">• Hosting included</li>
                </ul>
                <div onClick={() => handleApply('Creator Tier 3')}>
                  <GlowButton className="w-full">Interested</GlowButton>
                </div>
              </div>

              {/* Tier 4 */}
              <div className="p-8 bg-card/20 rounded-2xl border border-border hover:border-primary/30 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Tier Four. Icon</h3>
                    <p className="text-sm text-muted-foreground">Five-page personal site</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-primary">$400+</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                  <li>• Motion effects</li>
                  <li>• Press and media section</li>
                  <li>• Custom domain setup</li>
                  <li className="text-primary/70 font-medium">• Hosting included</li>
                </ul>
                <div onClick={() => handleApply('Creator Tier 4')}>
                  <GlowButton className="w-full">Interested</GlowButton>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Business Series Pricing */}
        <AnimatedSection>
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="text-section mb-4">Business Series</h2>
              <p className="text-muted-foreground">Built for agencies, retailers, and service-based companies.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Tier 1 */}
              <div className="p-8 bg-card/20 rounded-2xl border border-border hover:border-primary/30 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Tier One. The Card</h3>
                    <p className="text-sm text-muted-foreground">Single landing page</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-primary">$120 - $220</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                  <li>• Business details and map</li>
                  <li>• WhatsApp contact button</li>
                  <li>• Hero image</li>
                  <li className="opacity-70 italic">• Hosting not included</li>
                </ul>
                <div onClick={() => handleApply('Business Tier 1')}>
                  <GlowButton className="w-full">Interested</GlowButton>
                </div>
              </div>

              {/* Tier 2 */}
              <div className="p-8 bg-card/20 rounded-2xl border border-border hover:border-primary/30 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Tier Two. The Catalog</h3>
                    <p className="text-sm text-muted-foreground">Product gallery up to twenty items</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-primary">$250 - $350</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                  <li>• Categorized layouts</li>
                  <li>• Product detail pop-ups</li>
                  <li>• Direct-to-message buttons</li>
                  <li className="opacity-70 italic">• Hosting not included</li>
                </ul>
                <div onClick={() => handleApply('Business Tier 2')}>
                  <GlowButton className="w-full">Interested</GlowButton>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="p-8 bg-card/20 rounded-2xl border border-border hover:border-primary/30 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Tier Three. The Firm</h3>
                    <p className="text-sm text-muted-foreground">Service menus and pricing</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-primary">$380 - $480</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                  <li>• Team profiles & Client testimonials</li>
                  <li>• Booking link integration</li>
                  <li>• Mobile and desktop optimized</li>
                  <li className="text-primary/70 font-medium">• Hosting included</li>
                </ul>
                <div onClick={() => handleApply('Business Tier 3')}>
                  <GlowButton className="w-full">Interested</GlowButton>
                </div>
              </div>

              {/* Tier 4 */}
              <div className="p-8 bg-card/20 rounded-2xl border border-border hover:border-primary/30 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Tier Four. Enterprise Lite</h3>
                    <p className="text-sm text-muted-foreground">Multi-page structure</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold text-primary">$800+</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                  <li>• Advanced motion visuals</li>
                  <li>• Case studies</li>
                  <li>• Competitor visual audit</li>
                  <li className="text-primary/70 font-medium">• Hosting included</li>
                </ul>
                <div onClick={() => handleApply('Business Tier 4')}>
                  <GlowButton className="w-full">Interested</GlowButton>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Process */}
        <AnimatedSection>
          <div className="mb-24 max-w-4xl mx-auto">
            <h2 className="text-section text-center mb-12">How the Alphasight Process Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card/40 p-6 rounded-xl border border-border">
                <div className="text-primary font-bold mb-2">01. Brief</div>
                <p className="text-sm text-muted-foreground">You complete a structured visual questionnaire.</p>
              </div>
              <div className="bg-card/40 p-6 rounded-xl border border-border">
                <div className="text-primary font-bold mb-2">02. Build</div>
                <p className="text-sm text-muted-foreground">We construct your site using Alphasight visual systems.</p>
              </div>
              <div className="bg-card/40 p-6 rounded-xl border border-border">
                <div className="text-primary font-bold mb-2">03. Review</div>
                <p className="text-sm text-muted-foreground">One round of focused revisions.</p>
              </div>
              <div className="bg-card/40 p-6 rounded-xl border border-border">
                <div className="text-primary font-bold mb-2">04. Handover</div>
                <p className="text-sm text-muted-foreground">Full ownership transfers to you.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-24">
            <h2 className="text-section text-center mb-12">FAQ</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-2">Payments</h3>
                <p className="text-muted-foreground">We do not process payments. Buttons link to Stripe links, PayPal, WhatsApp Business, or direct messages. This keeps your site lightweight and secure.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Hosting</h3>
                <p className="text-muted-foreground">We build on modern platforms such as Framer, Webflow, or Vercel. Hosting usually costs between zero and twenty dollars per month, paid directly to the provider.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Why Alphasight Online</h3>
                <p className="text-muted-foreground">We design for quantum computing and biotech companies under investor scrutiny. We apply the same clarity, precision, and speed to creators and businesses.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Custom Domains</h3>
                <p className="text-muted-foreground">We assist with domain registration and setup. Typical cost ranges from twenty to one hundred dollars depending on availability and extension. Domain setup can be included during onboarding for any tier.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  )
}

export default ForCreators;
