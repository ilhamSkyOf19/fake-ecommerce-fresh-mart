import { useInView } from "react-intersection-observer";
import { useState } from "react";

type LazyImageProps = {
    src: string;
    alt: string;
    className?: string;
};

export const LazyImage = ({ src, alt, className }: LazyImageProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 1,
    });

    const [loaded, setLoaded] = useState(false);

    return (
        <div ref={ref} className="overflow-hidden">
            {inView && (
                <img
                    src={src}
                    alt={alt}
                    onLoad={() => setLoaded(true)}
                    className={`
            transition-opacity duration-700 ease-in-out
            ${loaded ? "opacity-100" : "opacity-0"}
            ${className || ""}
          `}
                />
            )}
        </div>
    );
};
