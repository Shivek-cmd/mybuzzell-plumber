import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import LogoMarquee from '@/components/sections/LogoMarquee'
import TextIsland from '@/components/sections/TextIsland'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import ContrastFeatures from '@/components/sections/ContrastFeatures'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import { organizationSchema, websiteSchema, localBusinessSchema, faqSchema } from '@/lib/structured-data'
import { siteConfig } from '@/constants'

export default function Home() {
  
  // Local SEO schema injected automatically for the homepage
  const localBiz = localBusinessSchema({
    name: siteConfig.name,
    url: siteConfig.url,
    phone: '478-743-9321',
    address: '1809 Hardeman Ave',
    city: 'Macon',
    country: 'US',
    lat: 32.84092557458156,
    lng: -83.64966141315897,
    priceRange: '$$'
  })

  const org = organizationSchema(siteConfig.name, siteConfig.url)
  const site = websiteSchema(siteConfig.name, siteConfig.url)
  const faqs = faqSchema([
    { q: "Are you licensed and insured?", a: "Yes. Buzzell Plumbing, Heating & Air is fully licensed and insured for all HVAC and plumbing services in Georgia." },
    { q: "Do you offer 24/7 emergency service?", a: "Yes — for both heating/cooling and plumbing emergencies. Give us a call... Warner Robins: 478-241-5889, Macon: 478-974-5255." },
    { q: "Do you work on both residential and commercial properties?", a: "Absolutely. We provide full HVAC and plumbing solutions for homeowners, property managers, and businesses." },
    { q: "What areas do you serve?", a: "We serve Macon, Warner Robins, Byron, Bonaire, Centerville, Fort Valley, Grovania, Hayneville, Perry, Lizella, Gray, and Forsyth." },
    { q: "What forms of payment do you accept?", a: "We accept cash, checks, and major credit cards, and we have financing options for larger projects." }
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBiz) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }} />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <TextIsland
        overline="OUR MASTER COMMITMENT"
        text="We balance price, efficiency, and lifespan to bring you the best value in a timely manner. No shortcuts. Just quality work since 1974." />
      <Stats />
      <Services />
      <ContrastFeatures />
      <Testimonials />
      <FAQ 
        items={[
          {
            question: "Are you licensed and insured?",
            answer: "Yes. Buzzell Plumbing, Heating & Air is fully licensed and insured for all HVAC and plumbing services in Georgia. We maintain rigorous standards for safety and regional compliance."
          },
          {
            question: "Do you offer 24/7 emergency service?",
            answer: "Yes. We provide 24/7 emergency support for both heating/cooling and plumbing emergencies. Give us a call to see how we can help. \n\nCall our Warner Robins office at 478-241-5889 or our Macon office at 478-974-5255."
          },
          {
            question: "Do you work on both residential and commercial properties?",
            answer: "Absolutely. We provide full HVAC and plumbing solutions for homeowners, property managers, and businesses across Middle Georgia."
          },
          {
            question: "What areas do you serve?",
            answer: "We serve Macon, Warner Robins, Byron, Bonaire, Centerville, Fort Valley, Grovania, Hayneville, Perry, Lizella, Gray, and Forsyth. If your location isn't listed, give us a call—chances are we're already working nearby."
          },
          {
            question: "What forms of payment do you accept?",
            answer: "We accept cash, checks, and major credit cards. Additionally, we offer flexible financing options for larger mechanical projects to help manage your home investments."
          }
        ]}
      />
      <Footer />
    </>
  )
}
