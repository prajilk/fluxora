import { cn } from "@/lib/utils";

const Loader = ({ className }: { className?: string }) => {
    return (
        <svg
            width="98"
            height="93"
            viewBox="0 0 98 93"
            fill="none"
            className="size-16 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M52.8194 85.6712V55.8L45.2025 63.1288V70.7356V78.0644V85.6712V93L52.8194 85.6712Z"
                className={cn("fill-secondary", className)}
            />
            <path
                d="M22.9166 76.7897L44.8683 55.6672H34.0972L28.5069 61.0461L23.1203 66.2279L17.5299 71.6068L12.1444 76.7897H22.9166Z"
                className={cn("fill-secondary", className)}
            />
            <path
                d="M8.2993 50.1649H39.3448L31.7279 42.8361H23.8221H16.2051H8.2993H0.682373L8.2993 50.1649Z"
                className={cn("fill-secondary", className)}
            />
            <path
                d="M17.5299 21.3931L39.4827 42.5146V32.1509L33.8924 26.772L28.5069 21.5892L22.9165 16.2103L17.5299 11.0285V21.3931Z"
                className={cn("fill-secondary", className)}
            />
            <path
                d="M45.2025 7.32881V37.2L52.8194 29.8712V22.2644V14.9356V7.32881V0L45.2025 7.32881Z"
                className={cn("fill-secondary", className)}
            />
            <path
                d="M75.1044 16.2103L53.1526 37.3328H63.9237L69.514 31.9539L74.9006 26.7721L80.491 21.3932L85.8765 16.2103H75.1044Z"
                className={cn("fill-secondary", className)}
            />
            <path
                d="M89.7215 42.8361H58.676L66.293 50.1649H74.1988H81.8157H89.7215H97.3385L89.7215 42.8361Z"
                className={cn("fill-secondary", className)}
            />
            <path
                d="M80.4909 71.6068L58.5381 50.4854V60.8491L64.1284 66.2279L69.514 71.4108L75.1043 76.7897L80.4909 81.9715V71.6068Z"
                className={cn("fill-secondary", className)}
            />
        </svg>
    );
};

export default Loader;
