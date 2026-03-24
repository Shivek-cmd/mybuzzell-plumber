import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import ContactForm from '@/components/sections/ContactForm'
import { Metadata } from 'next'
import { Phone, MapPin, Clock } from 'lucide-react'

import { siteConfig } from '@/constants'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Contact Local HVAC & Plumbing Experts | Middle Georgia | Buzzell',
  description: 'Book your service in Macon or Warner Robins GA. 24/7 emergency support for HVAC repairs and plumbing leaks. Trusted since 1974.',
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: 'Contact Us | Buzzell Plumbing-Heating-Air',
    description: 'Expert heating and cooling support in Middle Georgia.',
    url: `${siteConfig.url}/contact`,
    images: [{ url: '/og/og-contact.jpg', width: 1200, height: 630, alt: 'Contact Buzzell' }]
  }
}

export default function ContactPage() {
  const breadcrumbJson = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Contact Us', url: `${siteConfig.url}/contact` }
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
      <Navbar />
      <main id="main">
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-bg overflow-hidden border-b border-border">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <div className="max-w-4xl">
                <span className="text-primary font-mono text-[11px] font-bold uppercase tracking-[0.25em] mb-6 block opacity-60">Connected 24/7</span>
                <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-text mb-8">
                   Middle Georgia's <br className="hidden md:block" /> Direct Line to <br className="hidden md:block" /> Expert Care.
                </h1>
                <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed font-medium mb-4">
                  We treat every service call like we’re helping family. Whether it’s an urgent repair or a planned upgrade, our team is ready to serve you.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  We respond within 24 hours or less.
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-24 bg-bg lg:py-40">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Form Side */}
              {/* Form Side */}
              <AnimatedSection>
                <div className="mb-12">
                  <h2 className="font-display text-4xl md:text-5xl font-black text-text mb-6 tracking-tight">Direct Dispatch.</h2>
                  <p className="text-muted text-lg font-medium max-w-md italic">Fill out the secure form below to alert our technical team at the Macon or Warner Robins hub.</p>
                </div>
                <ContactForm />
              </AnimatedSection>

              {/* Info Side */}
              <div className="flex flex-col gap-12">
                   <div>
                      <h3 className="font-display text-2xl font-black text-text mb-6 tracking-tight">Direct Support.</h3>
                      <div className="space-y-8">
                        <div className="flex gap-4">
                          <div className="h-10 w-10 bg-bg-secondary border border-border rounded-lg flex items-center justify-center shrink-0">
                            <Phone className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs font-mono font-bold uppercase tracking-widest mb-1 text-text/40 opacity-60">Emergency Dispatch 24/7</p>
                            <a href="tel:4787439321" className="text-xl font-bold text-text hover:text-primary transition-all underline decoration-border-hover underline-offset-4">478-743-9321</a>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="h-10 w-10 bg-bg-secondary border border-border rounded-lg flex items-center justify-center shrink-0">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs font-mono font-bold uppercase tracking-widest mb-1 text-text/40 opacity-60">Locations</p>
                            <p className="text-muted font-medium">Macon & Warner Robins, GA</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="h-10 w-10 bg-bg-secondary border border-border rounded-lg flex items-center justify-center shrink-0">
                            <Clock className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs font-mono font-bold uppercase tracking-widest mb-1 text-text/40 opacity-60">Business Hours</p>
                            <p className="text-muted font-medium">Monday — Friday: 8am - 5pm <br /> <span className="text-primary font-black">24/7 Emergency Dispatch</span></p>
                          </div>
                        </div>
                      </div>
                   </div>

                   <div className="mt-auto bg-bg p-10 rounded-[2rem] border border-border hover:shadow-glow transition-all duration-500 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
                      <p className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] mb-4 text-primary">Serving Middle Georgia Since 1974</p>
                      <h4 className="font-display text-2xl font-black text-text mb-4 tracking-tight">Licensed & Locally Trusted.</h4>
                      <p className="text-muted text-sm leading-relaxed mb-8 font-medium">
                        Every Buzzell technician is master-certified and background-vetted. We don't just fix units—we protect your home's infrastructure.
                      </p>
                      <div className="flex gap-4">
                         <div className="px-4 py-2 bg-bg-secondary border border-border rounded-lg text-[10px] font-bold uppercase tracking-widest text-text/60">Carrier Factory Dealer</div>
                         <div className="px-4 py-2 bg-bg-secondary border border-border rounded-lg text-[10px] font-bold uppercase tracking-widest text-text/60">GA Master Plumber</div>
                      </div>
                   </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Embed Section */}
        <section className="py-24 border-t border-border bg-bg-secondary">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="font-display text-4xl md:text-5xl font-black text-text mb-6 tracking-tight">Visit Our Offices.</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto font-medium">Headquartered in Macon and Warner Robins to serve all of Middle Georgia.</p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-border shadow-2xl h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13444.64673898808!2d-83.64966141315897!3d32.84092557458156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f3fd32f1704e9b%3A0xea69418af6b8897c!2sBuzzell%20Plumbing%20Heating%20Air!5e0!3m2!1sen!2sus!4v1711270233421!5m2!1sen!2sus" 
                className="w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
