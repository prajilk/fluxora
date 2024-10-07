"use client";

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Hero = () => {
    const MotionButton = motion(Button);
    const fadeVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const t = useTranslations("Hero");

    return (
        <div
            id="home"
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
                            <h1 className="uppercase font-n27 text-[#9747FF] font-semibold md:font-black text-[45px] leading-none md:text-5xl lg:text-6xl">
                                {t.rich("title1", {
                                    span: (chunk: any) => (
                                        <span className="text-white">
                                            {chunk}
                                        </span>
                                    ),
                                })}
                            </h1>
                            <span className="ms-0 md:ms-4 uppercase font-n27 text-white font-semibold md:font-black text-[45px] leading-none md:text-5xl lg:text-6xl">
                                {t("title2")}
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
                        className="font-inter text-light text-lg md:text-center lg:text-xl font-extralight !leading-6"
                    >
                        {t("description")}
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
                        className="mt-5 text-white text-lg w-fit md:w-auto px-7 md:px-5"
                        onClick={() =>
                            document
                                .getElementById("offer")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        {t("button")}
                        <ArrowRight />
                    </MotionButton>
                </div>
            </div>
        </div>
    );
};

export default Hero;
