import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TextIsland from '@/components/sections/TextIsland'
import AnimatedSection from '@/components/ui/AnimatedSection'
import FAQ from '@/components/sections/FAQ'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { Metadata } from 'next'
import { Wind, Thermometer, Droplets, CheckCircle2, ShieldCheck, Zap, Heart } from 'lucide-react'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data'
import { siteConfig } from '@/constants'

export const metadata: Metadata = {
  title: 'HVAC Services Middle Georgia — Expert Macon & Warner Robins Support',
  description: 'Middle Georgia’s trusted HVAC experts since 1974. Air conditioning, heating, and air quality solutions for Macon, Warner Robins, and beyond. Carrier Authorized Dealer.',
  alternates: { canonical: `${siteConfig.url}/hvac` },
  openGraph: {
    title: 'HVAC Services Middle Georgia | Buzzell Plumbing-Heating-Air',
    description: 'Expert heating and cooling solutions in Middle Georgia since 1974.',
    url: `${siteConfig.url}/hvac`,
    images: [{ url: '/og/og-hvac.jpg', width: 1200, height: 630, alt: 'HVAC Services' }]
  }
}

export default function HVACPage() {
  const categories = [
    {
      title: 'Air Conditioning',
      icon: Wind,
      image: '/images/services/hvacservice/airconditioning.webp',
      description: 'Hot days are a given in Middle Georgia. We’ll make sure your home or business stays cool and comfortable.',
      features: [
        'AC Installation & Replacement – Energy-efficient systems installed right.',
        'Air Conditioning Repair – Quick, reliable fixes for any make or model.',
        'AC Tune-Ups – Seasonal maintenance to save on energy bills.'
      ]
    },
    {
      title: 'Heat Services',
      icon: Thermometer,
      image: '/images/services/hvacservice/heating.webp',
      description: 'Georgia winters may be short, but when it’s cold, you feel it. We’re here to keep you warm.',
      features: [
        'Furnace & Heat Pump Installation – Modern, efficient heating systems.',
        'Heating Repairs – Fast service to get your heat back fast.',
        'Seasonal Heating Maintenance – Prevent breakdowns and extend lifespan.'
      ]
    },
    {
      title: 'Air Quality',
      icon: Droplets,
      image: '/images/services/hvacservice/airquality.webp',
      description: 'It’s not just about temperature—it’s about the air you breathe every day.',
      features: [
        'Whole-Home Air Filtration & Purifiers – Remove dust and pollen.',
        'Humidity Control – Humidifiers and dehumidifiers for balance.',
        'UV Germicidal Lights – Eliminate airborne pathogens.'
      ]
    }
  ]

  const faqs = [
    {
      q: 'What brands do you work on?',
      a: 'We service all major HVAC brands and models, so no matter what’s in your home, we can help.'
    },
    {
      q: 'My AC isn’t cooling — what should I do?',
      a: 'First, check your thermostat settings and make sure your air filter is clean. If it’s still not working, we recommend scheduling an AC service with our master technicians.'
    },
    {
      q: 'How often should I service my HVAC system?',
      a: 'Twice a year is ideal — once before summer and once before winter. Our HVAC maintenance services help your system run efficiently and can prevent costly breakdowns.'
    },
    {
      q: 'How do I know if I need to replace my HVAC system?',
      a: 'If your system is over 10–15 years old, breaks down often, or your energy bills keep rising, it might be time to consider replacement.'
    },
    {
      q: 'Do you service heat pumps?',
      a: 'Absolutely — we install, repair, and maintain heat pumps for year-round comfort across Middle Georgia.'
    }
  ]

  const serviceJson = serviceSchema(
    'HVAC Services',
    'Expert heating, cooling, and air quality solutions for Middle Georgia since 1974.',
    `${siteConfig.url}/hvac`,
    siteConfig.name,
    siteConfig.url
  )

  const faqJson = faqSchema(faqs)
  const breadcrumbJson = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'HVAC Services', url: `${siteConfig.url}/hvac` }
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />

      <Navbar />
      <main id="main">
        {/* Breadcrumbs Visual component could go here, but JSON-LD is the SEO priority */}

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-bg overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-bg-secondary),transparent_50%)]" />
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <div className="max-w-4xl">
                <span className="text-primary font-mono text-[11px] font-bold uppercase tracking-[0.25em] mb-6 block opacity-60">Comfort Solutions Since 1974</span>
                <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-text mb-8">
                  HVAC Services in Middle Georgia — <br className="hidden md:block" /> Expert Care Since 1974.
                </h1>
                <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed font-medium mb-10">
                  Middle Georgia winters and summers are tough. We’re more than just HVAC techs — we’re your neighbors serving Macon and Warner Robins with certified excellence.
                </p>
                <Button size="xl" href="/contact">Schedule Service Now</Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Intro */}
        <TextIsland
          overline="WHAT IS BUZZELL HVAC?"
          text="Complete cooling, heating, and air quality governance for your home or business. We combine 50 years of tribal knowledge with modern Carrier engineering."
        />

        {/* Categories Grid */}
        <section className="py-24 bg-bg lg:py-40">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {categories.map((cat, i) => (
                <AnimatedSection key={cat.title} delay={i * 0.1}>
                  <div className="h-full bg-bg border border-border rounded-[2rem] overflow-hidden flex flex-col hover:shadow-glow transition-all duration-500 group">

                    {/* Image Header */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={i === 0}
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white shadow-sm z-10">
                        <cat.icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-8 md:p-10 flex flex-col flex-grow">
                      <h2 className="font-display text-3xl font-black text-text mb-4 tracking-tight">{cat.title}</h2>
                      <p className="text-muted leading-relaxed font-medium mb-8 flex-grow">{cat.description}</p>
                      <ul className="space-y-4 mb-4">
                        {cat.features.map(feat => (
                          <li key={feat} className="flex gap-3 text-sm text-text/80 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-bg-secondary lg:py-40 border-y border-border">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-black text-text mb-6">How Our HVAC Service Works.</h2>
              <p className="text-muted text-lg font-medium">Clear, honest communication From the initial dispatch to the final sign-off.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Rapid Diagnosis', desc: 'We arrive on-site with fully stocked trucks to identify the issue in minutes.' },
                { title: 'Flat-Rate Pricing', desc: 'No hidden fees or hourly surprises. You know the cost before work begins.' },
                { title: 'Certified Repair', desc: 'Our technicians execute the fix using factory-authorized parts and tools.' }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <span className="text-6xl font-display font-black text-primary/10 absolute -top-8 -left-4">0{i + 1}</span>
                  <h3 className="text-xl font-bold text-text mb-4 relative z-10">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-24 bg-bg lg:py-40">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80" alt="Technical expertise" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-black text-text mb-10 tracking-tight">Why Choose Buzzell HVAC?</h2>
                <div className="space-y-10">
                  {[
                    { icon: ShieldCheck, title: 'Authorized Carrier Dealer', desc: 'Access to elite equipment and exclusive factory-backed warranties.' },
                    { icon: Zap, title: 'Emergency Dispatch 24/7', desc: 'Our family is on standby for your family, any time of day or night.' },
                    { icon: Heart, title: 'Local Heritage', desc: 'Serving Middle Georgia since 1974 with deep community roots.' }
                  ].map(item => (
                    <div key={item.title} className="flex gap-6">
                      <div className="w-12 h-12 bg-bg-secondary rounded-xl flex items-center justify-center shrink-0 border border-border"><item.icon className="w-5 h-5 text-primary" /></div>
                      <div>
                        <h3 className="text-xl font-bold text-text mb-2 tracking-tight">{item.title}</h3>
                        <p className="text-muted text-sm leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          overline="Expert Support"
          title="HVAC <br />Questions."
          description="Expert answers to common heating and cooling concerns in Middle Georgia."
          items={faqs.map(f => ({ question: f.q, answer: f.a }))}
        />

        {/* CTA Section */}
        <section className="py-24 bg-text text-bg overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-8 leading-[1.1]">Get Started with Reliable HVAC.</h2>
            <p className="text-bg/60 text-lg mb-10 max-w-2xl mx-auto">Experience the Buzzell difference today. Request your free estimate or emergency support in minutes.</p>
            <Button 
              size="xl" 
              variant="outline"
              className="border-bg/30 text-bg hover:bg-bg hover:text-text"
              href="/contact">
              Schedule Your Service Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
