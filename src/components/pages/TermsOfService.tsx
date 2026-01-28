"use client"

import React from 'react';

import { Gavel, Scale, FileCheck, HelpCircle, Briefcase, UserCheck, Lock, CreditCard, Ban, AlertTriangle, XCircle, Globe, FileText, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

export function TermsOfService() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-sans">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-b from-blue-50 via-white to-slate-50 text-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                </div>

                <div className="relative max-w-4xl mx-auto text-center z-10">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900"
                    >
                        Terms of Service
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto"
                    >
                        Please read these terms carefully before using our services.
                    </motion.p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                    <div className="prose prose-lg text-slate-600 max-w-none">

                        <div className="flex items-center space-x-2 text-sm text-slate-400 mb-8 border-b border-slate-100 pb-4">
                            <span>Last Updated: {new Date().toLocaleDateString()}</span>
                        </div>

                        <TermSection icon={<Gavel className="w-6 h-6 text-blue-600" />} title="1. Terms and Conditions">
                            <p>
                                These Terms and Conditions (“Terms”) govern the use of the services provided by Sapphire Telecom Consulting (“Company”), including but not limited to website access, software development services, and any other services offered by Sapphire Telecom Consulting. By using our services, you agree to be bound by these Terms.
                            </p>
                        </TermSection>

                        <TermSection icon={<Briefcase className="w-6 h-6 text-teal-500" />} title="2. Services">
                            <p>
                                Sapphire Telecom Consulting offers a variety of specialized telecom software solutions and consulting services, including:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-blue-500">
                                <li><strong>BSS & OSS:</strong> Business Support Systems and Operations Support Systems.</li>
                                <li><strong>CPQ:</strong> Telecom-specific Configure, Price, Quote solutions.</li>
                                <li><strong>Billing:</strong> Comprehensive telecom billing and revenue management.</li>
                                <li><strong>MVNO:</strong> Mobile Virtual Network Operator enablement platforms.</li>
                                <li><strong>RAN:</strong> Radio Access Network optimization and management.</li>
                                <li><strong>SaaS & Payment:</strong> Telecom SaaS platforms and integrated payment gateways.</li>
                            </ul>
                            <p className="mt-4">
                                The specific scope of services will be defined in a separate agreement between Sapphire Telecom Consulting and the Client.
                            </p>
                        </TermSection>

                        <TermSection icon={<UserCheck className="w-6 h-6 text-indigo-500" />} title="3. Client Responsibilities">
                            <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-blue-500">
                                <li>Client shall provide Sapphire Telecom Consulting with all necessary information and materials to complete the services in a timely manner.</li>
                                <li>Client shall cooperate fully with Sapphire Telecom Consulting and its representatives throughout the project.</li>
                                <li>Client shall be responsible for obtaining and maintaining all necessary licenses and permits related to the project.</li>
                                <li>Client shall be responsible for reviewing and approving all deliverables prior to final release.</li>
                            </ul>
                        </TermSection>

                        <TermSection icon={<Scale className="w-6 h-6 text-rose-500" />} title="4. Intellectual Property">
                            <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-blue-500">
                                <li>All intellectual property rights in and to the services and deliverables, including but not limited to software, designs, and documentation, shall be owned by Sapphire Telecom Consulting.</li>
                                <li>Client shall be granted a non-exclusive, non-transferable license to use the deliverables for its internal business purposes only.</li>
                                <li>Client shall not reverse engineer, modify, or decompile the deliverables without the prior written consent of Sapphire Telecom Consulting.</li>
                            </ul>
                        </TermSection>

                        <TermSection icon={<CreditCard className="w-6 h-6 text-emerald-500" />} title="5. Payment">
                            <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-blue-500">
                                <li>Payment terms will be defined in a separate agreement between Sapphire Telecom Consulting and the Client.</li>
                                <li>Late payments may be subject to late fees.</li>
                            </ul>
                        </TermSection>

                        <TermSection icon={<Ban className="w-6 h-6 text-red-500" />} title="6. Cancellation/Refund">
                            <p>
                                As our services are intangible digital products, we cannot offer refunds or cancellations once services have been initiated. This is due to the nature of service and the immediate value they provide.
                            </p>
                        </TermSection>

                        <TermSection icon={<Lock className="w-6 h-6 text-amber-500" />} title="7. Confidentiality">
                            <p>
                                Both Sapphire Telecom Consulting and the Client agree to keep all confidential information disclosed to each other confidential. Confidential information includes but is not limited to trade secrets, business plans, technical specifications, and customer information.
                            </p>
                        </TermSection>

                        <TermSection icon={<AlertTriangle className="w-6 h-6 text-orange-500" />} title="8. Warranties and Disclaimers">
                            <p className="uppercase text-sm font-semibold tracking-wide text-gray-500 mb-2">Disclaimer</p>
                            <p>
                                SAPPHIRE TELECOM CONSULTING MAKES NO WARRANTIES, EXPRESS OR IMPLIED, OF ANY KIND WITH RESPECT TO THE SERVICES OR DELIVERABLES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. SAPPHIRE TELECOM CONSULTING DISCLAIMS ALL LIABILITY FOR ANY DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE SERVICES OR DELIVERABLES, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, AND PUNITIVE DAMAGES.
                            </p>
                        </TermSection>

                        <TermSection icon={<XCircle className="w-6 h-6 text-red-600" />} title="9. Termination">
                            <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-blue-500">
                                <li>Sapphire Telecom Consulting may terminate these Terms or any agreement with the Client immediately upon written notice if the Client breaches any provision of these Terms or the agreement.</li>
                                <li>The Client may terminate these Terms or any agreement with Sapphire Telecom Consulting upon written notice for any reason.</li>
                            </ul>
                        </TermSection>

                        <TermSection icon={<Globe className="w-6 h-6 text-cyan-500" />} title="10. Governing Law and Jurisdiction">
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of Florida, United States. Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Florida.
                            </p>
                        </TermSection>

                        <TermSection icon={<FileText className="w-6 h-6 text-purple-500" />} title="11. Entire Agreement">
                            <p>
                                These Terms constitute the entire agreement between Sapphire Telecom Consulting and the Client with respect to the subject matter hereof and supersede all prior or contemporaneous communications, representations, or agreements, whether oral or written.
                            </p>
                        </TermSection>

                        <TermSection icon={<FileCheck className="w-6 h-6 text-green-600" />} title="12. Severability">
                            <p>
                                If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.
                            </p>
                        </TermSection>

                        <TermSection icon={<PenTool className="w-6 h-6 text-pink-500" />} title="13. Amendments">
                            <p>
                                These Terms may be amended only by a written agreement signed by both Sapphire Telecom Consulting and the Client.
                            </p>
                        </TermSection>

                    </div>
                </div>
            </div>
        </div>
    );
}

function TermSection({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) {
    return (
        <section className="mb-12 last:mb-0 group">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors duration-300">
                    {icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-800 m-0">{title}</h2>
            </div>
            <div className="pl-0 md:pl-[4.5rem] leading-relaxed">
                {children}
            </div>
        </section>
    )
}
