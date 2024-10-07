import React from "react";
import SlideUpDialog from "../ui/slideup-dialog";
import { useTranslations } from "next-intl";

const CustomMade = () => {
    const t = useTranslations("Offer");
    return (
        <SlideUpDialog title="Sur mesure">
            <div className="overflow-y-scroll size-full scrollbar-thin space-y-3">
                <span className="text-white bg-primary px-3 py-2 text-lg font-medium">
                    {t("cardSubTitle")}
                </span>
                <ul className="ps-5 space-y-1 text-white">
                    <li className="list-decimal text-primary">
                        {t("card2.list1.title")}
                    </li>
                    <li className="list-decimal text-primary">
                        {t("card2.list2.title")}
                    </li>
                    <li className="list-decimal text-primary">
                        {t("card2.list3.title")}
                    </li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            {t("card2.list3.list1")}
                        </li>
                    </ul>
                    <li className="list-decimal text-primary">
                        {t("card2.list4.title")}
                    </li>
                    <li className="list-decimal text-primary">
                        {t("card2.list5.title")}
                    </li>
                    <ul className="space-y-1">
                        {Array(5)
                            .fill(null)
                            .map((_, i) => (
                                <li
                                    className="list-disc text-sm font-inter capitalize"
                                    key={i}
                                >
                                    {t(`card2.list5.list${i + 1}`)}
                                </li>
                            ))}
                    </ul>
                    <li className="list-decimal text-primary">
                        {t("card2.list6.title")}
                    </li>
                    <ul className="space-y-1">
                        {Array(5)
                            .fill(null)
                            .map((_, i) => (
                                <li
                                    className="list-disc text-sm font-inter capitalize"
                                    key={i}
                                >
                                    {t(`card2.list6.list${i + 1}`)}
                                </li>
                            ))}
                    </ul>
                    <li className="list-decimal text-primary">
                        {t("card2.list7.title")}
                    </li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            {t("card2.list7.list1")}
                        </li>
                    </ul>
                    <li className="list-decimal text-primary">
                        {t("card2.list8.title")}
                    </li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            {t("card2.list8.list1")}
                        </li>
                    </ul>
                    <li className="list-decimal text-primary">
                        {t("card2.list9.title")}
                    </li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            {t("card2.list9.list1")}
                        </li>
                    </ul>
                    <li className="list-decimal text-primary">
                        {t("card2.list10.title")}
                    </li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            {t("card2.list10.list1")}
                        </li>
                    </ul>
                    <li className="list-decimal text-primary">
                        {t("card2.list11.title")}
                    </li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            {t("card2.list11.list1")}
                        </li>
                    </ul>
                    <li className="list-decimal text-primary">
                        {t("card2.list12.title")}
                    </li>
                    <ul className="space-y-1">
                        {Array(8)
                            .fill(null)
                            .map((_, i) => (
                                <li
                                    className="list-disc text-sm font-inter capitalize"
                                    key={i}
                                >
                                    {t(`card2.list12.list${i + 1}`)}
                                </li>
                            ))}
                    </ul>
                    <li className="list-decimal text-primary">
                        {t("card2.list13.title")}
                    </li>
                </ul>
            </div>
        </SlideUpDialog>
    );
};

export default CustomMade;
