'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function MissionVision() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Mission & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Vision</span>
                    </h2>
                    <p className="text-xl text-gray-300">What drives us every single day</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <div className="text-5xl mb-4">🎯</div>
                            <h3 className="text-3xl font-bold mb-4 text-white">Our Mission</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To democratize world-class digital marketing by providing <strong>data-driven, creative, and affordable solutions</strong> that help businesses of all sizes achieve viral growth and measurable ROI.
                            </p>
                            <div className="mt-6 space-y-2">
                                <div className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">✓</span>
                                    <span className="text-gray-300">Make premium marketing accessible</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">✓</span>
                                    <span className="text-gray-300">Deliver measurable, transparent results</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">✓</span>
                                    <span className="text-gray-300">Prioritize client success over profits</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <div className="text-5xl mb-4">🔮</div>
                            <h3 className="text-3xl font-bold mb-4 text-white">Our Vision</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To become the <strong>go-to digital marketing partner</strong> for startups and SMEs across Asia-Pacific, known for turning underdog brands into market leaders through <strong>creative innovation and strategic excellence</strong>.
                            </p>
                            <div className="mt-6 space-y-2">
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">✓</span>
                                    <span className="text-gray-300">Regional market leadership by 2027</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">✓</span>
                                    <span className="text-gray-300">Empower 1000+ businesses to scale</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">✓</span>
                                    <span className="text-gray-300">Set new industry standards for value</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
