const Plus = ({
    className,
    bg = "fill-[#262527]",
}: {
    className?: string;
    bg?: string;
}) => {
    return (
        <svg
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="0.101562"
                width="75"
                height="76"
                rx="37.5"
                className={bg}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.5391 23H36.6641V37.0625H22.6016V38.9375H36.6641V53H38.5391V38.9375H52.6016V37.0625H38.5391V23Z"
                fill="white"
            />
        </svg>
    );
};

export default Plus;
