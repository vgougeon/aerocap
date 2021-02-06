import { AnimatePresence, motion, useViewportScroll } from "framer-motion"
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from "react";

export const Scroller = () => {
    const { scrollYProgress } = useViewportScroll()
    return (
        <div className="fixed hidden w-12 h-12 p-2 top-20 left-10 xl:block">
            <svg viewBox="0 0 80 80" className="overflow-visible">
                <motion.path
                    fill="none" strokeWidth="5" strokeDasharray="0 1"
                    d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                    style={{ pathLength: scrollYProgress }}
                    stroke="#77cc99"
                />
            </svg>
        </div>
    )
}