"use client"

import React from "react"
import { motion } from "framer-motion"

interface MobileMenuIconProps {
    isOpen: boolean
    onClick: () => void
    className?: string
}

export function MobileMenuIcon({ isOpen, onClick, className }: MobileMenuIconProps) {
    return (
        <button
            className={`relative z-50 p-2 focus:outline-none ${className}`}
            onClick={onClick}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                className="block cursor-pointer text-slate-800"
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                <g>
                    {/* Top Bar */}
                    <motion.line
                        x1="13" y1="16.5" x2="37" y2="16.5"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.25 }}
                    />

                    {/* Middle Bar 1 (Rotates 45deg) */}
                    <motion.line
                        x1="13" y1="24.5" x2="37" y2="24.5"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        style={{ originX: 0.5, originY: 0.5 }}
                        variants={{
                            closed: { rotate: 0 },
                            open: { rotate: 45 }
                        }}
                        transition={{ duration: 0.25 }}
                    />

                    {/* Middle Bar 2 (Rotates -45deg) */}
                    <motion.line
                        x1="13" y1="24.5" x2="37" y2="24.5"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        style={{ originX: 0.5, originY: 0.5 }}
                        variants={{
                            closed: { rotate: 0 },
                            open: { rotate: -45 }
                        }}
                        transition={{ duration: 0.25 }}
                    />

                    {/* Bottom Bar */}
                    <motion.line
                        x1="13" y1="32.5" x2="37" y2="32.5"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.25 }}
                    />

                    {/* Circle */}
                    <motion.circle
                        r="23" cx="25" cy="25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 1, pathOffset: 1 }} // Start hidden
                        variants={{
                            closed: { pathOffset: 1 }, // Hides the stroke
                            open: { pathOffset: 0 }    // Draws the stroke
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ rotate: -90, originX: 0.5, originY: 0.5 }} // Start from top
                    />
                </g>
            </motion.svg>
        </button>
    )
}
