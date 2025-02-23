import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dimitribertin.com/en',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          fr: 'https://dimitribertin.com/fr',
        },
      },
    },
    {
      url: 'https://dimitribertin.com/en/photography',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          fr: 'https://dimitribertin.com/fr/photography',
        },
      },
    },
    {
      url: 'https://dimitribertin.com/en/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          fr: 'https://dimitribertin.com/fr/projects',
        },
      },
    },
    {
      url: 'https://dimitribertin.com/en/projects/axa',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          fr: 'https://dimitribertin.com/fr/projects/axa',
        },
      },
    },
    {
      url: 'https://dimitribertin.com/en/projects/richard-mille',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          fr: 'https://dimitribertin.com/fr/projects/richard-mille',
        },
      },
    },
    {
      url: 'https://dimitribertin.com/en/projects/nature-cos',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          fr: 'https://dimitribertin.com/fr/projects/nature-cos',
        },
      },
    },
  ]
}
