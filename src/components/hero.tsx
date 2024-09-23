"use client";

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
    const MotionButton = motion(Button);
    const fadeVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <div
            className="bg-no-repeat [background-position:50%_50%] bg-black min-h-[45rem] flex"
            style={{
                backgroundImage: "url(/images/backgrounds/hero.png)",
            }}
        >
            <div className="container mt-auto">
                <div className="flex justify-center md:items-center flex-col mt-28 mb-20 gap-3">
                    <div className="relative overflow-hidden">
                        <motion.div
                            initial={{
                                y: 190,
                            }}
                            animate={{
                                y: 0,
                            }}
                            transition={{
                                type: "spring",
                            }}
                            className="flex justify-center mt-10 text-left items-center md:text-center flex-wrap"
                        >
                            <h1 className="uppercase font-n27 dark:text-[#9747FF] font-semibold md:font-black text-[45px] leading-none md:text-5xl lg:text-6xl">
                                Simplicité{" "}
                                <span className="text-white">et</span>{" "}
                                efficacité
                            </h1>
                            <span className="ms-0 md:ms-4 uppercase font-n27 dark:text-white font-semibold md:font-black text-[45px] leading-none md:text-5xl lg:text-6xl">
                                pour sites et apps
                            </span>
                        </motion.div>
                    </div>
                    <motion.p
                        variants={fadeVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 0.6,
                            duration: 0.7,
                        }}
                        className="font-inter dark:text-light text-secondary text-lg md:text-center lg:text-xl font-extralight"
                    >
                        Nous créons des solutions web et apps sur mesure qui
                        répondent parfaitement à vos besoins spécifiques
                    </motion.p>
                    <MotionButton
                        variants={fadeVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 0.6,
                            duration: 0.7,
                        }}
                        variant={"outline"}
                        className="mt-5 w-fit md:w-auto px-7 md:px-5"
                    >
                        Découvrez nos offres
                        <ArrowRight />
                    </MotionButton>
                </div>
            </div>
        </div>
    );
};

export default Hero;
