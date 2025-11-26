import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ripcurl Rentals</h3>
            <p>Private vacation rentals in Jacksonville Beach and St. Augustine</p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: bookings@ripcurlrentals.com</p>
            <p>Phone: (904) 555-0123</p>
          </div>
          <div className="footer-section">
            <h4>Locations</h4>
            <p>South Jacksonville Beach, FL</p>
            <p>St. Augustine, FL</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Ripcurl Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
