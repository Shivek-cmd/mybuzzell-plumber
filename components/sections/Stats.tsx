import AnimatedSection from '@/components/ui/AnimatedSection'
import { Counter } from '@/components/ui/Counter'

const stats = [
  { value: 52, suffix: '+', label: 'Years Serving GA' },
  { value: 2,  suffix: '', label: 'Locations' },
  { value: 24, suffix: '/7', label: 'Emergency Dispatch' },
  { value: 16, suffix: 'k', prefix: '$', label: 'GEFA Financing' },
]

export default function Stats() {
  return (
    <section className="bg-bg py-24 lg:py-32">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-border">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.15} className="pl-6 md:pl-10 text-left">
              <div className="font-display font-semibold tracking-tighter text-5xl lg:text-7xl text-text mb-3">
                <Counter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-sm uppercase font-mono tracking-widest font-bold text-muted">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
