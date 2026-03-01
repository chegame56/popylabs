'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

    // Auto-rotation effect
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
            }, 4000) // Rotate every 4 seconds
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
            }
        }
    }, [isAutoPlaying])

    const next = () => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
        setIsAutoPlaying(false) // Pause auto-play when user manually navigates
    }

    const prev = () => {
        setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
        setIsAutoPlaying(false)
    }

    const getItemStyle = (offset: number) => {
        const distance = Math.abs(offset)

        // Opacity: full at center, fading at edges
        const opacity = distance === 0 ? 1 : distance === 1 ? 0.6 : distance === 2 ? 0.3 : 0.1

        // Scale: slightly smaller at edges for depth
        const scale = distance === 0 ? 1 : distance === 1 ? 0.9 : 0.8

        // Blur: more blur at edges
        const blur = distance === 0 ? 0 : distance === 1 ? 2 : 4

        return {
            opacity,
            transform: `scale(${scale})`,
            filter: `blur(${blur}px)`,
            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }
    }

    return (
        <section className="section">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Client <span className="gradient-text">Testimonials</span>
                </h2>
                <p className="text-xl text-sky-blue max-w-2xl mx-auto">
                    Hear from businesses that transformed their brand with Popylabs
                </p>
            </div>

            {/* Wheel Carousel Container */}
            <div
                className="relative mb-12"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                {/* Edge Fade Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-navy-deep via-navy-deep/80 to-transparent z-10 pointer-events-none" />

                {/* Carousel Track */}
                <div className="overflow-hidden py-8">
                    <div className="flex items-center justify-center gap-8 px-4">
                        {/* Show 5 items: -2, -1, 0 (active), +1, +2 */}
                        {[-2, -1, 0, 1, 2].map((offset) => {
                            const index = (activeIndex + offset + TESTIMONIALS.length) % TESTIMONIALS.length
                            const testimonial = TESTIMONIALS[index]

                            return (
                                <div
                                    key={`${index}-${offset}`}
                                    className="flex-shrink-0 w-80 md:w-96"
                                    style={getItemStyle(offset)}
                                >
                                    <div className="glass-dark rounded-2xl p-8 border border-accent-gold/30 relative h-full">
                                        {/* Quote Icon */}
                                        {offset === 0 && (
                                            <div className="text-4xl text-accent-gold/20 absolute top-4 left-4">"</div>
                                        )}

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Stars */}
                                            <div className="flex justify-center gap-1 mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 text-accent-gold fill-current" viewBox="0 0 20 20">
                                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                    </svg>
                                                ))}
                                            </div>

                                            {/* Testimonial Text */}
                                            <p className="text-base text-cream leading-relaxed mb-6 text-center italic line-clamp-4">
                                                {testimonial.content}
                                            </p>

                                            {/* Author */}
                                            <div className="text-center">
                                                <div className="w-14 h-14 mx-auto mb-3 rounded-full overflow-hidden border-2 border-accent-gold/30">
                                                    <Image
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        width={56}
                                                        height={56}
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="font-bold text-accent-gold">{testimonial.name}</div>
                                                <div className="text-white text-sm">{testimonial.role}</div>
                                                <div className="text-sky-blue text-xs">{testimonial.company}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center items-center gap-4 mt-8">
                    <button
                        onClick={prev}
                        className="p-3 rounded-full hover:bg-white/10 transition-colors bg-white/5 backdrop-blur-sm"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {TESTIMONIALS.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setActiveIndex(idx)
                                    setIsAutoPlaying(false)
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex
                                    ? 'bg-accent-gold w-8'
                                    : 'bg-steel-blue hover:bg-sky-blue'
                                    }`}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="p-3 rounded-full hover:bg-white/10 transition-colors bg-white/5 backdrop-blur-sm"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
