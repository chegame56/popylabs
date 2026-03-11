"use client";

import { useEffect, useRef, useState } from 'react';

export default function LazyVideo({ src, className = "" }: { src: string, className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            // Load the video slightly before it comes into view
            { rootMargin: "400px" }
        );
        
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className={className}>
            {isVisible && (
                <video
                    src={src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            )}
        </div>
    );
}
