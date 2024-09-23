"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../icons/logo";
import Menu from "../icons/menu";
import Close from "../icons/close";
import NavItem from "./nav-item";

const navItems = [
    { title: "ACCUEIL", url: "/" },
    { title: "À PROPOS", url: "/about" },
    { title: "CONTACT", url: "/contact" },
    { title: "Nos offres", url: "/" },
];

const Navbar = () => {
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
        <nav className="py-5 fixed w-full dark:bg-dark bg-white shadow z-40">
            <div className="container flex justify-between items-center">
                <div className="relative z-50">
                    <Logo />
                </div>
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="relative z-50"
                >
                    {open ? <Close /> : <Menu />}
                </button>
            </div>

            <motion.div
                initial={{ translateY: "-100%" }} // Start offscreen
                animate={{ translateY: open ? "0%" : "-100%" }} // Slide in/out based on `open` state
                transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
                className="min-h-screen inset-0 bg-dark absolute"
            >
                <div className="container flex relative h-full pt-20">
                    <img
                        src="/images/fluxora-outline.png"
                        alt="Fluxora Logo"
                        className="absolute bottom-0 md:-bottom-5"
                    />
                    <img
                        src="/images/backgrounds/logo-full.png"
                        alt="Logo BG"
                        className="w-1/2 md:w-[40%] lg:w-[30%] top-[20%] md:top-[10%] lg:top-5 aspect-square ms-auto absolute lg:right-0"
                    />
                    <img
                        src="/images/backgrounds/logo-full.png"
                        alt="Logo BG"
                        className="absolute aspect-square bottom-32 lg:bottom-auto w-full -right-1/2 lg:right-auto lg:w-[20%]"
                    />
                    <ul className="my-auto md:ms-[15%] lg:ms-[20%] lg:mt-[8%] font-n27 relative z-50 uppercase space-y-4 lg:space-y-2">
                        {navItems.map((item, i) => (
                            <NavItem title={item.title} key={i} />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
