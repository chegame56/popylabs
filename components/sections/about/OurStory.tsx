'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function OurStory() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left side - Image/Visual */}
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-1">
                            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="text-6xl mb-4">🚀</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Since 2020</h3>
                                    <p className="text-gray-600">Innovating Digital Marketing</p>
                                </div>
                            </div>
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
                    </div>

                    {/* Right side - Story */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Story</span>
                        </h2>
                        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                            <p>
                                <strong>Popylabs</strong> was born from a simple observation: traditional marketing agencies were charging premium prices while delivering mediocre results. Small businesses and startups were left behind, unable to afford quality digital marketing.
                            </p>
                            <p>
                                We set out to change that. Starting in <strong>Colombo, Sri Lanka</strong>, we built a lean, efficient team focused on one thing: <strong>delivering high-ROI marketing that actually works</strong>.
                            </p>
                            <p>
                                What started as a two-person operation has grown into a full-service digital marketing agency serving clients across <strong>Asia, Europe, and Australia</strong>. But we've never lost sight of our core mission: making world-class marketing accessible to businesses of all sizes.
                            </p>
                            <p className="text-purple-600 font-semibold">
                                Today, we're proud to have helped 50+ businesses achieve viral growth, generate millions in revenue, and build brands that matter.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
