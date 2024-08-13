import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const cabinetGrotesk = localFont({
    src: [
        {
            path: "./fonts/CabinetGrotesk/CabinetGrotesk-Regular.ttf",
            weight: "400",
        },
        {
            path: "./fonts/CabinetGrotesk/CabinetGrotesk-Medium.ttf",
            weight: "500",
        },
        {
            path: "./fonts/CabinetGrotesk/CabinetGrotesk-Bold.ttf",
            weight: "700",
        },
        {
            path: "./fonts/CabinetGrotesk/CabinetGrotesk-ExtraBold.ttf",
            weight: "800",
        },
        {
            path: "./fonts/CabinetGrotesk/CabinetGrotesk-Black.ttf",
            weight: "900",
        },
        {
            path: "./fonts/CabinetGrotesk/CabinetGrotesk-ExtraLight.ttf",
            weight: "300",
        },
        {
            path: "./fonts/CabinetGrotesk/CabinetGrotesk-Light.ttf",
            weight: "200",
        },
        {
            path: "./fonts/CabinetGrotesk/CabinetGrotesk-Thin.ttf",
            weight: "100",
        },
    ],
    variable: "--font-cabinet-grotesk",
});

const n27 = localFont({
    src: [
        {
            path: "./fonts/N27/n27-regular-webfont.ttf",
            weight: "400",
        },
    ],
    variable: "--font-n27",
});

export const metadata: Metadata = {
    title: "Fluxora",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${cabinetGrotesk.variable} ${n27.variable}`}
        >
            <body
                className={`font-cabinetGrotesk bg-light md:bg-white dark:bg-dark flex flex-col min-h-screen`}
            >
                <ThemeProvider
                    attribute="class"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
