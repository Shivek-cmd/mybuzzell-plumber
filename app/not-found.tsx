import Link from 'next/link'
import Button from '@/components/ui/Button'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-bg relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square rounded-full bg-bg-secondary/20 pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-lg px-4">
          <p className="font-display text-[clamp(6rem,20vw,12rem)] font-black text-primary/10 tracking-tighter leading-none mb-4">404</p>
          <h1 className="font-display text-4xl font-black text-text mb-6">Page Not Found</h1>
          <p className="text-muted text-lg font-medium leading-relaxed mb-10">We couldn't find the plumbing or heating issue you were looking for. Let's get you back on track.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" asChild>
              Go to Homepage
            </Button>
            <Button variant="outline" href="/contact" asChild>
              Contact Support
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
