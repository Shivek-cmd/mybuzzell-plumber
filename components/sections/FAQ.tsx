'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
  description?: string
  overline?: string
}

export default function FAQ({ 
  items, 
  title = "Common Questions.", 
  description = "Get the facts on licensing, service areas, and emergency support for your mechanical needs.",
  overline = "Frequently Asked"
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-bg py-24 lg:py-40 relative overflow-hidden">
      
      {/* Decorative architectural background element */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
          
          {/* Left: Sticky Header */}
          <div className="lg:sticky lg:top-32 h-fit">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-bg-secondary/50 backdrop-blur mb-8 text-xs font-mono font-bold uppercase tracking-widest text-text">
                <HelpCircle className="w-4 h-4 text-primary" />
                {overline}
              </div>
              <h2 
                className="font-display text-4xl md:text-6xl font-black text-text mb-6 tracking-tight leading-[1.1]"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="text-muted text-lg font-medium leading-relaxed max-w-sm">
                {description}
              </p>
            </AnimatedSection>
          </div>

          {/* Right: Premium Premium Accordion */}
          <div className="space-y-4">
            {items.map((faq: FAQItem, index: number) => {
              const isOpen = openIndex === index
              return (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <div 
                    className={`group border border-border rounded-3xl transition-all duration-500 overflow-hidden ${isOpen ? 'bg-bg-secondary shadow-xl ring-1 ring-primary/10' : 'bg-transparent hover:border-text/20'}`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-8 md:p-10 text-left cursor-pointer"
                    >
                      <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-text'}`}>
                        {faq.question}
                      </span>
                      <div className={`p-2 rounded-full border transition-all duration-500 ${isOpen ? 'bg-primary border-primary text-white rotate-180' : 'bg-bg border-border text-text'}`}>
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5 group-hover:scale-110" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <div className="px-8 pb-10 md:px-10 md:pb-12">
                            <div className="w-12 h-1 bg-primary/20 rounded-full mb-8" />
                            <p className="text-muted text-lg leading-relaxed font-medium whitespace-pre-line max-w-3xl">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
