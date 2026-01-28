"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MobileMenuIcon } from "@/components/navbar/MobileMenuIcon"
import { MobileMenuOverlay } from "@/components/navbar/MobileMenuOverlay"
import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/images/logo.png"
import { ChevronDown, Network, Calculator, Receipt, Smartphone, RadioTower, CreditCard, Shield, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type NavItem = {
    name: string
    href?: string
    className?: string
    children?: { name: string; href: string; icon: React.ElementType }[]
}

const navItems: NavItem[] = [
    {
        name: "Solutions",
        href: "/#solutions",
        children: [
            { name: "BSS & OSS", href: "/solutions/bss-oss", icon: Network },
            { name: "CPQ", href: "/solutions/cpq", icon: Calculator },
            { name: "Billing", href: "/solutions/billing", icon: Receipt },
            { name: "MVNO", href: "/solutions/mvno", icon: Smartphone },
            { name: "RAN", href: "/solutions/ran", icon: RadioTower },
            { name: "SaaS & Payment", href: "/solutions/saas-payment", icon: CreditCard },
        ]
    },
    {
        name: "Company",
        href: "/#company",
        children: [
            { name: "Privacy Policy", href: "/privacy-policy", icon: Shield },
            { name: "Terms of Service", href: "/terms-of-service", icon: FileText },
        ]
    },
    {
        name: "Email Us",
        href: "mailto:ishantjaswal03@gmail.com",
        className: "px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 border-none"
    },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isTop, setIsTop] = React.useState(true)
    const [isScrollingUp, setIsScrollingUp] = React.useState(true)
    const lastScrollY = React.useRef(0)

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Determine if at top
            setIsTop(currentScrollY < 20)

            // Determine scroll direction
            if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
                setIsScrollingUp(currentScrollY < lastScrollY.current)
                lastScrollY.current = currentScrollY
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "-100%", opacity: 0 },
                }}
                animate={!isTop && !isScrollingUp ? "hidden" : "visible"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(
                    "fixed top-0 w-full transition-colors duration-500 ease-in-out", // Removed transition-all to let motion handle transform
                    isOpen ? "z-[101] bg-transparent border-none" : "z-50", // Ensure header is above overlay (z-100) and transparent when open
                    !isOpen && (isTop
                        ? "bg-transparent py-6"
                        : isScrollingUp
                            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm py-4"
                            : "bg-background/70 backdrop-blur-md border-b border-border/20 shadow-sm py-2")
                )}
            >
                <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo - Restored Premium Icon */}
                    <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10">
                            <Image
                                src={logo}
                                alt="Sapphire Telecom"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
                            Sapphire Telecom Consulting
                        </Link>
                    </div>

                    {/* Right-Aligned Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navItems.map((item, index) => (
                            <div key={item.name} className="relative group">
                                {item.children ? (
                                    <>
                                        <button
                                            className={cn(
                                                "flex items-center gap-1 hoverable text-sm font-bold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors bounce",
                                            )}
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            {item.name}
                                            <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                                        </button>
                                        <div className="absolute top-full right-0 pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="bg-white/90 backdrop-blur-2xl border border-slate-200/50 rounded-2xl shadow-xl overflow-hidden p-2 flex flex-col gap-1">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors text-left group/item"
                                                    >
                                                        <div className="p-2 bg-slate-100 text-slate-500 rounded-lg group-hover/item:bg-blue-100 group-hover/item:text-blue-600 transition-colors">
                                                            {child.icon && <child.icon className="h-4 w-4" />}
                                                        </div>
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : item.href ? (
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "hoverable text-sm font-bold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors bounce",
                                            item.className
                                        )}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <span
                                        className={cn(
                                            "text-sm font-bold uppercase tracking-widest text-foreground/80 cursor-default bounce",
                                        )}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {item.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle (Right aligned) */}
                    <div className="md:hidden">
                        <MobileMenuIcon
                            isOpen={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                            className={isOpen ? "text-white" : isTop ? "text-foreground" : "text-foreground"}
                        />
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <MobileMenuOverlay
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                navItems={navItems}
            />
        </>
    )
}
