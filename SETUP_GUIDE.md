# Quick Setup Guide

## Step 1: Customize Your Property Information

Open `src/data/properties.js` and update:

1. **Property Names** - Change to your actual property names
2. **Descriptions** - Write compelling descriptions of your rentals
3. **Details** - Update bedrooms, bathrooms, max guests
4. **Amenities** - List all amenities your properties offer
5. **Prices** - Set your nightly rates
6. **Images** - Replace the placeholder image URLs with your own property photos

### Adding Your Own Photos

**Option 1: Use a free image host**
- Upload to [Imgur](https://imgur.com) or [ImgBB](https://imgbb.com)
- Copy the direct image URL
- Paste into the `images` array

**Option 2: Use local images**
- Place images in `public/images/` folder
- Reference them as `/images/your-photo.jpg`

## Step 2: Update Contact Information

Update your email and phone in these files:

1. **src/components/Footer.jsx** - Footer contact info
2. **src/pages/Home.jsx** - Contact section on homepage
3. **src/pages/Property.jsx** - Booking form email address (line 45)

Search for `bookings@riptiderentals.com` and replace with your email.
Search for `(904) 555-0123` and replace with your phone number.

## Step 3: Customize Branding

### Change Site Name
- **src/components/Header.jsx** - Update "Riptide Rentals"
- **index.html** - Update page title

### Change Colors
The site uses blue (`#0066cc`) as the primary color. To change:
- Find and replace `#0066cc` with your brand color
- Also update `#0052a3` (darker blue for hover states)

## Step 4: Test Locally

```bash
cd riptide-rentals
npm install
npm run dev
```

Visit http://localhost:5173 to see your site.

## Step 5: Deploy to the Web

### Free Deployment with Netlify

1. Create account at [Netlify](https://netlify.com)
2. Click "Add new site" > "Import an existing project"
3. Connect to GitHub (you'll need to push your code to GitHub first)
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Get a Custom Domain (Optional)

1. Buy a domain from Namecheap, GoDaddy, or Google Domains
2. In Netlify, go to Domain settings
3. Add your custom domain
4. Update DNS records as instructed

## Step 6: Set Up Booking Management

The current setup sends booking inquiries via email. For a more robust solution:

### Simple: Use Email
- Inquiries open user's email client with pre-filled info
- Free and simple
- Manual booking management

### Better: Use a Form Service
- [Formspree](https://formspree.io) - Free tier available
- [EmailJS](https://emailjs.com) - Send emails from JavaScript
- Automatically receive booking requests

### Best: Add Backend + Database
- Set up a backend to handle bookings
- Use a database to track availability
- Integrate payment processing (Stripe)
- This requires more development

## Tips for Success

1. **Take Great Photos** - Property photos are crucial
2. **Be Responsive** - Reply to inquiries quickly
3. **Set Clear Policies** - Add cancellation policy, house rules
4. **Collect Reviews** - Ask happy guests for testimonials
5. **Update Availability** - Keep calendar current (add this feature later)

## Need Help?

- React documentation: https://react.dev
- Vite documentation: https://vitejs.dev
- Netlify documentation: https://docs.netlify.com

## Future Enhancements

Consider adding these features as you grow:

- Interactive calendar for availability
- Instant booking with payment
- Automated email confirmations
- Guest review system
- Multi-language support
- SEO optimization
- Analytics tracking
