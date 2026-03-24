'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

const testimonials = [
  { id: '1', name: 'Sarah M.', role: 'MACON HARDWARE',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    content: 'We had a pipe burst at 2 AM on a Sunday. Buzzell was there in 45 minutes and saved our entire basement from ruin. Lifesavers.' },
  { id: '2', name: 'David L.', role: 'WARNER ROBINS HOMEOWNER',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    content: 'The VIP maintenance plan is worth every penny. Next-day service when our AC died in July, and the 20% parts discount saved us $300.' },
  { id: '3', name: 'Amanda R.', role: 'PROPERTY MANAGER',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    content: 'I manage 40+ units in Middle Georgia. Buzzell has been our exclusive mechanical contractor for ten years. Untouchable reliability.' },
]

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }

export default function Testimonials() {
  return (
    <section className="bg-bg-secondary py-24 lg:py-40">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection className="text-center mb-16">
          <span className="text-text/60 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">Proven Trust</span>
          <h2 className="font-display tracking-tight text-4xl md:text-5xl font-black text-text mb-4">Middle Georgia's Choice</h2>
          <p className="text-muted text-lg tracking-tight">Angie's List Certified and thousands of 5-star Google Reviews.</p>
        </AnimatedSection>
        
        {/* Full-bleed photo cards */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <motion.div key={t.id} variants={item} className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden group">
              <Image src={t.image} alt={t.name} fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              
              {/* Gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-text/95 via-text/40 to-transparent" />
              
              <div className="absolute top-5 left-5 text-bg text-[64px] font-display leading-[0.5] opacity-80 pt-4">&ldquo;</div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-bg text-[15px] leading-relaxed mb-6 font-medium italic opacity-90">{t.content}</p>
                <p className="text-bg font-bold font-display text-lg mb-1">{t.name}</p>
                <p className="text-bg/60 text-[10px] uppercase font-mono tracking-widest font-semibold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
