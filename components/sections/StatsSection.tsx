export default function StatsSection() {
    const stats = [
        { number: '40+', label: 'Professionals' },
        { number: '24/7', label: 'AI Support' },
        { number: '100%', label: 'Data-Driven' },
        { number: 'Studio', label: 'Production' },
    ]

    return (
        <section className="w-full bg-navy-darker/50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="glass-dark rounded-xl p-6 lg:p-8 hover:border-accent-gold/50 transition-all text-center"
                        >
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                                {stat.number}
                            </div>
                            <div className="text-white text-sm md:text-base lg:text-lg">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
