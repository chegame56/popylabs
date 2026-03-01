import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-deep via-navy-darker to-steel-blue noise-texture">
            {/* Hero Individual Background - Blurred */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-45">
                    <Image
                        src="/Hero-individual.png"
                        alt="Popylabs Professional"
                        fill
                        className="object-cover object-top blur-sm"
                        priority
                    />
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
                {/* Top Badge - Centered - Semi-transparent to show image */}
                <div className="flex justify-center pt-8 mb-6 mt-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-navy-deep/20 border border-accent-gold/30 animate-float">
                        <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse"></span>
                        <span className="text-sm text-cream drop-shadow-lg">24/7 AI Support • Studio Production • International Clients Welcome</span>
                    </div>
                </div>

                {/* Main Grid Layout - Full Height */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 flex-1 pb-20">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-8 text-center lg:text-left flex flex-col justify-between">
                        <div>
                            {/* Main Headline */}
                            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 leading-tight">
                                Data-Driven Marketing That
                                <span className="block gradient-text">Converts Scrolls Into Sales</span>
                            </h1>
                        </div>

                        {/* CTAs - Pushed to bottom */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-auto">
                            <Link href="/contact" className="btn-primary text-lg">
                                <span>Get Free Consultation</span>
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link href="/packages" className="btn-secondary text-lg">
                                View Our Packages
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Sidebar Elements */}
                    <div className="lg:col-span-4 flex flex-col justify-between gap-4 items-center lg:items-end">
                        {/* Description Paragraph */}
                        <div className="text-center lg:text-right w-full">
                            <p className="text-base md:text-lg lg:text-xl text-sky-blue leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                                Elevate your brand with <br></br> <span className="text-accent-gold font-semibold">studio-quality content</span> and flexible packages. Powered by  <span className="text-accent-gold font-semibold">40+ certified professionals</span> and <span className="text-whatsapp font-semibold">AI-driven support</span>.
                            </p>
                        </div>

                        {/* Bottom Section - Social Media Icons and Recent Projects */}
                        <div className="w-full flex flex-col gap-4 mt-auto">
                            {/* Social Media Icons */}
                            <div className="flex gap-3 justify-center lg:justify-end w-full">
                                {[
                                    { Icon: FaFacebook, label: 'Facebook', href: '#' },
                                    { Icon: FaInstagram, label: 'Instagram', href: '#' },
                                    { Icon: FaTiktok, label: 'TikTok', href: '#' },
                                    { Icon: FaYoutube, label: 'YouTube', href: '#' },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full glass-dark border border-accent-gold/30 flex items-center justify-center text-cream hover:text-accent-gold hover:border-accent-gold/60 hover:scale-110 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>

                            {/* Recent Projects Card */}
                            <Link href="/portfolio" className="w-full group">
                                <div className="glass-dark rounded-xl p-3 border border-accent-gold/30 hover:border-accent-gold/60 transition-all duration-300 hover:scale-105">
                                    {/* Card Image */}
                                    <div className="w-full h-24 bg-gradient-to-br from-steel-blue to-sky-blue rounded-lg mb-2 flex items-center justify-center overflow-hidden relative">
                                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                                        <span className="text-4xl relative z-10">🎨</span>
                                    </div>

                                    {/* Card Label */}
                                    <p className="text-sm font-semibold text-cream group-hover:text-accent-gold transition-colors">
                                        Recent Projects
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
