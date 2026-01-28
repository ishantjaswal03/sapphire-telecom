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
    Globe,
    Zap,
    Shield,
    BarChart3,
    Layers,
    Users,
    Server,
    Smartphone,
    Receipt,
    Activity as LucideActivity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { SectionHeading } from "@/components/SectionHeading"
import { LadderOfValue } from "@/components/LadderOfValue"
import { HighImpactUseCases } from "@/components/HighImpactUseCases"
import { Benefits } from "@/components/Benefits"

// --- Components ---


const BenefitCard = ({ title, description }: { title: string, description: string }) => (
    <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all h-full">
        <h4 className="font-semibold text-slate-900 mb-2">{title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
)

const TargetCard = ({ title, icon: Icon }: { title: string, icon: any }) => (
    <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center hover:border-blue-500/50 transition-colors group">
        <div className="mx-auto w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
            <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
    </div>
)

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

function ActivityIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    )
}

// --- Main Page Component ---

export default function BssOssPage() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const [capabilityView, setCapabilityView] = useState<'bss' | 'oss'>('bss');



    const featureCards = [
        { title: "Zero-Touch Provisioning", desc: "Automate service activation without manual touch." },
        { title: "Unified Data Model", desc: "Single source of truth for products and users." },
        { title: "Proactive Assurance", desc: "Resolve faults before customers notice." },
        { title: "Real-Time Charging", desc: "Monetize any service with convergent engines." }
    ];

    return (
        <div className="min-h-screen bg-white pb-20 font-sans selection:bg-cyan-100 selection:text-cyan-900">

            {/* 1) HERO SECTION (NEW) - White Tech Background Demo */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0 h-full w-full overflow-hidden">
                    <Image
                        src="/images/bss-oss-hero.png" // Ensure this file is in public/images/
                        alt="BSS OSS background"
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
                            Telecom BSS & OSS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Solutions</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl"
                        >
                            Unify customer, revenue, and network operations with modern BSS/OSS—built for speed, scale, and measurable outcomes.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-3 mb-12"
                        >
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                <Zap className="h-4 w-4 text-blue-500" />
                                <span className="text-slate-700">Faster Order-to-Activation</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                <BarChart3 className="h-4 w-4 text-blue-500" />
                                <span className="text-slate-700">Revenue & Margin Protection</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                <Shield className="h-4 w-4 text-blue-500" />
                                <span className="text-slate-700">Assured Network Experiences</span>
                            </div>
                        </motion.div>


                    </div>
                </div>
            </section>

            {/* 2) What BSS & OSS Should Do for You */}
            <Benefits
                heading={<>What BSS & OSS <br /><span className="text-blue-600">Should Do for You</span></>}
                description="Modern telecom operations are about more than just keeping the lights on. It's about unifing the customer journey from the first click to final provisioning, ensuring a seamless flow of data and value."
                capabilities={[
                    "Unified Product Catalog management",
                    "Automated Order Management & Orchestration",
                    "Convergent Billing & Revenue Management",
                    "Service Assurance & Fault Management",
                    "Network Inventory Realignment",
                    "Customer Self Service Portals"
                ]}
                centralImage="/images/bss-oss core shaped.PNG"
                centralImageAlt="Core BSS OSS System"
                orbitingItems={[
                    { title: "Zero-Touch Provisioning", desc: "Automate service activation without manual touch." },
                    { title: "Unified Data Model", desc: "Single source of truth for products and users." },
                    { title: "Proactive Assurance", desc: "Resolve faults before customers notice." },
                    { title: "Real-Time Charging", desc: "Monetize any service with convergent engines." }
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
                        {/* Staggered Honeycomb Layout 
                            Col 1: Item 1 & 3
                            Col 2: Item 2 & 4 (Shifted Down)
                        */}

                        {/* Column 1 */}
                        <div className="flex flex-col gap-6 md:mt-0">
                            {[
                                { title: "CIO/CTO & Architecture Leadership", icon: Server },
                                { title: "Revenue Leaders", icon: BarChart3 }
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
                                { title: "COO & Operations", icon: Layers },
                                { title: "MVNOs & Digital Brands", icon: Smartphone }
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
                                        onClick={() => setCapabilityView('bss')}
                                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${capabilityView === 'bss'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-transparent text-gray-700 hover:text-gray-900'
                                            }`}
                                    >
                                        BSS Capabilities
                                    </button>
                                    <button
                                        onClick={() => setCapabilityView('oss')}
                                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${capabilityView === 'oss'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-transparent text-gray-700 hover:text-gray-900'
                                            }`}
                                    >
                                        OSS Capabilities
                                    </button>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="border border-gray-200 rounded-2xl p-8">
                                {capabilityView === 'bss' ? (
                                    <>
                                        {/* BSS Header */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                                                <div className="relative">
                                                    <Users className="h-8 w-8 text-blue-600" />
                                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                        <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900">BSS Capabilities</h3>
                                        </div>

                                        {/* BSS Two-Column List */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                            {/* Left Column */}
                                            <div className="space-y-4">
                                                {["CRM 360 View", "Order Management", "Revenue Assurance", "Collections"].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Right Column */}
                                            <div className="space-y-4">
                                                {["CPQ & Product Catalog", "Convergent Billing", "Partner Mgmt", "Self-Service Apps"].map((item, i) => (
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
                                        {/* OSS Header */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                                                <div className="relative">
                                                    <ActivityIcon className="h-8 w-8 text-blue-600" />
                                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                        <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900">OSS Capabilities</h3>
                                        </div>

                                        {/* OSS Two-Column List */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                            {/* Left Column */}
                                            <div className="space-y-4">
                                                {["Network Inventory", "Service Orchestration", "Performance Analytics", "Workforce Mgmt"].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Right Column */}
                                            <div className="space-y-4">
                                                {["Service Provisioning", "Fault Management", "Service Assurance", "AIOps / Automation"].map((item, i) => (
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

                    {/* Node 1: Diagnose (Top) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 aspect-square rounded-full border-4 border-slate-900 bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-10">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Diagnose</h4>
                        <p className="text-sm text-slate-600">Audit legacy stack gaps.</p>
                    </div>

                    {/* Node 2: Design (Right) */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-48 aspect-square rounded-full border-4 border-slate-700 bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-10">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Design</h4>
                        <p className="text-sm text-slate-600">Blueprint to-be architecture.</p>
                    </div>

                    {/* Node 3: Scale (Bottom) */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 aspect-square rounded-full border-4 border-slate-700 bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-10">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Scale</h4>
                        <p className="text-sm text-slate-600">Stabilize & optimization.</p>
                    </div>

                    {/* Node 4: Deliver (Left) */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-48 aspect-square rounded-full border-4 border-slate-700 bg-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-10">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Deliver</h4>
                        <p className="text-sm text-slate-600">Agile sprints & migration.</p>
                    </div>
                </div>

                {/* Mobile Fallback (Linear) */}
                <div className="grid grid-cols-1 gap-6 md:hidden">
                    {[{ title: "Diagnose", desc: "Audit legacy stack gaps." }, { title: "Design", desc: "Blueprint to-be architecture." }, { title: "Deliver", desc: "Agile sprints & migration." }, { title: "Scale", desc: "Stabilize & optimization." }].map((item, i) => (
                        <div key={i} className="bg-white border-2 border-slate-200 rounded-full p-8 text-center shadow-sm">
                            <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>




            {/* 6) INTEGRATION & ARCHITECTURE (Abstract Representation) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto shadow-sm">
                        <SectionHeading>Designed for the API Economy</SectionHeading>
                        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
                            We follow TM Forum Open API standards to ensure your BSS/OSS stack is modular, interoperable, and future-proof.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-blue-50 text-blue-600 aspect-square hover:scale-105 transition-transform duration-300">
                                <Globe className="h-10 w-10 mb-4" />
                                <span className="font-bold text-lg">API-First</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-orange-50 text-orange-600 aspect-square hover:scale-105 transition-transform duration-300">
                                <Zap className="h-10 w-10 mb-4" />
                                <span className="font-bold text-lg">Event-Driven</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-purple-50 text-purple-600 aspect-square hover:scale-105 transition-transform duration-300">
                                <Server className="h-10 w-10 mb-4" />
                                <span className="font-bold text-lg">Cloud Native</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-teal-50 text-teal-600 aspect-square hover:scale-105 transition-transform duration-300">
                                <Shield className="h-10 w-10 mb-4" />
                                <span className="font-bold text-lg">Secure by Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* 7) USE CASES */}
            <HighImpactUseCases
                useCases={[
                    { title: "Order-to-Activation", fullTitle: "Order-to-Activation Optimization", desc: "Reduce fallout by 40% with automated orchestration workflows.", icon: Zap, bgColor: "bg-[#cfe5ff]", textColor: "text-slate-900" },
                    { title: "Digital Onboarding", fullTitle: "Digital Onboarding for MVNO", desc: "Launch new subscribers in minutes with eKYC and eSIM support.", icon: Smartphone, bgColor: "bg-[#8cc3ff]", textColor: "text-slate-900" },
                    { title: "Billing Transformation", fullTitle: "Billing System Transformation", desc: "Migrate from legacy billers to real-time convergent charging.", icon: Receipt, bgColor: "bg-[#007bff]", textColor: "text-white" },
                    { title: "Service Assurance", fullTitle: "Service Assurance Modernization", desc: "Proactive fault detection using AI-driven root cause analysis.", icon: LucideActivity, bgColor: "bg-[#0056b3]", textColor: "text-white" },
                    { title: "Inventory Recon", fullTitle: "Inventory Reconciliation", desc: "Sync physical and logical (OSS) inventory with commercial (BSS) catalogs.", icon: Layers, bgColor: "bg-[#003380]", textColor: "text-white" },
                    { title: "Revenue Leakage", fullTitle: "Revenue Leakage Reduction", desc: "Automated reconciliation to plug holes in the revenue stream.", icon: BarChart3, bgColor: "bg-[#001a40]", textColor: "text-white" }
                ]}
            />

            {/* 10) ENGAGEMENT MODELS */}
            <LadderOfValue
                steps={[
                    {
                        step: 1,
                        title: "Strategy & Blueprint",
                        description: "We assess your legacy stack and design the target architecture and migration roadmap. (2-6 weeks)."
                    },
                    {
                        step: 2,
                        title: "Implementation",
                        description: "End-to-end delivery. We build, integrate, and migrate your BSS/OSS stack."
                    },
                    {
                        step: 3,
                        title: "Advisory",
                        description: "Fractional architecture leadership to guide your internal teams or vendor selection."
                    }
                ]}
            />

            {/* 11) FAQ */}
            <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <SectionHeading className="text-center mb-12">Common Questions</SectionHeading>
                <div className="space-y-4">
                    <AccordionItem
                        question="Do you support legacy system integration?"
                        answer="Yes. We specialize in brownfield transformations, using wrapper APIs and mediation layers to expose legacy functionality while modernizing the core at your own pace."
                        isOpen={openFaqIndex === 0}
                        onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                    />
                    <AccordionItem
                        question="What is your implementation approach?"
                        answer="We favor an agile, iterative approach. Rather than a multi-year 'big bang', we deliver usable value in phases—starting with high-impact, low-risk modules like digital channels or specific product lines."
                        isOpen={openFaqIndex === 1}
                        onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                    />
                    <AccordionItem
                        question="How do we start discovery?"
                        answer="We typically begin with a 2-week architectural assessment to map your current catalog, order flows, and inventory data quality to provide a realistic roadmap."
                        isOpen={openFaqIndex === 2}
                        onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                    />
                </div>
            </section>

            {/* 12) FINAL CTA BAND */}
            <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-blue-50 rounded-3xl p-12 border border-blue-100">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Fix the Flow from Quote to Assurance?</h2>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Let's build a BSS/OSS stack that enables your business instead of holding it back.
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
        </div >
    )
}
