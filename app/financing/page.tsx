import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TextIsland from '@/components/sections/TextIsland'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import { Metadata } from 'next'
import { Wallet, ShieldAlert, History, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react'

import { siteConfig } from '@/constants'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'HVAC & Plumbing Financing | Macon & Warner Robins GA | Buzzell',
  description: 'Flexible financing options for HVAC and plumbing repairs or installations in Middle Georgia. Wells Fargo and GEFA programs available. Pay over time with approved credit.',
  alternates: { canonical: `${siteConfig.url}/financing` },
  openGraph: {
    title: 'Financing Options | Buzzell Plumbing-Heating-Air',
    description: 'Manageable monthly payments for your home comfort needs in Middle Georgia.',
    url: `${siteConfig.url}/financing`,
    images: [{ url: '/og/og-default.jpg', width: 1200, height: 630, alt: 'Financing Options' }]
  }
}

export default function FinancingPage() {
  const breadcrumbJson = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Financing', url: `${siteConfig.url}/financing` }
  ])

  const faqs = [
    {
      q: 'Do you offer financing?',
      a: 'Yes, we have flexible financing options for big projects or new installs. Check out our Financing page details or call us for a personalized quote.'
    },
    {
      q: 'How do I apply for financing?',
      a: 'You can apply by calling us and we’ll walk you through the simple process. Call our Warner Robins office at 478-241-5889 or our Macon office at 478-974-5255.'
    },
    {
      q: 'Can financing be used for repairs as well as new installs?',
      a: 'Yes — our financing options can be used for repairs, replacements, and new system installations across all our plumbing and HVAC services.'
    }
  ]

  const faqJson = faqSchema(faqs)
  const benefits = [
    {
      title: 'Avoid Bigger Bills Later',
      description: 'Waiting can make problems worse. Financing lets you fix issues now and avoid major damage later.',
      icon: ShieldAlert
    },
    {
      title: 'Immediate Comfort',
      description: 'Get the heating, cooling, or plumbing upgrades you need now instead of making do until next year.',
      icon: History
    },
    {
      title: 'Keep Cash Flow Steady',
      description: 'Spread the cost into predictable monthly payments instead of draining your savings all at once.',
      icon: Wallet
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Request a Free Estimate',
      description: 'We’ll give you an upfront, transparent cost for your project.'
    },
    {
      number: '02',
      title: 'Choose a Plan',
      description: 'We’ll walk you through your options and help you find the best fit.'
    },
    {
      number: '03',
      title: 'Get Approved',
      description: 'Most applications are processed quickly, so work can begin right away.'
    }
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      <Navbar />
      <main id="main">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-bg overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-bg-secondary),transparent_50%)]" />
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <div className="max-w-4xl">
                <span className="text-primary font-mono text-[11px] font-bold uppercase tracking-[0.25em] mb-6 block opacity-60">Comfort You Need Now</span>
                <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-text mb-8">
                  HVAC & Plumbing <br className="hidden md:block" /> Financing. Pay Over Time.
                </h1>
                <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed font-medium mb-10">
                  At Buzzell, we believe you shouldn’t have to wait to fix an urgent plumbing problem or replace a failing HVAC system. Our flexible financing plans help you spread the cost over manageable monthly payments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                   <Button size="xl" href="/contact">Schedule Service Now</Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <TextIsland 
          overline="INVEST IN COMFORT"
          text="Handle unexpected heating and cooling needs without straining your monthly budget. Our partnerships make it simple."
        />

        {/* Partners Section */}
        <section className="py-24 bg-bg lg:py-40">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="h-full bg-bg-secondary border border-border rounded-3xl p-10 flex flex-col hover:shadow-glow transition-all duration-500">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-border mb-8 shadow-sm">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl font-black text-text mb-6 tracking-tight">Wells Fargo Financing</h2>
                  <p className="text-muted leading-relaxed font-medium mb-8 flex-grow">
                    Through our partnership with Wells Fargo Bank, N.A., we provide flexible financing options with approved credit. Invest in year-round comfort today.
                  </p>
                  <Button variant="outline" size="lg" className="w-full bg-white hover:bg-bg-secondary group" href="https://retailservices.wellsfargo.com/plp/static/v1/index.html">
                    Wells Fargo Portal <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="h-full bg-bg-secondary border border-border rounded-3xl p-10 flex flex-col hover:shadow-glow transition-all duration-500">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-border mb-8 shadow-sm">
                    <span className="text-2xl font-black text-primary">$</span>
                  </div>
                  <h2 className="font-display text-3xl font-black text-text mb-6 tracking-tight">Financing with GEFA</h2>
                  <p className="text-muted leading-relaxed font-medium mb-8 flex-grow">
                    Through the Georgia Environmental Finance Authority (GEFA), qualified homeowners can take advantage of energy-efficient HVAC financing up to $16,000.
                  </p>
                  <Button variant="outline" size="lg" className="w-full bg-white hover:bg-bg-secondary group" href="/contact">
                    More Information <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why Finance */}
        <section className="py-24 bg-text text-bg lg:py-40 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-primary),transparent_40%)] opacity-20" />
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="font-display text-4xl md:text-5xl font-black mb-6">Why Finance Your Project?</h2>
              <p className="text-bg/60 text-lg max-w-2xl mx-auto font-medium">Protect your home, your family, and your savings by choosing the smarter way to pay.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {benefits.map((benefit, i) => (
                <AnimatedSection key={benefit.title} delay={i * 0.1}>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-bg/5 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-bg/10 group-hover:bg-bg/10 transition-colors duration-500">
                      <benefit.icon className="w-8 h-8 text-bg" />
                    </div>
                    <h3 className="font-display text-2xl font-black mb-4">{benefit.title}</h3>
                    <p className="text-bg/60 leading-relaxed font-medium">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Process */}
        <section className="py-24 bg-bg lg:py-40">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
              <div>
                <h2 className="font-display text-4xl font-black text-text mb-10 tracking-tight">What Services Can I Finance?</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {[
                    'HVAC System Installation',
                    'A/C & Heating Repairs',
                    'Water Heater Service',
                    'Major Plumbing Upgrades',
                    'Commercial Projects',
                    'Energy Efficiency Work'
                  ].map(service => (
                    <li key={service} className="flex gap-3 text-text font-semibold items-center">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Button size="xl" href="/contact">Book a Service Now</Button>
              </div>

              <div>
                <h2 className="font-display text-4xl font-black text-text mb-12 tracking-tight">Quick & Easy Application.</h2>
                <div className="space-y-12">
                  {steps.map((step, i) => (
                    <AnimatedSection key={step.title} delay={i * 0.1}>
                      <div className="flex gap-8 group">
                        <span className="text-4xl font-display font-black text-primary/20 group-hover:text-primary transition-colors duration-500">{step.number}</span>
                        <div>
                          <h3 className="text-xl font-black text-text mb-2 tracking-tight">{step.title}</h3>
                          <p className="text-muted leading-relaxed font-medium text-sm">{step.description}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <FAQ 
          overline="Payment Support"
          title="Financing <br />Questions."
          description="Common questions about managing your home investment through Buzzell's financing partners."
          items={faqs.map(f => ({ question: f.q, answer: f.a }))}
        />
      </main>
      <Footer />
    </>
  )
}
