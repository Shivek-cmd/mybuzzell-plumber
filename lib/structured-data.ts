// lib/structured-data.ts — Complete Schema Library for Buzzell

// Organization schema — add to homepage and about page
export const organizationSchema = (name: string, url: string, logo?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name,
  url,
  logo: logo || `${url}/logo.png`,
  sameAs: [
    'https://www.facebook.com/BuzzellHVAC/',
    'https://www.youtube.com/channel/UCp6DzuvRgo_CfTKhBhV5vuw',
    'https://instagram.com/BuzzellHVAC'
  ],
})

// WebSite schema — homepage
export const websiteSchema = (name: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name,
  url,
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${url}/search?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
})

// FAQ schema — FAQ sections on any page
export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

// BreadcrumbList schema — all inner pages
export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
})

// Service schema — each service page
export const serviceSchema = (name: string, description: string, url: string, providerName: string, providerUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url,
  provider: { '@type': 'Organization', name: providerName, url: providerUrl },
})

// LocalBusiness schema — any physical/service business
export const localBusinessSchema = (data: {
  name: string
  url: string
  phone: string
  address: string
  city: string
  country: string
  lat: number
  lng: number
  priceRange?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: data.name,
  url: data.url,
  telephone: data.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: data.address,
    addressLocality: data.city,
    addressRegion: 'GA',
    addressCountry: data.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: data.lat, longitude: data.lng },
  openingHours: 'Mo-Fr 08:00-17:00',
  priceRange: data.priceRange || '$$',
})
