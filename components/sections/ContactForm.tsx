'use client'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import { sendContactForm } from '@/app/contact/actions'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    
    const formData = new FormData(e.currentTarget)
    const result = await sendContactForm(formData)

    if (result.success) {
      setSuccess(true)
    } else {
      setErrors(result.errors || {})
    }
    setIsSubmitting(false)
  }

  if (success) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-bg border border-border p-12 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3 transition-transform hover:rotate-0 duration-500">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h3 className="font-display text-3xl font-black text-text mb-4 tracking-tight">Request Received.</h3>
        <p className="text-muted font-medium mb-10 leading-relaxed text-lg max-w-sm mx-auto">
          One of our dispatchers will review your details and contact you within 24 hours.
        </p>
        <Button variant="outline" size="lg" onClick={() => setSuccess(false)} className="rounded-full">
          Send Another Request
        </Button>
      </motion.div>
    )
  }

  const inputClasses = (hasError: boolean) => `
    w-full bg-bg border ${hasError ? 'border-error' : 'border-border'} 
    rounded-2xl px-6 py-4 text-text font-medium text-lg
    focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary 
    placeholder:text-text/20 transition-all duration-300
  `

  return (
    <div className="bg-bg-secondary/50 backdrop-blur-sm border border-border p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700" />
      
      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-primary/60 ml-1">Full Name</label>
            <input 
              name="name"
              required
              type="text" 
              placeholder="Full Name"
              className={inputClasses(!!errors.name)} 
            />
            {errors.name && <p className="text-error text-xs font-bold flex items-center gap-1.5 mt-2 ml-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.name}</p>}
          </div>
          <div className="space-y-3">
            <label className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-primary/60 ml-1">Email Address</label>
            <input 
              name="email"
              required
              type="email" 
              placeholder="Email Address"
              className={inputClasses(!!errors.email)} 
            />
            {errors.email && <p className="text-error text-xs font-bold flex items-center gap-1.5 mt-2 ml-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-primary/60 ml-1">Phone Number</label>
            <input 
              name="phone"
              type="tel" 
              placeholder="Phone Number"
              className={inputClasses(false)} 
            />
          </div>
          <div className="space-y-3">
            <label className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-primary/60 ml-1">Service Type</label>
            <div className="relative">
              <select 
                name="service"
                className={`${inputClasses(false)} appearance-none cursor-pointer pr-12`}
              >
                <option value="hvac">HVAC Service</option>
                <option value="plumbing">Plumbing Service</option>
                <option value="commercial">Commercial Service</option>
                <option value="financing">Financing Quote</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-primary/60 ml-1">Message / Issue Details</label>
          <textarea 
            name="message"
            rows={5} 
            placeholder="Tell us about the issue..."
            className={`${inputClasses(!!errors.message)} resize-none`}
          ></textarea>
          {errors.message && <p className="text-error text-xs font-bold flex items-center gap-1.5 mt-2 ml-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.message}</p>}
        </div>

        <div className="pt-4">
          <Button 
            type="submit"
            size="xl" 
            disabled={isSubmitting}
            className="w-full sm:w-auto min-w-[200px] shadow-glow"
          >
            {isSubmitting ? 'Sending Request...' : 'Send Service Request'}
          </Button>
          <p className="text-[10px] text-muted mt-6 font-medium tracking-tight opacity-60">
            By clicking "Send Service Request", you agree to be contacted by Buzzell Plumbing-Heating-Air regarding your inquiry.
          </p>
        </div>
      </form>
    </div>
  )
}
