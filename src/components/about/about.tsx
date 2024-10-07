"use client";

import useIntersectionObserver from "@/hooks/use-intersection-observer";
import LogoWhite from "../icons/logo-white";
import Slider from "./slider";
import { useTranslations } from "next-intl";

const About = () => {
    const [ref, isVisible] = useIntersectionObserver({
        once: true,
        threshold: 0.6,
    });

    const t = useTranslations("About");

    return (
        <div
            id="about"
            className="container py-20 flex justify-between flex-col md:flex-row"
        >
            <div className="my-auto">
                <h2 className="text-white uppercase text-4xl lg:text-5xl font-medium md:font-bold font-n27">
                    {t.rich("title", {
                        br: () => <br />,
                    })}
                </h2>
                <p className="text-white font-inter text-lg lg:text-xl font-extralight max-w-md mt-7 !leading-6">
                    {t("description")}
                </p>
                <h2 className="text-2xl uppercase md:text-3xl text-primary font-bold mt-5 mb-1 font-n27">
                    {t("subTitle")}
                </h2>
                <p className="text-white font-inter text-lg lg:text-xl font-extralight max-w-md !leading-6">
                    {t("subDescription")}
                </p>
            </div>
            <div
                className="flex md:justify-end items-center relative overflow-hidden"
                ref={ref}
            >
                <LogoWhite
                    key={0}
                    className="opacity-0 md:opacity-100 size-11/12 flex-shrink-0"
                />
                <Slider isVisible={isVisible} />
            </div>
        </div>
    );
};

export default About;
