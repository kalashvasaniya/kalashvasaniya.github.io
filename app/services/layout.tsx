import type { Metadata } from "next";
import AdvancedSEO from "../components/AdvancedSEO";
import RichSnippetSEO from "../components/RichSnippetSEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Services",
  description: "Writer + Developer services. Hire me for content writing, development, and startup promotion.",
  keywords: [
    "services",
    "content writing",
    "web development",
    "startup promotion",
    "technical writing",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services - Kalash Vasaniya",
    description: "Writer + Developer services. Hire me for content writing, development, and startup promotion.",
    url: "https://kalashvasaniya.com/services",
    siteName: "Kalash Vasaniya",
    images: [
      {
        url: "https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg",
        width: 1200,
        height: 630,
        alt: "Services - Writer + Developer",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Kalash Vasaniya",
    description: "Writer + Developer services. Hire me for content writing, development, and startup promotion.",
    images: [
      {
        url: "https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg",
        alt: "Services - Writer + Developer",
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

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdvancedSEO page="services" />
      <RichSnippetSEO page="services" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://kalashvasaniya.com" },
          { name: "Services", url: "https://kalashvasaniya.com/services" },
        ]}
      />
      {children}
    </>
  );
}
