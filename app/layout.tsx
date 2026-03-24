import Script from 'next/script'
import type { Metadata } from 'next'
import { Inter_Tight, Chivo_Mono } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/constants'
import GridLines from '@/components/ui/GridLines'
import PageTransition from '@/components/layout/PageTransition'

const interTight = Inter_Tight({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const chivoMono = Chivo_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Reliable. Honest. Premium.`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Middle Georgia HVAC', 'Macon Plumber', 'Warner Robins AC repair', 'Buzzell Plumbing', 'Emergency repairs'],
  authors: [{ name: siteConfig.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Reliable. Honest. Premium.`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Reliable. Honest. Premium.`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  alternates: { canonical: siteConfig.url },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Hardcoding light theme logic since the business aesthetic is primarily soft linen/warm white
  const themeScript = `(function(){
    document.documentElement.setAttribute('data-theme', 'light');
  })()`

  return (
    <html lang="en" data-theme="light" className={`${interTight.variable} ${chivoMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="theme-color" content="#f4f2ed" />
      </head>
      <body className="grain bg-bg text-text antialiased" suppressHydrationWarning>
        <GridLines />
        {/* Google Tag Manager */}
        {siteConfig.gtmId && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${siteConfig.gtmId}');`}
          </Script>
        )}
        {/* GTM Noscript */}
        {siteConfig.gtmId && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${siteConfig.gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 bg-primary text-bg px-4 py-2 rounded">
          Skip to content
        </a>
        <main id="main">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  )
}
