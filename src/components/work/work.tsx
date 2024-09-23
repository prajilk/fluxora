"use client";

import useIntersectionObserver from "@/hooks/use-intersection-observer";
import LogoFull from "../icons/logo-full";
import { motion } from "framer-motion";

const works = ["project1.png", "project2.png", "project3.png"];

const Work = () => {
    const [ref, isVisible] = useIntersectionObserver({
        once: true,
        threshold: 0.6,
    });
    return (
        <div className="container py-28 flex justify-between px-0">
            <div className="grid place-content-center w-full relative overflow-hidden group">
                <motion.div
                    className="w-fit"
                    ref={ref}
                    initial={{ rotate: 0 }} // Start off-screen to the right
                    animate={isVisible ? { rotate: 90 } : {}} // Animate when in view
                    transition={{ duration: 1 }}
                >
                    <LogoFull />
                </motion.div>
                <span className="uppercase absolute top-1/2 left-1/2 -translate-x-1/2 text-5xl font-n27">
                    Réalisations
                </span>
                <div className="absolute space-y-7 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-scroll no-scrollbar">
                    {works.map((work, i) => (
                        <div
                            key={i}
                            className="w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url(images/projects/${work})`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
