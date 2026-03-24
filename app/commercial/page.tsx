import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TextIsland from '@/components/sections/TextIsland'
import AnimatedSection from '@/components/ui/AnimatedSection'
import FAQ from '@/components/sections/FAQ'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { Metadata } from 'next'
import { Building2, Settings2, ShieldCheck, ClipboardCheck, CheckCircle2, History, Zap, Settings } from 'lucide-react'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data'
import { siteConfig } from '@/constants'

export const metadata: Metadata = {
  title: 'Commercial HVAC & Plumbing Middle Georgia — Expert Support',
  description: 'Middle Georgia’s trusted commercial experts since 1974. Solutions for offices, retail, and facilities in Macon and Warner Robins. Licensed technicians ready for large-scale service.',
  alternates: { canonical: `${siteConfig.url}/commercial` },
  openGraph: {
    title: 'Commercial HVAC & Plumbing Middle Georgia | Buzzell Plumbing-Heating-Air',
    description: 'Professional mechanical solutions for business assets in MGA since 1974.',
    url: `${siteConfig.url}/commercial`,
    images: [{ url: '/og/og-commercial.jpg', width: 1200, height: 630, alt: 'Commercial Services' }]
  }
}

export default function CommercialPage() {
  const categories = [
    {
      title: 'Commercial HVAC',
      icon: Building2,
      image: '/images/services/commercialservice/commercial-hvac.webp',
      description: 'A comfortable space is essential for employees, customers, and productivity. Our team delivers fast, reliable service.',
      features: [
        'HVAC Installation & Replacement – Properly sized systems.',
        'Heating & Cooling Repairs – Prevent business downtime.',
        'Rooftop Unit Service – Installation and maintenance.'
      ]
    },
    {
      title: 'Commercial Plumbing',
      icon: Settings2,
      image: '/images/services/commercialservice/commercial-plumbing.webp',
      description: 'Plumbing problems can disrupt operations fast. Our team handles everything from new construction to upgrades.',
      features: [
        'Installation & Replacement – New construction projects.',
        'Leaks, Clogs & Backups – High-pressure sewer cleaning.',
        'Water Heater Service – Commercial grade tank and tankless.'
      ]
    },
    {
      title: 'Maintenance Plans',
      icon: ClipboardCheck,
      image: '/images/services/commercialservice/maintenance.webp',
      description: 'Stay ahead of problems with a custom maintenance agreement that fits your business needs.',
      features: [
        'Custom Quarterly Plans – Filter changes and checkups.',
        'Extend Lifespan – Avoid expensive equipment failures.',
        'Priority Service – Rapid response for partners.'
      ]
    }
  ]

  const faqs = [
    {
      q: 'Do you offer maintenance contracts for businesses?',
      a: 'Yes. We create custom maintenance plans for commercial HVAC and plumbing systems to keep your building running smoothly and prevent costly downtime.'
    },
    {
      q: 'Do you offer 24/7 emergency service?',
      a: 'Absolutely — we’re equipped to handle everything from small office buildings to massive retail spaces at any hour of the day or night.'
    },
    {
      q: 'Can you service multiple locations for my business?',
      a: 'Yes — we work extensively with property managers and multi-location businesses across Georgia to provide unified mechanical support.'
    },
    {
      q: 'Can you handle plumbing for new commercial builds?',
      a: 'Yes — we offer full commercial plumbing and HVAC installation for new construction as well as major facility renovations.'
    }
  ]

  const serviceJson = serviceSchema(
    'Commercial Services',
    'Professional mechanical governance for Middle Georgia business assets since 1974.',
    `${siteConfig.url}/commercial`,
    siteConfig.name,
    siteConfig.url
  )

  const faqJson = faqSchema(faqs)
  const breadcrumbJson = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Commercial Services', url: `${siteConfig.url}/commercial` }
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />

      <Navbar />
      <main id="main">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-bg overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-bg-secondary),transparent_50%)]" />
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <div className="max-w-4xl">
                <span className="text-primary font-mono text-[11px] font-bold uppercase tracking-[0.25em] mb-6 block opacity-60">Professional Solutions Since 1974</span>
                <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-text mb-8">
                  Commercial HVAC & Plumbing in Middle Georgia — <br className="hidden md:block" /> Expert Care Since 1974.
                </h1>
                <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed font-medium mb-10">
                  From small offices to large industrial facilities, we’ve been the go-to mechanical team for Middle Georgia for over 50 years. Professional expertise with a family touch.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="xl" href="/contact">Schedule Service Now</Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Intro */}
        <TextIsland
          overline="WHAT IS BUZZELL COMMERCIAL?"
          text="Advanced mechanical governance for business infrastructure. We optimize your HVAC and plumbing assets to protect your bottom line and employee productivity."
        />

        {/* Categories Grid */}
        <section className="py-24 bg-bg lg:py-40">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                    <div className="p-10 flex flex-col flex-grow">
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
              <h2 className="font-display text-4xl md:text-5xl font-black text-text mb-6">How Our Commercial Service Works.</h2>
              <p className="text-muted text-lg font-medium">Strategic infrastructure management for property managers and business owners.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Asset Audit', desc: 'We audit your existing systems to identify failure points and efficiency gaps.' },
                { title: 'Priority Dispatch', desc: 'Commercial partners receive less than 2-hour response for urgent mechanical failures.' },
                { title: 'Licensed Resolution', desc: 'Our technicians execute fixes that meet the highest industrial and commercial codes.' }
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
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" alt="Commercial Building expertise" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-black text-text mb-10 tracking-tight">Why Choose Buzzell Commercial?</h2>
                <div className="space-y-10">
                  {[
                    { icon: History, title: 'Heritage of Excellence', desc: 'Consistent large-scale mechanical success for MGA facilities since 1974.' },
                    { icon: Zap, title: 'Rapid Recovery 24/7', desc: 'Downtime costs money. We recover your comfort faster than anyone in the region.' },
                    { icon: Settings, title: 'Code compliant expertise', desc: 'Licensed technicians trained for industrial-grade plumbing and HVAC codes.' }
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

        <FAQ
          overline="Expert Support"
          title="Commercial <br />Questions."
          description="Expert mechanical answers for business owners and property managers in Middle Georgia."
          items={faqs.map(f => ({ question: f.q, answer: f.a }))}
        />

        {/* CTA Section */}
        <section className="py-24 bg-text text-bg overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-8 leading-[1.1]">Get Your Commercial Quote Today.</h2>
            <p className="text-bg/60 text-lg mb-10 max-w-2xl mx-auto">Experience the Buzzell professional difference. Plan your maintenance or repair with a trusted partner.</p>
            <Button 
              size="xl" 
              variant="outline"
              className="border-bg/30 text-bg hover:bg-bg hover:text-text"
              href="/contact">
              Schedule Commercial Dispatch Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
