'use client'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function TextIsland({ overline, text, className = '' }: {
  overline?: string; text: string; className?: string
}) {
  return (
    <section className={`py-32 lg:py-48 bg-bg ${className}`}>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          {overline && (
            <p className="text-[11px] text-text font-bold font-mono uppercase tracking-[0.25em] mb-12 opacity-60">
              {overline}
            </p>
          )}
          <p className="font-display font-medium tracking-tight text-[clamp(1.8rem,4.5vw,4.5rem)] text-text leading-[1.1] max-w-5xl mx-auto">
            {text}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
