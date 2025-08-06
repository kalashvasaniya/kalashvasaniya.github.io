import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kalash Vasaniya - Entrepreneur, Founder & Creator",
    template: "%s | Kalash Vasaniya"
  },
  description: "Hi, I'm Kalash. I love creating things for others. Founder of SuperFast, entrepreneur, and creator. From selling Dragon Ball Z games at 13 to building companies that impact millions of users worldwide.",
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
    "tech entrepreneur"
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
    },
  },
  openGraph: {
    title: "Kalash Vasaniya - Entrepreneur, Founder & Creator",
    description: "Hi, I'm Kalash. I love creating things for others. Founder of SuperFast, entrepreneur, and creator. From selling Dragon Ball Z games at 13 to building companies that impact millions of users worldwide.",
    url: 'https://kalashvasaniya.com',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg',
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
    title: "Kalash Vasaniya - Entrepreneur, Founder & Creator",
    description: "Hi, I'm Kalash. I love creating things for others. Founder of SuperFast, entrepreneur, and creator. From selling Dragon Ball Z games at 13 to building companies that impact millions of users worldwide.",
    images: [{
      url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg',
      alt: 'Kalash Vasaniya - Founder of SuperFast, Entrepreneur, and Creator',
    }],
    creator: '@kalashvasaniya',
    site: '@kalashvasaniya',
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
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code when available
  },
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
    'msapplication-config': '/favicon_io_white/browserconfig.xml',
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
        
        {/* JSON-LD Structured Data */}
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
