import Link from 'next/link'
import Image from 'next/image'

export default function LeadMagnets() {
    const resources = [
        {
            icon: '/icons/free-resources/audit.png',
            title: 'Free Social Media Audit',
            description: 'Get a comprehensive analysis of your current social media presence and actionable recommendations.',
            link: '/contact',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: '/icons/free-resources/checklist.png',
            title: 'Digital Marketing Checklist',
            description: 'Complete checklist for launching and managing successful marketing campaigns for SMEs.',
            link: '/contact',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: '/icons/free-resources/platform-selection.png',
            title: 'Platform Selection Guide',
            description: 'Interactive quiz to discover which social media platforms are best for your business.',
            link: '/contact',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: '/icons/free-resources/roi-calculator.png',
            title: 'ROI Calculator',
            description: 'Calculate your potential return on investment from digital marketing campaigns.',
            link: '/contact',
            color: 'from-accent-gold to-yellow-500'
        },
        {
            icon: '/icons/free-resources/video-marketing.png',
            title: 'Video Marketing Guide',
            description: 'Best practices for creating engaging video content on TikTok, Reels, and YouTube.',
            link: '/contact',
            color: 'from-red-500 to-orange-500'
        },
        {
            icon: '/icons/free-resources/budget.png',
            title: 'SME Budget Template',
            description: 'Free marketing budget spreadsheet template designed specifically for growing businesses.',
            link: '/contact',
            color: 'from-indigo-500 to-blue-500'
        }
    ]

    return (
        <section className="section bg-navy-darker/30">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Free <span className="gradient-text">Resources</span>
                </h2>
                <p className="text-xl text-sky-blue max-w-2xl mx-auto">
                    Valuable tools and guides to kickstart your digital marketing journey
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource, index) => (
                    <Link
                        key={index}
                        href={resource.link}
                        className="group relative"
                    >
                        {/* Gradient Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-20 rounded-2xl blur transition-opacity duration-300`}></div>

                        <div className="card relative">
                            {/* Icon */}
                            <div className="mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <div className="w-16 h-16 relative">
                                    <Image
                                        src={resource.icon}
                                        alt={resource.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-cream mb-3 group-hover:text-accent-gold transition-colors">
                                {resource.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sky-blue mb-6 leading-relaxed text-sm">
                                {resource.description}
                            </p>

                            {/* Download Link */}
                            <div className="flex items-center text-cream group-hover:text-accent-gold transition-colors">
                                <span className="text-sm font-semibold">Access Free Resource</span>
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
