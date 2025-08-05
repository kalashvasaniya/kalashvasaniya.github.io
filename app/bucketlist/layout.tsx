import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import JsonLd from "../components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bucket List - Kalash Vasaniya",
  description: "My bucket list of places to visit and experiences to have while traveling the world as a digital nomad.",
  keywords: ["bucket list", "travel", "digital nomad", "world travel", "adventures", "Kalash Vasaniya"],
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
    canonical: '/bucketlist',
  },
  openGraph: {
    title: "Bucket List - Kalash Vasaniya",
    description: "My bucket list of places to visit and experiences to have while traveling the world as a digital nomad.",
    url: 'https://kalashvasaniya.com/bucketlist',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalash Vasaniya - Bucket List',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bucket List - Kalash Vasaniya",
    description: "My bucket list of places to visit and experiences to have while traveling the world as a digital nomad.",
    images: ['https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg'],
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
    google: 'your-google-verification-code',
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
};

export default function BucketListLayout({
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