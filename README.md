# Popylabs Website

A modern, multi-page Next.js website for Popylabs Digital Marketing Agency featuring the Ocean Drift color palette, interactive components, and Vercel deployment optimization.

## 🚀 Features

- ✨ **Modern Design**: Ocean Drift color palette with glassmorphism effects
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance Optimized**: Static site generation for blazing-fast load times
- 🎨 **Interactive Components**: Price calculator, portfolio filters, testimonials carousel
- 💬 **WhatsApp Integration**: 24/7 AI support via floating WhatsApp button
- 🔍 **SEO Optimized**: Meta tags, structured data, semantic HTML
- 🌍 **International Ready**: Optimized for global audiences via Vercel CDN

## 📋 Prerequisites

Before you begin, ensure you have installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

## 🛠️ Installation

### Step 1: Install Node.js

If you don't have Node.js installed:

1. Download from [nodejs.org](https://nodejs.org/)
2. Run the installer
3. Verify installation by opening PowerShell and running:
   ```powershell
   node --version
   npm --version
   ```

### Step 2: Install Dependencies

Navigate to the project directory and install dependencies:

```powershell
cd d:\Popylabs\popylabs-website
npm install
```

## 🎯 Development

### Run Development Server

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```powershell
npm run build
```

This creates an optimized production build in the `out/` directory.

### Preview Production Build

```powershell
npm start
```

## 🚀 Deployment to Vercel

### Method 1: GitHub + Vercel (Recommended)

1. **Create GitHub Repository**
   ```powershell
   cd d:\Popylabs\popylabs-website
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/popylabs-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your `popylabs-website` repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"
   - Done! Your site is live in ~30 seconds

3. **Add Custom Domain (popylabs.com)**
   - In Vercel project settings, go to "Domains"
   - Add `popylabs.com`
   - Follow DNS instructions from Vercel
   - Update your domain DNS settings (at your domain registrar)
   - Wait for propagation (5-60 minutes)
   - Your site is now live at popylabs.com!

### Method 2: Vercel CLI

```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow the prompts to deploy.

## 📝 Configuration

### WhatsApp Number

Update your WhatsApp Business number in:
- `components/features/WhatsAppButton.tsx`
- `components/sections/LeadMagnets.tsx`
- `components/sections/CTASection.tsx`

Replace `94XXXXXXXXX` with your actual WhatsApp number (include country code, no + or spaces).

### Logo

Place your logo file at `/public/logo.jpg` (or update the path in `components/layout/Header.tsx`).

### SEO & Metadata

Edit meta information in `app/layout.tsx`:
- Site title
- Description
- Keywords
- Open Graph data

## 🎨 Customization

### Colors

Modify the Ocean Drift palette in `tailwind.config.js`:

```javascript
colors: {
  'navy-deep': '#072036',
  'steel-blue': '#346180',
  'sky-blue': '#5F8FA5',
  'cream': '#EFE5C2',
  'accent-gold': '#D4AF37',
}
```

### Content

Update service packages, testimonials, and case studies in `lib/constants.ts`.

## 📁 Project Structure

```
popylabs-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   ├── services/          # Service pages
│   ├── packages/          # Pricing page
│   ├── portfolio/         # Portfolio page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   └── features/          # Interactive features
├── lib/
│   └── constants.ts       # Data (packages, services, etc.)
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Technologies Used

- **Next.js 14** - React framework with app router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React** - UI library
- **Vercel** - Deployment platform

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📧 Support

For development questions or issues:
1. Check the implementation_plan.md in the .gemini folder
2. Use AI assistants (Claude, ChatGPT, Gemini) for code modifications
3. Refer to [Next.js documentation](https://nextjs.org/docs)

## 📄 License

Proprietary - © 2025 Popylabs. All rights reserved.

---

**Built with ❤️ for Popylabs by AI** | Optimized for Vercel deployment
