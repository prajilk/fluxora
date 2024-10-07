"use client";

import useIntersectionObserver from "@/hooks/use-intersection-observer";
import InputColumn from "./input-column";
import ProjectBudgetColumn from "./project-budget-column";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Contact = () => {
    const [ref, isVisible] = useIntersectionObserver({
        once: true,
        threshold: 0.5,
    });
    const t = useTranslations("Contact");
    return (
        <div
            id="contact"
            className="container md:pt-40 pb-28 flex justify-between overflow-x-hidden"
        >
            <div
                className="grid gap-10 lg:gap-0 lg:grid-cols-3 w-full text-white"
                ref={ref}
            >
                <motion.h2
                    initial={{ x: -150, opacity: 0 }}
                    animate={isVisible ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.3 }}
                    className="text-[45px] leading-none md:text-5xl uppercase font-n27 my-auto"
                >
                    {t("title")}
                </motion.h2>
                <InputColumn isVisible={isVisible} />
                <ProjectBudgetColumn isVisible={isVisible} />
            </div>
        </div>
    );
};

export default Contact;
