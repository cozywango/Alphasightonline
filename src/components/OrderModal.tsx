import { useState, useMemo } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, AnimatePresence } from 'framer-motion';

/* ──────────────────────────────────────────── */
/*  Types                                       */
/* ──────────────────────────────────────────── */
interface OrderModalProps {
    tierName: string;
    basePrice: number;
    hostingLabel?: string;
    tierId: string;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

interface AddOn {
    id: string;
    label: string;
    detail: string;
    price: number;
}

const ADD_ONS: AddOn[] = [
    { id: 'rush', label: 'Priority Rush', detail: '48 Hours', price: 150 },
    { id: 'motion', label: 'Advanced Motion Pack', detail: 'Premium animations', price: 900 },
    { id: 'copy', label: 'Copywriting Assist', detail: 'Professional copy', price: 150 },
    { id: 'hosting', label: 'Annual Hosting Pre-pay', detail: '$140/yr', price: 140 },
];

/* ──────────────────────────────────────────── */
/*  Tier Feature Lists                          */
/* ──────────────────────────────────────────── */
const TIER_FEATURES: Record<string, string[]> = {
    // CREATOR SERIES
    'bio-link': [
        'Zero-Latency Architecture', 'Social Signal Aggregation',
        'High-Fidelity Hero Asset', 'Contact Friction Removal', 'SEO Meta-Tagging',
        'Dark Mode Native', 'QR-Ready Endpoint', 'No-Code Handoff',
    ],
    'portfolio': [
        'Tri-Page Structure (Home, About, Work)', 'Contextual Project Pop-ups', 'Asset Compression Suite',
        'Curated Gallery Grid (10 Items)', 'Downloadable Media Kit Integration', "Narrative 'About' Logic",
        'Social Proof & Logo Strip', 'Custom 404 Recovery', 'Mobile-First Viewport', 'Visual Revision Round (x1)',
    ],
    'content-hub': [
        'Algorithmic Content Feed', 'Newsletter API Hook (Substack/Kit)', 'Reader Retention Layout',
        'Taxonomy Search', 'Lead Magnet Injection', 'Automated Distribution',
        'Deep-Link Architecture', 'Cross-Device Rendering',
    ],
    'icon': [
        'Flagship 5-Page System', 'Cinematic Visual Loops (4K)', 'Authority Signal Motion',
        'Press & Media Section', 'Whitelabel Execution', 'Domain DNS Management',
        'Schema Markup (JSON-LD)', 'Narrative Audit', 'Launch Support Window', 'Owner Training Session',
    ],
    // BUSINESS SERIES
    'the-card': [
        'Conversion-First Layout', 'WhatsApp API Trigger',
        'Click-to-Call Logic', 'Scale Signaling Imagery', 'Operational Clarity (Hours/Status)',
        'Zero-Plugin Security', 'Sub-Second Load Time', 'SSL Encryption', 'Maintenance-Free Code',
    ],
    'the-catalog': [
        'Conversational Commerce Protocol', '20-Product Database Entry', 'Zero-Fee Transaction Model',
        'Spec Sheet Pop-ups', 'Inventory Status Tags', 'Viral Loop Sharing',
        'Boutique Visual Grading', 'Global CDN Delivery', 'Categorized Taxonomy', 'Custom Call-to-Action',
    ],
    'the-firm': [
        'Trust Signal Architecture', 'Calendar API Sync', 'Transparent Service Menus',
        'Humanization Profiles', 'Case Study Framework', 'Lead Capture Automation',
        'Competitor Awareness Design', 'Customer Support FAQ', 'Enterprise Typography', 'Process Visualization',
    ],
    'enterprise-lite': [
        'Fortune 500 Visual Skin', 'Competitor Visual Audit',
        'Multi-Page Ecosystem', 'Case Study Library', 'Logic Framework Application',
        'Global Team Setup', 'Quarterly Visual Review', 'White-Glove Handover', 'Precision Color Grading',
    ],
};

/* ──────────────────────────────────────────── */
/*  Helpers                                     */
/* ──────────────────────────────────────────── */
const fmt = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

/* ──────────────────────────────────────────── */
/*  Component                                   */
/* ──────────────────────────────────────────── */
const OrderModal = ({ tierName, basePrice, hostingLabel, tierId, isOpen, onOpenChange }: OrderModalProps) => {
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    const [form, setForm] = useState({ name: '', email: '', brief: '' });
    const [errors, setErrors] = useState<Record<string, string>>({});

    /* Look up features for this tier */
    const features = TIER_FEATURES[tierId] ?? [];

    /* Live total */
    const total = useMemo(() => {
        let sum = basePrice;
        ADD_ONS.forEach((a) => { if (selected[a.id]) sum += a.price; });
        return sum;
    }, [basePrice, selected]);

    const selectedAddOns = ADD_ONS.filter((a) => selected[a.id]);

    /* Toggle an add-on */
    const toggle = (id: string) =>
        setSelected((prev) => ({ ...prev, [id]: !prev[id] }));

    /* Form change */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    /* Validate & submit */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errs: Record<string, string> = {};
        if (!form.name.trim()) errs.name = 'Name is required';
        if (!form.email.trim()) errs.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
        setErrors(errs);
        if (Object.keys(errs).length) return;

        const addOnList = selectedAddOns.map((a) => `${a.label} (${fmt(a.price)})`).join(', ') || 'None';
        const subject = encodeURIComponent(`New Order Protocol - ${tierName}`);
        const body = encodeURIComponent(
            `Client: ${form.name}\n` +
            `Email: ${form.email}\n` +
            `Tier: ${tierName}\n` +
            `Base Price: ${fmt(basePrice)}\n` +
            `Add-ons: ${addOnList}\n` +
            `Est. Total: ${fmt(total)}\n` +
            (form.brief ? `\nProject Brief:\n${form.brief}` : ''),
        );
        window.location.href = `mailto:joel@alphasight.online?subject=${subject}&body=${body}`;
    };

    /* Reset state when modal closes */
    const handleOpenChange = (open: boolean) => {
        if (!open) {
            setSelected({});
            setForm({ name: '', email: '', brief: '' });
            setErrors({});
        }
        onOpenChange(open);
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogContent
                className="sm:max-w-[540px] max-h-[90vh] overflow-y-auto border border-white/10 backdrop-blur-md p-0"
                style={{ background: '#050505' }}
            >
                {/* ── Header ── */}
                <DialogHeader className="px-6 pt-6 pb-2">
                    <DialogTitle className="text-2xl font-bold tracking-tight flex flex-wrap items-baseline gap-2">
                        <span className="text-gradient-orange">{tierName}</span>
                        <span className="text-white/40 text-lg">::</span>
                        <span className="font-mono text-white text-xl">{fmt(basePrice)}</span>
                    </DialogTitle>
                    <DialogDescription className="text-sm text-white/50">
                        Configure your order below.
                        {hostingLabel && (
                            <span className="ml-2 text-xs font-mono text-primary/80 border border-primary/20 rounded px-1.5 py-0.5">
                                {hostingLabel}
                            </span>
                        )}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="flex flex-col">
                    {/* ── Base Features ── */}
                    {features.length > 0 && (
                        <div className="px-6 py-4">
                            <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Included Features</p>
                            <div className="bg-white/[0.03] rounded-lg p-4 border border-white/5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                    {features.map((feat, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="text-primary mt-0.5 flex-shrink-0 text-xs">▸</span>
                                            <span className="text-xs sm:text-sm text-white/80 leading-snug">{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── Divider ── */}
                    <div className="mx-6 h-px bg-white/5" />

                    {/* ── Add-on Toggles ── */}
                    <div className="px-6 py-4 space-y-2">
                        <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Add-ons</p>
                        {ADD_ONS.map((addon) => (
                            <label
                                key={addon.id}
                                className={`flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer transition-all border ${selected[addon.id]
                                    ? 'border-primary/40 bg-primary/5'
                                    : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                                    }`}
                            >
                                {/* Custom checkbox */}
                                <span
                                    className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border transition-colors ${selected[addon.id]
                                        ? 'bg-primary border-primary text-black'
                                        : 'border-white/20 bg-transparent'
                                        }`}
                                >
                                    {selected[addon.id] && (
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M2.5 6L5 8.5L9.5 3.5" />
                                        </svg>
                                    )}
                                </span>
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                    checked={!!selected[addon.id]}
                                    onChange={() => toggle(addon.id)}
                                />
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-white">{addon.label}</div>
                                    <div className="text-xs text-white/40">{addon.detail}</div>
                                </div>
                                <span className="font-mono text-sm text-white/70 flex-shrink-0">+{fmt(addon.price)}</span>
                            </label>
                        ))}
                    </div>

                    {/* ── Divider ── */}
                    <div className="mx-6 h-px bg-white/5" />

                    {/* ── Form Fields ── */}
                    <div className="px-6 py-5 space-y-4">
                        <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Your Details</p>

                        <div className="space-y-1">
                            <label htmlFor="order-name" className="text-xs font-medium text-white/60">
                                Name <span className="text-primary">*</span>
                            </label>
                            <Input
                                id="order-name"
                                name="name"
                                required
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                className="bg-white/[0.04] border-white/10 focus:border-primary/50 placeholder:text-white/20"
                            />
                            {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="order-email" className="text-xs font-medium text-white/60">
                                Email <span className="text-primary">*</span>
                            </label>
                            <Input
                                id="order-email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="bg-white/[0.04] border-white/10 focus:border-primary/50 placeholder:text-white/20"
                            />
                            {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="order-brief" className="text-xs font-medium text-white/60">
                                Project Brief <span className="text-white/30">(Optional)</span>
                            </label>
                            <Textarea
                                id="order-brief"
                                name="brief"
                                value={form.brief}
                                onChange={handleChange}
                                placeholder="Tell us about your project…"
                                className="bg-white/[0.04] border-white/10 focus:border-primary/50 resize-none placeholder:text-white/20"
                                rows={3}
                            />
                        </div>
                    </div>

                    {/* ── Sticky Footer: Total + Submit ── */}
                    <div
                        className="sticky bottom-0 px-6 py-4 border-t border-white/5 flex flex-col gap-3"
                        style={{ background: '#050505' }}
                    >
                        {/* Dynamic total */}
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-white/50 uppercase tracking-wide">Total Estimate</span>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={total}
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 6 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-2xl font-mono font-bold text-gradient-orange"
                                >
                                    {fmt(total)}
                                </motion.span>
                            </AnimatePresence>
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="gradient-button w-full rounded-xl py-3 px-6 text-sm font-bold uppercase tracking-widest text-white cursor-pointer"
                        >
                            Initialize Protocol
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default OrderModal;
