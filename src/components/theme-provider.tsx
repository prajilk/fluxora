"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { getFranceHour } from "@/lib/utils";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const hour = getFranceHour();
    return (
        <NextThemesProvider
            defaultTheme={hour >= 6 && hour < 18 ? "light" : "dark"}
            {...props}
        >
            {children}
        </NextThemesProvider>
    );
}
