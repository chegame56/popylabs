import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '@/lib/constants'
import { notFound } from 'next/navigation'

interface ServiceDetailPageProps {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    return SERVICES.map((service) => ({
        id: service.id,
    }))
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
    const service = SERVICES.find(s => s.id === params.id)

    if (!service) {
        notFound()
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="section text-center bg-gradient-to-br from-navy-deep via-navy-darker to-steel-blue">
                <div className="mb-6">
                    {service.icon.startsWith('/') ? (
                        <Image
                            src={service.icon}
                            alt={service.name}
                            width={80}
                            height={80}
                            className="w-20 h-20 object-contain mx-auto"
                        />
                    ) : (
                        <span className="text-7xl">{service.icon}</span>
                    )}
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                    {service.name}
                </h1>
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                    {service.headline}
                </p>
                <p className="text-xl md:text-2xl text-sky-blue max-w-4xl mx-auto leading-relaxed">
                    {service.description}
                </p>
            </section>

            {/* Focus Areas */}
            <section className="section bg-navy-darker/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Our <span className="gradient-text">Focus Areas</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {service.focusAreas.map((area, idx) => (
                            <div
                                key={idx}
                                className="card text-center group hover:scale-105 transition-transform"
                            >
                                <div className="text-5xl mb-4">✨</div>
                                <h3 className="text-xl font-bold text-accent-gold group-hover:text-cream transition-colors">
                                    {area}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms */}
            <section className="section">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">
                        <span className="gradient-text">Platforms</span> We Work With
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {service.platforms.map((platform, idx) => (
                            <span
                                key={idx}
                                className="px-6 py-3 rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/30 text-lg font-semibold hover:bg-accent-gold/20 transition-colors"
                            >
                                {platform}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-navy-darker/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Why Choose <span className="gradient-text">Popylabs</span>?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card">
                            <h3 className="text-2xl font-bold text-accent-gold mb-4">🎯 Data-Driven Results</h3>
                            <p className="text-sky-blue leading-relaxed">
                                We don't just create content—we create strategies backed by analytics and proven to deliver measurable ROI.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-2xl font-bold text-accent-gold mb-4">💎 Premium Quality</h3>
                            <p className="text-sky-blue leading-relaxed">
                                Studio-grade production, professional expertise, and attention to detail that sets your brand apart.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-2xl font-bold text-accent-gold mb-4">⚡ Fast Turnaround</h3>
                            <p className="text-sky-blue leading-relaxed">
                                We understand the pace of digital marketing. Quick iterations without compromising on quality.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-2xl font-bold text-accent-gold mb-4">🤝 Dedicated Support</h3>
                            <p className="text-sky-blue leading-relaxed">
                                24/7 support means we're here when you need us. Your success is our priority.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="glass-dark rounded-2xl p-12 text-center border border-accent-gold/30 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-sky-blue text-lg mb-8">
                        Let's discuss how we can help your business grow with {service.name.toLowerCase()}.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary">
                            Book Free Consultation
                        </Link>
                        <Link href="/packages" className="btn-secondary">
                            View Packages
                        </Link>
                    </div>
                </div>
            </section>

            {/* Back to Services */}
            <section className="section pt-0">
                <div className="text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-sky-blue hover:text-accent-gold transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to All Services
                    </Link>
                </div>
            </section>
        </div>
    )
}
