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

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Ready to Book?</h2>
          <p>Contact us to check availability and make your reservation</p>
          <div className="contact-info">
            <div className="contact-method">
              <h3>Email</h3>
              <a href="mailto:bookings@riptiderentals.com">bookings@riptiderentals.com</a>
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
