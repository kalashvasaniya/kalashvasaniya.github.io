export default function PerformanceOptimization() {
  return (
    <>
      {/* Performance optimization meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/favicon_io_white/favicon.ico" as="image" />
      <link rel="preload" href="/favicon_io_black/favicon.ico" as="image" />
      
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//res.cloudinary.com" />
      <link rel="dns-prefetch" href="//twitter.com" />
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
      <link rel="dns-prefetch" href="//medium.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Preconnect for critical third-party resources */}
      <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Resource hints for better performance */}
      <link rel="preload" href="/globals.css" as="style" />
      <link rel="preload" href="/favicon_io_white/site.webmanifest" as="fetch" crossOrigin="anonymous" />
      
      {/* Performance optimization for images */}
      <meta name="image:alt_text" content="Kalash Vasaniya - Founder of SuperFast, Entrepreneur, and Creator" />
      
      {/* Mobile optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Kalash Vasaniya" />
      
      {/* Theme and color optimization */}
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
      <meta name="color-scheme" content="light dark" />
      
      {/* Security headers for better performance */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Cache control hints */}
      <meta name="cache-control" content="public, max-age=31536000, immutable" />
    </>
  );
} 