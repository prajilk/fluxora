import Link from "next/link";
import Logo from "./icons/logo";
import Linkedin from "./icons/socials/linkedin";
import Instagram from "./icons/socials/instagram";
import Behance from "./icons/socials/behance";
import Dribbble from "./icons/socials/dribbble";
import Facebook from "./icons/socials/facebook";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("Footer");
    return (
        <footer className="bg-primary py-12 mt-auto text-white">
            <div className="container flex justify-between items-center gap-3">
                <div>
                    <Logo
                        className="fill-light dark:fill-light"
                        dotStyle="fill-light"
                    />
                    <div className="mt-5 flex flex-col">
                        <Link
                            href={"mailto:contact@fluxora.fr"}
                            className="text-lg md:text-xl font-light font-n27"
                        >
                            contact@fluxora.fr
                        </Link>
                        <span className="font-inter uppercase text-sm md:text-lg font-light">
                            2024 fluxora, {t("copyright")}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col me-5">
                    <span className="font-n27 font-extrabold text-lg md:text-xl uppercase leading-none">
                        {t.rich("findUs", {
                            br: () => <br />,
                        })}
                    </span>
                    <ul className="flex gap-2 mt-3 mb-5">
                        <li className="cursor-pointer">
                            <Linkedin />
                        </li>
                        <li className="cursor-pointer">
                            <Instagram />
                        </li>
                        <li className="cursor-pointer">
                            <Behance />
                        </li>
                        <li className="cursor-pointer">
                            <Dribbble />
                        </li>
                        <li className="cursor-pointer">
                            <Facebook />
                        </li>
                    </ul>
                    <span className="font-inter md:text-lg whitespace-nowrap">
                        {t("legal")}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
