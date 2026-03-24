'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, ChevronDown } from 'lucide-react'
import { useScrollY } from '@/hooks/useScrollY'
import { navItems, siteConfig } from '@/constants'
import Button from '@/components/ui/Button'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const scrollY = useScrollY()
  const scrolled = scrollY > 20

  return (
    <>
      <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[var(--z-sticky)] transition-all duration-300 ${
          scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
        }`}>
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="Buzzell Plumbing, Heating & Air" className="h-8 md:h-12 w-auto object-contain" />
            </Link>
            
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navItems.map(item => (
                <div key={item.label} className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  
                  {item.children ? (
                    <button className="flex items-center gap-1 text-sm font-medium text-muted hover:text-text transition-colors py-2">
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link href={item.href} className="text-sm font-medium text-muted hover:text-text transition-colors py-2">
                      {item.label}
                    </Link>
                  )}

                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full min-w-[200px]"
                      >
                        <div className="bg-bg-elevated border border-border rounded-xl shadow-xl p-2 mt-2">
                          {item.children.map(child => (
                            <Link key={child.label} href={child.href}
                              className="block px-4 py-2 text-sm text-muted hover:text-text hover:bg-bg-secondary rounded-lg transition-colors">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button size="sm" variant="outline" className="hidden lg:inline-flex border-border-hover text-text" href="tel:4787439321">
                24/7 Emergency
              </Button>
              <Button size="sm" className="hidden md:inline-flex" href="/contact">
                Book Instantly
              </Button>
              <button className="md:hidden h-9 w-9 flex items-center justify-center border border-border rounded hover:bg-bg-secondary"
                onClick={() => setOpen(true)} aria-label="Open menu">
                <Menu className="w-5 h-5 text-text" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
