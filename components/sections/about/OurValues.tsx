'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const values = [
    {
        icon: '💎',
        title: 'Quality Over Quantity',
        description: 'We\'d rather deliver 10 exceptional campaigns than 100 mediocre ones. Every piece of content is crafted with intention and excellence.'
    },
    {
        icon: '📊',
        title: 'Data-Driven Decisions',
        description: 'Gut feelings don\'t scale businesses—data does. We measure, analyze, and optimize everything to maximize your ROI.'
    },
    {
        icon: '🤝',
        title: 'Radical Transparency',
        description: 'No smoke and mirrors. You get full access to analytics, campaign performance, and honest feedback—even when things don\'t go as planned.'
    },
    {
        icon: '⚡',
        title: 'Speed & Agility',
        description: 'In digital marketing, speed wins. We move fast, adapt quickly, and capitalize on trends before they become saturated.'
    },
    {
        icon: '💡',
        title: 'Creative Innovation',
        description: 'We don\'t follow trends—we create them. Our team constantly experiments with new formats, platforms, and strategies to stay ahead.'
    },
    {
        icon: '🎓',
        title: 'Client Education',
        description: 'We don\'t just do the work—we teach you why it works. Our goal is to empower you with knowledge, not create dependency.'
    }
]

export default function OurValues() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Core Values</span>
                    </h2>
                    <p className="text-xl text-gray-600">The principles that guide everything we do</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:border-purple-300 transition-all duration-300"
                        >
                            {/* Hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative z-10">
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
