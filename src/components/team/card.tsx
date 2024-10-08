import Image from "next/image";

type CardProps = {
    imgSrc: string;
    name: string;
    role: string;
};

const Card = ({ imgSrc, name, role }: CardProps) => {
    return (
        <div className="w-36 md:w-40 font-n27 uppercase">
            <div className="bg-[#1C1720] w-full aspect-[1/1.2]">
                <div className="relative w-full h-full">
                    <Image src={imgSrc} alt={name} fill />
                </div>
                <div className="text-white text-center text-[10px] md:text-base text-wrap !leading-4 h-7 md:h-11 flex items-center justify-center">
                    <span>{role}</span>
                </div>
            </div>
            <span className="text-right text-sm md:text-base text-primary block mt-2">
                {name}
            </span>
        </div>
    );
};

export default Card;
