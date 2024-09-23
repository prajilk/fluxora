"use client";

import { useState } from "react";
import ArrowDown from "../icons/arrow-down";
import { motion } from "framer-motion";

type FaqCardProps = {
    question: string;
    index: number;
};

const FaqCard = ({ question, index }: FaqCardProps) => {
    const [open, setOpen] = useState<number | null>(null);
    const isItemOpen = index === open;

    return (
        <div className="border border-white rounded-lg p-8 bg-[#262527] flex items-center">
            <div>
                <div className="flex items-center justify-between gap-10">
                    <h3 className="uppercase font-n27 text-lg">{question}</h3>
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
                    className="mx-auto text-[#A8A5A5] max-w-sm overflow-hidden md:mx-0 md:max-w-full"
                >
                    Fluxora se spécialise dans la création de sites web sur
                    mesure, le développement de templates web, et offre des
                    solutions digitales complètes incluant le SEO, le design
                    UI/UX, et le développement e-commerce.
                </motion.div>
            </div>
        </div>
    );
};

export default FaqCard;
