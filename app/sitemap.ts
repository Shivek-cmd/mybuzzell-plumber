import { MetadataRoute } from 'next'
import { siteConfig } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/hvac',
    '/plumbing',
    '/commercial',
    '/financing',
    '/maintenance',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
