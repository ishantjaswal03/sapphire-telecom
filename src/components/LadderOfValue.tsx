"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { SectionHeading } from "@/components/SectionHeading"

interface LadderStep {
    step: number;
    title: string;
    description: string;
}

interface LadderOfValueProps {
    steps: LadderStep[];
    heading?: string;
}

export function LadderOfValue({ steps, heading }: LadderOfValueProps) {
    // We expect 3 steps: 1, 2, 3.
    // We want to render them in REVERSE order: 3 (Top), 2 (Mid), 1 (Bot).
    // Colors map to the step level (3=Dark, 2=Mid, 1=Light).

    // Sort steps descending by step number to render top-down
    const sortedSteps = [...steps].sort((a, b) => b.step - a.step);

    const getBgColor = (stepNum: number) => {
        switch (stepNum) {
            case 3: return "bg-[#1e3a5f]"; // Dark Navy (Top)
            case 2: return "bg-[#2b89c0]"; // Medium Blue
            case 1: return "bg-[#6fbbe5]"; // Light Blue (Bottom)
            default: return "bg-blue-600";
        }
    }

    return (
        <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center justify-center font-sans">
            <div className="w-full max-w-2xl flex flex-col items-center">

                {/* Title Heading */}
                <SectionHeading className="text-center mb-16">{heading || "Engagement Models"}</SectionHeading>

                {/* The Ladder Stack */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }} // Adjusted for better mobile trigger
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                    className="flex flex-col items-center w-full space-y-0"
                >
                    {sortedSteps.map((data, index) => (
                        <React.Fragment key={data.step}>
                            {/* Step Card */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6, ease: "easeOut" }
                                    }
                                }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full max-w-md ${getBgColor(data.step)} text-white p-8 rounded-xl shadow-lg 
                                transition-transform duration-300 hover:scale-105 cursor-default group`}
                            >
                                <div className="text-center">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                                        Step {data.step}: {data.title}
                                    </h3>
                                    <p className="text-sm md:text-base opacity-90 font-medium">
                                        {data.description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Arrow (only between steps) - index < length - 1 means strictly between items */}
                            {index < sortedSteps.length - 1 && (
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8 },
                                        visible: {
                                            opacity: 1,
                                            scale: 1,
                                            transition: { duration: 0.4 }
                                        }
                                    }}
                                    className="py-4 flex flex-col items-center"
                                >
                                    <ArrowUp className="text-[#6fbbe5] w-8 h-8 animate-pulse" strokeWidth={3} />
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
