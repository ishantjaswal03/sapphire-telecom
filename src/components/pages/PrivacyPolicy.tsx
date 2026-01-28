"use client"

import React from 'react';

import { Shield, Eye, Lock, Gavel, Cookie, Share2, Globe, Calendar, UserCheck, AlertCircle, FileText, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

export function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-sans">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-b from-blue-50 via-white to-slate-50 text-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative max-w-4xl mx-auto text-center z-10">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900"
                    >
                        Privacy Policy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto"
                    >
                        We value your trust and are committed to protecting your personal information.
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

                        <PrivacySection icon={<Shield className="w-6 h-6 text-blue-600" />} title="1. Who We Are">
                            <p>
                                Sapphire Telecom Consulting (“Sapphire Telecom Consulting,” “we,” “us,” or “our”) provides software development, digital transformation, and consulting services. This Privacy Policy describes how we handle personal information in connection with our websites, products, and services (collectively, the “Services”).
                            </p>
                        </PrivacySection>

                        <PrivacySection icon={<Eye className="w-6 h-6 text-teal-500" />} title="2. Information We Collect">
                            <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-blue-500">
                                <li><strong>Information you provide</strong> (e.g., name, email, company, project details) via contact forms, sign-ups, or contracts.</li>
                                <li><strong>Automatic data</strong> (e.g., IP address, device and browser info, pages viewed, timestamps) collected via cookies and similar technologies.</li>
                                <li><strong>Business information</strong> necessary to perform an engagement, such as technical requirements and content you supply.</li>
                                <li><strong>Communications</strong> (e.g., emails, support messages, call notes) for client service and recordkeeping.</li>
                            </ul>
                        </PrivacySection>

                        <PrivacySection icon={<FileText className="w-6 h-6 text-indigo-500" />} title="3. How We Use Information">
                            <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-blue-500">
                                <li>Provide, operate, and improve the Services and deliverables.</li>
                                <li>Respond to inquiries, schedule consultations, and manage client relationships.</li>
                                <li>Customize content, perform analytics, and enhance user experience.</li>
                                <li>Secure our systems, prevent fraud, and enforce agreements.</li>
                                <li>Comply with legal obligations and exercise legal claims.</li>
                            </ul>
                        </PrivacySection>

                        <PrivacySection icon={<Gavel className="w-6 h-6 text-rose-500" />} title="4. Legal Bases (EEA/UK users)">
                            <p>Where applicable, we process personal data based on:</p>
                            <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-blue-500">
                                <li>(i) contract necessity,</li>
                                <li>(ii) legitimate interests (e.g., improving Services, securing systems),</li>
                                <li>(iii) consent (e.g., certain cookies/marketing), and</li>
                                <li>(iv) legal obligations.</li>
                            </ul>
                        </PrivacySection>

                        <PrivacySection icon={<Cookie className="w-6 h-6 text-amber-500" />} title="5. Cookies & Analytics">
                            <p>
                                We may use cookies, local storage, and analytics tools to understand usage and improve performance. You can control cookies via your browser settings. Blocking some cookies may affect site functionality.
                            </p>
                        </PrivacySection>

                        <PrivacySection icon={<Share2 className="w-6 h-6 text-purple-500" />} title="6. Sharing of Information">
                            <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-blue-500">
                                <li><strong>Vendors/Processors</strong> who assist us with hosting, security, analytics, communications, or project delivery (bound by confidentiality and data processing terms).</li>
                                <li><strong>Business transfers</strong> (e.g., merger, acquisition, financing, or sale of assets).</li>
                                <li><strong>Legal and safety</strong> (compelled disclosures, protecting rights, preventing harm or fraud).</li>
                                <li>With your consent or at your direction.</li>
                            </ul>
                        </PrivacySection>

                        <PrivacySection icon={<Globe className="w-6 h-6 text-cyan-500" />} title="7. International Transfers">
                            <p>
                                We may process information in the United States and other countries. Where required, we implement appropriate safeguards (e.g., standard contractual clauses) for cross-border transfers.
                            </p>
                        </PrivacySection>

                        <PrivacySection icon={<Calendar className="w-6 h-6 text-emerald-500" />} title="8. Data Retention">
                            <p>
                                We retain personal information for as long as necessary to provide the Services, comply with legal obligations, resolve disputes, and enforce agreements. Retention periods vary by data type and purpose.
                            </p>
                        </PrivacySection>

                        <PrivacySection icon={<Lock className="w-6 h-6 text-red-500" />} title="9. Security">
                            <p>
                                We use reasonable administrative, technical, and physical safeguards appropriate to the nature of the data and our business. No method of transmission or storage is 100% secure.
                            </p>
                        </PrivacySection>

                        <PrivacySection icon={<UserCheck className="w-6 h-6 text-blue-600" />} title="10. Your Rights">
                            <p>
                                Subject to applicable laws, you may have rights to access, correct, delete, or restrict processing of your personal data; to data portability; and to object to certain processing. You may also withdraw consent where processing is based on consent.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-blue-500">
                                <li><strong>EEA/UK:</strong> You can lodge a complaint with your local supervisory authority.</li>
                                <li><strong>California (CCPA/CPRA):</strong> You may request disclosure, correction, deletion, and opt-out of sale/share of personal information. We do not sell personal information as defined by CCPA/CPRA.</li>
                            </ul>
                            <p className="mt-4">
                                To exercise rights, email us at <a href="mailto:infohr@sapphiretelecomconsulting.com" className="text-blue-600 hover:text-blue-800 font-medium ml-1 transition-colors">infohr@sapphiretelecomconsulting.com</a>.
                            </p>
                        </PrivacySection>

                        <PrivacySection icon={<AlertCircle className="w-6 h-6 text-orange-500" />} title="11. Children’s Privacy">
                            <p>
                                Our Services are not directed to children under 13 (or 16 where applicable). We do not knowingly collect personal information from children. If you believe a child has provided us information, contact us to request deletion.
                            </p>
                        </PrivacySection>

                        <PrivacySection icon={<Eye className="w-6 h-6 text-gray-500" />} title="12. Do Not Track">
                            <p>
                                Some browsers offer “Do Not Track” signals. We currently do not respond to DNT signals. We will update this Policy if that changes.
                            </p>
                        </PrivacySection>

                        <PrivacySection icon={<Bell className="w-6 h-6 text-yellow-500" />} title="13. Changes to This Policy">
                            <p>
                                We may update this Policy from time to time. Material changes will be reflected by updating the “Last updated” date above. Your continued use of the Services after changes indicates acceptance.
                            </p>
                        </PrivacySection>

                        <PrivacySection icon={<FileText className="w-6 h-6 text-indigo-500" />} title="14. Contact Us">
                            <div className="space-y-4">
                                <p>
                                    Questions or requests? You can reach us at:
                                </p>
                                <div>
                                    <p className="font-semibold">Sapphire Telecom Consulting</p>
                                    <p>11798 SW 57th CT</p>
                                    <p>COOPER CITY, FL 33330</p>
                                </div>
                                <div className="space-y-1">
                                    <p>
                                        <span className="font-semibold">Email (Info/HR):</span>
                                        <a href="mailto:infohr@sapphiretelecomconsulting.com" className="text-blue-600 hover:text-blue-800 font-medium ml-2 transition-colors">
                                            infohr@sapphiretelecomconsulting.com
                                        </a>
                                    </p>
                                    <p>
                                        <span className="font-semibold">Email (Accounts):</span>
                                        <a href="mailto:accounts@sapphiretelecomconsulting.com" className="text-blue-600 hover:text-blue-800 font-medium ml-2 transition-colors">
                                            accounts@sapphiretelecomconsulting.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </PrivacySection>

                    </div>
                </div>
            </div>
        </div>
    );
}

function PrivacySection({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) {
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
