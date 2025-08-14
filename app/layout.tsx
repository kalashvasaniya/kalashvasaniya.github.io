import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { Analytics } from "@vercel/analytics/next"
import RichSnippetSEO from "./components/RichSnippetSEO";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kalash Vasaniya",
    template: "%s | Kalash Vasaniya"
  },
  description: "hi, i'm kalash, i build things that make your life easier and i'm the founder of superfast, shipping stupidly fast so you don't have to.",
  keywords: [
    "Kalash Vasaniya", 
    "SuperFast", 
    "entrepreneur", 
    "founder", 
    "creator", 
    "startup", 
    "technology", 
    "Next.js", 
    "boilerplate",
    "digital nomad",
    "product development",
    "software engineer",
    "innovation",
    "tech entrepreneur",
    "social media",
    "content creator",
    "viral content",
    "building in public",
    "full-stack developer",
    "indie hacker",
    "SaaS founder",
    "React developer",
    "TypeScript",
    "web development",
    "startup promotion",
    "content writing",
    "technical writing",
    "freelance developer",
    "remote work",
    "business automation",
    "MVP development",
    "landing page optimization",
    "growth hacking",
    "social media marketing",
    "Twitter monetization",
    "viral marketing",
    "personal branding",
    "developer tools",
    "productivity tools",
    "Bangalore developer",
    "Indian entrepreneur",
    "tech blogger"
  ],
  authors: [{ name: "Kalash Vasaniya", url: "https://kalashvasaniya.com" }],
  creator: "Kalash Vasaniya",
  publisher: "Kalash Vasaniya",
  applicationName: "Kalash Vasaniya Portfolio",
  category: "Technology",
  classification: "Personal Website",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kalashvasaniya.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    title: "Kalash Vasaniya",
    description: "hi, i'm kalash, i build things that make your life easier and i'm the founder of superfast, shipping stupidly fast so you don't have to.",
    url: 'https://kalashvasaniya.com',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalash Vasaniya - Founder of SuperFast, Entrepreneur, and Creator',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kalash Vasaniya",
    description: "hi, i'm kalash, i build things that make your life easier and i'm the founder of superfast, shipping stupidly fast so you don't have to.",
    images: [{
      url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg',
      alt: 'Kalash Vasaniya - Founder of SuperFast, Entrepreneur, and Creator',
    }],
    creator: '@amikalash',
    site: '@amikalash',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'your-google-verification-code', // Add when Google Search Console is set up
  // },
  icons: {
    icon: [
      { url: '/favicon_io_white/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io_white/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io_white/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon_io_white/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon_io_white/favicon.ico',
    apple: '/favicon_io_white/apple-touch-icon.png',
  },
  manifest: '/favicon_io_white/site.webmanifest',
  other: {
    'theme-color': '#ffffff',
    'color-scheme': 'light dark',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Kalash Vasaniya',
    'application-name': 'Kalash Vasaniya',
    'msapplication-TileColor': '#ffffff',
    'viewport': 'width=device-width, initial-scale=1, maximum-scale=5',
    'referrer': 'origin-when-cross-origin',
    'X-UA-Compatible': 'IE=edge',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="hi, i'm kalash, i build things that make your life easier and i'm the founder of superfast, shipping stupidly fast so you don't have to." />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/favicon_io_white/favicon.ico" as="image" />
        <link rel="preload" href="/favicon_io_black/favicon.ico" as="image" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <link rel="dns-prefetch" href="//twitter.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//medium.com" />
        
        {/* Default favicon (white) */}
        <link rel="icon" href="/favicon_io_white/favicon.ico" />
        
        {/* Light mode favicon support (black) */}
        <link rel="icon" href="/favicon_io_black/favicon.ico" media="(prefers-color-scheme: light)" />
        
        {/* Additional favicon formats for light mode (black) */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io_black/favicon-16x16.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io_black/favicon-32x32.png" media="(prefers-color-scheme: light)" />
        <link rel="apple-touch-icon" href="/favicon_io_black/apple-touch-icon.png" media="(prefers-color-scheme: light)" />
        
        {/* Additional favicon formats for dark mode (white) */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io_white/favicon-16x16.png" media="(prefers-color-scheme: dark)" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io_white/favicon-32x32.png" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/favicon_io_white/apple-touch-icon.png" media="(prefers-color-scheme: dark)" />
        
        {/* Android Chrome icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon_io_black/android-chrome-192x192.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon_io_black/android-chrome-512x512.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon_io_white/android-chrome-192x192.png" media="(prefers-color-scheme: dark)" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon_io_white/android-chrome-512x512.png" media="(prefers-color-scheme: dark)" />
        
        {/* Additional icon sizes for better compatibility */}
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon_io_black/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon_io_black/android-chrome-512x512.png" />
        
        {/* Web manifest */}
        <link rel="manifest" href="/favicon_io_white/site.webmanifest" />
        {/* RSS feed */}
        <link rel="alternate" type="application/rss+xml" title="Kalash Vasaniya RSS" href="/rss.xml" />
        
        {/* JSON-LD Structured Data */}
        <JsonLd />
        <RichSnippetSEO />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
