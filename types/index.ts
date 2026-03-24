export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface SiteConfig {
  name: string
  url: string
  description: string
  ogImage: string
  links: {
    twitter?: string
    linkedin?: string
    facebook?: string
    instagram?: string
    youtube?: string
  }
  gtmId?: string
}
