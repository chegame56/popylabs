// All prices in LKR (Sri Lankan Rupees)

export const PACKAGES = {
    // New Social Media Packages
    basic: {
        name: 'Basic',
        price: 15000, // LKR
        period: '/month',
        platforms: ['Facebook', 'Instagram'],
        postsPerMonth: '4 Posts / Month',
        description: 'Perfect entry-level social media marketing',
        features: [
            'Content planning',
            'Caption writing',
            'Hashtag basics',
            'Posting & scheduling',
            'Basic performance check',
            'Best as Starting Point'
        ],
        featured: false
    },
    standard: {
        name: 'Standard',
        price: 21000, // LKR
        period: '/month',
        platforms: ['Facebook', 'Instagram'],
        postsPerMonth: '8 Posts / Month',
        description: 'Enhanced social media presence',
        features: [
            'Content calendar',
            'Caption & hashtag optimization',
            'Posting & scheduling',
            'Monthly performance report'
        ],
        featured: true
    },
    premium: {
        name: 'Premium',
        price: 32000, // LKR
        period: '/month',
        platforms: ['Facebook', 'Instagram'],
        postsPerMonth: '15 Posts / Month',
        description: 'Complete social media management',
        features: [
            'Full content strategy',
            'High-quality captions with CTAs',
            'Posting & scheduling',
            'Stories support',
            'Basic community interaction',
            'Detailed analytics'
        ],
        featured: false
    },

    // Legacy Packages
    starter: {
        name: 'Starter',
        price: 15000, // LKR
        period: '/month',
        platforms: 1,
        description: 'Perfect entry-level marketing for growing businesses',
        features: [
            'Market research',
            '8 social media posts',
            '4 ad campaigns',
            'Performance analysis report',
            '1 platform coverage',
            'Email support'
        ],
        addons: []
    },
    bronze: {
        name: 'Bronze',
        price: 30000, // LKR
        period: '/month',
        platforms: 2,
        description: 'Advanced strategy for expanding brands',
        features: [
            'Market research',
            '10 social media posts',
            '8 ad campaigns',
            'Content calendar',
            'Performance analysis report',
            '2 platforms coverage',
            'Priority email support'
        ],
        addons: ['TikTok Package']
    },
    silver: {
        name: 'Silver',
        price: 60000, // LKR
        period: '/month',
        platforms: 3,
        description: 'Comprehensive marketing solution',
        features: [
            'Market research',
            '14 social media posts',
            '10 ad campaigns',
            '1 animation video',
            'Content calendar',
            'Performance analysis report',
            '3 platforms coverage',
            'Dedicated account manager',
            'WhatsApp support'
        ],
        addons: ['TikTok Package', 'Branding']
    },
    gold: {
        name: 'Gold',
        price: 100000, // LKR
        period: '/month',
        platforms: 3,
        description: 'Premium all-inclusive marketing suite',
        features: [
            'Market research',
            '20 social media posts',
            '15 ad campaigns',
            '2 animation videos',
            'Inquiry management',
            'Content calendar',
            'Performance analysis report',
            '3 platforms coverage',
            'Dedicated account manager',
            '24/7 WhatsApp support',
            'All add-ons included'
        ],
        addons: ['TikTok Package', 'Single Ad Campaign', 'Branding'],
        featured: true
    },
    tiktok: {
        name: 'TikTok Specialist',
        price: 50000, // LKR
        period: '/month',
        platforms: 1,
        description: 'Dedicated TikTok marketing package',
        features: [
            '5 professional videos',
            '2 advertising campaigns',
            'Market research',
            'Studio shooting in Colombo',
            'Professional editing',
            'Top-level presenter',
            'Performance analysis report'
        ],
        addons: ['Additional Ad Campaign (LKR 3,000)', 'Extra Video (LKR 8,000)']
    }
};

export const ADDONS = {
    tiktok: {
        name: 'TikTok Package',
        price: 50000 // LKR
    },
    branding: {
        name: 'Branding',
        price: 20000 // LKR
    },
    extraCampaign: {
        name: 'Additional Ad Campaign',
        price: 3000 // LKR
    },
    extraVideo: {
        name: 'Extra Video',
        price: 8000 // LKR
    }
};

export const SERVICES = [
    {
        id: 'social_media_marketing',
        name: 'Social Media Marketing',
        icon: '/icons/social-media.png', // Make sure to place the PNG in public/icons/ folder
        headline: 'Turn Scrollers into Loyal Customers.',
        shortDesc: 'Drive engagement and conversions through data-driven campaigns that deliver measurable ROI',
        description: 'Stop guessing and start growing. We don\'t just \'manage\' your pages; we build data-driven strategies that amplify your brand voice. From scroll-stopping visuals to community management, we handle your entire presence on Facebook, Instagram, and LinkedIn to deliver measurable ROI and genuine engagement.',
        focusAreas: ['Strategy', 'Community Growth', 'Ad Performance'],
        platforms: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter'],
        ctaText: 'Learn More'
    },
    {
        id: 'videography',
        name: 'Videography',
        icon: '/icons/video-camera.png',
        headline: 'Studio-Grade Visuals That Sell.',
        shortDesc: 'Professional video content that captures attention, tells your story, and converts viewers',
        description: 'In a video-first world, quality is your competitive advantage. Our in-house production team uses professional lighting, audio, and cinematic techniques to create high-impact video assets. Whether it\'s a corporate brand story or a high-energy product showcase, we produce content that captures attention instantly.',
        focusAreas: ['Commercials', 'Event Coverage', 'Brand Storytelling'],
        platforms: ['TikTok', 'YouTube', 'Instagram Reels'],
        ctaText: 'Learn More'
    },
    {
        id: 'tiktok_specialist',
        name: 'TikTok Specialist',
        icon: '/icons/live-stream.png',
        headline: 'Go Viral by Design, Not Luck.',
        shortDesc: 'Tap into viral potential with studio-produced TikTok content optimized for algorithm success',
        description: 'Crack the code to the world\'s fastest-growing platform. We are TikTok natives who understand the trends, the sounds, and the \'hooks\' that keep viewers watching. We produce algorithm-optimized, high-retention content specifically designed to explode your brand awareness and reach a massive new audience.',
        focusAreas: ['Trend Research', 'Scripting', 'Virality'],
        platforms: ['TikTok'],
        ctaText: 'Learn More'
    },
    {
        id: 'web_development',
        name: 'Web Design & Development',
        icon: '/icons/global.png',
        headline: 'Your Best Salesperson, Working 24/7.',
        shortDesc: 'Fast, conversion-optimized websites that turn visitors into customers and scale with your business',
        description: 'We build stunning, lightning-fast websites that you fully own—no hidden monthly rental fees. Whether you need a high-converting landing page or a complete E-Commerce store, our sites are designed to look beautiful on mobile, rank high on Google (SEO), and turn visitors into paying clients.',
        focusAreas: ['Speed', 'Conversion', 'Full Ownership'],
        platforms: ['Custom Development'],
        ctaText: 'Learn More'
    },
    {
        id: 'mobile_apps',
        name: 'Mobile Apps',
        icon: '/icons/smartphone.png',
        headline: 'Put Your Business in Their Pocket.',
        shortDesc: 'User-friendly mobile apps that engage your audience and drive retention on iOS and Android',
        description: 'Deepen customer loyalty with your own custom mobile application. We develop high-performance native apps for iOS and Android that offer seamless user experiences (UI/UX). Perfect for customer portals, booking systems, or loyalty programs that keep your audience coming back.',
        focusAreas: ['iOS & Android', 'User Retention', 'Custom Features'],
        platforms: ['iOS', 'Android'],
        ctaText: 'Learn More'
    },
    {
        id: 'content_creation',
        name: 'Content Creation',
        icon: '/icons/graphic-tools.png',
        headline: 'A Unified Voice for Your Brand.',
        shortDesc: 'Strategic content that captures attention, builds authority, and drives action across all channels',
        description: 'Consistency builds trust. We take the stress out of daily posting by crafting a cohesive content strategy that spans all your channels. From persuasive copywriting to eye-catching graphics, we ensure every piece of content establishes your authority and drives action.',
        focusAreas: ['Copywriting', 'Graphic Design', 'Brand Consistency'],
        platforms: ['All Platforms'],
        ctaText: 'Learn More'
    },
    {
        id: 'business_software',
        name: 'Business Software (SaaS) & Custom Solutions',
        icon: '/icons/software.png',
        headline: 'Systems That Run Your Business For You.',
        shortDesc: 'Streamline operations with business tools - from POS to CRM to custom enterprise software',
        description: 'Streamline your operations with our suite of business tools. Whether you need a Retail POS to manage inventory, a CRM to track Instagram orders, or Custom Enterprise Software to automate your factory, we build the technology that saves you time and money.',
        focusAreas: ['POS', 'ERP', 'CRM', 'Automation'],
        platforms: ['Web App', 'Cloud'],
        ctaText: 'Learn More'
    }
];

export const TESTIMONIALS = [
    {
        name: 'Sarah Mitchell',
        role: 'Founder',
        company: 'HealthTech Startup, Singapore',
        content: 'Popylabs helped us scale from 0 to 100K followers in 6 months. Their TikTok strategy was absolutely game-changing for our brand.',
        rating: 5,
        image: '/testimonials/sarah.png'
    },
    {
        name: 'Raj Patel',
        role: 'Marketing Director',
        company: 'E-commerce Platform, India',
        content: 'The 24/7 support is real. Our questions got answered at 2 AM before a major campaign launch. Incredible service and results.',
        rating: 5,
        image: '/testimonials/raj.png'
    },
    {
        name: 'Elena Rodriguez',
        role: 'CMO',
        company: 'FinTech Company, Dubai',
        content: "We tried agencies charging 3x more with worse results. Popylabs delivers studio-quality content at startup-friendly prices.",
        rating: 5,
        image: '/testimonials/elena.png'
    },
    {
        name: 'Michael Chen',
        role: 'CEO',
        company: 'SaaS Platform, Australia',
        content: 'Their data-driven approach gave us clarity we never had before. Now we know exactly what works and can scale confidently.',
        rating: 5,
        image: '/testimonials/michael.png'
    },
    {
        name: 'Amara Silva',
        role: 'Owner',
        company: 'Travel Agency, Sri Lanka',
        content: 'From 2K to 45K followers in 3 months! The ROI on their packages is incredible. Best investment we made this year.',
        rating: 5,
        image: '/testimonials/amara.png'
    },
    {
        name: 'David Thompson',
        role: 'Founder',
        company: 'EdTech Startup, UK',
        content: 'Popylabs turned our brand from unknown to industry-recognized. 500K impressions and 2K demo requests in the first quarter.',
        rating: 5,
        image: '/testimonials/david.png'
    }
];

export const CASE_STUDIES = [
    {
        id: 1,
        title: 'Travel Agency Transformation',
        industry: 'Travel & Tourism',
        service: 'Social Media + TikTok',
        duration: '3 months',

        // Card view (short)
        challenge: 'Low engagement, only 2K followers',
        solution: '3-month Silver package with TikTok focus',
        metrics: ['45K followers', '15% booking increase', '500K+ video views'],

        // Full case study
        fullChallenge: 'A boutique travel agency in Colombo had invested heavily in traditional marketing but saw minimal returns. With only 2,000 followers across social platforms and sporadic engagement, their digital presence wasn\'t translating to bookings. Their content lacked consistency, and they had no video strategy—critical for showcasing travel experiences.',

        strategy: [
            'Audit existing content to identify gaps in visual storytelling',
            'Develop a TikTok-first strategy showcasing client testimonials and destination highlights',
            'Create a content calendar mixing educational travel tips with emotional destination reveals',
            'Launch targeted ad campaigns focusing on honeymoon and family vacation segments'
        ],

        execution: [
            'Month 1: Conducted market research, competitor analysis, and audience persona development. Launched Instagram Reels and TikTok with 3 videos/week.',
            'Month 2: Scaled to 5 videos/week, introduced user-generated content from past clients, ran Meta ads targeting Colombo metro area with +500km vacation interest radius.',
            'Month 3: Partnered with micro-influencers for destination takeovers, optimized high-performing ad creatives, introduced limited-time package promotions.'
        ],

        detailedResults: {
            followers: { value: '2K → 45K', description: '2,150% growth in 90 days across Instagram and TikTok' },
            engagement: { value: '320% increase', description: 'Average engagement rate improved from 1.2% to 5.1%' },
            videoViews: { value: '500K+', description: 'Organic reach with 3 videos surpassing 100K views each' },
            bookings: { value: '15% increase', description: 'Direct attribution via UTM tracking and inquiry forms' },
            adSpend: { value: 'LKR 45K', description: 'Total ad spend with 3.2x ROAS' }
        },

        insight: 'Travel is an emotional purchase. We shifted the agency\'s content from generic destination photos to authentic client stories and "moment reveals"—the exact second travelers see their hotel view or taste local cuisine. This emotional hook drove shares and saved content, extending organic reach exponentially.',

        clientQuote: 'From 2K to 45K followers in 3 months! The ROI on their packages is incredible. Best investment we made this year.',
        clientName: 'Amara Silva',
        clientRole: 'Owner',

        image: '/portfolio/travel-agency.png'
    },
    {
        id: 2,
        title: 'EdTech Brand Launch',
        industry: 'Education Technology',
        service: 'Full Marketing Suite',
        duration: '4 months',

        // Card view (short)
        challenge: 'Zero brand awareness in competitive market',
        solution: 'Gold package + branding, multi-platform campaign',
        metrics: ['500K impressions', '2K demo requests', '8% conversion rate'],

        // Full case study
        fullChallenge: 'A UK-based EdTech startup needed to enter the Asian market with zero brand recognition. Competing against established players with 10x budgets, they required a lean, performance-driven strategy that could generate qualified leads while building credibility in a skeptical market.',

        strategy: [
            'Position as the "data-driven alternative" through thought leadership content',
            'Build trust via LinkedIn with founder-led posts and case study breakdowns',
            'Target decision-makers (L&D managers, HR directors) with precision Facebook and LinkedIn ads',
            'Create a lead magnet (free skills gap analysis tool) to capture high-intent prospects'
        ],

        execution: [
            'Month 1: Brand identity development, website optimization, installed analytics tracking, launched LinkedIn organic content (3 posts/week).',
            'Month 2: Launched lead magnet landing page, began LinkedIn and Facebook ad campaigns with A/B testing on 6 creative variations.',
            'Month 3: Scaled winning ad creatives, introduced retargeting campaigns, published 2 guest posts on industry blogs for backlinks and credibility.',
            'Month 4: Webinar series launch promoted via ads and email sequences, optimized demo booking flow reducing friction by 40%.'
        ],

        detailedResults: {
            impressions: { value: '500K', description: 'Cross-platform impressions (LinkedIn, Facebook, Google Display)' },
            leads: { value: '2,000+', description: 'Email captures via lead magnet and webinar registrations' },
            demos: { value: '160 booked', description: 'Qualified demo calls with decision-makers' },
            conversion: { value: '8% demo-to-customer', description: '13 closed deals within campaign period' },
            cpl: { value: '$12 avg', description: 'Cost per qualified lead, 60% below industry benchmark' }
        },

        insight: 'In B2B EdTech, trust beats features. Instead of promoting product specs, we led with founder insights on hiring trends and skills gaps. This positioned the brand as an advisor, not a vendor. The shift from "sign up now" to "learn more" CTAs dropped cost-per-lead by 40% while increasing lead quality.',

        clientQuote: 'Popylabs turned our brand from unknown to industry-recognized. 500K impressions and 2K demo requests in the first quarter.',
        clientName: 'David Thompson',
        clientRole: 'Founder',

        image: '/portfolio/edtech-brand.png'
    },
    {
        id: 3,
        title: 'Local Service Goes Digital',
        industry: 'Cleaning Services',
        service: 'Facebook + Instagram Ads',
        duration: '6 months',

        // Card view (short)
        challenge: 'Traditional marketing only, no online presence',
        solution: 'Bronze package, targeted local ads',
        metrics: ['200% ROI', '50+ monthly leads', '35% revenue growth'],

        // Full case study
        fullChallenge: 'A family-owned cleaning service relied entirely on flyers and word-of-mouth. With no website, no social media, and zero digital footprint, they were losing customers to competitors with online booking. They needed affordable lead generation without complex tech infrastructure.',

        strategy: [
            'Launch Facebook and Instagram presence with service highlights and before/after content',
            'Run hyper-local ads targeting residential neighborhoods and small business owners within 10km',
            'Use Facebook Lead Forms to reduce friction (no website required initially)',
            'Implement simple WhatsApp-based booking system for immediate quote requests'
        ],

        execution: [
            'Month 1-2: Created business pages, designed brand visuals, launched organic posts showcasing completed jobs and client testimonials.',
            'Month 3-4: Launched Facebook Lead Ads with special offer for first-time customers, tested 4 audience segments (homeowners, renters, offices, post-construction).',
            'Month 5-6: Scaled winning audience (homeowners 30-50 age bracket), introduced retargeting for page engagers, ran limited-time promotions during festival seasons.'
        ],

        detailedResults: {
            leads: { value: '50+ per month', description: 'Consistent monthly lead flow via Facebook Lead Forms' },
            roi: { value: '200%', description: 'Every LKR 1 spent on ads generated LKR 3 in revenue' },
            revenue: { value: '35% increase', description: 'Year-over-year revenue growth attributed to digital channel' },
            retention: { value: '40% repeat rate', description: 'New customers became recurring clients' },
            adSpend: { value: 'LKR 15K/month', description: 'Lean budget optimized for local reach' }
        },

        insight: 'Local service businesses don\'t need complex funnels—they need trust and convenience. Before/after photos paired with "tap to message on WhatsApp" CTAs outperformed everything else. We eliminated website friction entirely in the first 3 months, letting Facebook do the heavy lifting. Once cash flow improved, we built a simple booking site.',

        clientQuote: null,
        clientName: null,
        clientRole: null,

        image: '/portfolio/cleaning-service.png'
    },
    {
        id: 4,
        title: 'Fashion Brand Viral Success',
        industry: 'E-commerce Fashion',
        service: 'Videography + Social Media',
        duration: '5 months',

        // Card view (short)
        challenge: 'Inconsistent content quality, low sales',
        solution: 'Studio shoots + Silver package',
        metrics: ['3M video views', '25% sales growth', '12K new followers'],

        // Full case study
        fullChallenge: 'An emerging fashion e-commerce brand struggled with inconsistent product visuals and minimal social traction. Their in-house photography lacked professional polish, and static images weren\'t cutting through the noise. They needed a content upgrade to compete with premium brands while maintaining startup budgets.',

        strategy: [
            'Transition from static product photos to high-energy video content showcasing real wear and movement',
            'Leverage studio shoots in Colombo for professional lighting, models, and editing',
            'Create a mix of aspirational fashion reels and relatable styling tips',
            'Run paid campaigns promoting best-performing organic content to lookalike audiences'
        ],

        execution: [
            'Month 1: Conducted studio shoot for 15 hero products, produced 20 short-form videos (Reels, TikToks) optimized for sound-on viewing.',
            'Month 2: Posted 5 videos/week, identified top 3 performing styles (haul videos, styling transitions, behind-the-scenes). Began paid promotion.',
            'Month 3-4: Scaled video production to 8 videos/week, introduced user-generated content incentives, launched influencer seeding campaign with 10 micro-influencers.',
            'Month 5: Optimized site for mobile conversions, ran retargeting ads for video viewers, introduced limited drops to create urgency.'
        ],

        detailedResults: {
            videoViews: { value: '3M+', description: 'Cumulative video views across Instagram Reels and TikTok' },
            viralHits: { value: '3 videos over 100K', description: 'Organic reach with no paid boost on initial posting' },
            followers: { value: '12K new', description: 'Follower growth from 8K to 20K in 5 months' },
            sales: { value: '25% increase', description: 'Direct sales growth tracked via Instagram Shop and link-in-bio clicks' },
            engagement: { value: '450% increase', description: 'Comments, shares, and saves per post increased dramatically' }
        },

        insight: 'Fashion buyers don\'t purchase products—they purchase the lifestyle and confidence the product enables. Our video strategy focused less on product specs and more on "transformation moments": the outfit change, the confidence boost, the compliment from a stranger. This emotional storytelling drove saves and shares, which Instagram\'s algorithm rewarded with massive organic reach.',

        clientQuote: null,
        clientName: null,
        clientRole: null,

        image: '/portfolio/fashion-brand.png'
    }
];

// ===== NEW PACKAGE STRUCTURES =====

export const SOCIAL_MEDIA_PACKAGES = [
    {
        name: 'Basic',
        platforms: ['Facebook', 'Instagram'],
        postsPerMonth: 4,
        price: 15000,
        period: '/month',
        description: 'Perfect entry-level social media marketing',
        whatsIncluded: [
            'Content planning',
            'Caption writing',
            'Posting & scheduling',
            'Basic performance check'
        ],
        featured: false
    },
    {
        name: 'Standard',
        platforms: ['Facebook', 'Instagram'],
        postsPerMonth: 8,
        price: 21000,
        period: '/month',
        description: 'Enhanced social media presence',
        whatsIncluded: [
            'Content calendar',
            'Caption & hashtag optimization',
            'Posting & scheduling',
            'Monthly performance report'
        ],
        featured: true
    },
    {
        name: 'Premium',
        platforms: ['Facebook', 'Instagram'],
        postsPerMonth: 15,
        price: 32000,
        period: '/month',
        description: 'Complete social media management',
        whatsIncluded: [
            'Full content strategy',
            'High-quality captions & CTA',
            'Posting, stories & scheduling',
            'Basic community interaction',
            'Detailed analytics'
        ],
        featured: false
    }
];

export const INTEGRATED_PACKAGES = [
    {
        name: 'Starter',
        platforms: ['Facebook', 'Instagram', 'TikTok'],
        contentVolume: {
            posts: '4 Posts/Month',
            videos: '4 Videos/Month'
        },
        price: 45000,
        period: '/month',
        description: 'Ideal for businesses starting their integrated social presence',
        whatsIncluded: [
            'Content planning',
            'Captions & hashtags',
            'Posting & scheduling',
            'Basic performance overview'
        ],
        featured: false
    },
    {
        name: 'Growth',
        platforms: ['Facebook', 'Instagram', 'TikTok'],
        contentVolume: {
            posts: '8 Posts/Month',
            videos: '8 Videos/Month'
        },
        price: 72900,
        period: '/month',
        description: 'For businesses ready to scale their social presence',
        whatsIncluded: [
            'Advanced content strategy',
            'Optimized captions & hashtags',
            'Posting & scheduling',
            'Basic community monitoring',
            'Monthly report'
        ],
        featured: true
    },
    {
        name: 'Scale',
        platforms: ['Facebook', 'Instagram', 'TikTok'],
        contentVolume: {
            posts: '15 Posts/Month',
            videos: '15 Videos/Month'
        },
        price: 118000,
        period: '/month',
        description: 'Maximum reach and engagement across all platforms',
        whatsIncluded: [
            'Full growth strategy',
            'High-engagement captions & CTA',
            'Posting, stories & scheduling',
            'Community management',
            'Detailed analytics & optimization'
        ],
        featured: false
    }
];

export const TIKTOK_PACKAGES = [
    {
        name: 'TikTok Starter',
        description: 'Ideal for testing TikTok growth',
        price: 35000,
        period: '/month',
        videoCount: 4,
        features: [
            'Creative content planning',
            'Script & hook writing',
            'Professional studio shoot',
            'Proper lighting setup',
            'Camera & basic audio support',
            'Video editing (TikTok optimized)',
            'Basic caption & hashtag support'
        ],
        featured: false
    },
    {
        name: 'TikTok Growth',
        description: 'For consistent content & visibility',
        price: 60000,
        period: '/month',
        videoCount: 8,
        features: [
            'Content & trend research',
            'Advanced script & hook writing',
            'Professional studio shoot',
            'Proper lighting & camera setup',
            'Enhanced video editing',
            'Caption & hashtag optimization'
        ],
        featured: true
    },
    {
        name: 'TikTok Scale',
        description: 'For brands focused on maximum reach',
        price: 100000,
        period: '/month',
        videoCount: 15,
        features: [
            'In-depth content & trend strategy',
            'High-converting scripts & hooks',
            'Professional studio shoot',
            'Full lighting, camera & audio setup',
            'Advanced editing & pacing',
            'Caption, hashtag & posting guidance'
        ],
        featured: false
    }
];

export const POST_DESIGN_BUNDLES = [
    {
        name: 'Single Post',
        price: 2000,
        period: '/post',
        contentCount: 1,
        description: 'Perfect for one-time needs',
        features: [
            'Custom-designed social media post',
            'Brand-aligned colors & layout',
            'Caption writing',
            'Suitable for Facebook & Instagram'
        ],
        featured: false
    },
    {
        name: 'Starter Post Bundle',
        price: 6000,
        period: '/month',
        contentCount: 4,
        description: 'Start building your visual presence',
        features: [
            'Custom post designs',
            'Caption writing',
            'Brand-consistent visuals',
            'Facebook & Instagram ready'
        ],
        featured: false
    },
    {
        name: 'Growth Post Bundle',
        price: 11000,
        period: '/month',
        contentCount: 8,
        description: 'Consistent quality content',
        features: [
            'Advanced design layouts',
            'Caption writing & hashtag support',
            'Brand consistency across posts',
            'Facebook & Instagram ready'
        ],
        featured: true
    },
    {
        name: 'Scale Post Bundle',
        price: 20000,
        period: '/month',
        contentCount: 15,
        description: 'Premium design at scale',
        features: [
            'Premium design style',
            'High-engagement captions & CTA',
            'Strong visual consistency',
            'Facebook & Instagram optimized'
        ],
        featured: false
    }
];

export const ADDITIONAL_SERVICES = {
    studioInfo: [
        'All TikTok packages include in-house studio shooting',
        'Professional lighting & camera setup included',
        'Controlled environment for clean, commercial-grade videos'
    ],
    addOns: [
        {
            type: 'Models / Actors',
            description: 'Professional models available on request',
            details: [
                'Pricing depends on number of models, video count, and usage type',
                'Model fees are not included in package prices'
            ]
        },
        {
            type: 'Outdoor / On-Location Shooting',
            description: 'Shooting at client location or external locations',
            details: [
                'Travel, setup & logistics apply',
                'Outdoor shoot pricing varies based on location, duration, and requirements'
            ]
        },
        {
            type: 'Voice-Over / Extra Editing',
            description: 'Professional enhancements for your content',
            details: [
                'Professional voice-over',
                'Advanced motion graphics',
                'Subtitles & captions'
            ]
        }
    ],
    importantNotes: {
        tiktokPackages: [
            'Package prices apply to studio-based shoots only.',
            'Outdoor or on-location shoots are quoted separately based on requirements.',
            'Custom TikTok packages can be created based on business goals.'
        ],
        postBundles: [
            'Post bundles include design and captions only.',
            'Posting, scheduling, and page handling are available as separate services.',
            'Revisions are limited to maintain quality and timelines.'
        ]
    }
};

// ===== DIGITAL SOLUTIONS PACKAGES =====

export const SAAS_PRODUCTS = [
    {
        productName: 'Social Seller CRM',
        tagline: 'Turn DM orders into a real business.',
        targetAudience: 'Instagram/Facebook Shops',
        deviceCompatibility: '100% Mobile Optimized (Works on any Phone)',
        packages: [
            {
                name: 'Micro',
                priceMonthly: 1000,
                setupFee: 0,
                features: [
                    '1 User Account',
                    'Manual Order Entry',
                    'Basic Customer List',
                    'Email Support Only'
                ],
                featured: false
            },
            {
                name: 'Starter',
                priceMonthly: 4500,
                setupFee: 5000,
                features: [
                    '3 User Accounts',
                    'WhatsApp Click-to-Order Link',
                    'Delivery Tracking Status',
                    'Automated Order Confirmation',
                    'Standard Phone Support'
                ],
                featured: true
            },
            {
                name: 'Pro Seller',
                priceMonthly: 8500,
                setupFee: 10000,
                features: [
                    'Unlimited Users',
                    'Inventory Synchronization',
                    'Full SMS Automation',
                    'Profit & Loss Dashboard',
                    'Priority Support'
                ],
                featured: false
            }
        ]
    },
    {
        productName: 'Smart Retail POS',
        tagline: 'The cloud POS that runs your shop from anywhere.',
        targetAudience: 'Retail Shops, Pharmacies, Hardware Stores',
        deviceCompatibility: 'Works on Tablet, Phone, or Desktop',
        packages: [
            {
                name: 'Nano POS',
                priceMonthly: 1000,
                setupFee: 5000,
                features: [
                    '1 User / Mobile Terminal',
                    'Basic Billing (Print Receipts)',
                    'Daily Sales Email Report',
                    'Self-Service Setup (No Onsite)'
                ],
                featured: false
            },
            {
                name: 'Shop Standard',
                priceMonthly: 6000,
                setupFee: 15000,
                features: [
                    '2 Terminals',
                    'Real-time Inventory Tracking',
                    'Low Stock Alerts',
                    'Barcode Scanning Support',
                    'Hardware Setup Assistance'
                ],
                featured: true
            },
            {
                name: 'Multi-Branch',
                priceMonthly: 12000,
                setupFee: 25000,
                features: [
                    'Unlimited Terminals',
                    'Multi-Branch Management',
                    'Supplier & PO Management',
                    'Advanced Analytics',
                    'On-Site Support'
                ],
                featured: false
            }
        ]
    },
    {
        productName: 'MemberFlow',
        tagline: 'Automate your classes, gym, or subscriptions.',
        targetAudience: 'Tuition Classes, Gyms, Coaching',
        deviceCompatibility: 'Mobile Admin App + QR Scanner',
        packages: [
            {
                name: 'Tutor Basic',
                priceMonthly: 1000,
                setupFee: 2500,
                features: [
                    'Up to 50 Students',
                    'Manual Payment Entry',
                    'Basic ID Card Design',
                    'No SMS Reminders'
                ],
                featured: false
            },
            {
                name: 'Class Standard',
                priceMonthly: 5000,
                setupFee: 10000,
                features: [
                    'Up to 300 Students',
                    'QR Code Attendance',
                    'Digital Receipts',
                    'Monthly Revenue Report',
                    'SMS Integration'
                ],
                featured: true
            },
            {
                name: 'Institute Pro',
                priceMonthly: 10000,
                setupFee: 20000,
                features: [
                    'Unlimited Students',
                    'Automated \'Payment Due\' SMS',
                    'Student/Parent Portal',
                    'Multiple Class Management',
                    'Priority Support'
                ],
                featured: false
            }
        ]
    }
];

export const CUSTOM_SOFTWARE_SOLUTIONS = {
    categoryTitle: 'Custom Software & Mobile Apps',
    categoryDescription: 'Tailor-made technology for businesses that need more than a standard template.',
    services: [
        {
            serviceName: 'Enterprise Custom Software',
            type: 'Web Applications / ERP / CRM',
            pricingModel: 'Project Based',
            startingPrice: '250,000+',
            keyBenefits: [
                '100% Source Code Ownership',
                'Tailored to your exact business process',
                'No per-user monthly licensing fees',
                'Integration with legacy systems'
            ]
        },
        {
            serviceName: 'Mobile App Development',
            type: 'iOS & Android Applications',
            pricingModel: 'Project Based',
            startingPrice: 'Custom Quote',
            keyBenefits: [
                'Native Performance (iOS & Android)',
                'User-Friendly Interface Design (UI/UX)',
                'Push Notifications & Real-time Features',
                'App Store & Play Store Deployment Handling'
            ]
        }
    ],
    ctaText: 'Book a Free System Architecture Call'
};

export const WEB_DEVELOPMENT_PACKAGES = {
    categoryTitle: 'Web Design & Development',
    categoryDescription: 'High-converting websites designed to turn visitors into customers. You own the site, forever.',
    pricingPolicy: 'One-Time Design Fee (No Monthly Subscriptions from us)',
    packages: [
        {
            packageName: 'Starter Web',
            price: 35000,
            bestFor: 'Portfolios, Personal Brands, Landing Pages',
            features: [
                'One-Page (Scrolling) or up to 3 Pages',
                'Clean, Modern Template Design',
                'Mobile Responsive',
                'Contact Form & WhatsApp Button',
                'Social Media Links'
            ],
            timeline: '1 - 2 Weeks',
            featured: false
        },
        {
            packageName: 'Business Pro',
            price: 75000,
            bestFor: 'Corporate Companies, Service Agencies, Hotels',
            features: [
                '5 - 8 Custom Pages',
                'Premium Brand-Aligned Design',
                'CMS (Admin Panel to edit text)',
                'Basic SEO Optimization',
                'Fast Loading Speed Optimization'
            ],
            timeline: '2 - 3 Weeks',
            featured: true
        },
        {
            packageName: 'E-Commerce Store',
            price: 145000,
            bestFor: 'Shops Selling Physical Products Online',
            features: [
                'Full Online Store Functionality',
                'Shopping Cart & Checkout',
                'Payment Gateway Integration (Visa/Master)',
                'Inventory Management System',
                'User Accounts & Order History'
            ],
            timeline: '3 - 4 Weeks',
            featured: false
        }
    ],
    importantNotes: {
        hostingDomainPolicy: 'We do not resell hosting or domains for a profit. We select the best provider for you, and you pay the exact bill amount directly to the provider. We handle the technical setup for free during development.',
        contentAddon: 'Don\'t have text or images? We offer a \'Content & Copywriting Pack\' starting at LKR 5,000 per page.'
    }
};
