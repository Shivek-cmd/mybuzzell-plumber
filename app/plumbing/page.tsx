import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TextIsland from '@/components/sections/TextIsland'
import AnimatedSection from '@/components/ui/AnimatedSection'
import FAQ from '@/components/sections/FAQ'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { Metadata } from 'next'
import { Droplets, Heater, ShieldCheck, Home, CheckCircle2, History, Zap, Settings } from 'lucide-react'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data'
import { siteConfig } from '@/constants'

export const metadata: Metadata = {
  title: 'Plumbing Services Middle Georgia — Expert Macon & Warner Robins Support',
  description: 'Middle Georgia’s trusted plumbing experts since 1974. Leaks, water heaters, and sewer solutions for Macon, Warner Robins, and beyond. Family-owned and operated.',
  alternates: { canonical: `${siteConfig.url}/plumbing` },
  openGraph: {
    title: 'Plumbing Services Middle Georgia | Buzzell Plumbing-Heating-Air',
    description: 'Expert plumbing solutions in Middle Georgia since 1974.',
    url: `${siteConfig.url}/plumbing`,
    images: [{ url: '/og/og-plumbing.jpg', width: 1200, height: 630, alt: 'Plumbing Services' }]
  }
}

export default function PlumbingPage() {
  const categories = [
    {
      title: 'Plumbing Repairs',
      icon: Droplets,
      image: '/images/services/plumbingservice/plumbing-repairs.webp',
      description: 'From a tiny drip to a total breakdown — we’ve got you covered.',
      features: [
        'Leaky Faucets & Running Toilets – No more wasted water.',
        'Burst or Damaged Pipes – Fix before major damage.',
        'Garbage Disposal Repairs – Jams or strange noises.'
      ]
    },
    {
      title: 'Water Heaters',
      icon: Heater,
      image: '/images/services/plumbingservice/water-heaters.webp',
      description: 'Hot water isn’t a luxury — it’s part of your everyday life. Get hot showers fast.',
      features: [
        'Installations & Replacements – Tank and tankless systems.',
        'Repairs for No-Hot-Water – Expert troubleshooting.',
        'Maintenance & Flushing – For energy efficiency.'
      ]
    },
    {
      title: 'Drain & Sewer',
      icon: ShieldCheck,
      image: '/images/services/plumbingservice/drain-sewer.webp',
      description: 'Clear, clean, and worry-free water flow starts here with the right tools.',
      features: [
        'Professional Drain Cleaning – Remove stubborn buildup.',
        'Hydro-Jetting – High-pressure solutions for clogs.',
        'Sewer Line Inspection – Spot problems early.'
      ]
    },
    {
      title: 'Bath & Kitchen',
      icon: Home,
      image: '/images/services/plumbingservice/bath-kitchen.webp',
      description: 'The heart of your home deserves plumbing that works perfectly.',
      features: [
        'New Fixture Upgrades – Modern style and function.',
        'Shower & Tub Installs – Professional plumbing layout.',
        'Toilet Replacements – Fast and correct.'
      ]
    }
  ]

  const faqs = [
    {
      q: 'What’s the fastest way to stop a water leak?',
      a: 'Turn off your home’s main water valve right away, then call us. We can often send someone the same day to prevent secondary structural damage.'
    },
    {
      q: 'My water bill is unusually high — could it be a leak?',
      a: 'Definitely. Hidden leaks can add up fast. Our leak detection services can find the problem and fix it before it gets worse.'
    },
    {
      q: 'Can you help with low water pressure?',
      a: 'Yes — we’ll find the cause, whether it’s buildup in pipes, a leak, or an issue with your water supply. We prioritize restoring full capacity to your home.'
    },
    {
      q: 'Can you help with bathroom remodel plumbing?',
      a: 'Absolutely — from rough-in work to installing the final fixtures, we handle the entire project to ensure your new space meets all Georgia codes.'
    },
    {
      q: 'Do you repair or replace sewer lines?',
      a: 'Yes — we can inspect, repair, or replace damaged sewer lines to keep things flowing smoothly using advanced diagnostic equipment.'
    }
  ]

  const serviceJson = serviceSchema(
    'Plumbing Services',
    'Expert plumbing solutions for Middle Georgia since 1974.',
    `${siteConfig.url}/plumbing`,
    siteConfig.name,
    siteConfig.url
  )

  const faqJson = faqSchema(faqs)
  const breadcrumbJson = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Plumbing Services', url: `${siteConfig.url}/plumbing` }
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
                <span className="text-primary font-mono text-[11px] font-bold uppercase tracking-[0.25em] mb-6 block opacity-60">50+ Years of Craftsmanship</span>
                <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-text mb-8">
                  Plumbing Services in Middle Georgia — <br className="hidden md:block" /> Expert Care Since 1974.
                </h1>
                <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed font-medium mb-10">
                  For over 50 years, we’ve been helping our Middle Georgia neighbors with everything from little leaks to big remodels. We’re family-owned and locally operated.
                </p>
                <Button size="xl" href="/contact">Schedule Service Now</Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Intro */}
        <TextIsland
          overline="WHAT IS BUZZELL PLUMBING?"
          text="Complete water management for your home or business. We solve complex leak and structural issues with high-tech diagnostic equipment and old-world work ethics."
        />

        {/* Categories Grid */}
        <section className="py-24 bg-bg lg:py-40">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((cat, i) => (
                <AnimatedSection key={cat.title} delay={i * 0.1}>
                  <div className="h-full bg-bg border border-border rounded-[2rem] overflow-hidden flex flex-col hover:shadow-glow transition-all duration-500 group">

                    {/* Image Header */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        priority={i === 0}
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white shadow-sm z-10">
                        <cat.icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-8 md:p-10 flex flex-col flex-grow">
                      <h2 className="font-display text-2xl font-black text-text mb-4 tracking-tight">{cat.title}</h2>
                      <p className="text-muted text-sm leading-relaxed font-medium mb-8 flex-grow">{cat.description}</p>
                      <ul className="space-y-4 mb-4">
                        {cat.features.map(feat => (
                          <li key={feat} className="flex gap-3 text-xs text-text/80 font-medium">
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
              <h2 className="font-display text-4xl md:text-5xl font-black text-text mb-6">How Our Plumbing Service Works.</h2>
              <p className="text-muted text-lg font-medium">Clear, honest communication From the initial dispatch to the final sign-off.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Video Diagnostic', desc: 'We use high-definition cameras to identify issues deep within your plumbing lines.' },
                { title: 'Upfront Quote', desc: 'Once the problem is found, you receive a transparent, total-job price.' },
                { title: 'Licensed Resolution', desc: 'Our master plumbers execute the fix with advanced tools and clean execution.' }
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
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" alt="Professional Plumber" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-black text-text mb-10 tracking-tight">Why Choose Buzzell Plumbing?</h2>
                <div className="space-y-10">
                  {[
                    { icon: History, title: '50+ Years of Success', desc: 'Consistent excellence for Macon & Warner Robins area homes.' },
                    { icon: Zap, title: 'Rapid Response 24/7', desc: 'Flooding and leaks wait for no one. Our emergency dispatch never stops.' },
                    { icon: Settings, title: 'Master Plumber Certified', desc: 'Work executed by the state’s highest-tier plumbing professionals.' }
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
          title="Plumbing <br />Questions."
          description="Expert answers for Middle Georgia residents about their plumbing health."
          items={faqs.map(f => ({ question: f.q, answer: f.a }))}
        />

        {/* CTA Section */}
        <section className="py-24 bg-text text-bg overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-8 leading-[1.1]">Get Started with Reliable Plumbing.</h2>
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
