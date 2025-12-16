import express from 'express'
import cors from 'cors'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 3001

// Enable CORS for frontend
app.use(cors())
app.use(express.json())

// Hostaway configuration
const HOSTAWAY_API_BASE = 'https://api.hostaway.com/v1'
const CLIENT_ID = process.env.VITE_HOSTAWAY_CLIENT_ID
const CLIENT_SECRET = process.env.VITE_HOSTAWAY_CLIENT_SECRET

let accessToken = null
let tokenExpiry = null

/**
 * Get OAuth access token from Hostaway
 */
async function getAccessToken() {
  // Return cached token if still valid
  if (accessToken && tokenExpiry && Date.now() < tokenExpiry) {
    return accessToken
  }

  try {
    const response = await axios.post(
      `${HOSTAWAY_API_BASE}/accessTokens`,
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        scope: 'general'
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cache-control': 'no-cache'
        }
      }
    )

    accessToken = response.data.access_token
    // Set expiry to 1 hour from now
    tokenExpiry = Date.now() + (3600 * 1000)
    
    console.log('✓ Hostaway authentication successful')
    return accessToken
  } catch (error) {
    console.error('Error getting Hostaway access token:', error.response?.data || error.message)
    throw new Error('Failed to authenticate with Hostaway')
  }
}

/**
 * API endpoint to get calendar availability
 */
app.get('/api/calendar/:listingId', async (req, res) => {
  try {
    const { listingId } = req.params
    const { startDate, endDate } = req.query

    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'startDate and endDate are required' })
    }

    console.log(`Fetching calendar for listing ${listingId} from ${startDate} to ${endDate}`)

    const token = await getAccessToken()
    
    const response = await axios.get(
      `${HOSTAWAY_API_BASE}/listings/${listingId}/calendar`,
      {
        params: { startDate, endDate },
        headers: {
          'Authorization': `Bearer ${token}`,
          'Cache-control': 'no-cache'
        }
      }
    )

    const calendar = response.data.result || []
    
    // Process calendar data
    const availableDates = []
    const blockedDates = []
    
    calendar.forEach(day => {
      if (day.isAvailable === 1 && day.status === 'available') {
        availableDates.push(day.date)
      } else {
        blockedDates.push(day.date)
      }
    })

    console.log(`✓ Calendar fetched - Available: ${availableDates.length}, Blocked: ${blockedDates.length}`)

    res.json({
      availableDates,
      blockedDates,
      startDate,
      endDate
    })

  } catch (error) {
    console.error('Error fetching calendar:', error.response?.data || error.message)
    res.status(500).json({ 
      error: 'Failed to fetch calendar',
      message: error.message 
    })
  }
})

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'Hostaway API proxy is running'
  })
})

app.listen(PORT, () => {
  console.log(`\n🚀 Hostaway API proxy server running on http://localhost:${PORT}`)
  console.log(`📅 Calendar endpoint: http://localhost:${PORT}/api/calendar/:listingId`)
  console.log(`\nMake sure your frontend is configured to use this backend.\n`)
})
