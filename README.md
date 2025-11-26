# Riptide Rentals

A private vacation rental booking website for properties in Jacksonville Beach and St. Augustine, Florida.

## Features

- **Modern React Application** - Built with React and Vite for fast performance
- **Property Listings** - Beautiful cards showcasing your two rental properties
- **Individual Property Pages** - Detailed views with image galleries, amenities, and descriptions
- **Booking Inquiry Form** - Contact form that sends booking requests via email
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **No Airbnb Fees** - Direct bookings mean no commission fees

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Navigate to the project directory:
```bash
cd riptide-rentals
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Update Property Information

Edit the property data in `src/data/properties.js`:

- Property names, descriptions, and locations
- Number of bedrooms, bathrooms, and max guests
- Amenities lists
- Base prices
- Property images (replace with your own URLs or local images)

### Update Contact Information

Update email and phone numbers in:
- `src/components/Footer.jsx`
- `src/pages/Home.jsx` (contact section)
- `src/pages/Property.jsx` (booking form email)

### Add Your Own Images

1. Place your images in `public/images/` directory
2. Update the image URLs in `src/data/properties.js`
3. Or use your own image hosting service (like AWS S3, Cloudflare R2, etc.)

### Customize Colors

The main brand color is `#0066cc` (blue). To change it:
- Search for `#0066cc` across all CSS files
- Replace with your preferred color

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deployment Options

1. **Netlify** (Recommended - Free tier available)
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

2. **Vercel** (Also great for React apps)
   - Import your project
   - Vercel auto-detects Vite settings
   - Deploy!

3. **Traditional Web Hosting**
   - Upload contents of `dist` folder to your hosting provider
   - Point your domain to the hosting

## Project Structure

```
riptide-rentals/
├── src/
│   ├── components/       # Reusable components (Header, Footer)
│   ├── pages/           # Page components (Home, Property)
│   ├── data/            # Property data
│   ├── App.jsx          # Main app component with routing
│   ├── App.css          # App-level styles
│   └── index.css        # Global styles
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## Features to Add Later

- Payment integration (Stripe, PayPal)
- Calendar availability system
- Photo galleries with lightbox
- Guest reviews/testimonials
- Email notification system
- Admin dashboard for managing bookings
- Booking management system

## Support

For questions or issues, contact the developer.

## License

Private - All rights reserved
