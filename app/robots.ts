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
          '/resume',
          '/resume.pdf',
          // block sensitive JSON endpoints but allow public JSON like manifest
          '/*.env',
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
        disallow: ['/private/', '/admin/', '/api/', '/resume', '/resume.pdf'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/resume', '/resume.pdf'],
        crawlDelay: 0,
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/resume', '/resume.pdf'],
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/resume', '/resume.pdf'],
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/resume', '/resume.pdf'],
      },
      {
        userAgent: 'WhatsApp',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/resume', '/resume.pdf'],
      },
      {
        userAgent: 'Slackbot-LinkExpanding',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/resume', '/resume.pdf'],
      },
      {
        userAgent: 'Discordbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/resume', '/resume.pdf'],
      },
      {
        userAgent: 'TelegramBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/resume', '/resume.pdf'],
      },
      // Block aggressive crawlers and scrapers (allow major search engines)
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
          'CCBot',
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
      // Allow DuckDuckGo and other mainstream bots via the default rule above
    ],
    sitemap: 'https://kalashvasaniya.com/sitemap.xml',
    host: 'https://kalashvasaniya.com',
  }
} 