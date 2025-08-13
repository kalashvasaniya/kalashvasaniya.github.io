import type { Metadata } from "next";
import AdvancedSEO from "../components/AdvancedSEO";
import RichSnippetSEO from "../components/RichSnippetSEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Collections",
  description: "Curated collections of books, must-watch videos, and resources I recommend.",
  keywords: [
    "collections",
    "books",
    "reading list",
    "must watch videos",
    "resources",
    "recommendations",
  ],
  alternates: {
    canonical: '/collections',
  },
  openGraph: {
    title: "Collections - Kalash Vasaniya",
    description: "Curated collections of books, must-watch videos, and resources I recommend.",
    url: 'https://kalashvasaniya.com/collections',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1755127247/linko/wuanl2gm9rvseaunain8.jpg',
        width: 1200,
        height: 630,
        alt: 'Collections - Books, Videos, and Resources',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Collections - Kalash Vasaniya",
    description: "Curated collections of books, must-watch videos, and resources I recommend.",
    images: [{
      url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1755127247/linko/wuanl2gm9rvseaunain8.jpg',
      alt: 'Collections - Books, Videos, and Resources',
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

export default function CollectionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdvancedSEO page="collections" />
      <RichSnippetSEO page="collections" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://kalashvasaniya.com" },
          { name: "Collections", url: "https://kalashvasaniya.com/collections" },
        ]}
      />
      {children}
    </>
  );
}


