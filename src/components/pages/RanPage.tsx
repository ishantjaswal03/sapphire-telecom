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
    Signal,
    Radio,
    Cloud,
    Cpu,
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

export default function RanPage() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const [capabilityView, setCapabilityView] = useState<'smo' | 'ric'>('smo');



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
                        src="/images/ran-hero.png"
                        alt="RAN background"
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
                            Intelligent <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Open RAN & Networks</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl"
                        >
                            Break free from proprietary hardware. Orchestrate a cloud-native, disaggregated radio access network built for the AI era.
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

            {/* 2) What Open RAN Should Do for You */}
            <Benefits
                heading={<>What Open RAN <br /><span className="text-blue-600">Should Do for You</span></>}
                description="The future of the network is open, software-driven, and intelligent. We help you transition from black-box legacy gear to a flexible, multi-vendor ecosystem."
                capabilities={[
                    "SMO (Service Mgmt & Orchestration)",
                    "Near-RT RIC (RAN Intelligent Controller)",
                    "Non-RT RIC & rApps",
                    "O-Cloud Infrastructure Orchestration",
                    "Multi-Vendor Interoperability",
                    "Automated Lifecycle Management"
                ]}
                centralImage="/images/ran-core.PNG"
                centralImageAlt="Open RAN Controller"
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
                                { title: "CTOs & Network Planners", icon: Signal },
                                { title: "Radio Engineers", icon: Radio }
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
                                { title: "Infrastructure Ops", icon: Server },
                                { title: "Innovation Labs", icon: Cpu }
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
                                        onClick={() => setCapabilityView('smo')}
                                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${capabilityView === 'smo'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-transparent text-gray-700 hover:text-gray-900'
                                            }`}
                                    >
                                        SMO & Orchestration
                                    </button>
                                    <button
                                        onClick={() => setCapabilityView('ric')}
                                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${capabilityView === 'ric'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-transparent text-gray-700 hover:text-gray-900'
                                            }`}
                                    >
                                        RIC & Apps
                                    </button>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="border border-gray-200 rounded-2xl p-8">
                                {capabilityView === 'smo' ? (
                                    <>
                                        {/* Commercial Header */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                                                <div className="relative">
                                                    <Layers className="h-8 w-8 text-blue-600" />
                                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                        <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900">Service Mgmt & Orchestration</h3>
                                        </div>

                                        {/* Commercial Two-Column List */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                            {/* Left Column */}
                                            <div className="space-y-4">
                                                {["O-Cloud Management", "Network Service Instantiation", "Policy Management", "Fault & Performance Mgmt"].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Right Column */}
                                            <div className="space-y-4">
                                                {["NFV Orchestration", "Inventory Topology", "Slice Management", "Northbound APIs"].map((item, i) => (
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
                                                    <Cpu className="h-8 w-8 text-blue-600" />
                                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                        <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900">RIC & Intelligent Apps</h3>
                                        </div>

                                        {/* Technical Two-Column List */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                            {/* Left Column */}
                                            <div className="space-y-4">
                                                {["Near-RT RIC Platform", "Non-RT RIC Platform", "xApps (Real-Time)", "rApps (Optimization)"].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                                                        <span className="text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Right Column */}
                                            <div className="space-y-4">
                                                {["Traffic Steering", "Quality of Experience (QoE)", "Energy Saving", "Massive MIMO Optimization"].map((item, i) => (
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
                        title: "Lab Certification",
                        description: "Validate interoperability. We test your multi-vendor mix in our sandbox before touching the live network."
                    },
                    {
                        step: 2,
                        title: "Field Trial",
                        description: "Controlled roll-out. Deploy to a limited cluster of sites to tune RF performance and handover logic."
                    },
                    {
                        step: 3,
                        title: "Scale & Optimize",
                        description: "Nationwide deployment. Automated configuration and AI-driven performance tuning for the long haul."
                    }
                ]}
            />

            {/* 6) USE CASES */}
            <HighImpactUseCases
                heading="Intelligence in Action"
                useCases={[
                    { title: "Energy Saving", fullTitle: "AI-Driven Energy Saving", desc: "Automated sleep modes for radio units during low traffic hours, reducing OPEX by 20%.", icon: Zap, bgColor: "bg-[#cfe5ff]", textColor: "text-slate-900" },
                    { title: "Network Slicing", fullTitle: "Dynamic Network Slicing", desc: "Allocate dedicated radio resources for critical IoT or low-latency gaming slices.", icon: Layers, bgColor: "bg-[#8cc3ff]", textColor: "text-slate-900" },
                    { title: "Coverage Opt", fullTitle: "Coverage Optimization", desc: "Self-Optimizing Networks (SON) capabilities to patch coverage holes automatically.", icon: Signal, bgColor: "bg-[#007bff]", textColor: "text-white" },
                    { title: "Disaggregation", fullTitle: "vRAN Disaggregation", desc: "Run baseband functions on COTS hardware, breaking vendor lock-in.", icon: Server, bgColor: "bg-[#0056b3]", textColor: "text-white" },
                    { title: "Spectrum Mgmt", fullTitle: "Spectrum Efficiency", desc: "Maximize throughput on limited spectrum with intelligent massive MIMO beamforming.", icon: Radio, bgColor: "bg-[#003380]", textColor: "text-white" },
                    { title: "Edge Compute", fullTitle: "Multi-Access Edge Compute", desc: "Deploy apps closer to the user for ultra-low latency experiences.", icon: Cloud, bgColor: "bg-[#001a40]", textColor: "text-white" }
                ]}
            />

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

        </div >
    )
}
