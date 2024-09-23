import LogoFull from "../icons/logo-full";

type NavItemProps = {
    title: string;
    url?: string;
};

const NavItem = ({ title, url }: NavItemProps) => {
    return (
        <li className="text-white/80 flex items-center gap-2 group cursor-pointer w-fit">
            <LogoFull className="size-10 fill-primary opacity-0 group-hover:opacity-100" />
            <span className="text-4xl font-medium group-hover:text-primary">
                {title}
            </span>
        </li>
    );
};

export default NavItem;
