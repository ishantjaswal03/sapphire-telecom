"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

const solutions = [
    {
        id: "bss-oss",
        title: "Telecom BSS & OSS Solutions",
        description: "Operations Support Systems (OSS) manage network infrastructure and functions like network inventory, fault management and service assurance, while Business Support Systems (BSS) handle customer-facing activities such as billing, subscriptions and CRM.",
        image: "/images/solutions/bss-oss-glass.png",
    },
    {
        id: "cpq",
        title: "Salesforce CPQ Solutions",
        description: "CPQ software helps sales teams configure products correctly, apply consistent pricing rules and generate accurate quotes. Eliminate manual spreadsheets, reduce errors and accelerate deal cycles.",
        features: [
            "Guided product configuration with compatibility rules",
            "Dynamic pricing and discount workflows",
            "Professional quote generation and approval routing",
            "Integration with CRM and ERP systems",
        ],
        image: "/images/solutions/cpq-glass.png",
    },
    {
        id: "billing",
        title: "Zuora SaaS Billing",
        description: "Cloud-based platform that allows companies to set up flexible subscription billing (usage-based, one-time and recurring) with automated invoicing and seamless integration to payment gateways. Centralize complex billing operations significantly.",
        features: [
            "Support for over 50 pricing models",
            "Automated invoice creation and payment collection",
            "Central product catalog for easy pricing updates",
            "Revenue recognition and financial, insights",
        ],
        image: "/images/solutions/billing-glass.png",
    },
    {
        id: "mvno",
        title: "MVNO/MVNE & MVNA Architecture",
        description: "Mobile Virtual Network Operators (MVNOs) resell cellular data purchased wholesale from MNOs. MVNEs provide back-end systems—billing, data tracking, invoicing, SIM management—to help MVNOs operate efficiently.",
        features: [
            "Wholesale data purchasing and plan customization",
            "SIM provisioning, activation and lifecycle management",
            "Billing and customer portals for MVNO clients",
            "Aggregated purchasing power through MVNAs",
        ],
        image: "/images/solutions/mvno-glass.png",
    },
    {
        id: "ran",
        title: "RAN (Radio Access Network) Solutions",
        description: "The RAN connects user devices to the core network via antennas and radios. Evolution to 5G, C-RAN and Open RAN enables flexible, software-defined architectures and advanced features like network slicing.",
        features: [
            "Design and deployment of 4G/5G RANs (C-RAN, Open RAN)",
            "Integration of small cells, massive MIMO and beamforming",
            "Optimization for IoT and high-bandwidth applications",
            "Performance monitoring and analytics dashboards",
        ],
        image: "/images/solutions/ran-glass.png",
    },
    {
        id: "saas-payment",
        title: "SaaS Platform & Payment Integration",
        description: "Robust platforms for billing, subscriptions, and global payment processing. Enable seamless monetization strategies with secure, scalable infrastructure.",
        features: [
            "Advanced Subscription Management",
            "Multi-currency & Global Payment Support",
            "Secure Payment Gateways (PCI-DSS)",
            "Automated Invoicing & Dunning",
        ],
        image: "/images/solutions/saas-payment-glass.png",
    },
]

export function Expertise() {
    return (
        <section id="solutions" className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-2 block">
                            Our Capabilities
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                            Engineered for Digital Leaders
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We provide the critical infrastructure and intelligent systems that power the next generation of telecommunications.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full flex flex-col border-0 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group overflow-hidden bg-card">
                                <div className="aspect-square relative overflow-hidden bg-white/5 p-6">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={solution.image}
                                            alt={solution.title}
                                            width={280}
                                            height={280}
                                            className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2"
                                        />
                                    </div>
                                </div>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">{solution.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground line-clamp-3">
                                        {solution.description}
                                    </p>
                                </CardContent>
                                <CardFooter className="pt-0">
                                    <Button asChild variant="ghost" className="w-full justify-between hover:bg-primary/5 hover:text-primary group-hover:pl-6 transition-all">
                                        <a href={`#solutions/${solution.id}`}>
                                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    )
}
