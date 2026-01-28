"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const industries = [
    { name: "Enterprise Operators", image: "/images/industries/enterprise.png" },
    { name: "IoT Service Providers", image: "/images/industries/iot.png" },
    { name: "MVNO Start-ups", image: "/images/industries/mvno.png" },
    { name: "Media & Broadcasters", image: "/images/industries/media.png" },
    { name: "Government Agencies", image: "/images/industries/government.png" },
    { name: "Cloud Service Providers", image: "/images/industries/cloud.png" },
    { name: "Smart Cities", image: "/images/industries/smartcity.png" },
    { name: "Satellite Communications", image: "/images/industries/satellite.png" },
]

export function Industries() {
    return (
        <section className="py-24 bg-gradient-to-b from-muted/30 to-background border-t border-border overflow-hidden">
            <div className="container mx-auto px-4 mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                >
                    Empowering Industries Worldwide
                </motion.h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            </div>

            {/* Infinite Scroll Container */}
            <div className="relative flex w-full overflow-x-hidden group py-8">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none" />

                <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{ x: [0, -1200] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {[...industries, ...industries, ...industries].map((ind, index) => (
                        <div
                            key={index}
                            className="bg-card w-72 h-64 rounded-3xl border border-border/60 shadow-sm flex flex-col items-center pt-10 gap-6 hover:scale-105 hover:shadow-xl hover:border-primary/50 transition-all duration-500 group/card relative overflow-hidden"
                        >
                            {/* Placeholder to maintain layout */}
                            <div className="h-32 w-32 shrink-0" />

                            {/* Text Content */}
                            <span className="font-semibold text-foreground text-center whitespace-normal leading-tight px-4 transition-all duration-300 group-hover/card:opacity-0 group-hover/card:translate-y-4 relative z-10">
                                {ind.name}
                            </span>

                            {/* Animated Image Container */}
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 size-32 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] z-0 
                                group-hover/card:top-0 group-hover/card:left-0 group-hover/card:translate-x-0 group-hover/card:size-full group-hover/card:rounded-none">
                                <div className="relative w-full h-full filter drop-shadow-md transition-all duration-700">
                                    <Image
                                        src={ind.image}
                                        alt={ind.name}
                                        fill
                                        className="object-cover transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-4 mt-24 text-center">
                <div className="max-w-3xl mx-auto bg-card border border-border rounded-3xl p-10 md:p-14 shadow-lg ring-1 ring-border/50">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Ready to modernize your operations?
                    </h3>
                    <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                        Join leading telecom providers who trust us to deliver scalable, secure solutions for their mission-critical infrastructure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 rounded-full text-base">
                            <Link href="mailto:infohr@sapphiretelecomconsulting.com">Contact Us Today</Link>
                        </Button>

                    </div>
                </div>
            </div>
        </section>
    )
}
