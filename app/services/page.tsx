import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '@/lib/constants'

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="section text-center bg-gradient-to-br from-navy-deep via-navy-darker to-steel-blue">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                    Our <span className="gradient-text">Services</span>
                </h1>
                <p className="text-xl md:text-2xl text-sky-blue max-w-3xl mx-auto">
                    Comprehensive digital solutions designed to grow your brand and drive measurable results
                </p>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="card group cursor-pointer"
                        >
                            <div className="mb-4 group-hover:scale-110 transition-transform">
                                {service.icon.startsWith('/') ? (
                                    <Image
                                        src={service.icon}
                                        alt={service.name}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 object-contain"
                                    />
                                ) : (
                                    <span className="text-6xl">{service.icon}</span>
                                )}
                            </div>
                            <h2 className="text-2xl font-bold text-accent-gold mb-2 group-hover:text-cream transition-colors">
                                {service.name}
                            </h2>
                            <p className="text-xl font-semibold text-cream mb-3">
                                {service.headline}
                            </p>
                            <p className="text-sky-blue mb-4 leading-relaxed">
                                {service.shortDesc}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {service.platforms.map((platform, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/30"
                                    >
                                        {platform}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center text-cream group-hover:text-accent-gold transition-colors">
                                <span className="text-sm font-semibold">{service.ctaText || 'Learn More'}</span>
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-navy-darker/50">
                <div className="glass-dark rounded-2xl p-12 text-center border border-accent-gold/30">
                    <h2 className="text-3xl font-bold mb-4">
                        Not Sure Which Service You Need?
                    </h2>
                    <p className="text-sky-blue text-lg mb-8 max-w-2xl mx-auto">
                        Book a free consultation and let's discuss your goals. We'll create a custom strategy tailored to your business.
                    </p>
                    <Link href="/contact" className="btn-primary">
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    )
}
