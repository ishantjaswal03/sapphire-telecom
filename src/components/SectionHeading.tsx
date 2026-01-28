import { cn } from "@/lib/utils"

interface SectionHeadingProps {
    children: React.ReactNode;
    subtitle?: string;
    className?: string;
}

export function SectionHeading({ children, subtitle, className }: SectionHeadingProps) {
    return (
        <div className={cn("flex flex-col items-center text-center mb-16", className)}>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">
                {children}
            </h2>
            <div className="h-px w-full max-w-[400px] bg-slate-300 mb-6" />
            {subtitle && (
                <p className="text-lg text-slate-600 font-medium italic">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
