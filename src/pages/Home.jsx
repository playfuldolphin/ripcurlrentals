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
          <h2>Choose Your Perfect Escape</h2>
          <p>Three stunning properties across Jacksonville Beach and St. Augustine</p>
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
          <div className="book-direct-header">
            <h2>Book Direct & Save</h2>
            <p className="subtitle">Skip the fees, get better rates, and enjoy personal service</p>
          </div>

          {/* Comparison Box */}
          <div className="comparison-box">
            <div className="comparison-side other-platforms">
              <div className="comparison-label">Other Booking Sites</div>
              <div className="comparison-price">
                <span className="price-amount">$300</span>
                <span className="price-label">per night</span>
              </div>
              <ul className="comparison-features">
                <li className="negative">+ 15-20% service fees</li>
                <li className="negative">+ Platform charges</li>
                <li className="negative">Slow response times</li>
                <li className="negative">Generic support</li>
              </ul>
            </div>

            <div className="comparison-divider">
              <span>VS</span>
            </div>

            <div className="comparison-side direct-booking highlight">
              <div className="comparison-label best-value">Best Value ⭐</div>
              <div className="comparison-price">
                <span className="price-amount">$250</span>
                <span className="price-label">per night</span>
              </div>
              <ul className="comparison-features">
                <li className="positive">✓ No booking fees</li>
                <li className="positive">✓ No service charges</li>
                <li className="positive">✓ 2-hour response time</li>
                <li className="positive">✓ Personal owner service</li>
              </ul>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="benefits-grid">
            <div className="benefit-card">
              <svg className="benefit-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3>Save $500+ Per Week</h3>
              <p>No platform fees mean more money for beach activities and dining</p>
            </div>

            <div className="benefit-card">
              <svg className="benefit-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3>Lightning Fast Replies</h3>
              <p>Text or email the owners directly - average 2 hour response time</p>
            </div>

            <div className="benefit-card">
              <svg className="benefit-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3>Family-Owned Service</h3>
              <p>We personally manage our properties and care about your experience</p>
            </div>

            <div className="benefit-card">
              <svg className="benefit-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3>Secure & Simple</h3>
              <p>Easy booking process with secure payment - no middleman complications</p>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="trust-signals">
            <div className="trust-item">
              <span className="trust-icon">🏠</span>
              <span className="trust-text">Family Owned</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">⭐</span>
              <span className="trust-text">5-Star Reviews</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span className="trust-text">Verified Properties</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🔒</span>
              <span className="trust-text">Secure Payments</span>
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
