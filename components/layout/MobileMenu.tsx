'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import { navItems } from '@/constants'
import Button from '@/components/ui/Button'

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-text/60 backdrop-blur-sm z-[var(--z-overlay)]" onClick={onClose} />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-80 bg-bg border-l border-border z-[var(--z-modal)] p-6">
            <div className="flex items-center justify-between mb-10">
              <span className="font-display text-lg font-bold">Menu</span>
              <button onClick={onClose} aria-label="Close menu"><X className="w-5 h-5 text-text" /></button>
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map(item => (
                <div key={item.label} className="border-b border-border py-4">
                  {item.children ? (
                    <>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-text/40 mb-3 block">
                        {item.label}
                      </span>
                      <div className="flex flex-col gap-3 pl-4">
                        {item.children.map(child => (
                          <Link key={child.href} href={child.href} onClick={onClose}
                            className="text-lg font-medium text-muted hover:text-text transition-colors">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link href={item.href} onClick={onClose}
                      className="text-lg font-medium text-muted hover:text-text transition-colors">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <Button className="w-full mt-8" href="/contact" onClick={onClose}>
               Book Instantly
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
