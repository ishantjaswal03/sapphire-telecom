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
    Receipt,
    Activity as LucideActivity,
    Box,
    ShoppingCart,
    Tag,
    FileText,
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

export default function CpqPage() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const [capabilityView, setCapabilityView] = useState<'commercial' | 'technical'>('commercial');



    const featureCards = [
        { title: "Product Definition", desc: "Fast-track new offers to market." },
        { title: "Pricing Rules", desc: "Dynamic rates based on context." },
        { title: "Quote Gen", desc: "Beautiful proposals in one click." },
        { title: "Order Push", desc: "Error-free handoff to assurance." }
    ];

    return (
        <div className="min-h-screen bg-white pb-20 font-sans selection:bg-cyan-100 selection:text-cyan-900">

            {/* 1) HERO SECTION */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0 h-full w-full overflow-hidden">
                    <Image
                        src="/images/cpq-hero.png"
                        alt="CPQ background"
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
                            Intelligent Telecom <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">CPQ & Product Catalog</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl"
                        >
                            Configure complex offers, price with precision, and quote with speed. The engine for agile telecom commerce.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-3 mb-12"
                        >
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                <Zap className="h-4 w-4 text-blue-500" />
                                <span>Zero-Error Quotes</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                <BarChart3 className="h-4 w-4 text-blue-500" />
                                <span>Margin Optimization</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                <Shield className="h-4 w-4 text-blue-500" />
                                <span>Technical Validity</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2) What CPQ Should Do for You */}
            <Benefits
                heading={<>What CPQ <br /><span className="text-blue-600">Should Do for You</span></>}
                description="In the 5G era, product bundles are complex. Your CPQ shouldn't just be a price calculator; it needs to be the commercial brain that aligns sales, engineering, and finance."
                capabilities={[
                    "Centralized Product Master",
                    "Rules-Based Configuration Engine",
                    "Dynamic Pricing & Discounting",
                    "Guided Selling for Reps",
                    "Seamless Order Handover",
                    "Proposal Generation"
                ]}
                centralImage="/images/cpq-core.PNG"
                centralImageAlt="CPQ Core Engine"
                orbitingItems={[
                    { title: "Product Definition", desc: "Fast-track new offers to market." },
                    { title: "Pricing Rules", desc: "Dynamic rates based on context." },
                    { title: "Quote Gen", desc: "Beautiful proposals in one click." },
                    { title: "Order Push", desc: "Error-free handoff to assurance." }
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
                                { title: "Product Managers", icon: Box },
                                { title: "Sales Directors", icon: BarChart3 }
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
                                { title: "Finance & Legal", icon: FileText },
                                { title: "Partner Channels", icon: Users }
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
                                        onClick={() => setCapabilityView('commercial')}
                                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${capabilityView === 'commercial'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-transparent text-gray-700 hover:text-gray-900'
                                            }`}
                                    >
                                        Commercial Catalog
                                    </button>
                                    <button
                                        onClick={() => setCapabilityView('technical')}
                                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${capabilityView === 'technical'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-transparent text-gray-700 hover:text-gray-900'
                                            }`}
                                    >
                                        Technical Catalog
                                    </button>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="border border-gray-200 rounded-2xl p-8">
                                {capabilityView === 'commercial' ? (
                                    <>
                                        {/* Commercial Header */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                                                <div className="relative">
                                                    <Tag className="h-8 w-8 text-blue-600" />
                                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                        <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900">Commercial Catalog</h3>
                                        </div>

                                        {/* Commercial Two-Column List */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                            {/* Left Column */}
                                            <div className="space-y-4">
                                                {["Product Bundles", "Pricing Tables", "Discount Matrices", "Promotion Codes"].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Right Column */}
                                            <div className="space-y-4">
                                                {["Eligibility Rules", "Sales Channels", "Recurring Charges", "One-Time Fees"].map((item, i) => (
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
                                                    <Server className="h-8 w-8 text-blue-600" />
                                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                        <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900">Technical Catalog</h3>
                                        </div>

                                        {/* Technical Two-Column List */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                            {/* Left Column */}
                                            <div className="space-y-4">
                                                {["Resource Specifications", "Service Decomposition", "Dependency Mapping", "Fulfillment Flows"].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Right Column */}
                                            <div className="space-y-4">
                                                {["Network Parameters", "Activation Scripts", "QoS Rules", "Equipment Specs"].map((item, i) => (
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
                <SectionHeading className="text-center mb-16">Delivery Methodology</SectionHeading>
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

                    {/* Node 1: Audit (Top) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 aspect-square rounded-full border-4 border-slate-900 bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-10">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Audit</h4>
                        <p className="text-sm text-slate-600">Review current pricing.</p>
                    </div>

                    {/* Node 2: Simplify (Right) */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-48 aspect-square rounded-full border-4 border-slate-700 bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-10">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Simplify</h4>
                        <p className="text-sm text-slate-600">Consolidate product SKUs.</p>
                    </div>

                    {/* Node 3: Implement (Bottom) */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 aspect-square rounded-full border-4 border-slate-700 bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-10">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Implement</h4>
                        <p className="text-sm text-slate-600">Deploy rule engine.</p>
                    </div>

                    {/* Node 4: Enable (Left) */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-48 aspect-square rounded-full border-4 border-slate-700 bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-10">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Enable</h4>
                        <p className="text-sm text-slate-600">Train sales teams.</p>
                    </div>
                </div>

                {/* Mobile Fallback (Linear) */}
                <div className="grid grid-cols-1 gap-6 md:hidden">
                    {[{ title: "Audit", desc: "Review current pricing." }, { title: "Simplify", desc: "Consolidate product SKUs." }, { title: "Implement", desc: "Deploy rule engine." }, { title: "Enable", desc: "Train sales teams." }].map((item, i) => (
                        <div key={i} className="bg-white border-2 border-slate-200 rounded-full p-8 text-center shadow-sm">
                            <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6) USE CASES */}

            {/* 6) USE CASES */}
            <HighImpactUseCases
                heading="High-Impact Use Cases"
                useCases={[
                    { title: "B2B Quoting", fullTitle: "Complex B2B Solution Quoting", desc: "Configure multi-site MPLS/SD-WAN deals with accurate pricing in minutes.", icon: Box, bgColor: "bg-[#cfe5ff]", textColor: "text-slate-900" },
                    { title: "Product Launch", fullTitle: "Rapid Product Launch", desc: "Roll out new 5G bundles and promotions across all channels instantly.", icon: Zap, bgColor: "bg-[#8cc3ff]", textColor: "text-slate-900" },
                    { title: "Omni-Channel", fullTitle: "Omni-Channel Consistency", desc: "Ensure pricing matches across self-service, assisted sales, and partner portals.", icon: ShoppingCart, bgColor: "bg-[#007bff]", textColor: "text-white" },
                    { title: "Contract Mgmt", fullTitle: "Contract Lifecycle Management", desc: "Automate renewals and ensure compliance with master service agreements.", icon: FileText, bgColor: "bg-[#0056b3]", textColor: "text-white" },
                    { title: "Discount Logic", fullTitle: "Intelligent Discounting", desc: "AI-driven discount recommendations to maximize win rates without margin erosion.", icon: Tag, bgColor: "bg-[#003380]", textColor: "text-white" },
                    { title: "Order Capture", fullTitle: "Clean Order Capture", desc: "Validate technical feasibility before the quote is even signed.", icon: CheckCircle2, bgColor: "bg-[#001a40]", textColor: "text-white" }
                ]}
            />

            {/* 7) ENGAGEMENT MODELS */}
            <LadderOfValue
                steps={[
                    {
                        step: 1,
                        title: "Catalog Audit",
                        description: "We analyze your current SKUs, bundles, and pricing rules to identify complexity hotspots. (2 Weeks)."
                    },
                    {
                        step: 2,
                        title: "Core Configuration",
                        description: "Rapid Sprints. We configure the product master, pricing logic, and discounting rules in the new CPQ engine."
                    },
                    {
                        step: 3,
                        title: "Sales Enablement",
                        description: "Training and change management to ensure your sales team adopts the new tool effectively."
                    }
                ]}
            />

            {/* 8) FAQ */}
            <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <SectionHeading className="text-center mb-12">Common Questions</SectionHeading>
                <div className="space-y-4">
                    <AccordionItem
                        question="How do you handle complex B2B bundles?"
                        answer="Our CPQ engine supports nested configuration logic, allowing for multi-site, multi-product bundles with dependency rules that prevent technical invalidity."
                        isOpen={openFaqIndex === 0}
                        onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                    />
                    <AccordionItem
                        question="Can I change pricing without IT support?"
                        answer="Yes. The commercial catalog is designed for business users. Product managers can update base rates, discounts, and promotions via a simple UI without coding."
                        isOpen={openFaqIndex === 1}
                        onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                    />
                    <AccordionItem
                        question="Does this integrate with Salesforce?"
                        answer="Absolutely. We have native connectors for major CRMs including Salesforce, Dynamics 365, and HubSpot, ensuring seamless data flow."
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
                        Empower your sales team with the tools to quote faster, smarter, and more accurately.
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
