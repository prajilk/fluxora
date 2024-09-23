"use client";

import useIntersectionObserver from "@/hooks/use-intersection-observer";
import CustomMadeDialog from "../dialog/custom-made";
import EssentialDialog from "../dialog/essential";
import Card from "./card";
import { motion } from "framer-motion";

const Offer = () => {
    const [ref, isVisible] = useIntersectionObserver({
        once: true,
        threshold: 0.6,
    });
    return (
        <div className="container py-28 flex justify-between">
            <div className="grid md:grid-cols-3 w-full" ref={ref}>
                <motion.h2
                    initial={{ x: -150, opacity: 0 }}
                    animate={isVisible ? { x: 0, opacity: 1 } : {}}
                    className="text-4xl mb-10 md:mb-auto lg:text-5xl uppercase font-n27 my-auto"
                >
                    Nos <br /> Packs
                </motion.h2>
                <div className="flex justify-center md:col-span-2 gap-3 md:gap-20 overflow-hidden">
                    <Card
                        bg="#493BFF"
                        title="ESSENTIAL"
                        dialogComponent={<EssentialDialog />}
                        isVisible={isVisible}
                        delay={0}
                    />
                    <Card
                        bg="#9747FF"
                        title="SUR MESURE"
                        dialogComponent={<CustomMadeDialog />}
                        isVisible={isVisible}
                        delay={0.2}
                    />
                </div>
            </div>
        </div>
    );
};

export default Offer;
