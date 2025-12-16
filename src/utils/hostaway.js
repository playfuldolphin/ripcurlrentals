import axios from 'axios'

// Use local backend proxy to avoid CORS issues
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001'

/**
 * Fetch calendar availability for a property via backend proxy
 * @param {number} listingId - Hostaway listing/property ID
 * @param {string} startDate - Start date in YYYY-MM-DD format
 * @param {string} endDate - End date in YYYY-MM-DD format
 * @returns {Promise<Array>} Array of calendar events
 */
export async function getCalendarAvailability(listingId, startDate, endDate) {
  try {
    const response = await axios.get(
      `${API_BASE}/api/calendar/${listingId}`,
      {
        params: {
          startDate,
          endDate
        }
      }
    )

    // Backend returns processed data with availableDates and blockedDates
    // But we need to return raw calendar data for compatibility
    // So we'll reconstruct it
    const { availableDates, blockedDates } = response.data
    const calendar = []
    
    // Combine available and blocked dates into calendar format
    availableDates.forEach(date => {
      calendar.push({
        date,
        isAvailable: 1,
        status: 'available'
      })
    })
    
    blockedDates.forEach(date => {
      calendar.push({
        date,
        isAvailable: 0,
        status: 'reserved'
      })
    })
    
    // Sort by date
    calendar.sort((a, b) => new Date(a.date) - new Date(b.date))
    
    return calendar
  } catch (error) {
    console.error('Error fetching calendar availability:', error.response?.data || error.message)
    throw new Error('Failed to fetch availability from Hostaway')
  }
}

/**
 * Check if a date range is available
 * @param {number} listingId - Hostaway listing/property ID
 * @param {string} checkIn - Check-in date in YYYY-MM-DD format
 * @param {string} checkOut - Check-out date in YYYY-MM-DD format
 * @returns {Promise<Object>} { available: boolean, blockedDates: Array }
 */
export async function checkAvailability(listingId, checkIn, checkOut) {
  try {
    const calendar = await getCalendarAvailability(listingId, checkIn, checkOut)
    
    // Find dates that are not available (isAvailable === 0 or status !== 'available')
    const blockedDates = calendar
      .filter(day => day.isAvailable === 0 || day.status !== 'available')
      .map(day => day.date)
    
    const available = blockedDates.length === 0
    
    return {
      available,
      blockedDates,
      message: available 
        ? 'These dates are available!' 
        : 'Some dates in this range are not available.'
    }
  } catch (error) {
    console.error('Error checking availability:', error)
    return {
      available: null,
      blockedDates: [],
      message: 'Unable to check availability at this time.'
    }
  }
}

/**
 * Get monthly calendar data for display
 * @param {number} listingId - Hostaway listing/property ID
 * @param {Date} month - Month to fetch (defaults to current month)
 * @returns {Promise<Object>} Object with available and blocked dates
 */
export async function getMonthlyCalendar(listingId, month = new Date()) {
  const year = month.getFullYear()
  const monthNum = month.getMonth()
  
  // Get first and last day of the month
  const startDate = new Date(year, monthNum, 1)
  const endDate = new Date(year, monthNum + 1, 0)
  
  const startDateStr = startDate.toISOString().split('T')[0]
  const endDateStr = endDate.toISOString().split('T')[0]
  
  try {
    // Use backend proxy which returns processed data directly
    const response = await axios.get(
      `${API_BASE}/api/calendar/${listingId}`,
      {
        params: {
          startDate: startDateStr,
          endDate: endDateStr
        }
      }
    )
    
    const { availableDates, blockedDates } = response.data
    
    console.log(`[Hostaway] Fetched calendar for listing ${listingId}`)
    console.log(`[Hostaway] Available: ${availableDates.length}, Blocked: ${blockedDates.length}`)
    
    if (blockedDates.length > 0) {
      console.log(`[Hostaway] Blocked dates:`, blockedDates)
    }
    
    return {
      availableDates,
      blockedDates,
      startDate: startDateStr,
      endDate: endDateStr
    }
  } catch (error) {
    console.error('Error fetching monthly calendar:', error)
    return {
      availableDates: [],
      blockedDates: [],
      startDate: startDateStr,
      endDate: endDateStr
    }
  }
}
