"use client"

import { SectionHeading } from "@/components/SectionHeading"
import { motion } from "framer-motion"

interface Step {
    title: string;
    description: string;
    duration?: string; // Optional duration text (e.g. "2-6 Weeks.")
}

interface EngagementModelStepperProps {
    steps: Step[];
}

export function EngagementModelStepper({ steps }: EngagementModelStepperProps) {
    if (!steps || steps.length < 3) return null;

    return (
        <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <SectionHeading className="text-center mb-12">Engagement Models</SectionHeading>
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-0 max-w-6xl mx-auto px-4 md:px-0">

                    {/* Step 1 */}
                    <div className="relative z-30 flex-1 min-w-0 md:mr-[-1.5rem] filter drop-shadow-lg">
                        <div className="h-full bg-blue-600 p-[2px] md:clip-path-arrow-start rounded-l-2xl md:rounded-none">
                            <div className="h-full bg-white p-8 pr-12 flex flex-col justify-center clip-path-arrow-start-inner rounded-l-2xl md:rounded-none">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{steps[0].title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {steps[0].duration && <span className="font-semibold text-slate-900">{steps[0].duration} </span>}
                                    {steps[0].description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-20 flex-1 min-w-0 md:mr-[-1.5rem] filter drop-shadow-lg">
                        <div className="h-full bg-blue-600 p-[2px] md:clip-path-arrow-mid">
                            <div className="h-full bg-blue-600 p-8 pl-14 pr-12 flex flex-col justify-center text-white clip-path-arrow-mid-inner">
                                <h3 className="text-xl font-bold text-white mb-4">{steps[1].title}</h3>
                                <p className="text-blue-100 text-sm leading-relaxed">
                                    {steps[1].duration && <span className="font-semibold text-white">{steps[1].duration} </span>}
                                    {steps[1].description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10 flex-1 min-w-0 filter drop-shadow-lg">
                        <div className="h-full bg-blue-600 p-[2px] md:clip-path-arrow-end rounded-r-2xl md:rounded-none">
                            <div className="h-full bg-white p-8 pl-14 pr-12 flex flex-col justify-center clip-path-arrow-end-inner rounded-r-2xl md:rounded-none">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{steps[2].title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {steps[2].duration && <span className="font-semibold text-slate-900">{steps[2].duration} </span>}
                                    {steps[2].description}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>

            {/* Clip Path Styles */}
            <style jsx global>{`
                @media (min-width: 768px) {
                    .md\\:clip-path-arrow-start { clip-path: polygon(0% 0%, calc(100% - 1.5rem) 0%, 100% 50%, calc(100% - 1.5rem) 100%, 0% 100%); }
                    .clip-path-arrow-start-inner { clip-path: polygon(0% 0%, calc(100% - 1.5rem) 0%, 100% 50%, calc(100% - 1.5rem) 100%, 0% 100%); }
                    
                    .md\\:clip-path-arrow-mid { clip-path: polygon(0% 0%, calc(100% - 1.5rem) 0%, 100% 50%, calc(100% - 1.5rem) 100%, 0% 100%, 1.5rem 50%); }
                    .clip-path-arrow-mid-inner { clip-path: polygon(0% 0%, calc(100% - 1.5rem) 0%, 100% 50%, calc(100% - 1.5rem) 100%, 0% 100%, 1.5rem 50%); }

                    .md\\:clip-path-arrow-end { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 1.5rem 50%); }
                    .clip-path-arrow-end-inner { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 1.5rem 50%); }
                }
            `}</style>
        </section>
    )
}
