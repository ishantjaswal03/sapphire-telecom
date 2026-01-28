"use client";

import { motion } from "framer-motion";
import { createContext, useContext } from "react";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px 0px" };

export function FadeIn({
    children,
    className,
    delay = 0,
    direction = "up", // up, down, left, right
    fullWidth = false,
    stagger = false, // If true, this component acts as a stagger container
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    fullWidth?: boolean;
    stagger?: boolean;
}) {
    const isStaggerChild = useContext(FadeInStaggerContext);

    // If this is a child of a stagger container, we don't control the viewport triggering directly
    // The parent controls it. However, framer-motion variants propagate automatically.

    const getHiddenState = () => {
        switch (direction) {
            case "up": return { opacity: 0, y: 40 };
            case "down": return { opacity: 0, y: -40 };
            case "left": return { opacity: 0, x: 40 };
            case "right": return { opacity: 0, x: -40 };
            default: return { opacity: 0, y: 0 };
        }
    };

    return (
        <FadeInStaggerContext.Provider value={stagger}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={{
                    hidden: getHiddenState(),
                    visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            duration: 0.7,
                            ease: [0.21, 0.47, 0.32, 0.98],
                            delay: isStaggerChild ? 0 : delay, // If in stagger, let parent control or use default stag
                            staggerChildren: stagger ? 0.2 : 0,
                        }
                    },
                }}
                className={className}
                style={{ width: fullWidth ? "100%" : "auto" }}
            >
                {children}
            </motion.div>
        </FadeInStaggerContext.Provider>
    );
}

export function FadeInStagger({ children, faster = false, className }: { children: React.ReactNode, faster?: boolean, className?: string }) {
    return (
        <FadeInStaggerContext.Provider value={true}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ staggerChildren: faster ? 0.1 : 0.2 }}
                className={className}
            >
                {children}
            </motion.div>
        </FadeInStaggerContext.Provider>
    );
}
