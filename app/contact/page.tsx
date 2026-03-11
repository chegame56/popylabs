'use client'

import { useState } from 'react'
import Image from 'next/image'
import HCaptcha from '@hcaptcha/react-hcaptcha'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        botcheck: false
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [captchaToken, setCaptchaToken] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        // Spam Protection: Honeypot check
        if (formData.botcheck) {
            alert("Spam detected!");
            return;
        }

        // Spam Protection: hCaptcha check
        if (!captchaToken) {
            alert("Please complete the CAPTCHA first.")
            return
        }

        setIsSubmitting(true)

        try {
            // We are using Web3Forms (A free & simple email service)
            // Step 1: Go to https://web3forms.com/
            // Step 2: Enter your email to get an access key
            // Step 3: Replace "YOUR_ACCESS_KEY_HERE" below with your actual key
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "051974cf-b208-4d5f-9f66-97f85a7e87fc",
                    subject: `New Contact from ${formData.name}`,
                    from_name: formData.name,
                    "h-captcha-response": captchaToken,
                    ...formData
                }),
            });

            const result = await response.json();

            if (response.status === 200) {
                alert('Thank you! We will contact you within 24 hours.')
                setFormData({ name: '', email: '', company: '', service: '', message: '', botcheck: false })
                setCaptchaToken('') // Reset captcha
            } else {
                alert(result.message || 'Something went wrong. Please try again.')
            }
        } catch (error) {
            console.error(error)
            alert('Something went wrong. Please try again later.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="section text-center bg-gradient-to-br from-navy-deep via-navy-darker to-steel-blue">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                    Get In <span className="gradient-text">Touch</span>
                </h1>
                <p className="text-xl md:text-2xl text-sky-blue max-w-3xl mx-auto">
                    Ready to transform your brand? Book a free consultation or chat with our 24/7 AI support team.
                </p>
            </section>

            <section className="section">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <div className="glass-dark rounded-2xl p-8 border border-sky-blue/30">
                            <h2 className="text-3xl font-bold mb-6 gradient-text">
                                Book Free Consultation
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-cream font-medium mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-navy-darker border border-steel-blue/30 text-cream
                             focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/20
                             transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-cream font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-navy-darker border border-steel-blue/30 text-cream
                             focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/20
                             transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-cream font-medium mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-navy-darker border border-steel-blue/30 text-cream
                             focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/20
                             transition-all"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-cream font-medium mb-2">
                                        Service Interested In *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-navy-darker border border-steel-blue/30 text-cream
                             focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/20
                             transition-all"
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="social-media">Social Media Marketing</option>
                                        <option value="videography">Videography</option>
                                        <option value="tiktok">TikTok Specialist</option>
                                        <option value="web-dev">Web Development</option>
                                        <option value="mobile-apps">Mobile Apps</option>
                                        <option value="content">Content Creation</option>
                                        <option value="custom">Custom Package</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-cream font-medium mb-2">
                                        Tell Us About Your Project *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg bg-navy-darker border border-steel-blue/30 text-cream
                             focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/20
                             transition-all resize-none"
                                        placeholder="Describe your goals, challenges, and what you're looking to achieve..."
                                    />
                                </div>

                                {/* Honeypot - Invisible for regular users, target for bots */}
                                <input 
                                    type="checkbox" 
                                    name="botcheck" 
                                    className="hidden" 
                                    style={{ display: 'none' }}
                                    checked={formData.botcheck}
                                    onChange={handleChange}
                                />

                                {/* hCaptcha */}
                                <div className="flex justify-center sm:justify-start">
                                    <HCaptcha
                                        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                                        reCaptchaCompat={false}
                                        onVerify={(token: string) => setCaptchaToken(token)}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info & Quick Links */}
                    <div className="space-y-8">
                        {/* WhatsApp */}
                        <div className="glass-dark rounded-2xl p-8 border border-whatsapp/30">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center p-3">
                                    <div className="w-full h-full relative">
                                        <Image
                                            src="/icons/contact-us/whatsapp.png"
                                            alt="24/7 WhatsApp Support"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-whatsapp">24/7 WhatsApp Support</h3>
                                    <p className="text-white text-sm">Instant AI responses</p>
                                </div>
                            </div>
                            <p className="text-sky-blue mb-6">
                                Get immediate answers to your questions. Our AI agent is available 24/7, with human support when you need it.
                            </p>
                            <a
                                href="https://wa.me/94789961029?text=Hi%20Popylabs!%20I%27d%20like%20to%20discuss%20my%20project."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp w-full justify-center"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* Office Info */}
                        <div className="glass-dark rounded-2xl p-8 border border-steel-blue/30">
                            <h3 className="text-2xl font-bold mb-6 text-accent-gold">Our Studio</h3>
                            <div className="space-y-4 text-sky-blue">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 relative flex-shrink-0">
                                        <Image
                                            src="/icons/contact-us/location.png"
                                            alt="Location"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-cream">Location</p>
                                        <p>Colombo, Sri Lanka</p>
                                        <p className="text-sm text-white">Studio facilities available for client shoots</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 relative flex-shrink-0">
                                        <Image
                                            src="/icons/contact-us/globalization.png"
                                            alt="International Clients"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-cream">International Clients</p>
                                        <p>Welcome worldwide • Remote collaboration</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 relative flex-shrink-0">
                                        <Image
                                            src="/icons/contact-us/response-time.png"
                                            alt="Response Time"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-cream">Response Time</p>
                                        <p>Within 24 hours (often much faster)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="glass-dark rounded-2xl p-8 border border-accent-gold/30">
                            <h3 className="text-xl font-bold mb-4 text-accent-gold">Why Businesses Trust Us</h3>
                            <ul className="space-y-3 text-sky-blue">
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    No commitment before consultation
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Backed by Cybersecurity Scholars
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    40+ certified professionals
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Flexible, SME-friendly pricing
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
