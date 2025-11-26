import { Link } from 'react-router-dom'
import { properties } from '../data/properties'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Private Northeast Florida Escape</h1>
          <p>Discover beautiful vacation rentals in Jacksonville Beach and St. Augustine</p>
          <a href="#properties" className="cta-button">View Properties</a>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="properties-section">
        <div className="container">
          <h2>Our Properties</h2>
          <div className="properties-grid">
            {properties.map(property => (
              <div key={property.id} className="property-card">
                <div className="property-image">
                  <img src={property.images[0]} alt={property.name} />
                </div>
                <div className="property-info">
                  <h3>{property.name}</h3>
                  <p className="location">{property.location}</p>
                  <p className="description">{property.shortDescription}</p>
                  <div className="property-details">
                    <span>{property.bedrooms} Bedrooms</span>
                    <span>{property.bathrooms} Bathrooms</span>
                    <span>Up to {property.maxGuests} Guests</span>
                  </div>
                  <div className="property-footer">
                    <div className="price">
                      From <strong>${property.basePrice}</strong>/night
                    </div>
                    <Link to={`/property/${property.id}`} className="view-button">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book Direct Section */}
      <section className="book-direct-section">
        <div className="container">
          <h2>Why Book Direct With Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Save 17-23%</h3>
              <p>No Airbnb or VRBO fees. You pay exactly what you see - no hidden charges.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Fast Response</h3>
              <p>Direct communication with owners. We typically respond within 2 hours.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Personal Service</h3>
              <p>Family-owned and operated. We care about making your stay perfect.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h3>Secure Booking</h3>
              <p>Your information is safe. No platform middlemen, just direct service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Guests Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Amazing beach house! The location was perfect - just a short walk to the beach. 
                The pool was a huge hit with our kids. Booking direct saved us money too!"
              </p>
              <p className="testimonial-author">- Sarah M., Family of 4</p>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "We loved St. Augustine! The condo was spacious and clean. The owners were 
                incredibly responsive and helpful with local recommendations."
              </p>
              <p className="testimonial-author">- Michael & Lisa T.</p>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Best vacation rental experience we've had. No booking fees, great communication, 
                and the properties are even better than the photos. We'll be back!"
              </p>
              <p className="testimonial-author">- Jennifer R., Group of 6</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Ready to Book?</h2>
          <p>Contact us to check availability and make your reservation</p>
          <div className="contact-info">
            <div className="contact-method">
              <h3>Email</h3>
              <a href="mailto:bookings@ripcurlrentals.com">bookings@ripcurlrentals.com</a>
            </div>
            <div className="contact-method">
              <h3>Phone</h3>
              <a href="tel:+19045550123">(904) 555-0123</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
