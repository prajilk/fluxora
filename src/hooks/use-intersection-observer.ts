import { useState, useEffect, useRef, MutableRefObject } from "react";

const useIntersectionObserver = (options: {
    once: boolean;
    threshold?: number;
}): [MutableRefObject<HTMLDivElement | null>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (options.once) observer.disconnect(); // Disconnect after first intersection
                }
            },
            {
                threshold: options.threshold || 0.1, // Default to 10% visibility
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options.once, options.threshold]);

    return [ref, isVisible];
};

export default useIntersectionObserver;
