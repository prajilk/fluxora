import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const InputColumn = ({ isVisible }: { isVisible: boolean }) => {
    const t = useTranslations("Contact");
    return (
        <div>
            <div className="overflow-hidden">
                <motion.div
                    initial={{ y: -100 }}
                    animate={isVisible ? { y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-primary font-n27 text-2xl font-medium">
                        {t("inputColumn.field1")}
                    </span>
                    <input
                        type="text"
                        className="w-full md:w-11/12 bg-transparent p-2 border-b border-b-gray-400 outline-none font-n27"
                        placeholder={t("inputColumn.placeholder1")}
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
                        {t("inputColumn.field2")}
                    </span>
                    <input
                        type="email"
                        className="w-full md:w-11/12 bg-transparent p-2 border-b border-b-gray-400 outline-none font-n27"
                        placeholder={t("inputColumn.placeholder2")}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default InputColumn;
