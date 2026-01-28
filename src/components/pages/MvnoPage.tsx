"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
    ArrowLeft,
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    Zap,
    Shield,
    BarChart3,
    Layers,
    Users,
    Server,
    Smartphone,
    Globe,
    CreditCard,
    Wifi,
    Rocket,
    Podcast,
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

export default function MvnoPage() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [capabilityView, setCapabilityView] = useState<'light' | 'full'>('light');



    const featureCards = [
        { title: "Subscriber App", desc: "Self-care made simple." },
        { title: "eSIM Cloud", desc: "Download profile instantly." },
        { title: "Host MNO", desc: "Network connectivity." },
        { title: "Payment Gateway", desc: "Seamless recurring charges." }
    ];

    return (
        <div className="min-h-screen bg-white pb-20 font-sans selection:bg-cyan-100 selection:text-cyan-900">

            {/* 1) HERO SECTION */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0 h-full w-full overflow-hidden">
                    <Image
                        src="/images/mvno-hero.png"
                        alt="MVNO background"
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
                        <a href="#expertise" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Capabilities
                        </a>
                    </motion.div>

                    <div className="max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight"
                        >
                            Rocket-Fuel for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital MVNO/Es</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl"
                        >
                            Launch in weeks, not months. The asset-light platform for brands, retailers, and innovators to become mobile carriers.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-3 mb-12"
                        >
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                <Rocket className="h-4 w-4 text-blue-500" />
                                <span>Launch in 4 Weeks</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                <Smartphone className="h-4 w-4 text-blue-500" />
                                <span>eSIM Onboarding</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                <Globe className="h-4 w-4 text-blue-500" />
                                <span>Multi-Tenant</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2) What MVNO Platform Should Do for You */}
            <Benefits
                heading={<>What an MVNO Platform <br /><span className="text-blue-600">Should Do for You</span></>}
                description="You shouldn't need a telecom engineering team to run a mobile brand. Our platform abstracts the network complexity so you can focus on customer acquisition and brand growth."
                capabilities={[
                    "Digital Onboarding (eKYC + eSIM)",
                    "Wholesale Billing & Settlement",
                    "Customizable Mobile App",
                    "Flexible Product Catalog",
                    "Real-Time Policy Control",
                    "Multi-Network Integration"
                ]}
                centralImage="/images/mvno-core.PNG"
                centralImageAlt="Digital MVNO Core"
                orbitingItems={[
                    { title: "Subscriber App", desc: "Self-care made simple." },
                    { title: "eSIM Cloud", desc: "Download profile instantly." },
                    { title: "Host MNO", desc: "Network connectivity." },
                    { title: "Payment Gateway", desc: "Seamless recurring charges." }
                ]}
                animationDuration="20s"
            />

            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-8 opacity-50" />

            {/* 3) TARGET AUDIENCE (Hexagonal Grid) */}
            <section className="py-24 bg-white container-fluid overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">TARGET AUDIENCE</span>
                        <SectionHeading className="mt-3 mb-0">Who We Accelerate</SectionHeading>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10 pt-10 pb-10">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-6 md:mt-0">
                            {[
                                { title: "Retail Brands", icon: Smartphone },
                                { title: "Entrepreneurs", icon: Rocket }
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
                                { title: "Travel Agencies", icon: Globe },
                                { title: "Banks & Fintech", icon: CreditCard }
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
                                        onClick={() => setCapabilityView('light')}
                                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${capabilityView === 'light'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-transparent text-gray-700 hover:text-gray-900'
                                            }`}
                                    >
                                        Light MVNO
                                    </button>
                                    <button
                                        onClick={() => setCapabilityView('full')}
                                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${capabilityView === 'full'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-transparent text-gray-700 hover:text-gray-900'
                                            }`}
                                    >
                                        Full MVNO
                                    </button>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="border border-gray-200 rounded-2xl p-8">
                                {capabilityView === 'light' ? (
                                    <>
                                        {/* Light Header */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                                                <div className="relative">
                                                    <Smartphone className="h-8 w-8 text-blue-600" />
                                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                        <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900">Reseller / Light MVNO</h3>
                                        </div>

                                        {/* Light Two-Column List */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                            {/* Left Column */}
                                            <div className="space-y-4">
                                                {["White-Label Mobile App", "Subscriber Management", "eSIM Provisioning", "Simple Tariff Plans"].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Right Column */}
                                            <div className="space-y-4">
                                                {["Customer Support Portal", "Marketing Automation", "Usage Analytics", "Online Payment"].map((item, i) => (
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
                                        {/* Full Header */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                                                <div className="relative">
                                                    <Server className="h-8 w-8 text-blue-600" />
                                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                        <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900">Full MVNO Core</h3>
                                        </div>

                                        {/* Full Two-Column List */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                            {/* Left Column */}
                                            <div className="space-y-4">
                                                {["Core Network (HSS/HLR)", "Real-Time OCS/PCRF", "Interconnect Billing", "Roaming Agreements"].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Right Column */}
                                            <div className="space-y-4">
                                                {["Multi-IMSI Management", "Direct Carrier Billing", "Network Slicing", "VoLTE / VoWiFi"].map((item, i) => (
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

            {/* 5) DELIVERY APPROACH */}
            <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading className="text-center mb-16">Launch Timeline</SectionHeading>
                <div className="relative w-full max-w-3xl mx-auto h-[500px] hidden md:block">
                    {/* Connecting Arrows (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none text-slate-300" viewBox="0 0 600 500">
                        {/* Top to Right */}
                        <path d="M330 60 Q 500 60 540 210" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
                        {/* Right to Bottom */}
                        <path d="M540 290 Q 500 440 330 440" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
                        {/* Bottom to Left */}
                        <path d="M270 440 Q 100 440 60 290" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
                        {/* Left to Top */}
                        <path d="M60 210 Q 100 60 270 60" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />

                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                            </marker>
                        </defs>
                    </svg>

                    {/* Node 1: Define (Top) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 aspect-square rounded-full border-4 border-slate-900 bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-10">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Define</h4>
                        <p className="text-sm text-slate-600">Tariffs & brand ID.</p>
                    </div>

                    {/* Node 2: Connect (Right) */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-48 aspect-square rounded-full border-4 border-slate-700 bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-10">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Connect</h4>
                        <p className="text-sm text-slate-600">Integrate MNO APIs.</p>
                    </div>

                    {/* Node 3: Launch (Bottom) */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 aspect-square rounded-full border-4 border-slate-700 bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-10">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Launch</h4>
                        <p className="text-sm text-slate-600">Go live in market.</p>
                    </div>

                    {/* Node 4: Grow (Left) */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-48 aspect-square rounded-full border-4 border-slate-700 bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-10">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Grow</h4>
                        <p className="text-sm text-slate-600">Scale subscribers.</p>
                    </div>
                </div>

                {/* Mobile Fallback (Linear) */}
                <div className="grid grid-cols-1 gap-6 md:hidden">
                    {[{ title: "Define", desc: "Tariffs & brand ID." }, { title: "Connect", desc: "Integrate MNO APIs." }, { title: "Launch", desc: "Go live in market." }, { title: "Grow", desc: "Scale subscribers." }].map((item, i) => (
                        <div key={i} className="bg-white border-2 border-slate-200 rounded-full p-8 text-center shadow-sm">
                            <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6) USE CASES */}
            <HighImpactUseCases
                useCases={[
                    { title: "Retail Brand", fullTitle: "Retail Brand Launch", desc: "Launch a branded mobile service for your existing retail customer base.", icon: Smartphone, bgColor: "bg-[#cfe5ff]", textColor: "text-slate-900" },
                    { title: "IoT Connectivity", fullTitle: "Global IoT Connectivity", desc: "Connect smart devices globally with multi-IMSI eSIM solutions.", icon: Wifi, bgColor: "bg-[#8cc3ff]", textColor: "text-slate-900" },
                    { title: "Second Brand", fullTitle: "Flanker Brand Strategy", desc: "MNOs launching a digital-first sub-brand to capture youth or niche segments.", icon: Rocket, bgColor: "bg-[#007bff]", textColor: "text-white" },
                    { title: "Travel SIM", fullTitle: "Travel eSIM App", desc: "App-first data roaming service for international travelers.", icon: Globe, bgColor: "bg-[#0056b3]", textColor: "text-white" },
                    { title: "Fintech Mobile", fullTitle: "Fintech + Telco Bundle", desc: "Embed connectivity into your banking app for a super-app experience.", icon: CreditCard, bgColor: "bg-[#003380]", textColor: "text-white" },
                    { title: "Content Bundle", fullTitle: "Content-Led MVNO", desc: "Bundle streaming subscriptions with mobile data plans.", icon: Podcast, bgColor: "bg-[#001a40]", textColor: "text-white" }
                ]}
            />

            {/* 7) ENGAGEMENT MODELS */}
            <LadderOfValue
                steps={[
                    {
                        step: 1,
                        title: "Brand Config",
                        description: "Brand your white-label app and set your tariff structures. (2 Weeks)."
                    },
                    {
                        step: 2,
                        title: "Integration",
                        description: "Connectivity setup. We plug into the host MNO and set up your eSIM profiles."
                    },
                    {
                        step: 3,
                        title: "Go Live",
                        description: "Launch. Start acquiring customers with a fully digital onboarding flow."
                    }
                ]}
            />

            {/* 8) FAQ */}
            <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <SectionHeading className="text-center mb-12">Common Questions</SectionHeading>
                <div className="space-y-4">
                    <AccordionItem
                        question="How long does it take to launch?"
                        answer="With our 'MVNO in a box' solution, typical launch times are 4-8 weeks for Light MVNOs, compared to 9-12 months for traditional builds."
                        isOpen={openFaqIndex === 0}
                        onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                    />
                    <AccordionItem
                        question="Can I bring my own host MNO contract?"
                        answer="Yes. We are network agnostic. We can integrate with any MNO globally, or you can leverage our existing wholesale agreements for faster rates."
                        isOpen={openFaqIndex === 1}
                        onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                    />
                    <AccordionItem
                        question="Do you support eSIM?"
                        answer="Yes, native eSIM and eKYC are built into the onboarding flow, allowing customers to sign up and activate service in under 3 minutes."
                        isOpen={openFaqIndex === 2}
                        onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                    />
                </div>
            </section>

            {/* 9) FINAL CTA BAND */}
            <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-blue-50 rounded-3xl p-12 border border-blue-100">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Disrupt the Market?</h2>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Don't build a telecom company from scratch. Use our platform to launch a digital brand that customers love.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-500 text-white">
                            <Link href="mailto:ishantjaswal03@gmail.com">Email Us</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Mobile Sticky CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-slate-200 md:hidden z-50">
                <Button asChild className="w-full h-12 rounded-full font-bold shadow-lg bg-blue-600 text-white hover:bg-blue-500">
                    <Link href="mailto:ishantjaswal03@gmail.com">Email Us</Link>
                </Button>
            </div>

        </div>
    )
}
