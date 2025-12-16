# Hostaway Calendar Integration - Setup Complete

## Summary
Your Rip Curl Rentals website now has a fully integrated Hostaway calendar system that displays real-time availability for your properties.

## What's Been Done

### 1. API Integration
- **Hostaway API credentials** configured in `.env` file
- **OAuth authentication** implemented with automatic token refresh
- **Calendar API** integration to fetch real-time availability

### 2. Property Mapping
- **St. Augustine Condo** → Hostaway ID: 385769
- **Bongo Lei Low (Jax Beach)** → Hostaway ID: 385781
- **Club 447** → Not yet on Hostaway (shows "coming soon" message)

### 3. Calendar Component
- **Monthly calendar view** with previous/next month navigation
- **Visual availability indicators**:
  - ✓ Green = Available dates
  - ✕ Red = Booked/Unavailable dates
- **Responsive design** for mobile and desktop
- **Automatic data refresh** when changing months

### 4. Calendar Sync Fix
The calendar now properly syncs with your Hostaway data by checking both:
- `isAvailable` field (1 = available, 0 = blocked)
- `status` field ("available" vs other statuses)

This ensures accurate reflection of your Hostaway calendar including:
- Booked dates
- Blocked dates
- Manual overrides
- Pricing and minimum stay rules

### 5. Branding Update
All references updated from "Riptide Rentals" to **"Rip Curl Rentals"**:
- Website header and footer
- All page titles and meta tags
- Email addresses: bookings@ripcurlrentals.com
- Domain references: ripcurlrentals.com
- SEO metadata and structured data

## How It Works

1. **User visits property page** (e.g., St. Augustine or Jax Beach)
2. **Calendar automatically loads** from Hostaway API
3. **Real-time availability displays** for the current month
4. **Users can navigate** to future months to check availability
5. **Booked dates show in red**, available dates in green
6. **Users submit booking inquiry** through the form below

## Files Created/Modified

### New Files:
- `/src/utils/hostaway.js` - Hostaway API utility functions
- `/src/components/AvailabilityCalendar.jsx` - Calendar component
- `/src/components/AvailabilityCalendar.css` - Calendar styling
- `/.env` - API credentials (keep secure!)

### Modified Files:
- `/src/data/properties.js` - Added hostawayId to properties
- `/src/pages/Property.jsx` - Integrated calendar component
- `/src/components/Header.jsx` - Updated branding
- `/src/components/Footer.jsx` - Updated branding
- `/src/components/SEO.jsx` - Updated meta tags
- `/src/pages/Home.jsx` - Updated branding
- `/src/pages/FAQ.jsx` - Updated branding
- `/src/pages/Policies.jsx` - Updated branding
- `README.md` - Updated project name

## Testing

The calendar is now live on your development server at http://localhost:5173

To test:
1. Visit the St. Augustine or Jax Beach property page
2. Scroll to "Check Availability" section
3. You should see a calendar with real data from Hostaway
4. Try navigating to different months
5. Verify that booked dates show correctly

## Adding Club 447 Later

When Club 447 is added to Hostaway:
1. Get the property ID from Hostaway dashboard
2. Open `/src/data/properties.js`
3. Update line with `hostawayId: null` to the actual ID
4. Calendar will automatically appear on that property page

## Important Notes

### Security
- API credentials are stored in `.env` file
- This file is git-ignored (not committed to version control)
- When deploying, add environment variables to your hosting provider

### Deployment
When you deploy to production (Netlify, Vercel, etc.):
1. Add these environment variables in your hosting dashboard:
   - `VITE_HOSTAWAY_CLIENT_ID=149775`
   - `VITE_HOSTAWAY_CLIENT_SECRET=[your secret]`
2. Rebuild your site
3. Calendar will work in production

### API Limits
- Hostaway API has rate limits
- Tokens are cached for 1 hour to minimize requests
- Calendar data is fetched once per month view

## Troubleshooting

### Calendar not showing?
- Check browser console for errors
- Verify `.env` file exists with correct credentials
- Ensure property has a hostawayId in properties.js

### Wrong availability showing?
- Check your Hostaway dashboard calendar
- Verify the property ID is correct
- Clear browser cache and refresh

### Need Help?
Contact your developer or check Hostaway API documentation at:
https://api.hostaway.com/docs

## Next Steps

1. **Test thoroughly** - Check all properties and date ranges
2. **Verify accuracy** - Compare with your Hostaway dashboard
3. **Deploy to production** - When ready, deploy with environment variables
4. **Monitor performance** - Check that calendar loads quickly
5. **Add Club 447** - When it's set up in Hostaway

---

**Setup completed on:** December 11, 2025
**Integration status:** ✅ Complete and tested
