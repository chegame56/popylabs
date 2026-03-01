import Link from 'next/link'
import Image from 'next/image'
import { CASE_STUDIES } from '@/lib/constants'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    return CASE_STUDIES.map((study) => ({
        id: study.id.toString(),
    }))
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
    const study = CASE_STUDIES.find(s => s.id.toString() === params.id)

    if (!study) {
        notFound()
    }

    const relatedStudies = CASE_STUDIES.filter(s => s.id !== study.id).slice(0, 2)

    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="section bg-gradient-to-br from-navy-deep via-navy-darker to-steel-blue">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badges */}
                    <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
                        <span className="text-xs px-4 py-2 rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/30">
                            {study.industry}
                        </span>
                        <span className="text-xs px-4 py-2 rounded-full bg-whatsapp/10 text-whatsapp border border-whatsapp/30">
                            {study.service}
                        </span>
                        <span className="text-xs px-4 py-2 rounded-full bg-steel-blue/30 text-cream border border-steel-blue">
                            {study.duration}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        {study.title}
                    </h1>

                    {/* Key Metrics Banner */}
                    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                        {study.metrics.map((metric, idx) => (
                            <div key={idx} className="glass-dark rounded-lg p-4 border border-accent-gold/20">
                                <div className="text-accent-gold font-bold text-lg">{metric}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="section pt-0">
                <div className="relative w-full max-w-5xl mx-auto h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                </div>
            </section>

            {/* Challenge */}
            <section className="section">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        The <span className="gradient-text">Challenge</span>
                    </h2>
                    <p className="text-lg text-cream leading-relaxed">
                        {study.fullChallenge}
                    </p>
                </div>
            </section>

            {/* Strategy */}
            <section className="section bg-navy-darker/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Our <span className="gradient-text">Strategy</span>
                    </h2>
                    <div className="space-y-4">
                        {study.strategy.map((point, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold/20 border border-accent-gold flex items-center justify-center text-accent-gold font-bold">
                                    {idx + 1}
                                </div>
                                <p className="text-lg text-cream pt-1">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Execution */}
            <section className="section">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="gradient-text">Execution</span>
                    </h2>
                    <div className="space-y-6">
                        {study.execution.map((step, idx) => (
                            <div key={idx} className="card">
                                <p className="text-lg text-cream leading-relaxed">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="section bg-gradient-to-br from-navy-darker to-steel-blue/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        The <span className="gradient-text">Results</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(study.detailedResults).map(([key, result]) => (
                            <div key={key} className="glass-dark rounded-xl p-6 border border-accent-gold/30">
                                <div className="text-3xl font-bold text-accent-gold mb-2">
                                    {result.value}
                                </div>
                                <p className="text-sky-blue">{result.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Poppy Lab Insight */}
            <section className="section">
                <div className="max-w-4xl mx-auto">
                    <div className="card bg-gradient-to-br from-accent-gold/10 to-transparent border-accent-gold/30">
                        <div className="flex items-start gap-4">
                            <div className="text-4xl">💡</div>
                            <div>
                                <h3 className="text-2xl font-bold text-accent-gold mb-3">Poppy Lab Insight</h3>
                                <p className="text-lg text-cream leading-relaxed italic">
                                    "{study.insight}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Quote (if available) */}
            {study.clientQuote && (
                <section className="section bg-navy-darker/30">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="text-6xl text-accent-gold/20 mb-4">"</div>
                        <p className="text-xl text-cream italic mb-6 leading-relaxed">
                            {study.clientQuote}
                        </p>
                        <div className="text-accent-gold font-bold">{study.clientName}</div>
                        <div className="text-sky-blue">{study.clientRole}</div>
                    </div>
                </section>
            )}

            {/* Related Case Studies */}
            {relatedStudies.length > 0 && (
                <section className="section">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            More <span className="gradient-text">Success Stories</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedStudies.map((relatedStudy) => (
                                <Link
                                    key={relatedStudy.id}
                                    href={`/portfolio/${relatedStudy.id}`}
                                    className="card group cursor-pointer"
                                >
                                    <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform">
                                        <Image
                                            src={relatedStudy.image}
                                            alt={relatedStudy.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-cream mb-2 group-hover:text-accent-gold transition-colors">
                                        {relatedStudy.title}
                                    </h3>
                                    <p className="text-sky-blue text-sm mb-3">{relatedStudy.industry} • {relatedStudy.service}</p>
                                    <div className="flex items-center text-cream group-hover:text-accent-gold transition-colors">
                                        <span className="text-sm font-semibold">View Case Study</span>
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section bg-navy-darker/50">
                <div className="glass-dark rounded-2xl p-12 text-center border border-accent-gold/30 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready for Results Like These?
                    </h2>
                    <p className="text-sky-blue text-lg mb-8">
                        Every campaign starts with understanding your goals. Let's talk strategy.
                    </p>
                    <Link href="/contact" className="btn-primary">
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    )
}
