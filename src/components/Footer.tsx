"use client"

import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/images/logo.png"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"

export function Footer() {
    return (
        <footer className="bg-blue-500 border-t border-blue-400 mt-auto relative">
            {/* Main Footer Content */}
            <FadeIn>
                <div className="container mx-auto px-4 py-12 pb-40 sm:px-6 lg:px-8 sm:pb-12"> {/* increased to pb-40 to clear button and sticky footer */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Brand */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="relative h-10 w-10">
                                    <Image
                                        src={logo}
                                        alt="Sapphire Telecom"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-lg font-bold text-white">Sapphire Telecom Consulting</span>
                            </div>
                            <p className="text-sm text-blue-50 max-w-xs">
                                Empowering telecom providers with next-generation technology solutions.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/solutions/bss-oss" className="text-sm text-blue-50 hover:text-white transition-colors">
                                        BSS & OSS
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/solutions/cpq" className="text-sm text-blue-50 hover:text-white transition-colors">
                                        CPQ
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/solutions/billing" className="text-sm text-blue-50 hover:text-white transition-colors">
                                        Billing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/solutions/mvno" className="text-sm text-blue-50 hover:text-white transition-colors">
                                        MVNO
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/solutions/ran" className="text-sm text-blue-50 hover:text-white transition-colors">
                                        RAN
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/solutions/saas-payment" className="text-sm text-blue-50 hover:text-white transition-colors">
                                        SaaS & Payment
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Links */}
                        <div>
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
                            <ul className="space-y-3">

                                <li>
                                    <Link href="/#company" className="text-sm text-blue-50 hover:text-white transition-colors">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <a href="mailto:ishantjaswal03@gmail.com" className="text-sm text-blue-50 hover:text-white transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Connect</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-blue-50 hover:text-white transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-blue-50 hover:text-white transition-colors">
                                    <span className="sr-only">Twitter</span>
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-blue-50 hover:text-white transition-colors">
                                    <span className="sr-only">Facebook</span>
                                    <Facebook className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-blue-400 flex flex-col items-center gap-4 text-blue-50">
                        <p className="text-sm text-center">
                            &copy; {new Date().getFullYear()} Sapphire Telecom Consulting. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <Link href="/#privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/#terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </FadeIn>


        </footer>
    )
}
