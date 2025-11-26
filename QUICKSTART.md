# Quick Start Checklist

## Before You Launch

### Step 1: Property Photos (CRITICAL)
- [ ] Take professional photos of both properties
- [ ] Upload to [Imgur](https://imgur.com) or your preferred host
- [ ] Copy the direct image URLs
- [ ] Open `src/data/properties.js`
- [ ] Replace the placeholder URLs with your image URLs
- [ ] Add at least 3 photos per property

### Step 2: Property Details
- [ ] Open `src/data/properties.js`
- [ ] Update Jacksonville Beach property:
  - [ ] Change name if needed
  - [ ] Write compelling description
  - [ ] Set accurate bedroom/bathroom counts
  - [ ] Update max guests
  - [ ] List all amenities
  - [ ] Set your nightly rate
- [ ] Update St. Augustine property:
  - [ ] Same as above

### Step 3: Contact Information
- [ ] Open `src/components/Footer.jsx`
  - [ ] Replace email (line 11)
  - [ ] Replace phone (line 12)
- [ ] Open `src/pages/Home.jsx`
  - [ ] Replace email (line 57)
  - [ ] Replace phone (line 61)
- [ ] Open `src/pages/Property.jsx`
  - [ ] Replace email in mailto (line 45)

### Step 4: Branding (Optional)
- [ ] Open `src/components/Header.jsx`
  - [ ] Change "Riptide Rentals" to your brand name
- [ ] Open `index.html`
  - [ ] Update page title

### Step 5: Test Locally
- [ ] Run `npm run dev`
- [ ] Visit http://localhost:5173
- [ ] Click through all pages
- [ ] Test both property detail pages
- [ ] Fill out and submit booking form
- [ ] Check on mobile (right-click > Inspect > Toggle device toolbar)
- [ ] Verify all images load
- [ ] Verify all links work

## Launch Your Site

### Option A: Deploy to Netlify (Easiest)

1. **Push to GitHub**
   ```bash
   cd riptide-rentals
   git init
   git add .
   git commit -m "Initial commit - My rental website"
   # Create a new repo on GitHub, then:
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up (free)
   - Click "Add new site" > "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Wait 2-3 minutes**
   - Your site will be live at `your-site-name.netlify.app`

4. **Add Custom Domain (Optional)**
   - Buy domain from Namecheap, GoDaddy, etc.
   - In Netlify: Domain settings > Add custom domain
   - Follow DNS setup instructions

### Option B: Deploy to Vercel

1. **Push to GitHub** (same as above)

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up (free)
   - Click "Import Project"
   - Select your GitHub repo
   - Click "Deploy" (Vercel auto-detects settings)

3. **Your site is live!**
   - URL: `your-site-name.vercel.app`

## After Launch

### Share Your Site
- [ ] Test the live URL on multiple devices
- [ ] Share with friends/family for feedback
- [ ] Add to social media
- [ ] Create business cards with your URL
- [ ] List in Google My Business (if applicable)

### Monitor Bookings
- [ ] Check email regularly for booking inquiries
- [ ] Respond quickly to potential guests
- [ ] Keep track of bookings in a calendar

### Future Improvements
- [ ] Add Google Analytics to track visitors
- [ ] Set up professional email (your-name@your-domain.com)
- [ ] Add payment processing (Stripe)
- [ ] Create automated email responses
- [ ] Build a calendar system for availability
- [ ] Collect and display guest reviews

## Need Help?

**Can't get something to work?**
- Read `README.md` for detailed docs
- Check `SETUP_GUIDE.md` for step-by-step instructions
- Read `NEXT_STEPS.md` for deployment details

**Common Issues:**
- **Dev server won't start:** Run `npm install` first
- **Photos won't load:** Check image URLs in `properties.js`
- **Form doesn't work:** Email client must be configured on device
- **Site looks broken:** Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)

## Tips for Success

1. **Photos are everything** - Good photos = more bookings
2. **Respond fast** - Reply to inquiries within 1 hour if possible
3. **Be transparent** - Clear pricing, rules, and policies
4. **Stay competitive** - Check Airbnb prices in your area
5. **Collect reviews** - Ask happy guests for testimonials
6. **Keep calendar updated** - Add availability features later

## Estimated Time

- [ ] Gather photos: 1-2 hours
- [ ] Update content: 30 minutes
- [ ] Test locally: 15 minutes
- [ ] Deploy to web: 15 minutes
- [ ] **Total: ~3 hours to launch**

## What You're Saving

**Airbnb fees:** 3% + 14-20% per booking
**On a $1,500 booking:**
- Airbnb takes: ~$300
- You keep: $1,200

**With your own site:**
- Platform fees: $0
- You keep: $1,500
- **Savings: $300 per booking!**

---

**Ready? Start with Step 1 and work your way down!**

Your site is waiting at: `cd riptide-rentals && npm run dev`
Then visit: http://localhost:5173
