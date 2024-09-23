import { motion } from "framer-motion";

const InputColumn = ({ isVisible }: { isVisible: boolean }) => {
    return (
        <div>
            <div className="overflow-hidden">
                <motion.div
                    initial={{ y: -100 }}
                    animate={isVisible ? { y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-primary font-n27 text-2xl font-medium">
                        Nom & Entreprise :
                    </span>
                    <input
                        type="text"
                        className="w-full md:w-11/12 bg-transparent p-2 border-b border-b-gray-400 outline-none font-n27"
                        placeholder="John de FLUXORA"
                    />
                </motion.div>
            </div>
            <div className="overflow-hidden">
                <motion.div
                    initial={{ y: -100 }}
                    animate={isVisible ? { y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.4 }}
                >
                    <span className="text-primary mt-5 block font-n27 text-2xl font-medium">
                        Votre mail :
                    </span>
                    <input
                        type="email"
                        className="w-full md:w-11/12 bg-transparent p-2 border-b border-b-gray-400 outline-none font-n27"
                        placeholder="John@mail.com"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default InputColumn;
