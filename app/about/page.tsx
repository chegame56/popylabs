import AboutHero from '@/components/sections/about/AboutHero'
import { Metadata } from 'next'
import OurStory from '@/components/sections/about/OurStory'
import MissionVision from '@/components/sections/about/MissionVision'
import OurValues from '@/components/sections/about/OurValues'
import OurApproach from '@/components/sections/about/OurApproach'
import AboutStats from '@/components/sections/about/AboutStats'
import WhyChooseUs from '@/components/sections/about/WhyChooseUs'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
    title: 'About Us - Popylabs | Digital Marketing Agency',
    description: 'Learn about Popylabs - a digital marketing agency transforming brands through data-driven strategies, creative excellence, and affordable premium quality. Serving 50+ clients across Asia-Pacific.',
}

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <AboutHero />
            <OurStory />
            <MissionVision />
            <OurValues />
            <OurApproach />
            <AboutStats />
            <WhyChooseUs />
            <CTASection />
        </div>
    )
}
