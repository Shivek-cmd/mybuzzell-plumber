'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface AboutCarouselProps {
  images: string[]
}

export default function AboutCarousel({ images }: AboutCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-bg-secondary group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
          alt={`Story image ${currentIndex + 1}`}
        />
      </AnimatePresence>
      
      <div className="absolute inset-x-0 bottom-0 p-8 flex items-center justify-between bg-gradient-to-t from-black/50 to-transparent">
         <div className="flex gap-2">
            {images.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)} 
                className={`h-1.5 transition-all rounded-full ${currentIndex === i ? 'w-8 bg-white' : 'w-2 bg-white/40'}`} 
              />
            ))}
         </div>
         <div className="flex gap-2">
            <button onClick={prev} className="h-10 w-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="h-10 w-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20">
              <ChevronRight className="w-5 h-5" />
            </button>
         </div>
      </div>
    </div>
  )
}
