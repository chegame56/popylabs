import Hero from '@/components/sections/Hero'
import StatsSection from '@/components/sections/StatsSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import WhyPopylabs from '@/components/sections/WhyPopylabs'
import PortfolioShowcase from '@/components/sections/PortfolioShowcase'
import PackagesPreview from '@/components/sections/PackagesPreview'
import Testimonials from '@/components/sections/Testimonials'
import LeadMagnets from '@/components/sections/LeadMagnets'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
    return (
        <div className="min-h-screen">
            <Hero />
            <StatsSection />
            <ServicesPreview />
            <WhyPopylabs />
            <PortfolioShowcase />
            <PackagesPreview />
            <Testimonials />
            <LeadMagnets />
            <CTASection />
        </div>
    )
}
