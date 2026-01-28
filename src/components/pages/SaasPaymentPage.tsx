"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
    CheckCircle2,
    AppWindow,
    Wallet,
    CreditCard,
    ArrowLeft,
    Smartphone,
    RefreshCw,
    ChevronDown,
    ChevronUp,
    Zap,
    Shield,
    BarChart3,
    Users,
    Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { SectionHeading } from "@/components/SectionHeading"
import { LadderOfValue } from "@/components/LadderOfValue"
import { HighImpactUseCases } from "@/components/HighImpactUseCases"
import { Benefits } from "@/components/Benefits"

// --- Components ---


const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
        <button
            onClick={onClick}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
        >
            <span className="font-semibold text-lg text-slate-900">{question}</span>
            {isOpen ? <ChevronUp className="h-5 w-5 text-slate-500" /> : <ChevronDown className="h-5 w-5 text-slate-500" />}
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                        {answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
)

// --- Main Page Component ---

export default function SaasPaymentPage() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [capabilityView, setCapabilityView] = useState<'marketplace' | 'payments'>('marketplace');

    const featureCards = [
        { title: "Product Definition", desc: "Instant merchant onboarding." },
        { title: "Pricing Rules", desc: "Flexible recurring billing." },
        { title: "Settlement", desc: "Auto-split revenue with partners." },
        { title: "Order Push", desc: "Bank-grade security checks." }
    ];

    return (
        <div className="min-h-screen bg-white pb-20 font-sans selection:bg-cyan-100 selection:text-cyan-900">

            {/* 1) HERO SECTION */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0 h-full w-full overflow-hidden">
                    <Image
                        src="/images/saas-hero.png"
                        alt="SaaS background"
                        fill
                        className="object-cover object-center opacity-60"
                        priority
                    />
                    {/* Gradient Overlay for Fade and Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <Link href="/#solutions" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Capabilities
                        </Link>
                    </motion.div>

                    <div className="max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight"
                        >
                            Digital Ecosystems <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Payments & SaaS</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl"
                        >
                            Monetize the digital economy. Secure, instant, and flexible payment gateways for the next generation of services.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-3 mb-12"
                        >
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                <Zap className="h-4 w-4 text-blue-500" />
                                <span>Instant Settlement</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                <BarChart3 className="h-4 w-4 text-blue-500" />
                                <span>Recurring Revenue</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                <Shield className="h-4 w-4 text-blue-500" />
                                <span>Bank-Grade Security</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2) What CPQ Should Do for You */}
            <Benefits
                heading={<>What Digital Payments <br /><span className="text-blue-600">Should Do for You</span></>}
                description="Telcos are now digital banks and app stores. We provide the financial plumbing to monetize content, IoT, and financial services securely."
                capabilities={[
                    "Unified Digital Wallet",
                    "Recurring Subscription Engine",
                    "Direct Carrier Billing (DCB)",
                    "Partner Settlement & Rev Share",
                    "PCI-DSS Compliant Gateway",
                    "Real-Time Fraud Detection"
                ]}
                centralImage="/images/payment-core.png"
                centralImageAlt="SaaS Core Engine"
                orbitingItems={[
                    { title: "Product Definition", desc: "Instant merchant onboarding." },
                    { title: "Pricing Rules", desc: "Flexible recurring billing." },
                    { title: "Settlement", desc: "Auto-split revenue with partners." },
                    { title: "Order Push", desc: "Bank-grade security checks." }
                ]}
                animationDuration="25s"
            />

            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-8 opacity-50" />

            {/* 3) TARGET AUDIENCE (Hexagonal Grid) */}
            <section className="py-24 bg-white container-fluid overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">TARGET AUDIENCE</span>
                        <SectionHeading className="mt-3 mb-0">Who We Empower</SectionHeading>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10 pt-10 pb-10">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-6 md:mt-0">
                            {[
                                { title: "Chief Digital Officers", icon: Globe },
                                { title: "Head of Fintech", icon: Wallet }
                            ].map((item, i) => (
                                <div key={i} className="relative group w-72 h-80 filter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-500 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                                    <div
                                        className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8 clip-hex transition-transform duration-300 group-hover:-translate-y-2"
                                        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                                    >
                                        <div className="h-20 w-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                            <item.icon className="h-10 w-10" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 px-4">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Column 2 - Shifted Down */}
                        <div className="flex flex-col gap-6 md:mt-20">
                            {[
                                { title: "Partner Managers", icon: Users },
                                { title: "App Developers", icon: AppWindow }
                            ].map((item, i) => (
                                <div key={i} className="relative group w-72 h-80 filter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-500 hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                                    <div
                                        className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8 clip-hex transition-transform duration-300 group-hover:-translate-y-2"
                                        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                                    >
                                        <div className="h-20 w-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                            <item.icon className="h-10 w-10" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 px-4">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4) CAPABILITY SPLIT - Modern Toggle Design */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading>
                        Comprehensive Stack Coverage
                    </SectionHeading>

                    {/* Main Card Container */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

                            {/* Toggle Switch */}
                            <div className="flex justify-center mb-10">
                                <div className="inline-flex rounded-full bg-gray-200 p-1.5">
                                    <button
                                        onClick={() => setCapabilityView('marketplace')}
                                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${capabilityView === 'marketplace'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-transparent text-gray-700 hover:text-gray-900'
                                            }`}
                                    >
                                        Digital Marketplace
                                    </button>
                                    <button
                                        onClick={() => setCapabilityView('payments')}
                                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${capabilityView === 'payments'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-transparent text-gray-700 hover:text-gray-900'
                                            }`}
                                    >
                                        Payment Gateway
                                    </button>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="border border-gray-200 rounded-2xl p-8">
                                {capabilityView === 'marketplace' ? (
                                    <>
                                        {/* Commercial Header */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                                                <div className="relative">
                                                    <AppWindow className="h-8 w-8 text-blue-600" />
                                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                        <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900">App & Partner Marketplace</h3>
                                        </div>

                                        {/* Commercial Two-Column List */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                            {/* Left Column */}
                                            <div className="space-y-4">
                                                {["Partner Onboarding Portal", "Revenue Share Logic", "OTT App Bundling", "Self-Care Dashboard"].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Right Column */}
                                            <div className="space-y-4">
                                                {["API Gateway Integration", "Single Sign-On (SSO)", "Subscription Lifecycle", "Notifications Engine"].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* Technical Header */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                                                <div className="relative">
                                                    <CreditCard className="h-8 w-8 text-blue-600" />
                                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                        <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900">Payment Gateway</h3>
                                        </div>

                                        {/* Technical Two-Column List */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                            {/* Left Column */}
                                            <div className="space-y-4">
                                                {["Direct Carrier Billing", "Credit/Debit Card Processing", "Mobile Money Integration", "Tokenization & Security"].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Right Column */}
                                            <div className="space-y-4">
                                                {["Real-Time Tax Calculation", "Invoicing & Receipts", "Dunning Management", "Refund Workflows"].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5) ENGAGEMENT MODELS */}
            <LadderOfValue
                steps={[
                    {
                        step: 1,
                        title: "Integrate & Onboard",
                        description: "Fast setup. Connect payment gateways and onboard 3rd-party partners with our unified API."
                    },
                    {
                        step: 2,
                        title: "Launch",
                        description: "Go Live. Roll out subscriptions and bundles to your customer base instantly."
                    },
                    {
                        step: 3,
                        title: "Growth & Scale",
                        description: "Analyze & Optimize. Use AI-driven insights to reduce churn and maximize ARPU."
                    }
                ]}
            />

            {/* 6) USE CASES */}
            {/* 6) USE CASES */}
            <HighImpactUseCases
                useCases={[
                    { title: "Subscriptions", fullTitle: "Subscription Management", desc: "Launch recurring revenue models for any digital service in days, not months.", icon: RefreshCw, bgColor: "bg-[#cfe5ff]", textColor: "text-slate-900" },
                    { title: "Marketplace", fullTitle: "Partner Marketplace", desc: "Onboard 3rd-party OTT apps and split revenue automatically with zero friction.", icon: AppWindow, bgColor: "bg-[#8cc3ff]", textColor: "text-slate-900" },
                    { title: "Direct Billing", fullTitle: "Carrier Direct Billing", desc: "Let users pay for Spotify, Netflix, and gaming via their mobile balance.", icon: Smartphone, bgColor: "bg-[#007bff]", textColor: "text-white" },
                    { title: "Mobile Money", fullTitle: "Mobile Money & Wallets", desc: "Secure, compliant mobile financial services for unbanked populations.", icon: Wallet, bgColor: "bg-[#0056b3]", textColor: "text-white" },
                    { title: "Fraud Safety", fullTitle: " AI Fraud Prevention", desc: "Real-time transaction scoring to block fraud without hurting conversion.", icon: Shield, bgColor: "bg-[#003380]", textColor: "text-white" },
                    { title: "API Monetization", fullTitle: "API Monetization", desc: "Turn your network APIs into revenue streams for developers and partners.", icon: Zap, bgColor: "bg-[#001a40]", textColor: "text-white" }
                ]}
            />

            {/* 8) FAQ */}
            <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <SectionHeading className="text-center mb-12">Common Questions</SectionHeading>
                <div className="space-y-4">
                    <AccordionItem
                        question="Can I handle recurring subscriptions?"
                        answer="Yes. Our subscription engine handles complex logic like pro-rating, pausing, upgrading, and downgrading plans automatically."
                        isOpen={openFaqIndex === 0}
                        onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                    />
                    <AccordionItem
                        question="Is the platform PCI compliant?"
                        answer="We are PCI-DSS Level 1 certified and fully GDPR compliant, capable of handling sensitive financial data in any region."
                        isOpen={openFaqIndex === 1}
                        onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                    />
                    <AccordionItem
                        question="Do you support multi-party settlements?"
                        answer="Yes. We settle with partners automatically in their local currency, handling all tax withholdings and payout logic."
                        isOpen={openFaqIndex === 2}
                        onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                    />
                </div>
            </section>

            {/* 9) FINAL CTA BAND */}
            <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-blue-50 rounded-3xl p-12 border border-blue-100">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Stop Leaving Revenue on the Table</h2>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Launch your own digital marketplace and become the super-app your customers need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-500 text-white">
                            <Link href="mailto:infohr@sapphiretelecomconsulting.com">Email Us</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Mobile Sticky CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-slate-200 md:hidden z-50">
                <Button asChild className="w-full h-12 rounded-full font-bold shadow-lg bg-blue-600 text-white hover:bg-blue-500">
                    <Link href="mailto:infohr@sapphiretelecomconsulting.com">Email Us</Link>
                </Button>
            </div>

        </div>
    )
}
