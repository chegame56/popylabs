'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const reasons = [
    {
        title: 'Affordable Premium Quality',
        description: 'Studio-quality content and strategy at prices startups can actually afford. No cutting corners.',
        icon: '💰'
    },
    {
        title: 'Proven Track Record',
        description: '50+ successful campaigns with documented case studies. We don\'t just promise results—we show them.',
        icon: '📊'
    },
    {
        title: 'Fast Turnaround',
        description: 'We move at startup speed. Quick iterations, rapid testing, and agile execution.',
        icon: '⚡'
    },
    {
        title: 'Full Transparency',
        description: 'Real-time campaign dashboards, honest reporting, and direct access to your account manager.',
        icon: '🔍'
    },
    {
        title: 'Multi-Platform Expertise',
        description: 'From TikTok to LinkedIn, we know what works on each platform and how to optimize for it.',
        icon: '🌐'
    },
    {
        title: 'No Long-Term Lock-In',
        description: 'Month-to-month packages. Stay because we deliver results, not because you\'re trapped in a contract.',
        icon: '🔓'
    }
]

export default function WhyChooseUs() {
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
                        Why Choose <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Popylabs</span>?
                    </h2>
                    <p className="text-xl text-gray-600">What makes us different from traditional agencies</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-400 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {reason.description}
                            </p>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom highlight section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 border-2 border-purple-200"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="text-6xl">🎯</div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Still not convinced?
                            </h3>
                            <p className="text-gray-700 text-lg">
                                Check out our <a href="/portfolio" className="text-purple-600 hover:text-purple-700 font-semibold underline">case studies</a> to see exactly how we've helped businesses like yours achieve viral growth and measurable ROI.
                            </p>
                        </div>
                        <div>
                            <a
                                href="/contact"
                                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
