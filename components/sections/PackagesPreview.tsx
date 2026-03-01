'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PACKAGES } from '@/lib/constants'
import { formatPrice } from '@/lib/currency'

export default function PackagesPreview() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const featuredPackages = [
        PACKAGES.basic,
        PACKAGES.standard,
        PACKAGES.premium
    ]

    return (
        <section className="section bg-navy-darker/50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Flexible <span className="gradient-text">Packages</span>
                </h2>
                <p className="text-xl text-sky-blue max-w-2xl mx-auto">
                    Choose a package that fits your budget, or let us create a custom solution for your needs
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {featuredPackages.map((pkg) => {
                    const price = mounted ? formatPrice(pkg.price) : { amount: pkg.price.toLocaleString(), currency: 'USD', fullText: `$${pkg.price.toLocaleString()}` }

                    return (
                        <div
                            key={pkg.name}
                            className={`relative ${pkg.featured
                                ? 'md:scale-110 md:z-10'
                                : ''
                                }`}
                        >
                            {/* Featured Badge */}
                            {pkg.featured && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                    <span className="bg-gradient-to-r from-accent-gold to-yellow-500 text-navy-deep px-4 py-1 rounded-full text-sm font-bold">
                                        ⭐ Most Popular
                                    </span>
                                </div>
                            )}

                            <div className={`card ${pkg.featured
                                ? 'border-accent-gold/50 shadow-2xl shadow-accent-gold/20'
                                : ''
                                }`}>
                                {/* Package Name */}
                                <h3 className="text-2xl font-bold text-cream mb-2">{pkg.name}</h3>
                                <p className="text-white text-sm mb-6">{pkg.description}</p>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="text-4xl font-bold text-accent-gold">
                                        {price.currency === 'LKR' ? 'LKR ' : '$'}{price.amount}
                                        <span className="text-lg text-white font-normal">{pkg.period}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.slice(0, 6).map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sky-blue text-sm">
                                            <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    href="/contact"
                                    className={`block text-center py-3 rounded-lg font-bold transition-all ${pkg.featured
                                        ? 'btn-primary'
                                        : 'btn-secondary'
                                        }`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="glass-dark rounded-xl p-8 border border-sky-blue/30">
                    <div className="mb-4 flex items-center">
                        <div className="w-16 h-16 relative">
                            <Image
                                src="/icons/tiktok.png"
                                alt="TikTok Specialist Package"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-accent-gold mb-2">TikTok Specialist Package</h3>
                    <p className="text-sky-blue mb-4">
                        Dedicated TikTok marketing with studio shoots and professional presenters. Starting at{' '}
                        <span className="font-bold text-cream">
                            {mounted ? formatPrice(50000).fullText : 'LKR 50,000'}/month
                        </span>
                    </p>
                    <Link href="/services/tiktok-specialist" className="text-cream hover:text-accent-gold transition-colors inline-flex items-center gap-2">
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="glass-dark rounded-xl p-8 border border-accent-gold/30">
                    <div className="mb-4 flex items-center">
                        <div className="w-16 h-16 relative">
                            <Image
                                src="/icons/package-customization.png"
                                alt="Custom Package"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-accent-gold mb-2">Need Something Custom?</h3>
                    <p className="text-sky-blue mb-4">We create flexible packages tailored to your specific goals and budget. Let's discuss your unique requirements.</p>
                    <Link href="/contact" className="btn-primary">
                        Request Custom Quote
                    </Link>
                </div>
            </div>

            {/* View All CTA */}
            <div className="text-center">
                <Link href="/packages" className="btn-secondary">
                    View All Packages & Pricing Calculator
                </Link>
            </div>
        </section>
    )
}
