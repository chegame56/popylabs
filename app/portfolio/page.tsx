import Link from 'next/link'
import Image from 'next/image'
import { CASE_STUDIES } from '@/lib/constants'

export default function PortfolioPage() {
    const industries = ['All', ...Array.from(new Set(CASE_STUDIES.map(study => study.industry)))]
    const services = ['All', ...Array.from(new Set(CASE_STUDIES.map(study => study.service)))]

    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="section text-center bg-gradient-to-br from-navy-deep via-navy-darker to-steel-blue">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                    Our <span className="gradient-text">Portfolio</span>
                </h1>
                <p className="text-xl md:text-2xl text-sky-blue max-w-3xl mx-auto">
                    Real clients. Real challenges. Real results. See how we've driven measurable growth across industries.
                </p>
            </section>

            {/* Behind The Scenes Videos */}
            <section className="section relative overflow-hidden">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Behind The <span className="gradient-text">Scenes</span>
                    </h2>
                    <p className="text-sky-blue text-lg max-w-2xl mx-auto">
                        A sneak peek into our process and the magic behind our premium solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="group glass-dark rounded-2xl overflow-hidden relative animated-border p-1 hover:shadow-2xl hover:shadow-accent-gold/20 transition-all duration-300">
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 bg-navy-darker">
                                <video
                                    src={`/portfolio/bts-${num}.mp4`}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Product Photography Carousel */}
            <section className="py-20 bg-navy-deep/80 relative overflow-hidden border-y border-white/5">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Product <span className="gradient-text">Photography</span>
                    </h2>
                    <p className="text-sky-blue text-lg max-w-2xl mx-auto px-4">
                        High-quality visuals that make your products irresistible.
                    </p>
                </div>

                <div className="relative flex overflow-hidden group carousel-wrapper">
                    <div className="flex gap-4 min-w-max animate-scroll">
                        {/* Set 1 */}
                        {[...Array(21)].map((_, i) => (
                            <div key={`set1-${i + 1}`} className="w-[250px] md:w-[350px] aspect-[4/5] relative rounded-lg overflow-hidden glass-dark shrink-0">
                                <Image
                                    src={`/portfolio/product_photography/product_photography_${i + 1}.jpg`}
                                    alt={`Product Photography ${i + 1}`}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 250px, 350px"
                                />
                            </div>
                        ))}
                        {/* Set 2 — identical duplicate for seamless loop */}
                        {[...Array(21)].map((_, i) => (
                            <div key={`set2-${i + 1}`} className="w-[250px] md:w-[350px] aspect-[4/5] relative rounded-lg overflow-hidden glass-dark shrink-0">
                                <Image
                                    src={`/portfolio/product_photography/product_photography_${i + 1}.jpg`}
                                    alt={`Product Photography ${i + 1}`}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 250px, 350px"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Gradient overlays to soften edges */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy-deep to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy-deep to-transparent z-10 pointer-events-none" />
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="section">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Case <span className="gradient-text">Studies</span>
                    </h2>
                    <p className="text-sky-blue text-lg max-w-2xl mx-auto">
                        In-depth looks at how we've helped our clients achieve their goals and scale their businesses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CASE_STUDIES.map((study) => (
                        <Link
                            key={study.id}
                            href={`/portfolio/${study.id}`}
                            className="card group cursor-pointer"
                        >
                            {/* Portfolio Image */}
                            <div className="relative w-full h-56 rounded-lg mb-6 overflow-hidden group-hover:scale-105 transition-transform">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <div className="flex items-center gap-2 mb-3 flex-wrap">
                                <span className="text-xs px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/30">
                                    {study.industry}
                                </span>
                                <span className="text-xs px-3 py-1 rounded-full bg-whatsapp/10 text-whatsapp border border-whatsapp/30">
                                    {study.service}
                                </span>
                                <span className="text-xs px-3 py-1 rounded-full bg-steel-blue/30 text-cream border border-steel-blue">
                                    {study.duration}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-cream mb-3 group-hover:text-accent-gold transition-colors">
                                {study.title}
                            </h2>

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
                                <span className="text-sm font-semibold">View Full Case Study</span>
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
                        Ready to Write Your Success Story?
                    </h2>
                    <p className="text-sky-blue text-lg mb-8 max-w-2xl mx-auto">
                        These results aren't luck—they're the outcome of strategy, execution, and optimization. Let's build yours.
                    </p>
                    <Link href="/contact" className="btn-primary">
                        Start Your Project
                    </Link>
                </div>
            </section>
        </div>
    )
}
