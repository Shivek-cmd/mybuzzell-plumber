import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Buzzell Plumbing, Heating & Air',
  description: 'Our policies regarding the collection, use and disclosure of Personal Information when you use our Service.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-bg overflow-hidden border-b border-border">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <div className="max-w-4xl">
                <span className="text-primary font-mono text-[11px] font-bold uppercase tracking-[0.25em] mb-6 block opacity-60">Legal Information</span>
                <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-text mb-8">
                  Privacy Policy.
                </h1>
                <p className="text-muted font-medium">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-24 bg-bg lg:py-40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-stone prose-lg max-w-none text-muted font-medium leading-relaxed space-y-12">
              <div>
                <p>Buzzell Plumbing, Heating & Air (“us”, “we”, or “our”) operates Buzzell Plumbing, Heating & Air website https://mybuzzell.com (the “Service”).</p>
                <p>This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.</p>
                <p>We will not use or share your information with anyone except as described in this Privacy Policy. We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
              </div>

              <div>
                <h2 className="text-text font-display text-2xl font-black mb-6 uppercase tracking-tight">Information Collection And Use</h2>
                <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (“Personal Information”) may include, but is not limited to: Name, Email address, Telephone number, Address.</p>
              </div>

              <div>
                <h2 className="text-text font-display text-2xl font-black mb-6 uppercase tracking-tight">Log Data</h2>
                <p>We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
              </div>

              <div>
                <h2 className="text-text font-display text-2xl font-black mb-6 uppercase tracking-tight">Cookies</h2>
                <p>Cookies are files with small amount of data, which may include an anonymous unique identifier. We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
              </div>

              <div>
                <h2 className="text-text font-display text-2xl font-black mb-6 uppercase tracking-tight">Security</h2>
                <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
              </div>

              <div>
                <h2 className="text-text font-display text-2xl font-black mb-6 uppercase tracking-tight">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at <a href="tel:4787439321" className="text-primary font-bold">478-743-9321</a>.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
