"use client"

import { useState, useEffect } from "react"
import HomePage from "@/components/pages/HomePage"
import BillingPage from "@/components/pages/BillingPage"
import BssOssPage from "@/components/pages/BssOssPage"
import CpqPage from "@/components/pages/CpqPage"
import MvnoPage from "@/components/pages/MvnoPage"
import RanPage from "@/components/pages/RanPage"
import SaasPaymentPage from "@/components/pages/SaasPaymentPage"
import { PrivacyPolicy } from "@/components/pages/PrivacyPolicy"
import { TermsOfService } from "@/components/pages/TermsOfService"

export default function MainRouter() {
    const [currentPath, setCurrentPath] = useState("")

    useEffect(() => {
        // Function to handle hash changes
        const handleHashChange = () => {
            const hash = window.location.hash.replace(/^#/, "") || "/"
            setCurrentPath(hash)
            window.scrollTo(0, 0)
        }

        // Set initial path
        handleHashChange()

        // Add event listener
        window.addEventListener("hashchange", handleHashChange)

        // Cleanup
        return () => window.removeEventListener("hashchange", handleHashChange)
    }, [])

    // Simple router logic
    const renderPage = () => {
        // Normalize path to remove trailing slashes and ensure lowercase
        const normalizedPath = currentPath.toLowerCase().replace(/^\/+/, "").replace(/\/+$/, "")

        switch (normalizedPath) {
            case "":
            case "/":
                return <HomePage />
            case "solutions/billing":
                return <BillingPage />
            case "solutions/bss-oss":
                return <BssOssPage />
            case "solutions/cpq":
                return <CpqPage />
            case "solutions/mvno":
                return <MvnoPage />
            case "solutions/ran":
                return <RanPage />
            case "solutions/saas-payment":
                return <SaasPaymentPage />
            case "privacy-policy":
                return <PrivacyPolicy />
            case "terms-of-service":
                return <TermsOfService />
            default:
                console.warn(`Unknown hash path: ${currentPath}, defaulting to Home`)
                return <HomePage />
        }
    }

    return (
        <div className="main-router-content">
            {renderPage()}
        </div>
    )
}
