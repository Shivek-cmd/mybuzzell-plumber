'use client'
import { useEffect } from 'react'
import Button from '@/components/ui/Button'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square rounded-full bg-error/5 pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-lg px-4">
          <p className="font-display text-[clamp(4rem,15vw,8rem)] font-black text-error/10 tracking-tighter leading-none mb-4">Error</p>
          <h1 className="font-display text-4xl font-black text-text mb-6">Something went wrong</h1>
          <p className="text-muted text-lg font-medium leading-relaxed mb-10">
            We encountered an unexpected technical issue. Don't worry, your plumbing and heating systems are fine, but our website had a small leak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => reset()}>
              Try again
            </Button>
            <Button variant="outline" href="/">
              Return Home
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
