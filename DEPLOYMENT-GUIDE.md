# Deployment to Vercel - Step by Step

## 📋 What You Need

- ✅ GitHub account (create at https://github.com - it's free)
- ✅ Vercel account (create at https://vercel.com - it's free)
- ✅ Your domain popylabs.com (you already have this)
- ✅ This website code (you have it at d:\Popylabs\popylabs-website)

---

## 🚀 Step 1: Push Code to GitHub

### 1.1 Create GitHub Repository

1. Go to https://github.com
2. Sign up or log in
3. Click the **"+"** button (top right) → **"New repository"**
4. Repository name: `popylabs-website`
5. Description: "Popylabs Digital Marketing Agency Website"
6. Privacy: **Private** (recommended) or Public
7. Do **NOT** check "Add README" (you already have files)
8. Click **"Create repository"**

### 1.2 Push Your Code

Open PowerShell and run these commands:

```powershell
# Navigate to your project
cd d:\Popylabs\popylabs-website

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Popylabs website"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/popylabs-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

You'll be asked to login to GitHub. Enter your credentials.

Your code is now on GitHub! ✅

---

## 🌐 Step 2: Deploy to Vercel

### 2.1 Create Vercel Account

1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account
5. Done! You're logged in

### 2.2 Import Your Project

1. Click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories
3. Find `popylabs-website` and click **"Import"**

### 2.3 Configure Project

Vercel will auto-detect Next.js. The settings should be:

- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: Leave default
- **Install Command**: `npm install`

Click **"Deploy"**

### 2.4 Wait for Deployment

- Vercel will build your website (30-90 seconds)
- You'll see **"Congratulations!"** when done
- Your website is now live at a URL like: `popylabs-website-abc123.vercel.app`

Test it by clicking the URL! 🎉

---

## 🔗 Step 3: Connect Your Custom Domain (popylabs.com)

### 3.1 Add Domain in Vercel

1. In your Vercel project dashboard, click **"Settings"**
2. Click **"Domains"** in the left sidebar
3. Type `popylabs.com` in the domain field
4. Click **"Add"**
5. Also add `www.popylabs.com` (repeat the process)

### 3.2 Configure DNS

Vercel will show you instructions. Typically:

**For popylabs.com (root domain):**
- Type: **A Record**
- Name: `@` (or leave blank)
- Value: `76.76.21.21`
- TTL: `3600` (or default)

**For www.popylabs.com:**
- Type: **CNAME**
- Name: `www`
- Value: `cname.vercel-dns.com.`
- TTL: `3600` (or default)

### 3.3 Update DNS at Your Domain Registrar

1. Log into where you bought popylabs.com (e.g., GoDaddy, Namecheap, Google Domains, etc.)
2. Find **"DNS Settings"** or **"Manage DNS"**
3. Add the A record and CNAME record shown by Vercel
4. **Remove** any conflicting records pointing to other services
5. Save changes

### 3.4 Wait for DNS Propagation

- DNS changes take **5-60 minutes** (sometimes up to 24 hours)
- Check status in Vercel → Domains section
- When it shows **"Valid"** with a green checkmark, you're done! ✅

Your website is now live at **popylabs.com**! 🌐

---

## 🔄 Making Updates After Deployment

### Option 1: Git Push (Recommended)

Every time you make changes:

```powershell
# Save your changes
git add .
git commit -m "Updated pricing, fixed typo, etc."
git push
```

Vercel will **automatically rebuild and deploy** in ~30 seconds!

### Option 2: Edit on GitHub

1. Go to your GitHub repository
2. Navigate to a file
3. Click the **pencil icon** (edit)
4. Make changes
5. Click **"Commit changes"**

Vercel will auto-deploy again!

---

## ✅ Checklist: Is Everything Working?

- [ ] Website loads at `https://popylabs.com`
- [ ] HTTPS (secure) is working (green padlock in browser)
- [ ] www.popylabs.com works (redirects to popylabs.com)
- [ ] WhatsApp button works
- [ ] All pages load correctly
- [ ] Mobile responsive (test on phone)
- [ ] Forms submit properly
- [ ] Logo displays
- [ ] Links work

---

## 🛠️ Troubleshooting

### DNS not updating
- Wait longer (can take up to 24 hours)
- Check you removed old records
- Use https://dnschecker.org to verify propagation

### Vercel build failed
- Check build logs in Vercel dashboard
- Fix any TypeScript errors
- Ensure `npm run build` works locally first

### "npm not found" during build
- This shouldn't happen - Vercel has npm pre-installed
- Contact Vercel support if it does

### Changes not showing
- Clear browser cache (Ctrl+Shift+R)
- Check Vercel deployment logs
- Verify your git push succeeded

---

## 📊 Vercel Dashboard Features

### Analytics
- Go to your project → **"Analytics"**
- See visitor stats, page views, etc.

### Deployment History
- **"Deployments"** tab shows all versions
- You can rollback to any previous version instantly

### Environment Variables
- **"Settings"** → **"Environment Variables"**
- Add API keys, secrets, etc. (if needed later)

---

## 💰 Pricing

### Vercel Free Tier Includes:
- ✅ Unlimited projects
- ✅ 100GB bandwidth/month
- ✅ Custom domains
- ✅ Free SSL certificates
- ✅ Auto-deployments from Git
- ✅ Preview deployments

**This is more than enough for most businesses!**

**Pro tier ($20/month)** only needed if you exceed limits or need priority support.

---

## 🎉 You're Done!

Your website is now:
- ✅ Live at popylabs.com
- ✅ Hosted on Vercel's global CDN (fast worldwide)
- ✅ Auto-deploying from GitHub
- ✅ Secure with HTTPS
- ✅ Ready for Google Ads campaigns

**Next steps:**
1. Test everything thoroughly
2. Update WhatsApp number to real one
3. Add real logo
4. Start driving traffic! 🚀

---

**Questions?** Ask ChatGPT, Claude, or Gemini - they can help you troubleshoot any deployment issues!
