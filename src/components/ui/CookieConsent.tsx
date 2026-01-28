"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check local storage for consent
        const consent = localStorage.getItem("cookieConsent")
        if (!consent) {
            // Delay slightly to feel natural
            const timer = setTimeout(() => setIsVisible(true), 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted")
        setIsVisible(false)
    }

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "declined")
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 flex justify-center pointer-events-none"
                >
                    <div className="bg-white/90 backdrop-blur-md border border-slate-200 shadow-2xl rounded-2xl p-6 w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto">
                        <div className="flex items-startgap-4">
                            <div className="p-3 bg-blue-50 rounded-xl hidden sm:block">
                                <Cookie className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 mb-1">We use cookies</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <Button
                                variant="outline"
                                onClick={handleDecline}
                                className="w-full md:w-auto whitespace-nowrap"
                            >
                                Decline
                            </Button>
                            <Button
                                onClick={handleAccept}
                                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap"
                            >
                                Accept All
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
