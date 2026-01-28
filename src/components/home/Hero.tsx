"use client"

import Link from "next/link"
import Image from "next/image"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Play } from "lucide-react"

export function Hero() {
    return (
        <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-background.png"
                    alt="Abstract Network Background"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 relative">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Next-Gen Telecom Infrastructure
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]"
                    >
                        Future-Proof Your <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-800 to-secondary">
                            Network Operations
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
                    >
                        We empower telecom leaders with scalable BSS/OSS solutions, AI-driven analytics, and seamless 5G integration.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Button asChild size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 rounded-full">
                            <a href="mailto:ishantjaswal03@gmail.com">
                                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>

                    </motion.div>
                </div>

                {/* Dashboard / Image Preview Mockup - Optional for "Modern SaaS" feel */}

            </div>
        </section>
    )
}
