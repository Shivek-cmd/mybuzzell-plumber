import { SiteConfig, NavItem } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Buzzell Plumbing-Heating-Air, Inc.',
  url: 'https://choose.mybuzzell.com',
  description: "Middle Georgia's most trusted full-service mechanical contractors providing plumbing & HVAC solutions since 1974. Expert Macon & Warner Robins support. Learn more →",
  ogImage: '/og/og-default.jpg',
  links: {
    facebook: 'https://www.facebook.com/BuzzellHVAC/',
    youtube: 'https://www.youtube.com/channel/UCp6DzuvRgo_CfTKhBhV5vuw',
    instagram: 'https://instagram.com/BuzzellHVAC'
  },
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX',
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Services', 
    href: '/services',
    children: [
      { label: 'HVAC', href: '/hvac' },
      { label: 'Plumbing', href: '/plumbing' },
      { label: 'Commercial', href: '/commercial' },
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Financing', href: '/financing' },
  { label: 'Maintenance Plans', href: '/maintenance' },
  { label: 'Contact', href: '/contact' },
]

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://choose.mybuzzell.com'
