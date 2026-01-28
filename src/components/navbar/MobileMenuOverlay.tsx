"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface MobileMenuOverlayProps {
    isOpen: boolean
    onClose: () => void
    navItems: any[]
}

export function MobileMenuOverlay({ isOpen, onClose, navItems }: MobileMenuOverlayProps) {
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Splash Background Effect */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ scale: 3000, opacity: 1 }} // Scale huge to cover screen
                        exit={{ scale: 0, opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}
                        transition={{ duration: 0.6, ease: [0.755, 0.050, 0.855, 0.060] }} // Custom cubic-bezier from reference
                        className="fixed top-6 right-6 w-1 h-1 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full z-[100]"
                    />

                    {/* Menu Content Container */}
                    <motion.nav
                        className="fixed inset-0 z-[100] h-full w-full overflow-y-auto touch-pan-y" // touch-pan-y allows vertical scroll but lets us capture horizontal
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.3 } }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        onPanEnd={(event, info) => {
                            // Detect Swipe Left or Right (offset.x)
                            // Threshold: 100px or high velocity
                            const swipeThreshold = 50;
                            if (Math.abs(info.offset.x) > swipeThreshold) {
                                onClose();
                            }
                        }}
                    >
                        <div className="min-h-full w-full flex flex-col justify-center items-center py-20 px-4"> {/* Inner container for centering and spacing */}
                            <ul className="flex flex-col items-center gap-8">
                                {navItems.map((item, index) => (
                                    <motion.li
                                        key={item.name}
                                        initial={{ opacity: 0, y: -40 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: 0.3 + (index * 0.1),
                                                duration: 0.3,
                                                ease: [0.000, 0.995, 0.990, 1.000] // Custom spring-like bezier
                                            }
                                        }}
                                        exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                                    >
                                        {item.children ? (
                                            <div className="flex flex-col items-center gap-4">
                                                <span className="text-xl font-bold uppercase tracking-[0.2em] text-white/50 border-b-2 border-white/20 pb-2">
                                                    {item.name}
                                                </span>
                                                <div className="flex flex-col items-center gap-3">
                                                    {item.children.map((child: any) => (
                                                        <a
                                                            key={child.name}
                                                            href={child.href}
                                                            onClick={onClose}
                                                            className="text-lg text-white/90 hover:text-white font-medium hover:scale-105 transition-transform"
                                                        >
                                                            {child.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <a
                                                href={item.href}
                                                onClick={onClose}
                                                className={cn(
                                                    "block text-2xl md:text-3xl font-bold text-white uppercase tracking-[0.3em] hover:bg-black/10 transition-colors px-6 py-3 rounded-lg",
                                                    item.name === "Email Us" ? "" : item.className // Remove desktop button styling for Email Us to match menu theme
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.nav>
                </>
            )}
        </AnimatePresence>
    )
}
