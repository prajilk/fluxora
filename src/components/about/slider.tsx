"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const slides = ["slide1.png", "slide2.png", "slide3.png"];

const Slider = ({ isVisible }: { isVisible: boolean }) => {
    return (
        <motion.div
            initial={{ x: 200, opacity: 0 }} // Start off-screen to the right
            animate={isVisible ? { x: 0, opacity: 1 } : {}} // Animate when in view
            transition={{ type: "spring" }}
            className="w-full md:w-3/5 h-52 absolute size-full flex gap-2 overflow-x-scroll no-scrollbar"
        >
            {slides.map((slide, index) => (
                <div className="relative aspect-square h-full" key={index}>
                    <Image
                        src={`/images/placeholders/${slide}`}
                        alt="Slide Image"
                        fill
                        className="rounded-xl"
                    />
                </div>
            ))}
        </motion.div>
    );
};

export default Slider;
