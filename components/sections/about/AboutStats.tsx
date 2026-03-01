'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
    {
        value: '50+',
        label: 'Happy Clients',
        description: 'Across 10+ industries',
        icon: '🤝',
        color: 'from-purple-500 to-purple-600'
    },
    {
        value: '10M+',
        label: 'Total Impressions',
        description: 'Generated in 2023-2024',
        icon: '👀',
        color: 'from-blue-500 to-blue-600'
    },
    {
        value: '200+',
        label: 'Campaigns Launched',
        description: 'With measurable ROI',
        icon: '🚀',
        color: 'from-pink-500 to-pink-600'
    },
    {
        value: '3.5x',
        label: 'Avg ROI',
        description: 'On ad spend',
        icon: '📈',
        color: 'from-green-500 to-green-600'
    },
    {
        value: '95%',
        label: 'Client Retention',
        description: 'Year-over-year',
        icon: '⭐',
        color: 'from-yellow-500 to-yellow-600'
    },
    {
        value: '24/7',
        label: 'Support',
        description: 'For all clients',
        icon: '💬',
        color: 'from-indigo-500 to-indigo-600'
    }
]

export default function AboutStats() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Impact</span> in Numbers
                    </h2>
                    <p className="text-xl text-gray-300">Real results we've delivered for our clients</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
                        >
                            {/* Gradient background on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                            <div className="relative z-10 text-center">
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                    {stat.value}
                                </div>
                                <div className="text-xl font-semibold text-white mb-1">
                                    {stat.label}
                                </div>
                                <div className="text-sm text-gray-400">
                                    {stat.description}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6">
                        <p className="text-2xl font-semibold mb-2">
                            🏆 Trusted by startups and SMEs across{' '}
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Asia, Europe & Australia
                            </span>
                        </p>
                        <p className="text-gray-300">From Colombo to Singapore, Dubai to Sydney</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
