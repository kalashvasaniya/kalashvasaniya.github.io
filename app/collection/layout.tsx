import type { Metadata } from "next";
import AdvancedSEO from "../components/AdvancedSEO";
import RichSnippetSEO from "../components/RichSnippetSEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
      title: "Collection",
    description: "Curated collection of books, must-watch videos, and resources I recommend.",
    keywords: [
        "collection",
    "books",
    "reading list",
    "must watch videos",
    "resources",
    "recommendations",
  ],
  alternates: {
    canonical: '/collection',
  },
  openGraph: {
          title: "Collection - Kalash Vasaniya",
      description: "Curated collection of books, must-watch videos, and resources I recommend.",
      url: 'https://kalashvasaniya.com/collection',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1755127247/linko/wuanl2gm9rvseaunain8.jpg',
        width: 1200,
        height: 630,
        alt: 'Collection - Books, Videos, and Resources',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
          title: "Collection - Kalash Vasaniya",
      description: "Curated collection of books, must-watch videos, and resources I recommend.",
    images: [{
      url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1755127247/linko/wuanl2gm9rvseaunain8.jpg',
              alt: 'Collection - Books, Videos, and Resources',
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

export default function CollectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
              <AdvancedSEO page="collection" />
        <RichSnippetSEO page="collection" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://kalashvasaniya.com" },
                      { name: "Collection", url: "https://kalashvasaniya.com/collection" },
        ]}
      />
      {children}
    </>
  );
}


