"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function GlobalTouchEffect() {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

    useEffect(() => {
        const handlePointerDown = (e: PointerEvent) => {
            const newRipple = {
                x: e.clientX,
                y: e.clientY,
                id: Date.now(),
            }
            setRipples((prev) => [...prev, newRipple])
        }

        window.addEventListener("pointerdown", handlePointerDown)
        return () => window.removeEventListener("pointerdown", handlePointerDown)
    }, [])

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            <AnimatePresence>
                {ripples.map((ripple) => (
                    <motion.span
                        key={ripple.id}
                        initial={{ opacity: 0.5, scale: 0 }}
                        animate={{ opacity: 0, scale: 2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        onAnimationComplete={() => {
                            setRipples((prev) => prev.filter((r) => r.id !== ripple.id))
                        }}
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                            position: "absolute",
                            transform: "translate(-50%, -50%)",
                        }}
                        className="pointer-events-none block h-8 w-8 rounded-full bg-blue-500/30"
                    />
                ))}
            </AnimatePresence>
        </div>
    )
}
