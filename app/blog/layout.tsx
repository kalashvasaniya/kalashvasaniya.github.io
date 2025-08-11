import type { Metadata } from "next";
import AdvancedSEO from "../components/AdvancedSEO";
import RichSnippetSEO from "../components/RichSnippetSEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Blog",
  description: "My blog where I share thoughts on technology, travel, entrepreneurship, and building products as a digital nomad. Insights from founding SuperFast and creating impactful solutions.",
  keywords: [
    "blog", 
    "technology", 
    "travel", 
    "digital nomad", 
    "product development", 
    "entrepreneurship",
    "startup",
    "SuperFast",
    "founder insights",
    "tech blog",
    "business strategy",
    "innovation"
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "Blog - Kalash Vasaniya",
    description: "My blog where I share thoughts on technology, travel, entrepreneurship, and building products as a digital nomad. Insights from founding SuperFast and creating impactful solutions.",
    url: 'https://kalashvasaniya.com/blog',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754520353/linko/k0xtfxwgkzcstnvij7lc.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalash Vasaniya Blog - Technology, Travel, and Entrepreneurship',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Blog - Kalash Vasaniya",
    description: "My blog where I share thoughts on technology, travel, entrepreneurship, and building products as a digital nomad.",
    images: [{
      url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754520353/linko/k0xtfxwgkzcstnvij7lc.jpg',
      alt: 'Kalash Vasaniya Blog - Technology, Travel, and Entrepreneurship',
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

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdvancedSEO page="blog" />
      <RichSnippetSEO page="blog" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://kalashvasaniya.com" },
          { name: "Blog", url: "https://kalashvasaniya.com/blog" },
        ]}
      />
      {children}
    </>
  );
} 