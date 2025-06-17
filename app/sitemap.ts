import { mainUrl } from "@/helpers/constants"
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${mainUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
