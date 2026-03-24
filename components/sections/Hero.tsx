'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { MagneticButton } from '@/components/ui/MagneticButton'

const HERO_IMAGES = [
  '/images/Homepage/hero_1.webp',
  '/images/Homepage/hero_2.webp',
  '/images/Homepage/hero_3.webp'
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const words = "Middle Georgia’s Most Trusted Plumbing & HVAC Experts — Honest Care Since 1974.".split(" ")

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">

      {/* Decorative architectural grid/gradient */}
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-bg-secondary to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full mt-10 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Text Content */}
          <div className="relative z-20">
            {/* Label Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-bg-elevated/80 backdrop-blur text-text font-mono text-xs uppercase tracking-widest font-bold mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Serving Since 1974
            </motion.div>

            {/* Headline - Word March Pattern */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-text mb-8">
              {words.map((word, i) => (
                <motion.span key={i}
                  className={`inline-block mr-[0.25em] ${i === 4 ? 'text-shimmer' : ''}`}
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}>
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-10 font-medium tracking-tight">
              Serving Macon & Warner Robins with certified excellence and 24/7 emergency support. We balance price, efficiency, and lifespan for your complete peace of mind.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <MagneticButton>
                <Button size="xl" href="/contact" className="w-full sm:w-auto whitespace-nowrap justify-center">
                  Book Instantly MGA <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </Button>
              </MagneticButton>
              <Button variant="secondary" size="xl" href="/financing" className="w-full sm:w-auto justify-center">
                View Financing
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Premium Organic 'Shapeless' Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Organic Floating Shape Container */}
            <motion.div
              animate={{
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%"
                ],
                y: [0, -15, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[70vh] overflow-hidden border border-border shadow-2xl bg-bg-tertiary"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={HERO_IMAGES[currentIndex]}
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={`Buzzell work ${currentIndex + 1}`}
                />
              </AnimatePresence>
            </motion.div>

            {/* Pagination Indicators — Floating */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 transition-all rounded-full ${currentIndex === i ? 'w-8 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Decorative Architectural Accent */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-4 md:left-8 flex flex-col items-start gap-3 z-10">
        <span className="text-[10px] text-text font-mono uppercase tracking-[0.2em] font-semibold opacity-60">Keep Scrolling</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-text/60 to-transparent" />
      </motion.div>
    </section>
  )
}
