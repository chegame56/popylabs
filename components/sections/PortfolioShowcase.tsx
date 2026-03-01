'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CASE_STUDIES } from '@/lib/constants'

export default function PortfolioShowcase() {
    const [filter, setFilter] = useState('all')

    const filters = ['all', 'Social Media', 'Videography', 'Full Marketing']

    const filtered = filter === 'all'
        ? CASE_STUDIES.slice(0, 4)
        : CASE_STUDIES.filter(study => study.service.includes(filter)).slice(0, 4)

    return (
        <section className="section">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Proven <span className="gradient-text">Results</span>
                </h2>
                <p className="text-xl text-sky-blue max-w-2xl mx-auto">
                    Data-driven campaigns. Measurable outcomes. See how we've delivered growth for businesses like yours.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${filter === f
                            ? 'bg-accent-gold text-navy-deep shadow-lg shadow-accent-gold/30'
                            : 'glass-dark hover:border-accent-gold/50'
                            }`}
                    >
                        {f === 'all' ? 'All Projects' : f}
                    </button>
                ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {filtered.map((study) => (
                    <Link key={study.id} href={`/portfolio/${study.id}`} className="card group cursor-pointer">
                        {/* Portfolio Image */}
                        <div className="relative w-full h-48 rounded-lg mb-6 overflow-hidden group-hover:scale-105 transition-transform">
                            <Image
                                src={study.image}
                                alt={study.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/30">
                                {study.industry}
                            </span>
                            <span className="text-xs px-3 py-1 rounded-full bg-whatsapp/10 text-whatsapp border border-whatsapp/30">
                                {study.service}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-cream mb-3 group-hover:text-accent-gold transition-colors">
                            {study.title}
                        </h3>

                        <p className="text-white mb-4">
                            <span className="font-semibold text-sky-blue">Challenge:</span> {study.challenge}
                        </p>

                        <p className="text-white mb-6">
                            <span className="font-semibold text-sky-blue">Solution:</span> {study.solution}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {study.metrics.map((metric, idx) => (
                                <div key={idx} className="text-center glass rounded-lg p-3">
                                    <div className="text-accent-gold font-bold text-sm">{metric}</div>
                                </div>
                            ))}
                        </div>

                        {/* Link */}
                        <div className="flex items-center text-cream group-hover:text-accent-gold transition-colors">
                            <span className="text-sm font-semibold">View Case Study</span>
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center">
                <Link href="/portfolio" className="btn-primary">
                    View All Case Studies
                </Link>
            </div>
        </section>
    )
}
