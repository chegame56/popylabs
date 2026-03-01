# Popylabs Website - Setup Guide

## 🚦 Quick Start (Complete Steps)

### 1. Install Node.js

**You need Node.js to run this website.** If you haven't installed it yet:

1. Download Node.js from: https://nodejs.org/
2. Choose the **LTS version** (recommended)
3. Run the installer
4. Verify installation by opening PowerShell and typing:
   ```powershell
   node --version
   npm --version
   ```
   You should see version numbers like `v20.x.x` and `10.x.x`

### 2. Install Dependencies

Open PowerShell, navigate to the project folder, and install:

```powershell
cd d:\Popylabs\popylabs-website
npm install
```

This will take 2-5 minutes to download all dependencies.

### 3. Run the Website Locally

```powershell
npm run dev
```

Open your browser to: **http://localhost:3000**

You should see your Popylabs website running!

### 4. Make Changes (with AI Help)

You can now ask ChatGPT, Claude, or Gemini to help you modify the website:

- "Change the hero headline"
- "Update the WhatsApp number"
- "Add a new service"
- "Modify the color scheme"

All AI assistants work perfectly with this Next.js codebase!

---

## 🚀 Deploy to Vercel (Make it Live)

### Prerequisites
- GitHub account (free) - https://github.com
- Vercel account (free) - https://vercel.com

### Step 1: Push to GitHub

```powershell
# Navigate to project
cd d:\Popylabs\popylabs-website

# Initialize Git
git init
git add .
git commit -m "Initial Popylabs website"

# Create a new repository on GitHub.com, then:
git remote add origin https://github.com/YOUR-USERNAME/popylabs-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy with Vercel

1. Go to https://vercel.com
2. Sign up/login with GitHub
3. Click **"New Project"**
4. Select your `popylabs-website` repository
5. Vercel will auto-detect Next.js settings
6. Click **"Deploy"**
7. Wait 30-60 seconds
8. Your site is live! 🎉

### Step 3: Add Your Custom Domain (popylabs.com)

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add `popylabs.com` and `www.popylabs.com`
4. Vercel will show you DNS records
5. Log into your domain registrar (where you bought popylabs.com)
6. Update DNS settings with Vercel's values:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com`
7. Wait 5-60 minutes for DNS propagation
8. Your site is now live at **popylabs.com**! 🌐

---

## 📝 Important Configurations

### Update WhatsApp Number

Replace `94XXXXXXXXX` with your actual WhatsApp number in these files:

1. `components/features/WhatsAppButton.tsx` (line 7)
2. `components/sections/LeadMagnets.tsx` (line 100)
3. `components/sections/CTASection.tsx` (line 54)
4. `app/contact/page.tsx` (line 169)

Format: Country code + number, no spaces or + symbol
Example: `94771234567` for Sri Lankan number

### Add Your Logo

Place your logo file at:
```
public/logo.jpg
```

Supported formats: JPG, PNG, WebP
Recommended size: 200x200px minimum

### Update Company Info

Edit `components/layout/Footer.tsx` to add:
- Email address
- Phone number
- Physical address (if you want to display it)
- Social media links

---

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js` → `theme.extend.colors`:

```javascript
colors: {
  'navy-deep': '#072036',    // Main background
  'steel-blue': '#346180',   // Secondary color
  'sky-blue': '#5F8FA5',     // Text accents
  'cream': '#EFE5C2',        // Light text
  'accent-gold': '#D4AF37',  // CTAs and highlights
}
```

### Update Packages & Pricing

Edit `lib/constants.ts` → `PACKAGES` object

### Add/Edit Services

Edit `lib/constants.ts` → `SERVICES` array

### Modify Testimonials

Edit `lib/constants.ts` → `TESTIMONIALS` array

---

## 🛠️ Common Commands

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint
```

---

## 📱 Social Media Setup

Update social media links in:
- `components/layout/Footer.tsx` (line 45-48)

Replace `#` with your actual profile URLs:
```typescript
{ name: 'Facebook', icon: '📘', href: 'https://facebook.com/popylabs' },
{ name: 'Instagram', icon: '📷', href: 'https://instagram.com/popylabs' },
{ name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/company/popylabs' },
{ name: 'TikTok', icon: '🎵', href: 'https://tiktok.com/@popylabs' },
```

---

## 🆘 Troubleshooting

### "npm is not recognized"
- Node.js is not installed or not in PATH
- Reinstall Node.js from nodejs.org

### "Module not found"
- Run `npm install` again
- Delete `node_modules` folder and run `npm install`

### Changes not showing
- Stop the server (Ctrl+C)
- Run `npm run dev` again
- Hard refresh browser (Ctrl+Shift+R)

### Vercel deployment failed
- Check if `next.config.js` exists
- Ensure all TypeScript errors are fixed
- Check Vercel build logs for specific errors

---

## 📚 Next Steps

1. ✅ Install Node.js
2. ✅ Run `npm install`
3. ✅ Test locally with `npm run dev`
4. ✅ Update WhatsApp number
5. ✅ Add your logo
6. ✅ Customize content in `lib/constants.ts`
7. ✅ Push to GitHub
8. ✅ Deploy to Vercel
9. ✅ Connect popylabs.com domain
10. ✅ Launch! 🚀

---

**Need help?** Use Claude, ChatGPT, or Gemini - they all understand this codebase perfectly!

**Built for:** Popylabs Digital Marketing Agency
**Technology:** Next.js 14, TypeScript, Tailwind CSS
**Hosting:** Vercel (optimized)
**Domain:** popylabs.com
