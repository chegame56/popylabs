import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '@/lib/constants'
import { getPlatformIcon } from '@/lib/platformIcons'

export default function ServicesPreview() {
    return (
        <section className="section">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Our <span className="gradient-text">Services</span>
                </h2>
                <p className="text-xl text-sky-blue max-w-2xl mx-auto">
                    Comprehensive digital solutions tailored to your business needs
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.map((service, index) => (
                    <Link
                        key={service.id}
                        href={`/services/${service.id}`}
                        className="card group cursor-pointer"
                    >
                        {/* Icon */}
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

                        {/* Service Name */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cream transition-colors">
                            {service.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sky-blue mb-4 leading-relaxed">
                            {service.shortDesc}
                        </p>

                        {/* Platforms */}
                        <div className="flex flex-wrap gap-3 items-center">
                            {service.platforms.map((platform, idx) => {
                                const Icon = getPlatformIcon(platform);
                                return Icon ? (
                                    <div
                                        key={idx}
                                        className="group/icon relative"
                                        title={platform}
                                    >
                                        <Icon
                                            className="w-6 h-6 text-white transition-all duration-300 group-hover/icon:scale-125 group-hover/icon:text-cream"
                                        />
                                        {/* Tooltip */}
                                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-dark-charcoal text-cream rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                            {platform}
                                        </span>
                                    </div>
                                ) : (
                                    <span
                                        key={idx}
                                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-white border border-white/30"
                                    >
                                        {platform}
                                    </span>
                                );
                            })}
                        </div>

                        {/* Arrow */}
                        <div className="mt-6 flex items-center text-cream group-hover:text-accent-gold transition-colors">
                            <span className="text-sm font-semibold">Learn More</span>
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
                <Link href="/services" className="btn-secondary">
                    View All Services
                </Link>
            </div>
        </section>
    )
}
