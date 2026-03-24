'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AnimatedSection({
  children, delay = 0, className = ''
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}>
      {children}
    </motion.div>
  )
}
