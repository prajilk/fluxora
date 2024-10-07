"use client";

import { useEffect, useState, useTransition } from "react";
import { motion } from "framer-motion";
import Logo from "../icons/logo";
import Menu from "../icons/menu";
import Close from "../icons/close";
import NavItem from "./nav-item";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import LocaleSwitcher from "./locale-switcher";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const t = useTranslations("NavItems");
    const locale = useLocale();

    const navItems = [
        { title: t("welcome"), id: "home" },
        { title: t("about"), id: "about" },
        { title: t("contact"), id: "contact" },
        { title: t("offers"), id: "offer" },
    ];

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

    function onSelectChange(value: string) {
        startTransition(() => {
            router.replace(value);
        });
    }

    return (
        <nav className="py-5 fixed w-full bg-dark shadow z-40">
            <div className="container flex justify-between items-center">
                <div className="relative z-50">
                    <Logo />
                </div>
                <div className="flex gap-5 items-center">
                    <LocaleSwitcher
                        defaultLocale={locale}
                        disabled={isPending}
                        onSelectChange={onSelectChange}
                    />
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="relative z-50"
                    >
                        {open ? <Close /> : <Menu />}
                    </button>
                </div>
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
                            <NavItem setOpen={setOpen} {...item} key={i} />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
