import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TextIsland from '@/components/sections/TextIsland'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import AboutCarousel from '@/components/sections/AboutCarousel'
import { CheckCircle2 } from 'lucide-react'
import { Metadata } from 'next'
import { siteConfig } from '@/constants'
import { breadcrumbSchema, organizationSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Experience 50+ years of HVAC and plumbing excellence in Middle Georgia. Family-owned and locally operated since 1974. Meet the Buzzell team.',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: 'About Us | Buzzell Plumbing-Heating-Air',
    description: 'Middle Georgia’s trusted mechanical team since 1974.',
    url: `${siteConfig.url}/about`,
    images: [{ url: '/og/og-about.jpg', width: 1200, height: 630, alt: 'About Buzzell' }]
  }
}

export default function AboutPage() {
  const images = [
    '/images/about-1.jpg',
    '/images/about-2.jpg',
    '/images/about-3.jpeg'
  ]

  const values = [
    { title: 'Honest Execution', desc: 'No upselling. We provide the most cost-effective fix that ensures your system’s long-term health.' },
    { title: 'Hometown Speed', desc: 'Living where we work means we reach your Macon or Warner Robins doorstep faster when emergencies strike.' },
    { title: 'Technical Mastery', desc: 'As a Carrier Authorized dealer, our team undergoes continuous factory training to master modern HVAC codes.' }
  ]

  const breadcrumbJson = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'About Us', url: `${siteConfig.url}/about` }
  ])

  const orgJson = organizationSchema(siteConfig.name, siteConfig.url)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }} />
      
      <Navbar />
      <main id="main">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-bg overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-bg-secondary),transparent_50%)]" />
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <div className="max-w-4xl">
                <span className="text-primary font-mono text-[11px] font-bold uppercase tracking-[0.25em] mb-6 block opacity-60">Serving Since 1974</span>
                <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-text mb-8">
                  Middle Georgia’s Licensed <br className="hidden md:block" /> HVAC & Plumbing Team — <br className="hidden md:block" /> Expert Care Since 1974.
                </h1>
                <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed font-medium mb-10">
                  When you call Buzzell, you’re not just getting a service — you’re getting a trusted neighbor who’s been keeping Middle Georgia families comfortable for over 50 years.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="xl" href="/contact">Schedule Service Now</Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <TextIsland
          overline="MISSION STATEMENT"
          text="We keep Middle Georgia families comfortable with expert HVAC and Plumbing care you can trust since 1974."
        />

        {/* Narrative Section with Carousel */}
        <section className="py-24 bg-bg lg:py-40">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <AnimatedSection>
                  <h2 className="font-display text-4xl md:text-5xl font-black text-text mb-8 tracking-tight">Our Story.</h2>
                  <div className="space-y-6 text-muted font-medium leading-relaxed">
                    <p>
                      It all started in 1974 with a simple goal — help local families and businesses keep their homes and buildings running smoothly.
                    </p>
                    <p>
                      Over the decades, we’ve grown into one of Middle Georgia’s most trusted HVAC and plumbing companies, serving both residential and commercial customers in Macon, Warner Robins, and surrounding areas.
                    </p>
                    <p>
                      Even as we’ve grown, we’ve stayed true to our roots: family-owned, locally operated, and deeply connected to the community we serve. We treat every customer like family.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
              
              <div>
                <AnimatedSection delay={0.2}>
                  <AboutCarousel images={images} />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-bg lg:py-40 border-t border-border">
           <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="font-display text-4xl md:text-5xl font-black text-text mb-6">Our Core Values.</h2>
                 <p className="text-muted text-lg font-medium">Clear standards that guide every Buzzell technician.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {values.map((v) => (
                    <AnimatedSection key={v.title}>
                       <div className="h-full bg-bg-secondary border border-border p-10 rounded-3xl">
                          <CheckCircle2 className="w-8 h-8 text-primary mb-6" />
                          <h3 className="text-xl font-black text-text mb-4 tracking-tight">{v.title}</h3>
                          <p className="text-muted text-sm leading-relaxed font-medium">{v.desc}</p>
                       </div>
                    </AnimatedSection>
                 ))}
              </div>
           </div>
        </section>

        {/* Core Values / Local SEO */}
        <section className="py-24 bg-text text-bg lg:py-40 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl font-black mb-10 leading-[1.1]">Family-Owned. Locally Operated.</h2>
              <p className="text-bg/70 text-lg leading-relaxed mb-12 font-medium">
                We believe in honest, hometown service. From early Macon mornings to late Warner Robins nights, Buzzell is on standby for your peace of mind.
              </p>
              <Button variant="outline" size="xl" className="border-bg/20 text-bg" href="/contact">Book Your Appointment</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
