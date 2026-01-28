"use client"

import { Hero } from "@/components/home/Hero"
import { Expertise } from "@/components/home/Expertise"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { Industries } from "@/components/home/Industries"
import { FadeIn } from "@/components/animations/FadeIn"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-cyan-100 selection:text-cyan-900">
            <FadeIn><Hero /></FadeIn>
            <FadeIn delay={0.2}><Expertise /></FadeIn>
            <FadeIn delay={0.2}><WhyChooseUs /></FadeIn>
            <FadeIn delay={0.2}><Industries /></FadeIn>
        </div>
    )
}
