"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ShieldCheck, Zap, Layers, Trophy } from "lucide-react"

const features = [
    {
        title: "Deep Telecom Expertise",
        description: "Decades of experience building carrier-grade networks and business systems.",
        icon: Layers,
        color: "bg-blue-500",
    },
    {
        title: "Security & Compliance",
        description: "Rigorous standards protecting your infrastructure and customer data.",
        icon: ShieldCheck,
        color: "bg-indigo-900",
    },
    {
        title: "End-to-End Integration",
        description: "Seamlessly connecting OSS, BSS, and network layers for unified operations.",
        icon: Zap,
        color: "bg-purple-600",
    },
]

export function WhyChooseUs() {
    return (
        <section id="company" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                <Trophy className="h-5 w-5" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                                Proven Excellence
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            <span className="text-blue-500 block">Built for Scale,</span>
                            <span className="text-slate-900 block">Engineered for Growth</span>
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                            We don't just provide software; we engineer the foundation for your future. Our solutions are architected to handle the massive data loads and low-latency requirements of modern telecom networks.
                        </p>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-lg aspect-square">
                            <Image
                                src="/images/scale-growth.png"
                                alt="Scalable Growth Architecture"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Features Row - Colored Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            className={`${feature.color} rounded-3xl p-8 text-white shadow-xl group hover:shadow-2xl transition-all duration-300`}
                        >
                            <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
