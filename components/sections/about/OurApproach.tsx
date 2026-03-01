'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const approaches = [
    {
        step: '01',
        title: 'Discovery & Research',
        description: 'We start by understanding your business, audience, and competition. No cookie-cutter solutions—every strategy is custom-built.',
        icon: '🔍'
    },
    {
        step: '02',
        title: 'Strategy Development',
        description: 'Based on data and market insights, we craft a roadmap tailored to your goals, budget, and timeline.',
        icon: '📋'
    },
    {
        step: '03',
        title: 'Creative Execution',
        description: 'Our team produces high-quality content—videos, graphics, copy—optimized for maximum engagement and conversions.',
        icon: '🎨'
    },
    {
        step: '04',
        title: 'Launch & Optimize',
        description: 'We launch campaigns, monitor performance in real-time, and continuously optimize based on what the data tells us.',
        icon: '🚀'
    },
    {
        step: '05',
        title: 'Report & Scale',
        description: "You get transparent reports showing exactly what worked, what didn't, and our plan to scale winners.",
        icon: '📈'
    }
]

export default function OurApproach() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Approach</span>
                    </h2>
                    <p className="text-xl text-gray-600">How we turn your business goals into measurable results</p>
                </motion.div>

                <div className="relative">
                    {/* Connection line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-blue-300 to-purple-300 transform -translate-x-1/2"></div>

                    <div className="space-y-12">
                        {approaches.map((approach, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                            >
                                {/* Content Card */}
                                <div className="flex-1">
                                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="text-5xl">{approach.icon}</div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                                        {approach.step}
                                                    </span>
                                                    <h3 className="text-2xl font-bold text-gray-800">{approach.title}</h3>
                                                </div>
                                                <p className="text-gray-600 text-lg leading-relaxed">
                                                    {approach.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="hidden lg:block relative z-10">
                                    <div className="w-4 h-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                                </div>

                                {/* Spacer */}
                                <div className="hidden lg:block flex-1"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-3">Ready to see our approach in action?</h3>
                        <p className="text-lg mb-6 opacity-90">Let's discuss how we can transform your digital presence</p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        >
                            Schedule a Free Consultation
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
