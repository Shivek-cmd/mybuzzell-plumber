'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Wrench, Droplets, Building2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'

const services = [
  {
    icon: Wrench,
    title: 'Residential HVAC',
    image: '/images/Homepage/service-hvac.jpg',
    description: 'Certified installations, fast 24/7 repairs, and air quality upgrades for Middle Georgia homeowners.',
    href: '/hvac'
  },
  {
    icon: Droplets,
    title: 'Plumbing Solutions',
    image: '/images/Homepage/service-plumbing.jpg',
    description: 'From leak detection to tankless water heater installations, handled quickly by licensed experts.',
    href: '/plumbing'
  },
  {
    icon: Building2,
    title: 'Commercial Contracting',
    image: '/images/Homepage/service-commercial.jpg',
    description: 'Rooftop unit installations and custom preventative maintenance contracts for property managers.',
    href: '/commercial'
  },
]

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function Services() {
  return (
    <section className="bg-bg py-24 lg:py-40 border-t border-border bg-bg-secondary/30 relative overflow-hidden">

      {/* Decorative architectural background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-primary font-mono text-[11px] font-bold uppercase tracking-[0.25em] mb-4 block">Our Expertise</span>
          <h2 className="font-display tracking-tight text-4xl md:text-6xl font-black text-text mb-6">Master-level service.</h2>
          <p className="text-muted text-lg md:text-xl leading-relaxed font-medium">
            We balance price, efficiency, and lifespan to bring you the best value in a timely manner. No shortcuts. Just quality work since 1974.
          </p>
        </AnimatedSection>

        {/* Premium Image Card Grid */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={item} className="group flex flex-col h-full bg-bg border border-border p-5 rounded-[2rem] hover:shadow-glow transition-all duration-500">

                {/* Image Container with Scale Reveal */}
                <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-8">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Floating Icon Overlap */}
                  <div className="absolute bottom-4 left-4 h-12 w-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="px-2">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-text mb-3">{service.title}</h3>
                  <p className="text-muted text-[15px] leading-relaxed mb-8 font-medium">{service.description}</p>

                  <Link href={service.href}
                    className="inline-flex items-center gap-2 text-xs text-primary font-black uppercase tracking-[0.15em] font-mono group-hover:translate-x-2 transition-transform duration-500">
                    Learn more &rarr;
                  </Link>
                </div>

              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
