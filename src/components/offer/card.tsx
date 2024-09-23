import LogoWhite from "../icons/logo-white";
import { motion } from "framer-motion";

type CardProps = {
    bg: string;
    title: string;
    dialogComponent: React.ReactNode;
    isVisible: boolean;
    delay: number;
};

const Card = ({ bg, title, dialogComponent, isVisible, delay }: CardProps) => {
    return (
        <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ delay }}
            className="w-1/2 md:w-48 font-n27 uppercase"
        >
            <div className="bg-[#1C1720] w-full aspect-[1/1.2]">
                <div
                    className="relative w-full h-full grid place-content-center"
                    style={{ backgroundColor: bg }}
                >
                    <LogoWhite key={1} className="fill-white size-20" />
                </div>
                <span className="text-center text-wrap block leading-4 py-3">
                    {title}
                </span>
            </div>
            {dialogComponent}
        </motion.div>
    );
};

export default Card;
