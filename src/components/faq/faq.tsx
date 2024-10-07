"use client";

import useIntersectionObserver from "@/hooks/use-intersection-observer";
import FaqCard from "./faq-card";
import { motion } from "framer-motion";
import useWindowDimensions from "@/hooks/window-dimensions";
import Plus from "../icons/plus";
import { useState } from "react";
import ArrowDown from "../icons/arrow-down";
import { useTranslations } from "next-intl";

const Faq = () => {
    const t = useTranslations("FAQ");
    const faq = [
        t("question1"),
        t("question2"),
        t("question3"),
        t("question4"),
        t("question5"),
    ];
    const [ref, isVisible] = useIntersectionObserver({
        once: true,
        threshold: 0.5,
    });
    const { width } = useWindowDimensions();
    const [sliceValue, setSliceValue] = useState(
        width <= 768 ? [[0, 2], [5]] : [[0, 3], [3]]
    );
    return (
        <div className="container pb-40 pt-28 flex justify-between relative z-10">
            <div className="grid lg:grid-cols-5 w-full" ref={ref}>
                <motion.h2
                    initial={{ x: -150, opacity: 0 }}
                    animate={isVisible ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.3 }}
                    className="text-[45px] text-white leading-none mb-10 md:text-center lg:text-left lg:my-auto text-5xl uppercase font-n27"
                >
                    FAQ
                </motion.h2>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={isVisible ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.3 }}
                    className="md:col-span-2 lg:me-5 space-y-5 mb-5 lg:mb-0 text-white"
                >
                    {faq.slice(...sliceValue[0]).map((question, i) => (
                        <FaqCard question={question} index={i} key={i} />
                    ))}
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={isVisible ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.3 }}
                    className="lg:col-span-2 space-y-5 text-white"
                >
                    {faq.slice(...sliceValue[1]).map((question, i) => (
                        <FaqCard question={question} index={i} key={i} />
                    ))}
                </motion.div>
                <button
                    className="flex mx-auto mt-5 rounded-full md:hidden"
                    onClick={() => {
                        setSliceValue((prev) => {
                            if (prev[0][1] === 2) {
                                return [[0, 3], [3]];
                            } else {
                                return [[0, 2], [5]];
                            }
                        });
                    }}
                >
                    {sliceValue[0][1] === 2 ? (
                        <Plus bg="fill-primary" className="size-14" />
                    ) : (
                        <ArrowDown className="rotate-180" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Faq;
