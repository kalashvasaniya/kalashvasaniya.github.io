import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/', 
          '/api/', 
          '/_next/', 
          '/admin/', 
          '*.json',
          '/tmp/',
          '/cache/',
          '/_vercel/',
          '/node_modules/'
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'WhatsApp',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'Slackbot-LinkExpanding',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      // Block bad bots
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot'],
        disallow: '/',
      }
    ],
    sitemap: 'https://kalashvasaniya.com/sitemap.xml',
    host: 'https://kalashvasaniya.com',
  }
} 