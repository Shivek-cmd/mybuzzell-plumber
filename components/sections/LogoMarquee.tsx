export default function LogoMarquee() {
  const logos = [
    'Carrier Authorized Dealer',
    'GEFA Financing Partner',
    'Wells Fargo Direct Integration',
    'Angie’s List 5-Star Certified',
    'Top Rated Middle Georgia Plumber',
    'Rinnai Tankless Installers',
    'NATE Certified Technicians',
    '24/7 Emergency Dispatch',
  ]

  // Double the array to make seamless scrolling
  const scrollItems = [...logos, ...logos]

  return (
    <div className="py-6 bg-bg-secondary border-y border-border overflow-hidden whitespace-nowrap flex group">
      <div className="animate-marquee inline-flex flex-nowrap shrink-0">
        {scrollItems.map((logo, i) => (
          <span key={i} className="px-12 text-sm font-mono tracking-widest font-bold uppercase text-text/60 inline-block">
            {logo}
          </span>
        ))}
      </div>
    </div>
  )
}
