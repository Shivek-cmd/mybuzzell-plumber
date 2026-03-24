'use client'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  // For light theme, using text color for the scrollbar makes it visible and elegant 
  return <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-text origin-left z-[var(--z-toast)]" />
}
