import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqData = [
    {
      question: "How do I book a property?",
      answer: "Booking is simple! Browse our properties, select your desired rental, and click 'Request to Book'. Fill out the inquiry form with your dates and details, and we'll respond within 2 hours with availability confirmation and payment instructions. You can also call or email us directly for immediate assistance."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer a flexible cancellation policy. Cancellations made 30+ days before check-in receive a full refund. Cancellations 14-29 days before check-in receive a 50% refund. Cancellations within 14 days of check-in are non-refundable, but you may receive a credit for future stays. We recommend travel insurance for added protection."
    },
    {
      question: "Is parking available?",
      answer: "Yes! All our properties include free parking. Most rentals have dedicated driveways with space for 2-4 vehicles. Some properties also offer covered parking or garages. Specific parking details are listed on each property page."
    },
    {
      question: "Are pets allowed?",
      answer: "Pet policies vary by property. Some of our rentals are pet-friendly with an additional fee ($150-$200 per stay). Please check the specific property listing for pet policies, or contact us to inquire about bringing your furry friend. Service animals are always welcome at no extra charge."
    },
    {
      question: "What's included in the rental?",
      answer: "All rentals include fully equipped kitchens (cookware, dishes, utensils), linens, towels, WiFi, cable/streaming services, washer/dryer, and basic toiletries. Beach chairs, umbrellas, and coolers are also provided. We supply a starter set of paper products, dish soap, and laundry detergent."
    },
    {
      question: "How far is the beach?",
      answer: "All our properties are within walking distance or a short drive to the beach. Jacksonville Beach properties are 2-5 blocks from the ocean (5-10 minute walk). St. Augustine properties are 1-3 miles from the beach (5 minute drive). Exact distances are listed on each property page."
    },
    {
      question: "Is there WiFi?",
      answer: "Yes! All properties include high-speed WiFi at no extra charge. Most locations have 100+ Mbps connections, perfect for streaming, remote work, and staying connected. WiFi network details will be provided in your welcome information."
    },
    {
      question: "What are the check-in and check-out times?",
      answer: "Standard check-in is 4:00 PM and check-out is 10:00 AM. This allows us time to professionally clean and prepare the property. Early check-in or late check-out may be available upon request (subject to availability and potential fees). Please contact us in advance to arrange."
    },
    {
      question: "Do you provide beach gear?",
      answer: "Absolutely! Every rental includes complimentary beach chairs, umbrellas, a cooler, and beach towels. Some properties also have boogie boards, beach toys, and sand buckets. We want you to travel light and enjoy the beach stress-free!"
    },
    {
      question: "Are linens and towels provided?",
      answer: "Yes! All bed linens, bath towels, beach towels, and hand towels are provided. Beds will be freshly made for your arrival. We use high-quality linens and provide extra blankets and pillows in each property. You don't need to bring anything except your personal items."
    },
    {
      question: "Is there a minimum stay requirement?",
      answer: "Minimum stay varies by season and property. Most properties require a 3-night minimum during regular season and 5-7 nights during peak summer season and holidays. Weekly and monthly stays receive discounted rates. Contact us for specific minimum stay requirements for your desired dates."
    },
    {
      question: "How do I pay?",
      answer: "Once your booking is confirmed, we'll send a secure payment link. We accept all major credit cards, debit cards, and bank transfers (ACH). A 50% deposit is required to secure your reservation, with the remaining balance due 30 days before check-in. Full payment is required for bookings made within 30 days of arrival."
    },
    {
      question: "What if something breaks or needs repair during my stay?",
      answer: "We have 24/7 emergency support. Contact us immediately at (904) 555-0123 if something breaks or needs attention. We'll arrange repairs promptly, usually same-day for urgent issues. Minor items can be reported via text or email, and we'll address them as quickly as possible."
    },
    {
      question: "Can I check in early or check out late?",
      answer: "We'll do our best to accommodate early check-in or late check-out when possible. Contact us at least 48 hours before your arrival to request. Subject to availability, early check-in (12:00 PM) or late check-out (2:00 PM) may incur a $75 fee. Same-day requests are based on cleaning schedule availability."
    },
    {
      question: "Do you offer discounts for longer stays?",
      answer: "Yes! We offer attractive discounts for extended stays. Weekly stays (7+ nights) receive 10% off, monthly stays (28+ nights) receive 20-25% off, and special seasonal promotions are available. Book direct with us for the best rates—no platform fees means more savings for you!"
    }
  ]

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <div className="faq-page">
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="faq-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about booking with Rip Curl Rentals</p>
        </div>
      </div>

      <div className="faq-content">
        <div className="container">
          <div className="faq-intro">
            <p>
              Can't find what you're looking for? <a href="mailto:bookings@ripcurlrentals.com">Contact us</a> or 
              call <a href="tel:+19045550123">(904) 555-0123</a> and we'll be happy to help!
            </p>
          </div>

          <div className="faq-accordion">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className="faq-icon" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <h2>Still have questions?</h2>
            <p>We're here to help make your vacation perfect</p>
            <div className="faq-cta-buttons">
              <a href="mailto:bookings@ripcurlrentals.com" className="cta-button primary">
                Email Us
              </a>
              <a href="tel:+19045550123" className="cta-button secondary">
                Call (904) 555-0123
              </a>
              <Link to="/" className="cta-button tertiary">
                View Properties
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
