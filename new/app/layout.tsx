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
  title: "Kalash Vasaniya",
  description: "Hi, I'm Kalash. I love creating things for others. Founder of SuperFast, entrepreneur, and creator. From selling Dragon Ball Z games at 13 to building companies that impact millions.",
  keywords: ["Kalash Vasaniya", "SuperFast", "entrepreneur", "founder", "creator", "startup", "technology", "Next.js", "boilerplate"],
  authors: [{ name: "Kalash Vasaniya" }],
  creator: "Kalash Vasaniya",
  publisher: "Kalash Vasaniya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kalashvasaniya.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kalash Vasaniya",
    description: "Hi, I'm Kalash. I love creating things for others. Founder of SuperFast, entrepreneur, and creator.",
    url: 'https://kalashvasaniya.com',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: '/favicon_io_black/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Kalash Vasaniya',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kalash Vasaniya",
    description: "Hi, I'm Kalash. I love creating things for others. Founder of SuperFast, entrepreneur, and creator.",
    images: ['/favicon_io_black/android-chrome-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  icons: {
    icon: [
      { url: '/favicon_io_black/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io_black/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon_io_black/favicon.ico',
    apple: '/favicon_io_black/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/favicon_io_black/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicon_io_black/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/favicon_io_black/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Dark mode favicon support */}
        <link rel="icon" href="/favicon_io_black/favicon.ico" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon_io_white/favicon.ico" media="(prefers-color-scheme: dark)" />
        
        {/* Additional favicon formats for light mode */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io_black/favicon-16x16.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io_black/favicon-32x32.png" media="(prefers-color-scheme: light)" />
        <link rel="apple-touch-icon" href="/favicon_io_black/apple-touch-icon.png" media="(prefers-color-scheme: light)" />
        
        {/* Additional favicon formats for dark mode */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io_white/favicon-16x16.png" media="(prefers-color-scheme: dark)" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io_white/favicon-32x32.png" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/favicon_io_white/apple-touch-icon.png" media="(prefers-color-scheme: dark)" />
        
        {/* Android Chrome icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon_io_black/android-chrome-192x192.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon_io_black/android-chrome-512x512.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon_io_white/android-chrome-192x192.png" media="(prefers-color-scheme: dark)" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon_io_white/android-chrome-512x512.png" media="(prefers-color-scheme: dark)" />
        
        {/* Web manifest */}
        <link rel="manifest" href="/favicon_io_black/site.webmanifest" />
        
        {/* JSON-LD Structured Data */}
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
