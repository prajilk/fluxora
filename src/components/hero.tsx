import BrandLogo from "./icons/brand-logo";
import Loader from "./icons/loader";

const Hero = () => {
    return (
        <div className="my-auto container">
            <div className="flex justify-center md:items-center flex-col mt-28 mb-20">
                <BrandLogo />
                <div className="flex mt-10 text-left items-center md:text-center flex-wrap">
                    <Loader className="dark:fill-primary-foreground" />
                    <h1 className="flex items-center uppercase font-n27 dark:text-primary font-black text-5xl md:text-6xl">
                        /Chantier
                    </h1>
                    <span className="ms-0 md:ms-4 uppercase font-n27 dark:text-primary font-black text-5xl md:text-6xl">
                        en cours
                    </span>
                </div>
                <p className="dark:text-light text-secondary text-xl">
                    Notre site sera bienôt disponible
                </p>
            </div>
        </div>
    );
};

export default Hero;
