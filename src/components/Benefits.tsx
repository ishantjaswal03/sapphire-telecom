import Image, { StaticImageData } from "next/image"
import { CheckCircle2 } from "lucide-react"
import { SectionHeading } from "@/components/SectionHeading"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface OrbitingItem {
    title: string
    desc: string
}

interface BenefitsProps {
    heading: ReactNode
    description: string
    capabilities: string[]
    buttonText?: string
    centralImage: string | StaticImageData
    centralImageAlt?: string
    orbitingItems: OrbitingItem[]
    animationDuration?: string
}

export function Benefits({
    heading,
    description,
    capabilities,
    buttonText,
    centralImage,
    centralImageAlt = "Benefits Core System",
    orbitingItems,
    animationDuration = "30s"
}: BenefitsProps) {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LEFT COLUMN: Content */}
                    <div className="w-full lg:w-1/2">
                        <SectionHeading className="items-center text-center lg:items-start lg:text-left mb-6">
                            {heading}
                        </SectionHeading>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed text-center lg:text-left">
                            {description}
                        </p>

                        <h4 className="text-xl font-bold text-slate-900 mb-6 text-center lg:text-left">Key Capabilities</h4>
                        <ul className="space-y-4 mb-10">
                            {capabilities.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 justify-center lg:justify-start">
                                    <div className="mt-1 h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="h-3 w-3 text-cyan-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium text-left">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {buttonText && (
                            <button className="px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-600 font-semibold hover:bg-cyan-50 transition-colors mx-auto lg:mx-0 block">
                                {buttonText}
                            </button>
                        )}
                    </div>

                    {/* RIGHT COLUMN: Circular Workflow Diagram */}
                    <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] flex items-center justify-center">
                        {/* Central Core Image */}
                        <div className="relative z-10 w-[280px] h-[280px] lg:w-[450px] lg:h-[450px] rounded-full flex items-center justify-center">
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
                            <Image
                                src={centralImage}
                                alt={centralImageAlt}
                                width={500}
                                height={500}
                                className="object-contain relative z-10 drop-shadow-2xl animate-spin"
                                style={{ animationDuration: animationDuration }}
                            />
                        </div>

                        {/* Mobile Carousel - Visible only on mobile */}
                        <div className="lg:hidden absolute inset-0 z-20 flex items-center overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4 no-scrollbar">
                            {orbitingItems.map((card, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="min-w-[240px] min-h-[140px] bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-slate-100 snap-center flex flex-col justify-center"
                                >
                                    <h5 className="font-bold text-slate-900 text-lg mb-2">{card.title}</h5>
                                    <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Orbiting Cards - Hidden on Mobile */}
                        {orbitingItems.map((item, index) => {
                            // Calculate positions roughly based on index to distribute them (Corner positioning as per original design)
                            // 0: Top Left, 1: Top Right, 2: Bottom Right, 3: Bottom Left
                            // Or utilize the original classNames logic if the count is fixed to 4.
                            // The original had specific classes for specific positions. I will replicate that logic assuming 4 items for best fit, 
                            // or verify how many items are passed. The original had fixed 4 positions.

                            let positionClass = "";
                            if (index === 0) positionClass = "top-0 left-0 lg:top-10 lg:left-0";
                            else if (index === 1) positionClass = "top-0 right-0 lg:top-10 lg:right-0";
                            else if (index === 2) positionClass = "bottom-0 right-0 lg:bottom-10 lg:right-0";
                            else if (index === 3) positionClass = "bottom-0 left-0 lg:bottom-10 lg:left-0";

                            // If more than 4, we might need a different logic, but for now assuming 4 or less for corner layout.
                            // Use inline styles if more flexibility is needed later.

                            return (
                                <div key={index} className={`hidden lg:block absolute ${positionClass} z-20 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-[180px]`}>
                                    <h5 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h5>
                                    <p className="text-xs text-slate-500">{item.desc}</p>
                                </div>
                            )
                        })}

                        {/* Arrows (SVG Overlay) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="250" cy="250" r="180" stroke="url(#blue-gradient)" strokeWidth="4" strokeDasharray="20 10" className="opacity-30" />
                            <path d="M 250 50 A 200 200 0 0 1 450 250" stroke="url(#blue-gradient)" strokeWidth="6" strokeLinecap="round" className="opacity-80" markerEnd="url(#arrowhead)" />
                            <path d="M 450 250 A 200 200 0 0 1 250 450" stroke="url(#blue-gradient)" strokeWidth="6" strokeLinecap="round" className="opacity-80" markerEnd="url(#arrowhead)" />
                            <path d="M 250 450 A 200 200 0 0 1 50 250" stroke="url(#blue-gradient)" strokeWidth="6" strokeLinecap="round" className="opacity-80" markerEnd="url(#arrowhead)" />
                            <path d="M 50 250 A 200 200 0 0 1 250 50" stroke="url(#blue-gradient)" strokeWidth="6" strokeLinecap="round" className="opacity-80" markerEnd="url(#arrowhead)" />

                            <defs>
                                <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3b82f6" />
                                    <stop offset="100%" stopColor="#06b6d4" />
                                </linearGradient>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4" />
                                </marker>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}
