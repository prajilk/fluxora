import { cn } from "@/lib/utils";

const Logo = ({
    className,
    size,
    dotStyle,
}: {
    className?: string;
    size?: string;
    dotStyle?: string;
}) => {
    return (
        <svg
            width="175"
            height="22"
            viewBox="0 0 175 22"
            fill="none"
            className={size}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_118_40)">
                <path
                    d="M138.267 0.0224844H124.895V0H120.527V22H124.895V15.3191H124.998V15.3211H129.345V15.3191H129.397V15.3211H133.765V15.3191H133.816V15.3211H138.184V15.3191H138.267V22H142.635V17.5879L140.346 15.3191L138.268 13.2587V13.1769L142.636 8.8466V4.35278L142.615 4.33234L138.267 0.0224844ZM138.267 10.9908H124.895V4.35278H138.267V10.9918V10.9908Z"
                    className={cn("fill-[#8C5EEA]", className)}
                />
                <path
                    d="M165.812 3.43195L162.372 0.0224915H149.001L144.653 4.33235L144.633 4.35279V22H149.001V15.3191H162.372V22H166.74V4.35279L166.72 4.33235L165.812 3.43195ZM149.001 10.9908V4.35279H162.372V10.9918H149.001V10.9908Z"
                    className={cn("fill-[#8C5EEA]", className)}
                />
                <path
                    d="M83.361 7.77758L75.5622 0.0204468H72.3076V3.24799L80.1116 11.0092L72.3076 18.7714V21.998H75.5622L83.361 14.2419L91.1597 21.998H94.4143V18.7714L86.6104 11.0092L94.4143 3.24799V0.0204468H91.1597L83.361 7.77758Z"
                    className={cn("fill-[#8C5EEA]", className)}
                />
                <path
                    d="M65.9499 17.6707H52.5781V0.0224915H48.2112V17.6707L48.4174 17.8741L51.0317 20.466L52.5781 22H65.9499L70.1117 17.8741L70.3179 17.6707V0.0224915H65.9499V17.6707Z"
                    className={cn("fill-[#8C5EEA]", className)}
                />
                <path
                    d="M28.4725 0.0224915H24.1056V17.6707L24.9478 18.5057L27.6488 21.1834L28.4725 22H46.2123V17.6707H28.4725V0.0224915Z"
                    className={cn("fill-[#8C5EEA]", className)}
                />
                <path
                    d="M0 4.35279V22L4.36794 17.6707V13.1759H22.1067V8.84661H4.36794V4.35279H22.1067V0.0224915H4.36794L0 4.35279Z"
                    className={cn("fill-[#8C5EEA]", className)}
                />
                <path
                    d="M114.161 0.0224915H100.789L96.442 4.33235L96.4214 4.35279H96.442V8.84661H96.4214V13.1769H96.442V17.6707H96.4214L96.442 17.6912L100.787 21.999L100.789 22.001V21.999H105.291V22.001H109.659V21.999H114.161V22.001L114.163 21.999L118.509 17.6912L118.529 17.6707V4.35279L118.509 4.33235L114.161 0.0224915ZM100.789 17.6707V4.35279H114.161V17.6707H100.789Z"
                    className={cn("fill-[#8C5EEA]", className)}
                />
                <path
                    d="M174.994 16.6293V16.6231L173.673 15.3139H169.608L168.288 16.6231V20.6836L169.608 21.9928H173.673L174.994 20.6836V20.6775H175V16.6293H174.994Z"
                    className={cn("fill-[#F2F4F7]", dotStyle)}
                />
            </g>
            <defs>
                <clipPath id="clip0_118_40">
                    <rect width="175" height="22" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Logo;
