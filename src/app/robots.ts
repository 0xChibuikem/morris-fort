import { MetadataRoute } from 'next'
import { appConfig } from '../../app.config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: `${appConfig.site.url}/sitemap.xml`,
  }
}