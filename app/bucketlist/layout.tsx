import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bucket List",
  description: "My bucket list of places to visit and experiences to have while traveling the world as a digital nomad. Adventures, destinations, and life goals from an entrepreneur's perspective.",
  keywords: [
    "bucket list", 
    "travel", 
    "digital nomad", 
    "world travel", 
    "adventures", 
    "travel goals",
    "nomad lifestyle",
    "entrepreneur travel",
    "travel experiences",
    "wanderlust",
    "remote work travel",
    "destination goals"
  ],
  alternates: {
    canonical: '/bucketlist',
  },
  openGraph: {
    title: "Bucket List - Kalash Vasaniya",
    description: "My bucket list of places to visit and experiences to have while traveling the world as a digital nomad. Adventures, destinations, and life goals from an entrepreneur's perspective.",
    url: 'https://kalashvasaniya.com/bucketlist',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754520552/linko/njvxy2drypifthoidfig.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalash Vasaniya Bucket List - Digital Nomad Travel Goals',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bucket List - Kalash Vasaniya",
    description: "My bucket list of places to visit and experiences to have while traveling the world as a digital nomad.",
    images: [{
      url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754520552/linko/njvxy2drypifthoidfig.jpg',
      alt: 'Kalash Vasaniya Bucket List - Digital Nomad Travel Goals',
    }],
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
};

export default function BucketListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 