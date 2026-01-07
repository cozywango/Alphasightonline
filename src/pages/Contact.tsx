import { motion } from 'framer-motion';
import { Mail, MapPin, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { cn } from '@/lib/utils'; // Assuming cn exists or use clsx

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'founder' | 'marketer'>('founder');

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'marketer') {
      setActiveTab('marketer');
    }
  }, [searchParams]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setSuccessMessage(null)
    setErrorMessage(null)

    try {
      const payload = {
        ...formData,
        inquiryType: activeTab
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Request failed')
      }

      setSuccessMessage('Thanks — your message was sent. We will respond shortly.')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (err: any) {
      console.error('Contact submit error', err)
      setErrorMessage(err?.message || 'Unable to send message. Try again later.')
    } finally {
      setSubmitting(false)
    }
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-hero mb-8">
              {activeTab === 'founder' ? (
                <>Secure Your <span className="text-primary">Visual</span> Authority</>
              ) : (
                <>Join The <span className="text-orange-500">Hunter</span> Protocol</>
              )}
            </h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              {activeTab === 'founder'
                ? "We operate on a capped retainer model. Inquire now to check availability for the upcoming month."
                : "Commission-only. High-ticket payouts. Apply to become an authorized AlphaFrame Hunter."}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <AnimatedSection>
            <div className="bg-card p-12 rounded-3xl border border-border">

              {/* Tabs */}
              <div className="flex gap-4 mb-8 border-b border-border/50 pb-1">
                <button
                  onClick={() => { setActiveTab('founder'); setSuccessMessage(null); setErrorMessage(null); }}
                  className={cn(
                    "pb-3 text-lg font-bold transition-all duration-300 relative",
                    activeTab === 'founder' ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Founder Inquiry
                  {activeTab === 'founder' && (
                    <motion.div layoutId="contactTab" className="absolute bottom-[-5px] left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
                <button
                  onClick={() => { setActiveTab('marketer'); setSuccessMessage(null); setErrorMessage(null); }}
                  className={cn(
                    "pb-3 text-lg font-bold transition-all duration-300 relative",
                    activeTab === 'marketer' ? "text-orange-500" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Hunter Application
                  {activeTab === 'marketer' && (
                    <motion.div layoutId="contactTab" className="absolute bottom-[-5px] left-0 right-0 h-0.5 bg-orange-500" />
                  )}
                </button>
              </div>

              <h2 className="text-3xl font-bold mb-8">
                {activeTab === 'founder' ? 'Apply for Protocol' : 'Initiate Application'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-3">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border"
                      placeholder={activeTab === 'founder' ? "Founder Name" : "Your Name"}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-3">
                      Work Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border"
                      placeholder={activeTab === 'founder' ? "founder@company.com" : "you@email.com"}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-3">
                    {activeTab === 'founder' ? 'Company Website / LinkedIn' : 'Portfolio / Social Profile'}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                    placeholder={activeTab === 'founder' ? "URL to your current brand" : "URL to your LinkedIn or Portfolio"}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-3">
                    {activeTab === 'founder' ? 'Goal / Pain Point *' : 'Strict Verification (Why You?) *'}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background border-border resize-none"
                    placeholder={activeTab === 'founder'
                      ? "E.g., 'Our technology is great, but our deck is losing investors...'"
                      : "Briefly explain your network access and sales experience. Why should we give you a license?"}
                  />
                </div>

                {successMessage && (
                  <div className="mb-4 rounded-md bg-green-900/60 border border-green-700 p-3 text-sm text-green-200">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="mb-4 rounded-md bg-destructive/10 border border-destructive p-3 text-sm text-destructive-foreground">
                    {errorMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className={cn(
                    "w-full text-primary-foreground group transition-colors",
                    activeTab === 'founder'
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-orange-500 hover:bg-orange-600"
                  )}
                >
                  {submitting ? 'Sending...' : (activeTab === 'founder' ? 'Request Narrative Audit' : 'Submit Application')}
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-12">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-3xl border border-border">
                <h3 className="text-2xl font-bold mb-8">Agency Direct</h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/20 p-3 rounded-xl">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Founder Direct</h4>
                      <p className="text-muted-foreground">joelwango@outlook.com</p>
                      <p className="text-muted-foreground">houseofel001@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/20 p-3 rounded-xl">
                      <MapPin className="text-accent-foreground" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Operations</h4>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                      <p className="text-muted-foreground">Serving Global Timezones</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card p-12 rounded-3xl border border-border">
                <h3 className="text-2xl font-bold mb-8">Connect</h3>

                <div className="space-y-4">
                  <a
                    href="https://x.com/alphaframe55"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <Twitter className="text-primary group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <h4 className="font-semibold">X / Twitter</h4>
                      <p className="text-muted-foreground text-sm">@alphaframe55</p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/alphaframeonline/?utm_source=ig_web_button_share_sheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <span className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" aria-hidden>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10z" />
                        <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zM17.5 6a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-semibold">Instagram</h4>
                      <p className="text-muted-foreground text-sm">@alphaframeonline</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-2xl border border-border text-center">
                <h3 className="text-xl font-bold mb-3">Audit Turnaround</h3>
                <p className="text-muted-foreground mb-2">Initial audit delivered within</p>
                <p className="text-3xl font-bold text-primary">48 Hours</p>
                <p className="text-sm text-muted-foreground mt-2">For qualified Series A+ leads</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Office Hours & Additional Info */}
        <AnimatedSection delay={0.4}>
          <div className="mt-32 grid md:grid-cols-2 gap-8 justify-items-center">
            <div
              className="text-center bg-card p-8 rounded-2xl border border-border max-w-md w-full cursor-pointer hover:border-orange-500/50 transition-colors"
              onClick={() => setActiveTab('marketer')}
            >
              <h3 className="text-xl font-bold mb-4 text-orange-500">Marketers</h3>
              <p className="text-muted-foreground">
                Apply for our "Hunter" program. Commission only, high-ticket payouts.
              </p>
            </div>

            <div
              className="text-center bg-card p-8 rounded-2xl border border-border max-w-md w-full cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => setActiveTab('founder')}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Founders</h3>
              <p className="text-muted-foreground">
                Seeking a visual partner? Let's discuss your next funding round.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;