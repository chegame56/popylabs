import Link from 'next/link'
import { FaTiktok, FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const footerSections = [
        {
            title: 'About Popylabs',
            content: 'Data-driven digital marketing agency helping startups and SMEs grow globally with 24/7 AI support, studio-quality content, and flexible packages.'
        },
        {
            title: 'Quick Links',
            links: [
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/packages', label: 'Packages' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
            ]
        },
        {
            title: 'Services',
            links: [
                { href: '/services/social_media_marketing', label: 'Social Media Marketing' },
                { href: '/services/videography', label: 'Videography' },
                { href: '/services/tiktok_specialist', label: 'TikTok Specialist' },
                { href: '/services/web_development', label: 'Web Design & Development' },
                { href: '/services/mobile_apps', label: 'Mobile Apps' },
                { href: '/services/content_creation', label: 'Content Creation' },
                { href: '/services/business_software', label: 'Business Software' },
            ]
        },
        {
            title: 'Resources',
            links: [
                { href: '/contact', label: 'Free Social Media Audit' },
                { href: '/contact', label: 'Marketing Resources' },
                { href: 'https://blog.popylabs.com/', label: 'Blog' },
            ]
        }
    ]

    const socialLinks = [
        { name: 'Instagram', icon: FaInstagram, color: '#E1306C', href: 'https://www.instagram.com/popylabs/' },
        { name: 'TikTok', icon: FaTiktok, color: '#000000', href: 'https://www.tiktok.com/@popylabs' },
        { name: 'Facebook', icon: FaFacebook, color: '#1877F2', href: 'https://www.facebook.com/popylabs/' },
        { name: 'LinkedIn', icon: FaLinkedin, color: '#0A66C2', href: 'https://www.linkedin.com/company/popylabs' },
        { name: 'YouTube', icon: FaYoutube, color: '#FF0000', href: 'https://www.youtube.com/@Popylabs' },
    ]

    return (
        <footer className="bg-navy-darker border-t border-accent-gold/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* About Section */}
                    <div>
                        <h4 className="text-xl font-bold text-accent-gold mb-4">
                            {footerSections[0].title}
                        </h4>
                        <p className="text-sky-blue text-sm leading-relaxed">
                            {footerSections[0].content}
                        </p>
                        <div className="flex gap-3 mt-6">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        aria-label={social.name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white hover:scale-110 
                               flex items-center justify-center transition-all duration-300"
                                        style={{ backgroundColor: 'white' }}
                                    >
                                        <Icon
                                            className="w-5 h-5"
                                            style={{ color: social.color }}
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Link Sections */}
                    {footerSections.slice(1).map((section, index) => (
                        <div key={index}>
                            <h4 className="text-xl font-bold text-accent-gold mb-4">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links?.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            {...(link.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                            className="text-sky-blue hover:text-cream transition-colors duration-200 text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🔒</span>
                            <span className="text-white text-sm">Scholar-Led Security</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">⏰</span>
                            <span className="text-white text-sm">24/7 AI Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🎬</span>
                            <span className="text-white text-sm">Studio Production</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">👥</span>
                            <span className="text-white text-sm">40+ Professionals</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-white text-sm">
                        © {currentYear} <span className="text-accent-gold font-semibold">Popylabs</span>.
                        All rights reserved. | Crafted with passion for digital excellence.
                    </p>
                    <p className="text-white text-xs mt-2">
                        Sri Lanka's Premier Digital Marketing Agency | International Clients Welcome
                    </p>
                </div>
            </div>
        </footer>
    )
}
