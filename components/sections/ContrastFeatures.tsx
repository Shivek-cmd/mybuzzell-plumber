'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const plans = [
  {
    name: 'Standard', price: 165, period: 'per unit/yr', description: 'Essential protection for your system.',
    features: ['2 Inspections ($80 each additional)', '10% off parts', 'Priority scheduling'],
    href: '/maintenance', highlighted: false,
  },
  {
    name: 'VIP', price: 359, period: 'per unit/yr', description: 'The ultimate peace of mind.',
    features: ['20% off all parts', 'Zero overtime charges', 'Front Line priority status', 'Extended lifespan guarantee'],
    href: '/maintenance', highlighted: true,
  },
  {
    name: 'Deluxe', price: 279, period: 'per unit/yr', description: 'For proactive homeowners.',
    features: ['15% off parts', '1 Free diagnostic', 'Free drain cleaning'],
    href: '/maintenance', highlighted: false,
  },
]

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function ContrastFeatures() {
  return (
    <section className="relative bg-text py-24 lg:py-40 overflow-hidden">
      
      {/* Texture overlay on dark bg */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)' }} />
      
      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection className="text-center mb-20">
          <span className="text-bg font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block opacity-60">Maintenance Plans</span>
          <h2 className="font-display tracking-tight text-4xl md:text-6xl font-black text-bg mb-6">Preventative Care.</h2>
          <p className="text-bg/70 text-lg max-w-2xl mx-auto tracking-tight">Stop problems before they start. Join the Buzzell family and get priority front-line service all year.</p>
        </AnimatedSection>
        
        {/* Pricing Cards */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map(p => (
            <motion.div key={p.name} variants={item}
              className={`rounded-2xl overflow-hidden transition-transform duration-300 relative ${
                p.highlighted 
                  ? 'bg-bg text-text shadow-2xl scale-100 md:scale-105 z-10 border border-text/10' 
                  : 'bg-bg/10 backdrop-blur text-bg border border-bg/10 hover:-translate-y-2'
              }`}>
              
              {p.highlighted && (
                <div className="absolute top-0 right-0 right-4 top-4 px-3 py-1 bg-text text-bg text-[10px] uppercase font-bold tracking-widest rounded-full">Best Value</div>
              )}

              <div className="p-8 pb-10">
                <h3 className="font-display text-2xl font-bold mb-2">{p.name}</h3>
                <p className={`text-sm mb-6 ${p.highlighted ? 'text-text/70' : 'text-bg/70'}`}>{p.description}</p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-black font-display">${p.price}</span>
                  <span className={`text-xs uppercase font-mono tracking-wider font-bold ${p.highlighted ? 'text-text/50' : 'text-bg/50'}`}>/{p.period}</span>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {p.features.map((f, i) => (
                    <li key={i} className={`flex items-start gap-3 text-sm font-medium ${p.highlighted ? 'text-text/80' : 'text-bg/80'}`}>
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.highlighted ? 'text-text' : 'text-bg/60'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  size="lg" 
                  variant={p.highlighted ? 'primary' : 'outline'} 
                  className={`w-full ${!p.highlighted ? 'border-bg/30 text-bg hover:bg-bg hover:text-text' : ''}`}
                  href={p.href}>
                  Select {p.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
