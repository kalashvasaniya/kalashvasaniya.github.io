import type { Metadata } from "next";
import AdvancedSEO from "../components/AdvancedSEO";
import RichSnippetSEO from "../components/RichSnippetSEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on technology, travel, entrepreneurship, and building products as a digital nomad.",
  keywords: [
    "blog",
    "technology",
    "entrepreneurship",
    "product development",
    "digital nomad",
    "content creation",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog - Kalash Vasaniya",
    description: "Thoughts on technology, travel, entrepreneurship, and building products as a digital nomad.",
    url: "https://kalashvasaniya.com/blog",
    siteName: "Kalash Vasaniya",
    images: [
      {
        url: "https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg",
        width: 1200,
        height: 630,
        alt: "Blog - Technology, Entrepreneurship, and Building",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Kalash Vasaniya",
    description: "Thoughts on technology, travel, entrepreneurship, and building products as a digital nomad.",
    images: [
      {
        url: "https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg",
        alt: "Blog - Technology, Entrepreneurship, and Building",
      },
    ],
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