import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getFranceHour() {
    const hour = new Date().toLocaleString("en-GB", {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        hour12: false,
    });
    return parseInt(hour, 10);
}
