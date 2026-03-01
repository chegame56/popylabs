/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Ocean Drift Palette (Medium Brightness)
                'navy-deep': '#1E4A6F',
                'navy-darker': '#153854',
                'navy-lighter': '#2A5F87',
                'steel-blue': '#346180',
                'ocean-blue': '#3B6EA5',
                'sky-blue': '#75B9CC',
                'cream': '#FFF8E7',
                'soft-white': '#F5F7FA',
                'accent-gold': '#D4AF37',
                'whatsapp': '#25D366',

                // Warm Accent Colors (Option 1)
                'coral': '#FF7A5A',
                'warm-orange': '#FFA726',
                'teal': '#14B8A6',
                'sunset': '#FBBF24',
            },
            fontFamily: {
                sans: ['var(--font-poppins)', 'sans-serif'],
                display: ['var(--font-poppins)', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'blob': 'blob 10s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                blob: {
                    '0%, 100%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                    '33%': {
                        transform: 'translate(30px, -30px) scale(1.05)',
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(1.08)',
                    },
                }
            }
        },
    },
    plugins: [],
}
