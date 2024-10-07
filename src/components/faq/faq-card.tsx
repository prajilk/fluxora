"use client";

import { useState } from "react";
import ArrowDown from "../icons/arrow-down";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type FaqCardProps = {
    question: string;
    index: number;
};

const FaqCard = ({ question, index }: FaqCardProps) => {
    const [open, setOpen] = useState<number | null>(null);
    const isItemOpen = index === open;

    const t = useTranslations("FAQ");

    return (
        <div className="border border-white rounded-lg p-8 bg-[#262527] flex items-center">
            <div>
                <div className="flex items-center justify-between gap-10">
                    <h3 className="uppercase font-n27 text-lg !leading-6">
                        {question}
                    </h3>
                    <button
                        onClick={() =>
                            setOpen((prev) => (prev === index ? null : index))
                        }
                    >
                        <ArrowDown className="flex-shrink-0" />
                    </button>
                </div>
                <motion.div
                    initial={{
                        height: 0,
                        opacity: 0,
                        marginTop: 0,
                    }}
                    animate={
                        isItemOpen
                            ? {
                                  height: "fit-content",
                                  opacity: 1,
                                  marginTop: "20px",
                              }
                            : {}
                    }
                    transition={{
                        duration: 0.3,
                        ease: "linear",
                    }}
                    className="mx-auto text-[#A8A5A5] max-w-sm overflow-hidden md:mx-0 md:max-w-full !leading-5"
                >
                    {t("cardAnswer")}
                </motion.div>
            </div>
        </div>
    );
};

export default FaqCard;
