'use client'

import { motion } from 'framer-motion'

export default function AboutHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        We Are <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Popylabs</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        A digital marketing powerhouse transforming brands into viral sensations through data-driven strategies and creative excellence.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                            <div className="text-3xl font-bold text-white">50+</div>
                            <div className="text-sm text-gray-300">Happy Clients</div>
                        </div>
                        <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                            <div className="text-3xl font-bold text-white">10M+</div>
                            <div className="text-sm text-gray-300">Impressions</div>
                        </div>
                        <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                            <div className="text-3xl font-bold text-white">200+</div>
                            <div className="text-sm text-gray-300">Campaigns</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    )
}
