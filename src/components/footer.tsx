import Logo from "./icons/logo";

const Footer = () => {
    return (
        <footer className="bg-secondary dark:bg-primary py-5 mt-auto">
            <div className="container flex justify-between items-center">
                <Logo
                    className="fill-light dark:fill-light"
                    dotStyle="fill-light"
                />
                <span className="text-light md:text-lg whitespace-nowrap">
                    Mentions légales
                </span>
            </div>
        </footer>
    );
};

export default Footer;
