import { Helmet } from 'react-helmet-async'

function SEO({ 
  title = "Rip Curl Rentals | Jacksonville Beach & St. Augustine Vacation Homes - Book Direct & Save",
  description = "Book beautiful vacation rentals in Jacksonville Beach & St. Augustine, FL. Family-owned properties with private pools, steps from the beach. Book direct to save 15-20% on fees.",
  image = "https://ripcurlrentals.com/images/club-447/drone - 2.jpg",
  url = "https://ripcurlrentals.com/",
  type = "website"
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default SEO
