"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/SectionHeading"
import { CheckCircle2, LucideIcon } from "lucide-react"

export interface UseCaseItem {
    title?: string;
    fullTitle: string;
    desc: string;
    icon: LucideIcon;
    bgColor: string;
    textColor: string;
}

interface HighImpactUseCasesProps {
    useCases: UseCaseItem[];
    heading?: string;
}

export function HighImpactUseCases({ useCases, heading = "High-Impact Use Cases" }: HighImpactUseCasesProps) {
    const [activeUseCase, setActiveUseCase] = useState(0);

    return (
        <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 bg-white" >
            <SectionHeading className="text-center mb-16">{heading}</SectionHeading>

            <div className="relative">
                {/* Mobile Carousel */}
                <div className="lg:hidden flex flex-col gap-6">
                    <div
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4 no-scrollbar items-start"
                        onScroll={(e) => {
                            const container = e.currentTarget;
                            const scrollLeft = container.scrollLeft;
                            const cardWidth = container.offsetWidth * 0.85 + 16; // 85vw + gap-4 (16px) approx
                            const index = Math.round(scrollLeft / cardWidth);
                            setActiveUseCase(index);
                            setActiveUseCase(index);
                        }}
                    >
                        {useCases.map((uc, i) => (
                            <motion.div
                                key={i}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="min-w-[85vw] md:min-w-[60%] snap-center bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col items-start justify-between min-h-[320px]"
                            >
                                <div className="w-full">
                                    <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                        <uc.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{uc.fullTitle}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-6">{uc.desc}</p>
                                </div>

                                <div className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 mt-auto">
                                    <h5 className="font-semibold text-slate-900 mb-2 flex items-center gap-2 text-sm">
                                        <CheckCircle2 className="h-4 w-4 text-green-500" /> Business Impact
                                    </h5>
                                    <p className="text-slate-600 text-sm">Increased average revenue per user (ARPU) by 15%.</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2">
                        {useCases.map((_, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "h-2 rounded-full transition-all duration-300",
                                    activeUseCase === i ? "w-6 bg-blue-600" : "w-2 bg-slate-300"
                                )}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop Tabs Layout */}
                <div className="hidden lg:flex flex-row gap-8 max-w-6xl mx-auto">
                    {/* Left: Tabs */}
                    <div className="w-1/3 flex flex-col gap-2">
                        {useCases.map((uc, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveUseCase(i)}
                                className={cn(
                                    "text-left px-6 py-4 rounded-xl transition-all duration-300 font-medium text-lg flex items-center justify-between group",
                                    activeUseCase === i
                                        ? `bg-white shadow-md text-blue-600 border-l-4 ${uc.bgColor.replace('bg-', 'border-')}`
                                        : "hover:bg-white/50 text-slate-600 hover:text-slate-900"
                                )}
                            >
                                {uc.fullTitle}
                            </button>
                        ))}
                    </div>

                    {/* Right: Content Panel */}
                    <div className={cn(
                        "w-2/3 rounded-3xl p-12 shadow-xl border border-slate-100 relative overflow-hidden flex flex-col justify-center min-h-[400px] transition-colors duration-500",
                        useCases[activeUseCase].bgColor
                    )}>
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <div className="h-64 w-64 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl" />
                        </div>

                        <AnimatePresence mode="wait">
                            {useCases.map((uc, i) => (
                                i === activeUseCase && (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative z-10"
                                    >
                                        <div className={cn(
                                            "h-16 w-16 rounded-2xl flex items-center justify-center mb-6",
                                            uc.textColor === "text-white" ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"
                                        )}>
                                            <uc.icon className="h-8 w-8" />
                                        </div>
                                        <h3 className={cn("text-3xl font-bold mb-4", uc.textColor)}>{uc.fullTitle}</h3>
                                        <p className={cn("text-xl leading-relaxed mb-8", uc.textColor === "text-white" ? "text-white/90" : "text-slate-600")}>{uc.desc}</p>

                                        <div className={cn(
                                            "p-6 rounded-2xl border",
                                            uc.textColor === "text-white"
                                                ? "bg-white/10 backdrop-blur-sm border-white/20"
                                                : "bg-slate-50 border-slate-100"
                                        )}>
                                            <h5 className={cn(
                                                "font-semibold mb-3 flex items-center gap-2",
                                                uc.textColor === "text-white" ? "text-white" : "text-slate-900"
                                            )}>
                                                <CheckCircle2 className={cn(
                                                    "h-5 w-5",
                                                    uc.textColor === "text-white" ? "text-green-300" : "text-green-500"
                                                )} /> Business Impact
                                            </h5>
                                            <p className={cn(
                                                uc.textColor === "text-white" ? "text-white/80" : "text-slate-600"
                                            )}>Increased average revenue per user (ARPU) by 15%.</p>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
