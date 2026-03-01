import Image from 'next/image';

export default function WhyPopylabs() {
    const reasons = [
        {
            icon: '/icons/why-choose/cyber-security.png',
            title: 'Cybersecurity Background',
            description: 'Your data is protected with enterprise-level security. Trust built on expertise from our team of cybersecurity scholars.',
            color: 'from-red-500 to-orange-500'
        },
        {
            icon: '/icons/why-choose/startup.png',
            title: 'SME & Startup Friendly',
            description: 'Flexible packages designed for growing businesses. Enterprise quality without enterprise prices.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: '/icons/why-choose/human-AI.png',
            title: '24/7 AI + Human Support',
            description: 'Instant AI responses backed by human coordinators. Never wait for answers, day or night.',
            color: 'from-whatsapp to-green-600'
        },
        {
            icon: '/icons/why-choose/studio.png',
            title: 'Studio Production Quality',
            description: 'In-house studio in Colombo. Professional equipment, certified videographers, zero hassle for you.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: '/icons/why-choose/data_driven.png',
            title: 'Data-Driven Results',
            description: 'Every package includes performance analysis. Real metrics, real improvements, real ROI.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: '/icons/why-choose/expertise.png',
            title: 'Platform Expertise',
            description: 'Specialized in Facebook, TikTok, Instagram, Google Ads, and LinkedIn. We know what works.',
            color: 'from-accent-gold to-yellow-500'
        }
    ]

    return (
        <section className="section bg-navy-darker/50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Why Choose <span className="gradient-text">Popylabs?</span>
                </h2>
                <p className="text-xl text-sky-blue max-w-2xl mx-auto">
                    We're not just another agency—we're your growth partner
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                    <div key={index} className="group relative">
                        {/* Gradient Border Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-20 rounded-2xl blur transition-opacity duration-300`}></div>

                        <div className="card animated-border relative">
                            {/* Icon */}
                            <div className="mb-4 flex items-center justify-center">
                                <div className="w-16 h-16 relative">
                                    <Image
                                        src={reason.icon}
                                        alt={reason.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-cream mb-3 group-hover:text-white transition-colors">
                                {reason.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sky-blue leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center glass-dark rounded-2xl p-8 border border-white/30">
                <p className="text-lg text-cream mb-4">
                    <span className="font-bold text-accent-gold">No commitment before consultation.</span> We believe in earning your trust through results, not contracts.
                </p>
                <p className="text-white">
                    Book a free consultation • Discuss your goals • Get a custom strategy • Start when you're ready
                </p>
            </div>
        </section>
    )
}
