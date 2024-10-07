import { Dispatch, SetStateAction, useEffect } from "react";
import LogoFull from "../icons/logo-full";

type NavItemProps = {
    title: string;
    id: string;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const NavItem = ({ title, id, setOpen }: NavItemProps) => {
    // Function to handle scroll and menu close
    const scrollAfterClose = () => {
        // Set the menu to closed state
        setOpen(false);

        // Store timeout reference
        const timeout = setTimeout(() => {
            // Scroll to the section after the delay
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 500); // Delay to wait for menu close animation, if any

        // Clean up the timeout when component unmounts or `id` changes
        return () => clearTimeout(timeout);
    };

    return (
        <li
            onClick={scrollAfterClose}
            className="text-white/80 flex items-center gap-2 group cursor-pointer w-fit"
        >
            <LogoFull className="size-10 fill-primary opacity-0 group-hover:opacity-100" />
            <span className="text-4xl font-medium group-hover:text-primary">
                {title}
            </span>
        </li>
    );
};

export default NavItem;
