import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://zenithkampsport.se', lastModified: new Date() },
    { url: 'https://zenithkampsport.se/bli-medlem', lastModified: new Date() },
    { url: 'https://zenithkampsport.se/kontakt', lastModified: new Date() },
    { url: 'https://zenithkampsport.se/medlemskap', lastModified: new Date() },
    { url: 'https://zenithkampsport.se/om-oss', lastModified: new Date() },
    { url: 'https://zenithkampsport.se/provtrana', lastModified: new Date() },
    { url: 'https://zenithkampsport.se/faq', lastModified: new Date() },
    { url: 'https://zenithkampsport.se/schema', lastModified: new Date() },
    { url: 'https://zenithkampsport.se/stodmedlem', lastModified: new Date() },
    { url: 'https://zenithkampsport.se/villkor', lastModified: new Date() },
  ]
}