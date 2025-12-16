import { Link } from 'react-router-dom'
import './Policies.css'

function Policies() {
  return (
    <div className="policies-page">
      <div className="container">
        <Link to="/" className="back-link">&larr; Back to Home</Link>
        
        <h1>Booking Policies</h1>
        <p className="policies-intro">
          Please review our policies carefully before making a reservation. 
          By booking with Rip Curl Rentals, you agree to these terms and conditions.
        </p>

        <div className="policies-grid">
          {/* Cancellation Policy */}
          <section className="policy-section">
            <div className="policy-icon">🔄</div>
            <h2>Cancellation Policy</h2>
            <div className="policy-content">
              <p>We understand that plans change. Our flexible cancellation policy is designed to be fair to both guests and property owners:</p>
              
              <div className="policy-tier">
                <h3>14+ Days Before Check-in</h3>
                <p><strong>Full Refund (100%)</strong></p>
                <p>Cancel at least 14 days before your check-in date and receive a complete refund of all payments made.</p>
              </div>

              <div className="policy-tier">
                <h3>7-14 Days Before Check-in</h3>
                <p><strong>Partial Refund (50%)</strong></p>
                <p>Cancellations made between 7 and 14 days before check-in will receive a 50% refund of the total booking amount.</p>
              </div>

              <div className="policy-tier">
                <h3>Less Than 7 Days Before Check-in</h3>
                <p><strong>No Refund</strong></p>
                <p>Unfortunately, cancellations made less than 7 days before check-in are non-refundable.</p>
              </div>

              <div className="policy-note">
                <p><strong>Note:</strong> All refunds are processed within 5-7 business days of cancellation approval.</p>
              </div>
            </div>
          </section>

          {/* Booking & Payment */}
          <section className="policy-section">
            <div className="policy-icon">💳</div>
            <h2>Booking & Payment</h2>
            <div className="policy-content">
              <div className="policy-item">
                <h3>Deposit Required</h3>
                <p>A <strong>25% deposit</strong> is required at the time of booking to secure your reservation.</p>
              </div>

              <div className="policy-item">
                <h3>Balance Due</h3>
                <p>The remaining balance is due <strong>30 days before your check-in date</strong>. You will receive a payment reminder via email.</p>
              </div>

              <div className="policy-item">
                <h3>Payment Methods</h3>
                <p>We accept major credit cards, debit cards, and electronic bank transfers. All transactions are processed securely.</p>
              </div>

              <div className="policy-item">
                <h3>Booking Confirmation</h3>
                <p>You will receive a booking confirmation email within 2 hours of submitting your inquiry. Please review all details carefully.</p>
              </div>
            </div>
          </section>

          {/* Check-in/Check-out */}
          <section className="policy-section">
            <div className="policy-icon">🔑</div>
            <h2>Check-in & Check-out</h2>
            <div className="policy-content">
              <div className="time-details">
                <div className="time-block">
                  <h3>Check-in Time</h3>
                  <p className="time-large">4:00 PM</p>
                  <p>Early check-in may be available upon request and is subject to availability. Please contact us in advance.</p>
                </div>

                <div className="time-block">
                  <h3>Check-out Time</h3>
                  <p className="time-large">10:00 AM</p>
                  <p>Late check-out may be available for an additional fee. Please contact us at least 24 hours in advance.</p>
                </div>
              </div>

              <div className="policy-item">
                <h3>Key Collection</h3>
                <p>Detailed check-in instructions and access codes will be sent to you 48 hours before your arrival. Properties feature keyless entry for your convenience.</p>
              </div>
            </div>
          </section>

          {/* House Rules */}
          <section className="policy-section">
            <div className="policy-icon">📋</div>
            <h2>House Rules</h2>
            <div className="policy-content">
              <div className="rules-list">
                <div className="rule-item">
                  <span className="rule-icon">🚭</span>
                  <div>
                    <h3>No Smoking</h3>
                    <p>Smoking is strictly prohibited inside all properties. A $500 cleaning fee will be charged for violations.</p>
                  </div>
                </div>

                <div className="rule-item">
                  <span className="rule-icon">🐾</span>
                  <div>
                    <h3>Pets Negotiable</h3>
                    <p>Pets may be allowed with prior approval and a non-refundable pet fee of $150. Maximum 2 pets. Please inquire before booking.</p>
                  </div>
                </div>

                <div className="rule-item">
                  <span className="rule-icon">🤫</span>
                  <div>
                    <h3>Quiet Hours</h3>
                    <p>Please respect our neighbors. Quiet hours are from 10:00 PM to 8:00 AM. No parties or events without prior approval.</p>
                  </div>
                </div>

                <div className="rule-item">
                  <span className="rule-icon">👥</span>
                  <div>
                    <h3>Maximum Occupancy</h3>
                    <p>Please adhere to the maximum guest count specified for your property. Unauthorized additional guests may result in booking termination.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Damage Protection */}
          <section className="policy-section">
            <div className="policy-icon">🛡️</div>
            <h2>Damage Protection</h2>
            <div className="policy-content">
              <div className="policy-item">
                <h3>Security Deposit</h3>
                <p>A <strong>$500 refundable security deposit</strong> is required for all bookings. This will be processed as a hold on your credit card.</p>
              </div>

              <div className="policy-item">
                <h3>Refund Timeline</h3>
                <p>Your security deposit will be refunded within 7 days after check-out, provided there is no damage to the property.</p>
              </div>

              <div className="policy-item">
                <h3>Damage Assessment</h3>
                <p>Properties are inspected after each stay. Any damage beyond normal wear and tear will be deducted from the security deposit.</p>
              </div>

              <div className="policy-item">
                <h3>Guest Responsibility</h3>
                <p>Guests are responsible for any damage or excessive cleaning required during their stay. Please report any issues immediately.</p>
              </div>
            </div>
          </section>

          {/* Minimum Stay */}
          <section className="policy-section">
            <div className="policy-icon">📅</div>
            <h2>Minimum Stay Requirements</h2>
            <div className="policy-content">
              <div className="stay-requirements">
                <div className="stay-block">
                  <h3>Regular Season</h3>
                  <p className="stay-large">3 Nights</p>
                  <p>Minimum stay requirement for most dates throughout the year.</p>
                </div>

                <div className="stay-block highlight">
                  <h3>Holiday Periods</h3>
                  <p className="stay-large">7 Nights</p>
                  <p>Extended minimum stay during peak holidays and summer season (Memorial Day through Labor Day).</p>
                </div>
              </div>

              <div className="policy-item">
                <h3>Holiday Periods Include:</h3>
                <ul>
                  <li>Memorial Day Weekend</li>
                  <li>July 4th Week</li>
                  <li>Labor Day Weekend</li>
                  <li>Thanksgiving Week</li>
                  <li>Christmas and New Year's (Dec 20 - Jan 5)</li>
                  <li>Spring Break (dates vary)</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <section className="policies-contact">
          <h2>Questions About Our Policies?</h2>
          <p>If you have any questions or need clarification about our policies, please don't hesitate to contact us.</p>
          <div className="contact-buttons">
            <a href="mailto:bookings@ripcurlrentals.com" className="contact-btn primary">
              Email Us
            </a>
            <a href="tel:+19045550123" className="contact-btn secondary">
              Call (904) 555-0123
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Policies
