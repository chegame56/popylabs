import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/features/WhatsAppButton'
import ActiveBackgroundEffects from '@/components/features/ActiveBackgroundEffects'
import { Analytics } from '@vercel/analytics/next'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: {
        default: 'Popylabs | Digital Marketing Agency - Data-Driven Results',
        template: '%s | Popylabs'
    },
    description: 'Transform your brand with Popylabs - Sri Lanka\'s premier digital marketing agency. 24/7 AI support, studio-quality content, flexible packages for startups & SMEs.',
    keywords: ['digital marketing', 'social media marketing', 'TikTok marketing', 'video production', 'SME marketing', 'startup marketing', 'Sri Lanka'],
    authors: [{ name: 'Popylabs' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://popylabs.com',
        title: 'Popylabs | Digital Marketing Agency',
        description: 'Data-driven marketing that converts scrolls into sales. 24/7 support, studio production, flexible packages.',
        siteName: 'Popylabs',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Popylabs | Digital Marketing Agency',
        description: 'Data-driven marketing that converts scrolls into sales',
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: '/logo.jpg',
        shortcut: '/logo.jpg',
        apple: '/logo.jpg',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={poppins.variable}>
            <body className="font-sans">
                <Header />
                <main>{children}</main>
                <Footer />
                <WhatsAppButton />
                <ActiveBackgroundEffects />
                <Analytics />
            </body>
        </html>
    )
}
