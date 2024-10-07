"use client";

import Plus from "../icons/plus";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const SlideUpDialog = ({
    title,
    children,
}: {
    title?: string;
    children?: React.ReactNode;
}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            // Add no-scroll class when dialog is open
            document.body.classList.add("no-scroll");
        } else {
            // Remove no-scroll class when dialog is closed
            document.body.classList.remove("no-scroll");
        }

        // Clean-up in case the component unmounts
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [open]);

    return (
        <>
            <button
                className="flex mx-auto mt-5"
                onClick={() => setOpen((prev) => !prev)}
            >
                <Plus className="size-14" />
            </button>

            {/* Backdrop and Dialog with Framer Motion */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed bg-black/50 inset-0 flex justify-center items-center z-50 px-3 md:px-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Dialog with slide up animation */}
                            <motion.div
                                onClick={(e) => e.stopPropagation()}
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "100%", opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                className="bg-[#262527] w-full md:w-1/2 lg:w-2/5 rounded-lg aspect-square md:aspect-[1/0.7] px-5 md:px-10 py-5 space-y-2 relative"
                            >
                                <button
                                    onClick={() => setOpen(false)}
                                    className="bg-black rounded-full p-2 absolute right-0 top-0 m-2 text-white"
                                >
                                    <X />
                                </button>
                                <h1 className="text-white text-xl lg:text-2xl font-medium">
                                    {title}
                                </h1>
                                {children}
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default SlideUpDialog;
