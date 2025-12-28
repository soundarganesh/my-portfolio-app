'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["Innovate", "Elevate", "Inspire"];

const Preloader = () => {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index == words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1);
        }, index == 0 ? 1500 : 700);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as any }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as any, delay: 0.3 }
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#141414] overflow-hidden">
            {dimension.width > 0 &&
                <>
                    <motion.p variants={opacity} initial="initial" animate="enter" className="flex text-white text-4xl md:text-6xl font-black items-center absolute z-10 tracking-widest uppercase">
                        <span className="block w-2.5 h-2.5 bg-[var(--golden)] rounded-full mr-2.5"></span>
                        {words[index]}
                    </motion.p>

                    {/* SVG Curve for smoother exit animation */}
                    <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#141414]">
                        <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                    </svg>
                </>
            }
        </motion.div>
    );
};

// Variants
const slideUp = {
    initial: { top: 0 },
    exit: { top: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any, delay: 0.2 } }
}

const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
}

export default Preloader;
