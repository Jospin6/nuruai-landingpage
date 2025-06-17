import type { MetadataRoute } from 'next'
import { mainUrl } from "@/helpers/constants"
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: `${mainUrl}/sitemap.xml`,
  }
}