'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ElementType } from 'react'
import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline'
type Size = 'sm' | 'md' | 'lg' | 'xl'

const variants: Record<Variant, string> = {
  primary:   'bg-text text-bg hover:opacity-90 shadow-md', // Inverted button for light theme
  secondary: 'bg-bg-elevated text-text border border-border hover:border-border-hover shadow-sm',
  ghost:     'bg-transparent text-muted hover:text-text hover:bg-bg-secondary',
  outline:   'bg-transparent border border-text text-text hover:bg-text hover:text-bg',
  danger:    'bg-error text-white hover:opacity-90',
}

const sizes: Record<Size, string> = {
  sm: 'h-8  px-4  text-sm  rounded-sm gap-1.5',
  md: 'h-11 px-6  text-base rounded-md gap-2',
  lg: 'h-13 px-8  text-lg  rounded-md gap-2',
  xl: 'h-16 px-12 text-xl  rounded-lg gap-3',
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  asChild,
  href,
  ...props 
}: {
  variant?: Variant; 
  size?: Size; 
  children: React.ReactNode; 
  className?: string; 
  href?: string;
  [key: string]: any
}) {
  const compClasses = cn(
    'inline-flex items-center justify-center font-medium transition-all cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant], sizes[size], className
  )

  const MotionLink = motion.create(Link)

  if (href) {
    return (
      <MotionLink href={href}
        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
        className={compClasses}
        {...props}>
        {children}
      </MotionLink>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={compClasses}
      {...props}>
      {children}
    </motion.button>
  )
}
