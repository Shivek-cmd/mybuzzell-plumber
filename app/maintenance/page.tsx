import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContrastFeatures from '@/components/sections/ContrastFeatures'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HVAC & Plumbing Maintenance Plans | Middle Georgia | Buzzell',
  description: 'Custom preventative maintenance contracts for homes and businesses in Macon and Warner Robins GA. Extend your equipment lifespan and reduce energy bills.',
}

export default function MaintenancePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-bg overflow-hidden border-b border-border">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <div className="max-w-4xl">
                <span className="text-primary font-mono text-[11px] font-bold uppercase tracking-[0.25em] mb-6 block opacity-60">Maintenance Solutions</span>
                <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-text mb-8">
                  Stay Ahead of Repairs <br className="hidden md:block" /> with Preventive Care.
                </h1>
                <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed font-medium">
                  Whether for your family home or your commercial property, our custom maintenance plans are designed to extend equipment life and ensure consistent comfort.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Existing ContrastFeatures reflects the plans well */}
        <div className="bg-text py-24">
           <ContrastFeatures />
        </div>

        <section className="py-24 bg-bg lg:py-40">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-bg-secondary p-12 rounded-3xl border border-border">
              <h2 className="font-display text-3xl font-black text-text mb-8">The Benefits of Professional Care.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  {
                    title: 'Lower Utility Bills',
                    description: 'Optimized systems use less energy and water, putting money back in your pocket.'
                  },
                  {
                    title: 'Longer Equipment Life',
                    description: 'Regular flushing and cleaning extends the lifespan of your heavy mechanical assets.'
                  },
                  {
                    title: 'Priority Dispatching',
                    description: 'Maintenance partners get moved to the top of our service queue every time.'
                  },
                  {
                    title: 'Inflation Protection',
                    description: 'Lock in today’s service rates for the duration of your contract period.'
                  }
                ].map(benefit => (
                  <div key={benefit.title}>
                    <h3 className="text-lg font-black text-text mb-4">{benefit.title}</h3>
                    <p className="text-muted text-sm leading-relaxed font-medium">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
