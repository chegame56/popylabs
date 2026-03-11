'use client'

import { useState } from 'react'
import Image from 'next/image'

// First 4 always visible (long full-page screenshots for premium scroll effect)
const INITIAL_IMAGES = [1, 9, 12, 16]

// Remaining 12 images revealed 4 at a time
const HIDDEN_IMAGES = [10, 11, 14, 13, 2, 3, 4, 5, 6, 7, 8, 15]

function WebUICard({ num }: { num: number }) {
    return (
        <div className="group glass-dark rounded-xl overflow-hidden relative animated-border p-[2px] hover:shadow-2xl hover:shadow-accent-gold/20 transition-shadow duration-300">
            <div className="bg-navy-deep rounded-lg overflow-hidden h-full flex flex-col">
                {/* Browser Mockup Header */}
                <div className="h-8 bg-black/40 flex items-center px-3 gap-1.5 border-b border-white/5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                </div>

                {/* Image — Hover to Scroll */}
                <div className="relative w-full h-[400px] overflow-hidden bg-navy-darker">
                    <div className="absolute top-0 left-0 w-full h-auto min-h-[400px] transition-transform duration-[4000ms] ease-in-out group-hover:-translate-y-[calc(100%-400px)]">
                        <Image
                            src={`/portfolio/WebUI_images/WebUI_images_${num}.jpg`}
                            alt={`Web Development UI ${num}`}
                            width={800}
                            height={2000}
                            className="w-full h-auto object-top"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            loading="eager"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
            </div>
        </div>
    )
}

export default function WebDevGallery() {
    // How many batches of 4 have been revealed (0 = only initial 4 visible)
    const [revealedBatches, setRevealedBatches] = useState(0)

    const BATCH_SIZE = 4
    const totalBatches = Math.ceil(HIDDEN_IMAGES.length / BATCH_SIZE)
    const visibleHidden = HIDDEN_IMAGES.slice(0, revealedBatches * BATCH_SIZE)
    const allRevealed = revealedBatches >= totalBatches

    return (
        <div className="flex flex-col items-center gap-10">
            {/* Always-visible first 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {INITIAL_IMAGES.map((num) => (
                    <WebUICard key={`init-${num}`} num={num} />
                ))}
            </div>

            {/* Revealed batches — each batch is its own row */}
            {Array.from({ length: revealedBatches }).map((_, batchIdx) => {
                const batchNums = HIDDEN_IMAGES.slice(batchIdx * BATCH_SIZE, (batchIdx + 1) * BATCH_SIZE)
                return (
                    <div
                        key={`batch-${batchIdx}`}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
                        style={{ animation: 'fadeSlideIn 0.6s ease both' }}
                    >
                        {batchNums.map((num) => (
                            <WebUICard key={`hidden-${num}`} num={num} />
                        ))}
                    </div>
                )
            })}

            {/* Reveal button */}
            {!allRevealed && (
                <button
                    onClick={() => setRevealedBatches((b) => b + 1)}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-accent-gold hover:text-accent-gold transition-all duration-300 backdrop-blur-sm font-medium"
                >
                    <span>
                        View More Designs{' '}
                        <span className="text-white/40 text-sm">
                            ({revealedBatches * BATCH_SIZE + INITIAL_IMAGES.length}/{INITIAL_IMAGES.length + HIDDEN_IMAGES.length})
                        </span>
                    </span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            )}

            {/* Collapse button when all revealed */}
            {allRevealed && (
                <button
                    onClick={() => setRevealedBatches(0)}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-accent-gold hover:text-accent-gold transition-all duration-300 backdrop-blur-sm font-medium"
                >
                    <span>Show Less</span>
                    <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            )}
        </div>
    )
}
