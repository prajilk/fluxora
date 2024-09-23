"use client";

import useIntersectionObserver from "@/hooks/use-intersection-observer";
import Card from "./card";
import { motion } from "framer-motion";
import useWindowDimensions from "@/hooks/window-dimensions";

const teamMembers = [
    {
        role: "CEO",
        name: "GARY",
        imgSrc: "/images/placeholders/men_avatar.png",
    },
    {
        role: "COO",
        name: "ANTONIN",
        imgSrc: "/images/placeholders/men_avatar.png",
    },
    {
        role: "ART DIRECTOR",
        name: "JORDAN",
        imgSrc: "/images/placeholders/men_avatar.png",
    },
    {
        role: "FRONT-END DEVELOPER",
        name: "PRAJIL",
        imgSrc: "/images/placeholders/men_avatar.png",
    },
    {
        role: "PROJECT MANAGER",
        name: "JOORI",
        imgSrc: "/images/placeholders/women_avatar.png",
    },
];

const Team = () => {
    const [ref, isVisible] = useIntersectionObserver({
        once: true,
        threshold: 0.5,
    });

    const { width } = useWindowDimensions();
    return (
        <div className="container py-28 flex justify-between">
            <motion.div
                ref={ref}
                className="grid md:grid-cols-3 w-full"
                initial={{ opacity: 0 }} // Start off-screen to the right
                animate={isVisible ? { opacity: 1 } : {}} // Animate when in view
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-medium lg:text-5xl uppercase font-n27 my-auto">
                    Notre <br /> Équipe
                </h2>
                <div className="md:col-span-2 space-y-5 mt-10 md:mt-0">
                    <div className="flex justify-center flex-wrap gap-5">
                        {teamMembers
                            .slice(0, width >= 1024 ? 3 : 4)
                            .map((member, i) => (
                                <Card {...member} key={i} />
                            ))}
                    </div>
                    <div className="flex justify-center gap-5">
                        {teamMembers
                            .slice(width >= 1024 ? 3 : 4)
                            .map((member, i) => (
                                <Card {...member} key={i} />
                            ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Team;
