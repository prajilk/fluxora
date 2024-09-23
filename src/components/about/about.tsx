"use client";

import useIntersectionObserver from "@/hooks/use-intersection-observer";
import LogoWhite from "../icons/logo-white";
import Slider from "./slider";

const About = () => {
    const [ref, isVisible] = useIntersectionObserver({
        once: true,
        threshold: 0.6,
    });
    return (
        <div className="container py-20 flex justify-between flex-col md:flex-row">
            <div className="my-auto">
                <h2 className="text-white uppercase text-4xl lg:text-5xl font-medium md:font-bold font-n27">
                    qui <br /> sommes <br /> nous?
                </h2>
                <p className="font-inter text-lg lg:text-xl font-extralight max-w-md mt-7">
                    Fluxora est une agence Web qui se spécialise dans la
                    création de sites web sur mesure et de templates de sites
                    web
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold mt-5 mb-1">
                    Notre mission :
                </h2>
                <p className="font-inter text-lg lg:text-xl font-extralight max-w-md">
                    Fournir des solutions MODERNES et de haute qualité qui
                    durent dans le temps. Renforcer votre présence en ligne et
                    rendez vos offres claires pour vos clients.
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
