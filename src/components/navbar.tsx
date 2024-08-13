import Logo from "./icons/logo";
import Menu from "./icons/menu";
import { ModeToggle } from "./toggle-mode";

const Navbar = () => {
    return (
        <nav className="py-5 fixed w-full dark:bg-dark bg-white shadow">
            <div className="container flex justify-between items-center">
                <Logo />
                <div className="flex items-center gap-3">
                    <ModeToggle />
                    <Menu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
