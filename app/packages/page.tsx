'use client';

import { useState, useEffect } from 'react';
import {
    SOCIAL_MEDIA_PACKAGES,
    INTEGRATED_PACKAGES,
    TIKTOK_PACKAGES,
    POST_DESIGN_BUNDLES,
    ADDITIONAL_SERVICES,
    SAAS_PRODUCTS,
    CUSTOM_SOFTWARE_SOLUTIONS,
    WEB_DEVELOPMENT_PACKAGES
} from '@/lib/constants';
import { getPlatformIcon } from '@/lib/platformIcons';
import { FaCheck, FaVideo, FaImage, FaStar, FaCamera, FaMobile, FaDesktop, FaClock, FaCode, FaRocket } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

export default function PackagesPage() {
    const [mounted, setMounted] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [showFloatingMenu, setShowFloatingMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        setMounted(true);

        // Show back to top button and floating menu when scrolled down
        const handleScroll = () => {
            const scrolled = window.scrollY > 500;
            setShowBackToTop(scrolled);
            setShowFloatingMenu(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        // Intersection Observer to track active section
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe section markers
        const sections = ['digital-marketing', 'software-solutions', 'web-design'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -100; // Offset for fixed header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 md:py-32">
                <div className="absolute inset-0 animated-gradient-bg opacity-30"></div>
                <div className="absolute inset-0 noise-texture"></div>

                <div className="section relative z-10 text-center">
                    <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                            Choose Your Growth Path
                        </h1>
                        <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto mb-8">
                            Transparent pricing. Premium quality. Proven results.
                        </p>
                        <p className="text-lg text-sky-blue/80 max-w-2xl mx-auto mb-12">
                            From social media management to custom software—find the perfect package to scale your brand.
                        </p>

                        {/* Category Navigation */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
                            <button
                                onClick={() => scrollToSection('digital-marketing')}
                                className="group glass-dark px-8 py-4 rounded-2xl border border-sky-blue/30 hover:border-accent-gold/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <FaImage className="text-2xl text-accent-gold group-hover:scale-110 transition-transform" />
                                    <div className="text-left">
                                        <div className="text-lg font-bold text-cream">Digital Marketing</div>
                                        <div className="text-xs text-cream/60">Social Media & Content</div>
                                    </div>
                                </div>
                            </button>

                            <button
                                onClick={() => scrollToSection('software-solutions')}
                                className="group glass-dark px-8 py-4 rounded-2xl border border-sky-blue/30 hover:border-accent-gold/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <FaRocket className="text-2xl text-accent-gold group-hover:scale-110 transition-transform" />
                                    <div className="text-left">
                                        <div className="text-lg font-bold text-cream">Software Solutions</div>
                                        <div className="text-xs text-cream/60">SaaS & Custom Apps</div>
                                    </div>
                                </div>
                            </button>

                            <button
                                onClick={() => scrollToSection('web-design')}
                                className="group glass-dark px-8 py-4 rounded-2xl border border-sky-blue/30 hover:border-accent-gold/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <FaDesktop className="text-2xl text-accent-gold group-hover:scale-110 transition-transform" />
                                    <div className="text-left">
                                        <div className="text-lg font-bold text-cream">Web Design</div>
                                        <div className="text-xs text-cream/60">Websites & E-Commerce</div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Digital Marketing Section Marker */}
            <div id="digital-marketing" className="scroll-mt-20"></div>

            {/* Social Media Management Packages */}
            <section className="section">
                <div className={`transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-8">
                        <div className="inline-block bg-gradient-to-r from-accent-gold/20 to-orange-rust/20 px-6 py-2 rounded-full border border-accent-gold/30 mb-6">
                            <span className="text-sm font-bold text-accent-gold tracking-wide">DIGITAL MARKETING</span>
                        </div>
                    </div>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                            Social Media Management
                        </h2>
                        <p className="text-lg text-cream/80 max-w-2xl mx-auto">
                            Comprehensive social media marketing for Facebook & Instagram
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {SOCIAL_MEDIA_PACKAGES.map((pkg, index) => (
                            <PackageCard key={pkg.name} pkg={pkg} index={index} type="social" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrated Packages */}
            <section className="section bg-gradient-to-b from-transparent via-navy-lighter/20 to-transparent">
                <div className={`transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                            Integrated Packages
                        </h2>
                        <p className="text-lg text-cream/80 max-w-2xl mx-auto">
                            Full-spectrum content: Posts + Videos across all major platforms
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {INTEGRATED_PACKAGES.map((pkg, index) => (
                            <IntegratedPackageCard key={pkg.name} pkg={pkg} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* TikTok Content Creation */}
            <section className="section">
                <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FaVideo className="text-4xl text-accent-gold" />
                            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                                TikTok Content Creation
                            </h2>
                        </div>
                        <p className="text-lg text-cream/80 max-w-2xl mx-auto mb-4">
                            Professional studio shoots with full production support
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-sky-blue">
                            <FaCamera />
                            <span>All packages include in-house studio shooting in Colombo</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {TIKTOK_PACKAGES.map((pkg, index) => (
                            <TikTokPackageCard key={pkg.name} pkg={pkg} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Post Design Bundles */}
            <section className="section bg-gradient-to-b from-transparent via-navy-lighter/20 to-transparent">
                <div className={`transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FaImage className="text-4xl text-accent-gold" />
                            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                                Social Media Post Design
                            </h2>
                        </div>
                        <p className="text-lg text-cream/80 max-w-2xl mx-auto">
                            Custom-designed posts with brand-aligned visuals & captions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {POST_DESIGN_BUNDLES.map((pkg, index) => (
                            <PostDesignCard key={pkg.name} pkg={pkg} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services & Add-ons */}
            <section className="section">
                <div className={`transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                            Add-Ons & Enhancements
                        </h2>
                        <p className="text-lg text-cream/80 max-w-2xl mx-auto">
                            Take your content to the next level with premium add-ons
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                        {ADDITIONAL_SERVICES.addOns.map((addon, index) => (
                            <div
                                key={index}
                                className="glass-dark rounded-2xl p-8 border border-sky-blue/30 hover:border-accent-gold/50 transition-all duration-300 hover:scale-105"
                            >
                                <h3 className="text-2xl font-bold text-accent-gold mb-3">
                                    {addon.type}
                                </h3>
                                <p className="text-cream/90 mb-4">
                                    {addon.description}
                                </p>
                                <ul className="space-y-2">
                                    {addon.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-cream/70">
                                            <span className="text-sky-blue mt-1">•</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Important Notes */}
                    <div className="max-w-4xl mx-auto">
                        <div className="glass-dark rounded-2xl p-8 border border-accent-gold/30">
                            <h3 className="text-2xl font-bold text-accent-gold mb-6 flex items-center gap-2">
                                <HiSparkles />
                                Important Information
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-cream mb-3">TikTok Packages</h4>
                                    <ul className="space-y-2">
                                        {ADDITIONAL_SERVICES.importantNotes.tiktokPackages.map((note, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-cream/70">
                                                <FaCheck className="text-sky-blue mt-1 flex-shrink-0" />
                                                <span>{note}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-cream mb-3">Post Bundles</h4>
                                    <ul className="space-y-2">
                                        {ADDITIONAL_SERVICES.importantNotes.postBundles.map((note, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-cream/70">
                                                <FaCheck className="text-sky-blue mt-1 flex-shrink-0" />
                                                <span>{note}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Software Solutions Section Marker */}
            <div id="software-solutions" className="scroll-mt-20"></div>

            {/* SaaS Products Section */}
            <section className="section">
                <div className={`transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-8">
                        <div className="inline-block bg-gradient-to-r from-accent-gold/20 to-orange-rust/20 px-6 py-2 rounded-full border border-accent-gold/30 mb-6">
                            <span className="text-sm font-bold text-accent-gold tracking-wide">SOFTWARE SOLUTIONS</span>
                        </div>
                    </div>
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FaRocket className="text-4xl text-accent-gold" />
                            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                                SaaS Products
                            </h2>
                        </div>
                        <p className="text-lg text-cream/80 max-w-2xl mx-auto mb-2">
                            Ready-to-use business tools. No computer needed—run your entire business from your smartphone.
                        </p>
                        <p className="text-sm text-sky-blue/90">
                            Monthly subscription software for modern businesses
                        </p>
                    </div>

                    <div className="space-y-16 max-w-7xl mx-auto">
                        {SAAS_PRODUCTS.map((product, idx) => (
                            <div key={product.productName} className="glass-dark rounded-3xl p-8 md:p-12 border border-sky-blue/30">
                                {/* Product Header */}
                                <div className="mb-8">
                                    <h3 className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">{product.productName}</h3>
                                    <p className="text-xl text-cream/90 mb-4">{product.tagline}</p>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex items-center gap-2 bg-sky-blue/20 px-4 py-2 rounded-full text-sm">
                                            <FaMobile className="text-sky-blue" />
                                            <span className="text-cream">{product.deviceCompatibility}</span>
                                        </div>
                                        <div className="bg-cream/10 px-4 py-2 rounded-full text-sm text-cream">
                                            {product.targetAudience}
                                        </div>
                                    </div>
                                </div>

                                {/* Pricing Tiers */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {product.packages.map((pkg, index) => (
                                        <div
                                            key={pkg.name}
                                            className={`glass-dark rounded-2xl p-6 border transition-all duration-500 hover:scale-105 relative
                                                ${pkg.featured
                                                    ? 'border-accent-gold/50 shadow-xl shadow-accent-gold/20'
                                                    : 'border-sky-blue/30 hover:border-accent-gold/30'
                                                }`}
                                        >
                                            {pkg.featured && (
                                                <div className="absolute -top-0 -right-0 overflow-hidden w-32 h-32 pointer-events-none">
                                                    <div className="absolute top-0 right-0 w-40 h-10 bg-gradient-to-br from-accent-gold via-accent-gold to-orange-rust transform rotate-45 translate-x-8 -translate-y-2 shadow-lg">
                                                        <div className="flex items-center justify-center gap-1.5 mt-6 -ml-2">
                                                            <HiSparkles className="text-navy-deep text-xs" />
                                                            <span className="text-[10px] font-bold text-navy-deep tracking-wide">TOP TIER</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <h4 className="text-2xl font-bold text-accent-gold mb-4">{pkg.name}</h4>

                                            {/* Pricing */}
                                            <div className="mb-6 pb-6 border-b border-cream/10">
                                                <div className="flex items-baseline gap-2 mb-2">
                                                    <span className="text-sm text-cream/60">LKR</span>
                                                    <span className="text-4xl font-bold text-cream">
                                                        {pkg.priceMonthly.toLocaleString()}
                                                    </span>
                                                    <span className="text-sm text-cream/60">/month</span>
                                                </div>
                                                <div className="text-sm text-cream/70">
                                                    Setup Fee: <span className={pkg.setupFee === 0 ? 'text-sky-blue font-semibold' : 'text-cream'}>
                                                        {pkg.setupFee === 0 ? 'FREE' : `LKR ${pkg.setupFee.toLocaleString()}`}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Features */}
                                            <div className="space-y-3 mb-6">
                                                {pkg.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <FaCheck className="text-sky-blue text-sm mt-0.5 flex-shrink-0" />
                                                        <span className="text-cream/80 text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <button className="w-full btn-primary text-sm py-3">
                                                Start {pkg.name}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Software Solutions */}
            <section className="section bg-gradient-to-b from-transparent via-navy-lighter/20 to-transparent">
                <div className={`transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FaCode className="text-4xl text-accent-gold" />
                            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                                {CUSTOM_SOFTWARE_SOLUTIONS.categoryTitle}
                            </h2>
                        </div>
                        <p className="text-lg text-cream/80 max-w-2xl mx-auto">
                            {CUSTOM_SOFTWARE_SOLUTIONS.categoryDescription}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                        {CUSTOM_SOFTWARE_SOLUTIONS.services.map((service, index) => (
                            <div
                                key={index}
                                className="glass-dark rounded-2xl p-8 border border-sky-blue/30 hover:border-accent-gold/50 transition-all duration-300 hover:scale-105"
                            >
                                <h3 className="text-2xl font-bold text-accent-gold mb-2">
                                    {service.serviceName}
                                </h3>
                                <p className="text-cream/70 text-sm mb-4">{service.type}</p>

                                <div className="mb-6 pb-6 border-b border-cream/10">
                                    <div className="text-sm text-cream/60 mb-1">{service.pricingModel}</div>
                                    <div className="text-3xl font-bold text-cream">
                                        LKR {service.startingPrice}
                                    </div>
                                </div>

                                <div className="space-y-3 mb-8">
                                    {service.keyBenefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <FaCheck className="text-sky-blue text-sm mt-1 flex-shrink-0" />
                                            <span className="text-cream/80 text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full btn-secondary text-sm py-3">
                                    Get Consultation
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="btn-primary px-12 py-4">
                            {CUSTOM_SOFTWARE_SOLUTIONS.ctaText}
                        </button>
                    </div>
                </div>
            </section>

            {/* Web Design Section Marker */}
            <div id="web-design" className="scroll-mt-20"></div>

            {/* Web Development Packages */}
            <section className="section">
                <div className={`transition-all duration-1000 delay-800 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-8">
                        <div className="inline-block bg-gradient-to-r from-accent-gold/20 to-orange-rust/20 px-6 py-2 rounded-full border border-accent-gold/30 mb-6">
                            <span className="text-sm font-bold text-accent-gold tracking-wide">WEB DESIGN & DEVELOPMENT</span>
                        </div>
                    </div>
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FaDesktop className="text-4xl text-accent-gold" />
                            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                                {WEB_DEVELOPMENT_PACKAGES.categoryTitle}
                            </h2>
                        </div>
                        <p className="text-lg text-cream/80 max-w-2xl mx-auto mb-2">
                            {WEB_DEVELOPMENT_PACKAGES.categoryDescription}
                        </p>
                        <p className="text-sm text-sky-blue font-semibold">
                            {WEB_DEVELOPMENT_PACKAGES.pricingPolicy}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
                        {WEB_DEVELOPMENT_PACKAGES.packages.map((pkg, index) => (
                            <div
                                key={pkg.packageName}
                                className={`glass-dark rounded-2xl p-8 border transition-all duration-500 hover:scale-105 animated-border relative
                                    ${pkg.featured
                                        ? 'border-accent-gold/50 shadow-2xl shadow-accent-gold/20 lg:scale-110 z-10'
                                        : 'border-sky-blue/30 hover:border-accent-gold/30'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {pkg.featured && (
                                    <div className="absolute -top-0 -right-0 overflow-hidden w-32 h-32 pointer-events-none">
                                        <div className="absolute top-0 right-0 w-40 h-10 bg-gradient-to-br from-accent-gold via-accent-gold to-orange-rust transform rotate-45 translate-x-8 -translate-y-2 shadow-lg">
                                            <div className="flex items-center justify-center gap-1.5 mt-6 -ml-2">
                                                <HiSparkles className="text-navy-deep text-xs" />
                                                <span className="text-[10px] font-bold text-navy-deep tracking-wide">BEST BUY</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <h3 className="text-3xl font-bold text-accent-gold mb-2">{pkg.packageName}</h3>
                                <p className="text-cream/70 text-sm mb-4">For: {pkg.bestFor}</p>

                                {/* Price */}
                                <div className="mb-6 pb-6 border-b border-cream/10">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-sm text-cream/60">LKR</span>
                                        <span className="text-5xl font-bold text-cream">
                                            {pkg.price.toLocaleString()}
                                        </span>
                                    </div>
                                    <p className="text-cream/60 text-sm mb-3">One-time payment</p>
                                    <div className="flex items-center gap-2 text-sm bg-sky-blue/20 px-3 py-1.5 rounded-full inline-flex">
                                        <FaClock className="text-sky-blue" />
                                        <span className="text-cream">{pkg.timeline}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <FaCheck className="text-sky-blue mt-1 flex-shrink-0" />
                                            <span className="text-cream/80 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full btn-primary">
                                    Order {pkg.packageName}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Important Notes */}
                    <div className="max-w-4xl mx-auto">
                        <div className="glass-dark rounded-2xl p-8 border border-accent-gold/30">
                            <h3 className="text-2xl font-bold text-accent-gold mb-6 flex items-center gap-2">
                                <HiSparkles />
                                Important Information
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-cream mb-2">Hosting & Domain Policy</h4>
                                    <p className="text-sm text-cream/70">
                                        {WEB_DEVELOPMENT_PACKAGES.importantNotes.hostingDomainPolicy}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-cream mb-2">Content Add-On</h4>
                                    <p className="text-sm text-cream/70">
                                        {WEB_DEVELOPMENT_PACKAGES.importantNotes.contentAddon}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className={`transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="glass-dark rounded-3xl p-12 md:p-16 border border-accent-gold/30 text-center max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
                            Let's discuss which package fits your goals and create a custom strategy for your brand.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/94773737373"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp justify-center"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                            <a
                                href="mailto:info@popylabs.com"
                                className="btn-secondary justify-center"
                            >
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating Category Menu */}
            <div className={`fixed top-24 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${showFloatingMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
                }`}>
                <div className="glass-dark rounded-full px-6 py-3 border border-sky-blue/30 shadow-2xl">
                    <div className="flex items-center gap-2">
                        {[
                            { id: 'digital-marketing', label: 'Digital Marketing', icon: FaImage },
                            { id: 'software-solutions', label: 'Software', icon: FaRocket },
                            { id: 'web-design', label: 'Web Design', icon: FaDesktop }
                        ].map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${activeSection === id
                                        ? 'bg-gradient-to-r from-accent-gold to-orange-rust text-navy-deep font-bold'
                                        : 'text-cream/70 hover:text-cream hover:bg-white/10'
                                    }`}
                            >
                                <Icon className="text-sm" />
                                <span className="text-sm whitespace-nowrap hidden sm:inline">{label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 left-8 z-50 bg-gradient-to-r from-accent-gold to-orange-rust p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                aria-label="Back to top"
            >
                <svg className="w-6 h-6 text-navy-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </main>
    );
}

// Package Card Component for Social Media Packages
function PackageCard({ pkg, index, type }: any) {
    const Icon = getPlatformIcon(pkg.platforms[0]);

    return (
        <div
            className={`glass-dark rounded-2xl p-8 border transition-all duration-500 hover:scale-105 animated-border relative
                ${pkg.featured
                    ? 'border-accent-gold/50 shadow-2xl shadow-accent-gold/20 lg:scale-110 z-10'
                    : 'border-sky-blue/30 hover:border-accent-gold/30'
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {pkg.featured && (
                <div className="absolute -top-0 -right-0 overflow-hidden w-32 h-32 pointer-events-none">
                    <div className="absolute top-0 right-0 w-40 h-10 bg-gradient-to-br from-accent-gold via-accent-gold to-orange-rust transform rotate-45 translate-x-8 -translate-y-2 shadow-lg">
                        <div className="flex items-center justify-center gap-1.5 mt-6 -ml-2">
                            <HiSparkles className="text-navy-deep text-xs" />
                            <span className="text-[10px] font-bold text-navy-deep tracking-wide">POPULAR</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-3xl font-bold text-accent-gold">{pkg.name}</h3>
                </div>
                <p className="text-cream/70 text-sm mb-4">{pkg.description}</p>

                {/* Platforms */}
                <div className="flex gap-2 mb-4">
                    {pkg.platforms.map((platform: string) => {
                        const PlatformIcon = getPlatformIcon(platform);
                        return PlatformIcon ? (
                            <div key={platform} className="flex items-center gap-1 text-xs bg-sky-blue/20 px-2 py-1 rounded-full">
                                <PlatformIcon className="text-sky-blue" />
                                <span className="text-cream/80">{platform}</span>
                            </div>
                        ) : null;
                    })}
                </div>
            </div>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-cream/10">
                <div className="flex items-baseline gap-2">
                    <span className="text-sm text-cream/60">LKR</span>
                    <span className="text-5xl font-bold text-cream">
                        {pkg.price.toLocaleString()}
                    </span>
                </div>
                <p className="text-cream/60 text-sm">{pkg.period} • {pkg.postsPerMonth} posts</p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
                {pkg.whatsIncluded.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                        <FaCheck className="text-sky-blue mt-1 flex-shrink-0" />
                        <span className="text-cream/80 text-sm">{feature}</span>
                    </div>
                ))}
            </div>

            <button className="w-full btn-primary">
                Choose {pkg.name}
            </button>
        </div>
    );
}

// Integrated Package Card Component
function IntegratedPackageCard({ pkg, index }: any) {
    return (
        <div
            className={`glass-dark rounded-2xl p-8 border transition-all duration-500 hover:scale-105 animated-border relative
                ${pkg.featured
                    ? 'border-accent-gold/50 shadow-2xl shadow-accent-gold/20 lg:scale-110 z-10'
                    : 'border-sky-blue/30 hover:border-accent-gold/30'
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {pkg.featured && (
                <div className="absolute -top-0 -right-0 overflow-hidden w-32 h-32 pointer-events-none">
                    <div className="absolute top-0 right-0 w-40 h-10 bg-gradient-to-br from-accent-gold via-accent-gold to-orange-rust transform rotate-45 translate-x-8 -translate-y-2 shadow-lg">
                        <div className="flex items-center justify-center gap-1.5 mt-6 -ml-2">
                            <HiSparkles className="text-navy-deep text-xs" />
                            <span className="text-[10px] font-bold text-navy-deep tracking-wide">TOP PICK</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-3xl font-bold text-accent-gold">{pkg.name}</h3>
                </div>
                <p className="text-cream/70 text-sm mb-4">{pkg.description}</p>

                {/* Platforms */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.platforms.map((platform: string) => {
                        const PlatformIcon = getPlatformIcon(platform);
                        return PlatformIcon ? (
                            <div key={platform} className="flex items-center gap-1 text-xs bg-sky-blue/20 px-2 py-1 rounded-full">
                                <PlatformIcon className="text-sky-blue" />
                                <span className="text-cream/80">{platform}</span>
                            </div>
                        ) : null;
                    })}
                </div>
            </div>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-cream/10">
                <div className="flex items-baseline gap-2">
                    <span className="text-sm text-cream/60">LKR</span>
                    <span className="text-5xl font-bold text-cream">
                        {pkg.price.toLocaleString()}
                    </span>
                </div>
                <p className="text-cream/60 text-sm mt-1">{pkg.period}</p>
                <div className="flex gap-4 mt-3">
                    <div className="flex items-center gap-2 text-xs bg-accent-gold/20 px-3 py-1 rounded-full">
                        <FaImage className="text-accent-gold" />
                        <span className="text-cream">{pkg.contentVolume.posts}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs bg-orange-rust/20 px-3 py-1 rounded-full">
                        <FaVideo className="text-orange-rust" />
                        <span className="text-cream">{pkg.contentVolume.videos}</span>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
                {pkg.whatsIncluded.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                        <FaCheck className="text-sky-blue mt-1 flex-shrink-0" />
                        <span className="text-cream/80 text-sm">{feature}</span>
                    </div>
                ))}
            </div>

            <button className="w-full btn-primary">
                Choose {pkg.name}
            </button>
        </div>
    );
}

// TikTok Package Card Component
function TikTokPackageCard({ pkg, index }: any) {
    return (
        <div
            className={`glass-dark rounded-2xl p-8 border transition-all duration-500 hover:scale-105 animated-border relative
                ${pkg.featured
                    ? 'border-accent-gold/50 shadow-2xl shadow-accent-gold/20 lg:scale-110 z-10'
                    : 'border-sky-blue/30 hover:border-accent-gold/30'
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {pkg.featured && (
                <div className="absolute -top-0 -right-0 overflow-hidden w-32 h-32 pointer-events-none">
                    <div className="absolute top-0 right-0 w-40 h-10 bg-gradient-to-br from-accent-gold via-accent-gold to-orange-rust transform rotate-45 translate-x-8 -translate-y-2 shadow-lg">
                        <div className="flex items-center justify-center gap-1.5 mt-6 -ml-2">
                            <HiSparkles className="text-navy-deep text-xs" />
                            <span className="text-[10px] font-bold text-navy-deep tracking-wide">HOT DEAL</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-3xl font-bold text-accent-gold">{pkg.name}</h3>
                </div>
                <p className="text-cream/70 text-sm mb-4">{pkg.description}</p>

                {/* Video Count Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-rust/20 to-accent-gold/20 px-4 py-2 rounded-full border border-accent-gold/30">
                    <FaVideo className="text-accent-gold" />
                    <span className="font-semibold text-cream">{pkg.videoCount} Videos/Month</span>
                </div>
            </div>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-cream/10">
                <div className="flex items-baseline gap-2">
                    <span className="text-sm text-cream/60">LKR</span>
                    <span className="text-5xl font-bold text-cream">
                        {pkg.price.toLocaleString()}
                    </span>
                </div>
                <p className="text-cream/60 text-sm">{pkg.period}</p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
                {pkg.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                        <FaCheck className="text-sky-blue mt-1 flex-shrink-0" />
                        <span className="text-cream/80 text-sm">{feature}</span>
                    </div>
                ))}
            </div>

            <button className="w-full btn-primary">
                Choose {pkg.name}
            </button>
        </div>
    );
}

// Post Design Card Component
function PostDesignCard({ pkg, index }: any) {
    return (
        <div
            className={`glass-dark rounded-2xl p-6 border transition-all duration-500 hover:scale-105 relative
                ${pkg.featured
                    ? 'border-accent-gold/50 shadow-xl shadow-accent-gold/20'
                    : 'border-sky-blue/30 hover:border-accent-gold/30'
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {pkg.featured && (
                <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-accent-gold to-orange-rust px-2.5 py-1 rounded-md shadow-lg">
                        <span className="text-[9px] font-bold text-navy-deep tracking-wide">POPULAR</span>
                    </div>
                </div>
            )}

            <div className="mb-4">
                <h3 className="text-2xl font-bold text-accent-gold mb-2">{pkg.name}</h3>
                <p className="text-cream/70 text-xs mb-3">{pkg.description}</p>

                {/* Content Count */}
                <div className="inline-flex items-center gap-2 bg-sky-blue/20 px-3 py-1 rounded-full">
                    <FaImage className="text-sky-blue text-xs" />
                    <span className="text-xs font-semibold text-cream">
                        {pkg.contentCount} {pkg.contentCount === 1 ? 'Post' : 'Posts'}
                    </span>
                </div>
            </div>

            {/* Price */}
            <div className="mb-4 pb-4 border-b border-cream/10">
                <div className="flex items-baseline gap-1">
                    <span className="text-xs text-cream/60">LKR</span>
                    <span className="text-3xl font-bold text-cream">
                        {pkg.price.toLocaleString()}
                    </span>
                </div>
                <p className="text-cream/60 text-xs">{pkg.period}</p>
            </div>

            {/* Features */}
            <div className="space-y-2 mb-6">
                {pkg.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2">
                        <FaCheck className="text-sky-blue text-xs mt-0.5 flex-shrink-0" />
                        <span className="text-cream/80 text-xs">{feature}</span>
                    </div>
                ))}
            </div>

            <button className="w-full btn-primary text-sm py-3">
                Get Started
            </button>
        </div>
    );
}
