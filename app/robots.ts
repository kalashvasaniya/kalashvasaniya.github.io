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
          '/node_modules/',
          '/.env',
          '/.git'
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
      {
        userAgent: 'Discordbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'TelegramBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      // Block bad bots and scrapers
      {
        userAgent: [
          'AhrefsBot', 
          'SemrushBot', 
          'MJ12bot', 
          'DotBot',
          'rogerbot',
          'Exabot',
          'ia_archiver',
          'archive.org_bot',
          'Baiduspider',
          'YandexBot',
          'DuckDuckBot',
          'CCBot',
          'GPTBot',
          'ChatGPT-User',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'Applebot-Extended',
          'ScrapeBot',
          'MegaBot',
          'DataBot',
          'ScrapingBot',
          'WebReaper',
          'ExtractorPro',
          'HTTrack',
          'wget',
          'curl',
          'python-requests'
        ],
        disallow: '/',
      },
      // Allow specific AI bots that respect robots.txt
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/.env'],
      }
    ],
    sitemap: 'https://kalashvasaniya.com/sitemap.xml',
    host: 'https://kalashvasaniya.com',
  }
} 