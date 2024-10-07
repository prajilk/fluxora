import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const cabinetGrotesk = localFont({
    src: [
        {
            path: "../../../public/fonts/cabinet-grotesk/cabinet-grotesk-regular.ttf",
            weight: "400",
        },
        {
            path: "../../../public/fonts/cabinet-grotesk/cabinet-grotesk-medium.ttf",
            weight: "500",
        },
        {
            path: "../../../public/fonts/cabinet-grotesk/cabinet-grotesk-bold.ttf",
            weight: "700",
        },
        {
            path: "../../../public/fonts/cabinet-grotesk/cabinet-grotesk-extrabold.ttf",
            weight: "800",
        },
        {
            path: "../../../public/fonts/cabinet-grotesk/cabinet-grotesk-black.ttf",
            weight: "900",
        },
        {
            path: "../../../public/fonts/cabinet-grotesk/cabinet-grotesk-extralight.ttf",
            weight: "300",
        },
        {
            path: "../../../public/fonts/cabinet-grotesk/cabinet-grotesk-light.ttf",
            weight: "200",
        },
        {
            path: "../../../public/fonts/cabinet-grotesk/cabinet-grotesk-thin.ttf",
            weight: "100",
        },
    ],
    variable: "--font-cabinet-grotesk",
});

const n27 = localFont({
    src: [
        {
            path: "../../../public/fonts/n-two-seven/n-two-seven-regular-webfont.ttf",
            weight: "400",
        },
    ],
    variable: "--font-n27",
});

export const metadata: Metadata = {
    title: "Fluxora",
    description: "Fluxora",
};

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

export default async function RootLayout({
    children,
    params: { locale },
}: Props) {
    const messages = await getMessages();
    return (
        <html
            lang={locale}
            className={`${cabinetGrotesk.variable} ${n27.variable}`}
        >
            <body
                className={`font-cabinetGrotesk bg-dark flex flex-col min-h-screen overflow-x-hidden`}
            >
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
