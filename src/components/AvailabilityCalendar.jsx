import { useState, useEffect } from 'react'
import { getMonthlyCalendar } from '../utils/hostaway'
import './AvailabilityCalendar.css'

function AvailabilityCalendar({ hostawayId }) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [calendarData, setCalendarData] = useState({
    availableDates: [],
    blockedDates: []
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch calendar data when month changes
  useEffect(() => {
    if (!hostawayId) {
      setLoading(false)
      return
    }

    const fetchCalendar = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const data = await getMonthlyCalendar(hostawayId, currentMonth)
        setCalendarData(data)
      } catch (err) {
        console.error('Error loading calendar:', err)
        setError('Unable to load availability calendar')
      } finally {
        setLoading(false)
      }
    }

    fetchCalendar()
  }, [hostawayId, currentMonth])

  // Navigate to previous month
  const previousMonth = () => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev)
      newMonth.setMonth(newMonth.getMonth() - 1)
      return newMonth
    })
  }

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev)
      newMonth.setMonth(newMonth.getMonth() + 1)
      return newMonth
    })
  }

  // Generate calendar grid
  const generateCalendarGrid = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    
    // First day of the month
    const firstDay = new Date(year, month, 1)
    const startingDayOfWeek = firstDay.getDay() // 0 = Sunday
    
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    
    const grid = []
    let day = 1
    
    // Create 6 weeks (rows) of 7 days (columns)
    for (let week = 0; week < 6; week++) {
      const weekDays = []
      
      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        if ((week === 0 && dayOfWeek < startingDayOfWeek) || day > daysInMonth) {
          // Empty cell
          weekDays.push(null)
        } else {
          weekDays.push(day)
          day++
        }
      }
      
      grid.push(weekDays)
      
      // Stop if we've filled all days
      if (day > daysInMonth) break
    }
    
    return grid
  }

  // Check if a date is blocked
  const isDateBlocked = (day) => {
    if (!day) return false
    
    const dateStr = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    ).toISOString().split('T')[0]
    
    return calendarData.blockedDates.includes(dateStr)
  }

  // Check if a date is in the past
  const isDatePast = (day) => {
    if (!day) return false
    
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    )
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    return date < today
  }

  // Format month/year for display
  const monthYearDisplay = currentMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })

  // Don't show calendar if no Hostaway ID
  if (!hostawayId) {
    return (
      <div className="availability-calendar">
        <p className="calendar-note">
          Calendar availability coming soon for this property.
        </p>
      </div>
    )
  }

  const calendarGrid = generateCalendarGrid()

  return (
    <div className="availability-calendar">
      <div className="calendar-header">
        <button 
          className="month-nav-btn" 
          onClick={previousMonth}
          aria-label="Previous month"
        >
          &lt;
        </button>
        <h3 className="current-month">{monthYearDisplay}</h3>
        <button 
          className="month-nav-btn" 
          onClick={nextMonth}
          aria-label="Next month"
        >
          &gt;
        </button>
      </div>

      {loading && (
        <div className="calendar-loading">
          <div className="spinner"></div>
          <p>Loading availability...</p>
        </div>
      )}

      {error && (
        <div className="calendar-error">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="calendar-grid">
            {/* Day headers */}
            <div className="calendar-row day-headers">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="day-header">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            {calendarGrid.map((week, weekIndex) => (
              <div key={weekIndex} className="calendar-row">
                {week.map((day, dayIndex) => {
                  const blocked = isDateBlocked(day)
                  const past = isDatePast(day)
                  
                  return (
                    <div
                      key={dayIndex}
                      className={`calendar-day ${!day ? 'empty' : ''} ${blocked || past ? 'blocked' : 'available'}`}
                    >
                      {day && (
                        <>
                          <span className="day-number">{day}</span>
                          {!past && (
                            <span className="day-status" aria-label={blocked ? 'Unavailable' : 'Available'}>
                              {blocked ? '✕' : '✓'}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>

          <div className="calendar-legend">
            <div className="legend-item">
              <span className="legend-icon available">✓</span>
              <span>Available</span>
            </div>
            <div className="legend-item">
              <span className="legend-icon blocked">✕</span>
              <span>Booked</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default AvailabilityCalendar
