import Image from "next/image";

type CardProps = {
    imgSrc: string;
    name: string;
    role: string;
};

const Card = ({ imgSrc, name, role }: CardProps) => {
    return (
        <div className="w-28 md:w-40 font-n27 uppercase">
            <div className="bg-[#1C1720] w-full aspect-[1/1.2]">
                <div className="relative w-full h-full">
                    <Image src={imgSrc} alt={name} fill />
                </div>
                <span className="text-center text-[10px] md:text-base text-wrap block leading-4 py-2">
                    {role}
                </span>
            </div>
            <span className="text-right text-sm md:text-base text-primary block mt-2">
                {name}
            </span>
        </div>
    );
};

export default Card;
