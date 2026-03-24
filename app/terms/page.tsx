import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Buzzell Plumbing, Heating & Air',
  description: 'Our terms and conditions of use for our Service and website.',
}

export default function TermsPage() {
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
                  Terms of Service.
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
                <p>Please read these Terms of Use (“Terms”, “Terms of Use”) carefully before using the https://mybuzzell.com website (the “Service”) operated by Buzzell Plumbing, Heating & Air (“us”, “we”, or “our”).</p>
                <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms.</p>
              </div>

              <div>
                <h2 className="text-text font-display text-2xl font-black mb-6 uppercase tracking-tight">Intellectual Property</h2>
                <p>The Service and its original content, features and functionality are and will remain the exclusive property of Buzzell Plumbing, Heating & Air. and its licensors. The service is provided without warranties of any kind.</p>
              </div>

              <div>
                <h2 className="text-text font-display text-2xl font-black mb-6 uppercase tracking-tight">Termination</h2>
                <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination.</p>
              </div>

              <div>
                <h2 className="text-text font-display text-2xl font-black mb-6 uppercase tracking-tight">Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of United States without regard to its conflict of law provisions.</p>
              </div>

              <div>
                <h2 className="text-text font-display text-2xl font-black mb-6 uppercase tracking-tight">Changes</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.</p>
              </div>

              <div>
                <h2 className="text-text font-display text-2xl font-black mb-6 uppercase tracking-tight">Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at <a href="tel:4787439321" className="text-primary font-bold">478-743-9321</a>.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
