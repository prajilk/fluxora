import { useTranslations } from "next-intl";
import SlideUpDialog from "../ui/slideup-dialog";

const EssentialDialog = () => {
    const t = useTranslations("Offer");

    return (
        <SlideUpDialog title={t("card1.title")}>
            <div className="overflow-y-scroll size-full scrollbar-thin space-y-3">
                <span className="bg-[#493BFF] text-white px-3 py-2 text-base lg:text-lg font-medium">
                    {t("cardSubTitle")}
                </span>
                <ul className="ps-5 space-y-1 text-white">
                    <li className="list-decimal text-[#493BFF]">
                        {t("card1.list1.title")}
                    </li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            {t("card1.list1.list1")}
                        </li>
                    </ul>
                    <li className="list-decimal text-[#493BFF]">
                        {t("card1.list2.title")}
                    </li>
                    <li className="list-decimal text-[#493BFF]">
                        {t("card1.list3.title")}
                    </li>
                    <ul className="space-y-1">
                        {Array(5)
                            .fill(null)
                            .map((_, i) => (
                                <li
                                    className="list-disc text-sm font-inter capitalize"
                                    key={i}
                                >
                                    {t(`card1.list3.list${i + 1}`)}
                                </li>
                            ))}
                    </ul>
                    <li className="list-decimal text-[#493BFF]">
                        {t("card1.list4.title")}
                    </li>
                    <ul className="space-y-1">
                        {Array(5)
                            .fill(null)
                            .map((_, i) => (
                                <li
                                    className="list-disc text-sm font-inter capitalize"
                                    key={i}
                                >
                                    {t(`card1.list4.list${i + 1}`)}
                                </li>
                            ))}
                    </ul>
                    <li className="list-decimal text-[#493BFF]">
                        {t("card1.list5.title")}
                    </li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            {t("card1.list5.list1")}
                        </li>
                    </ul>
                </ul>
            </div>
        </SlideUpDialog>
    );
};

export default EssentialDialog;
