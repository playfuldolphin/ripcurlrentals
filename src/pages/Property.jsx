import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { properties } from '../data/properties'
import './Property.css'

function Property() {
  const { id } = useParams()
  const property = properties.find(p => p.id === id)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: ''
  })

  if (!property) {
    return (
      <div className="container">
        <h2>Property not found</h2>
        <Link to="/">Back to Properties</Link>
      </div>
    )
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send to a backend
    const mailtoLink = `mailto:bookings@ripcurlrentals.com?subject=Booking Inquiry - ${property.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACheck-in: ${formData.checkIn}%0D%0ACheck-out: ${formData.checkOut}%0D%0AGuests: ${formData.guests}%0D%0AMessage: ${formData.message}`
    window.location.href = mailtoLink
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="property-page">
      <div className="container">
        <Link to="/" className="back-link">&larr; Back to Properties</Link>
        
        <h1>{property.name}</h1>
        <p className="location">{property.location}</p>

        {/* Image Gallery */}
        <div className="image-gallery">
          <button className="gallery-nav prev" onClick={prevImage}>&lt;</button>
          <img src={property.images[currentImageIndex]} alt={property.name} />
          <button className="gallery-nav next" onClick={nextImage}>&gt;</button>
          <div className="image-dots">
            {property.images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="property-layout">
          {/* Property Details */}
          <div className="property-main">
            <div className="property-stats">
              <div className="stat">
                <strong>{property.bedrooms}</strong> Bedrooms
              </div>
              <div className="stat">
                <strong>{property.bathrooms}</strong> Bathrooms
              </div>
              <div className="stat">
                <strong>{property.maxGuests}</strong> Guests
              </div>
            </div>

            <div className="property-description">
              <h2>About This Property</h2>
              <p>{property.description}</p>
            </div>

            <div className="amenities">
              <h2>Amenities</h2>
              <ul className="amenities-list">
                {property.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>

            <div className="availability-section">
              <h2>Check Availability</h2>
              <p className="availability-note">
                To check availability for your dates, please submit a booking inquiry below or contact us directly.
                We'll respond within 2 hours with availability confirmation and pricing.
              </p>
              <div className="availability-cta">
                <a href="#booking-form" className="check-availability-btn">
                  Check Your Dates
                </a>
                <a href="mailto:bookings@ripcurlrentals.com" className="email-direct-btn">
                  Email Directly
                </a>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="booking-sidebar">
            <div className="booking-card">
              <div className="price-display">
                <span className="price">${property.basePrice}</span>
                <span className="period">/night</span>
              </div>
              
              <form onSubmit={handleSubmit} className="booking-form" id="booking-form">
                <h3>Request to Book</h3>
                <p className="form-subtitle">We typically respond within 2 hours</p>
                
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Check-in *</label>
                    <input
                      type="date"
                      name="checkIn"
                      required
                      value={formData.checkIn}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Check-out *</label>
                    <input
                      type="date"
                      name="checkOut"
                      required
                      value={formData.checkOut}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Number of Guests *</label>
                  <input
                    type="number"
                    name="guests"
                    min="1"
                    max={property.maxGuests}
                    required
                    value={formData.guests}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any special requests or questions?"
                  />
                </div>

                <button type="submit" className="submit-button">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property
