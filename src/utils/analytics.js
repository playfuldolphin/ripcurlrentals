/**
 * Analytics Utility
 * 
 * Provides integration for Google Analytics 4 and Facebook Pixel
 * Only tracks in production environment to avoid development data pollution
 * 
 * PRIVACY NOTE: Before deploying, ensure you have proper cookie consent
 * mechanisms in place as required by GDPR, CCPA, and other privacy laws.
 */

// Check if we're in production environment
const isProduction = () => {
  return import.meta.env.PROD && import.meta.env.MODE === 'production'
}

// Check if analytics is enabled (respects user consent if implemented)
const isAnalyticsEnabled = () => {
  // Only track in production
  if (!isProduction()) {
    console.log('[Analytics] Skipping - Not in production mode')
    return false
  }
  
  // Check for user consent (you can expand this with a consent management system)
  // For now, we'll check if the user has explicitly opted out
  const hasOptedOut = localStorage.getItem('analytics-opted-out') === 'true'
  if (hasOptedOut) {
    console.log('[Analytics] Skipping - User has opted out')
    return false
  }
  
  return true
}

/**
 * GOOGLE ANALYTICS 4 INTEGRATION
 */

// Initialize Google Analytics
export const initGA = () => {
  if (!isAnalyticsEnabled()) return
  
  const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID
  
  if (!gaTrackingId) {
    console.warn('[Analytics] Google Analytics tracking ID not set')
    return
  }
  
  // gtag.js should be loaded via script tag in index.html
  if (typeof window.gtag === 'function') {
    window.gtag('config', gaTrackingId, {
      send_page_view: false // We'll send page views manually for better control
    })
    console.log('[Analytics] Google Analytics initialized')
  }
}

// Track page view
export const trackPageView = (path, title) => {
  if (!isAnalyticsEnabled()) return
  
  const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID
  
  if (typeof window.gtag === 'function' && gaTrackingId) {
    window.gtag('config', gaTrackingId, {
      page_path: path,
      page_title: title
    })
    console.log('[Analytics] Page view tracked:', path)
  }
}

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (!isAnalyticsEnabled()) return
  
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams)
    console.log('[Analytics] Event tracked:', eventName, eventParams)
  }
}

// Track property view event
export const trackPropertyView = (propertyId, propertyName, propertyPrice) => {
  trackEvent('view_item', {
    item_id: propertyId,
    item_name: propertyName,
    price: propertyPrice,
    currency: 'USD'
  })
}

// Track booking inquiry submission
export const trackBookingInquiry = (propertyId, propertyName, checkIn, checkOut, guests) => {
  trackEvent('begin_checkout', {
    item_id: propertyId,
    item_name: propertyName,
    check_in: checkIn,
    check_out: checkOut,
    guests: guests,
    currency: 'USD'
  })
}

// Track CTA button clicks
export const trackCTAClick = (ctaName, ctaLocation) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation
  })
}

// Track contact method clicks (email, phone)
export const trackContactClick = (contactMethod) => {
  trackEvent('contact', {
    method: contactMethod
  })
}

// Track outbound link clicks
export const trackOutboundLink = (url, linkText) => {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: url,
    link_text: linkText
  })
}

/**
 * FACEBOOK PIXEL INTEGRATION
 */

// Initialize Facebook Pixel
export const initFBPixel = () => {
  if (!isAnalyticsEnabled()) return
  
  const fbPixelId = import.meta.env.VITE_FB_PIXEL_ID
  
  if (!fbPixelId) {
    console.warn('[Analytics] Facebook Pixel ID not set')
    return
  }
  
  // fbq should be loaded via script tag in index.html
  if (typeof window.fbq === 'function') {
    window.fbq('init', fbPixelId)
    console.log('[Analytics] Facebook Pixel initialized')
  }
}

// Track Facebook Pixel page view
export const trackFBPageView = () => {
  if (!isAnalyticsEnabled()) return
  
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView')
    console.log('[Analytics] Facebook page view tracked')
  }
}

// Track Facebook Pixel custom event
export const trackFBEvent = (eventName, eventParams = {}) => {
  if (!isAnalyticsEnabled()) return
  
  if (typeof window.fbq === 'function') {
    window.fbq('track', eventName, eventParams)
    console.log('[Analytics] Facebook event tracked:', eventName, eventParams)
  }
}

// Track property view on Facebook
export const trackFBPropertyView = (propertyId, propertyName, propertyPrice) => {
  trackFBEvent('ViewContent', {
    content_ids: [propertyId],
    content_name: propertyName,
    content_type: 'product',
    value: propertyPrice,
    currency: 'USD'
  })
}

// Track booking inquiry on Facebook
export const trackFBBookingInquiry = (propertyId, propertyName, value) => {
  trackFBEvent('InitiateCheckout', {
    content_ids: [propertyId],
    content_name: propertyName,
    content_type: 'product',
    value: value,
    currency: 'USD'
  })
}

// Track contact on Facebook
export const trackFBContact = () => {
  trackFBEvent('Contact')
}

// Track lead (when someone submits contact info)
export const trackFBLead = (propertyId, propertyName) => {
  trackFBEvent('Lead', {
    content_ids: [propertyId],
    content_name: propertyName
  })
}

/**
 * COMBINED TRACKING FUNCTIONS
 * These functions track on both platforms simultaneously
 */

// Track page view on both platforms
export const trackPageViewAll = (path, title) => {
  trackPageView(path, title)
  trackFBPageView()
}

// Track property view on both platforms
export const trackPropertyViewAll = (propertyId, propertyName, propertyPrice) => {
  trackPropertyView(propertyId, propertyName, propertyPrice)
  trackFBPropertyView(propertyId, propertyName, propertyPrice)
}

// Track booking inquiry on both platforms
export const trackBookingInquiryAll = (propertyId, propertyName, checkIn, checkOut, guests, totalValue) => {
  trackBookingInquiry(propertyId, propertyName, checkIn, checkOut, guests)
  trackFBBookingInquiry(propertyId, propertyName, totalValue)
  trackFBLead(propertyId, propertyName)
}

// Track contact on both platforms
export const trackContactAll = (contactMethod) => {
  trackContactClick(contactMethod)
  trackFBContact()
}

/**
 * PRIVACY CONTROLS
 */

// Allow users to opt out of tracking
export const optOutOfAnalytics = () => {
  localStorage.setItem('analytics-opted-out', 'true')
  console.log('[Analytics] User opted out of tracking')
}

// Allow users to opt back in
export const optInToAnalytics = () => {
  localStorage.removeItem('analytics-opted-out')
  console.log('[Analytics] User opted in to tracking')
}

// Check if user has opted out
export const hasOptedOut = () => {
  return localStorage.getItem('analytics-opted-out') === 'true'
}

/**
 * INITIALIZATION
 * Call this when your app starts
 */
export const initAnalytics = () => {
  initGA()
  initFBPixel()
}

export default {
  // Initialization
  initAnalytics,
  initGA,
  initFBPixel,
  
  // Google Analytics
  trackPageView,
  trackEvent,
  trackPropertyView,
  trackBookingInquiry,
  trackCTAClick,
  trackContactClick,
  trackOutboundLink,
  
  // Facebook Pixel
  trackFBPageView,
  trackFBEvent,
  trackFBPropertyView,
  trackFBBookingInquiry,
  trackFBContact,
  trackFBLead,
  
  // Combined tracking
  trackPageViewAll,
  trackPropertyViewAll,
  trackBookingInquiryAll,
  trackContactAll,
  
  // Privacy
  optOutOfAnalytics,
  optInToAnalytics,
  hasOptedOut
}
