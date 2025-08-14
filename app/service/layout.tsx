import type { Metadata } from "next";
import AdvancedSEO from "../components/AdvancedSEO";
import RichSnippetSEO from "../components/RichSnippetSEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Service",
  description: "Writer + Developer service. Hire me for content writing, development, and startup promotion.",
  keywords: [
    "service",
    "content writing",
    "web development",
    "startup promotion",
    "technical writing",
  ],
  alternates: {
    canonical: "/service",
  },
  openGraph: {
    title: "Service - Kalash Vasaniya",
    description: "Writer + Developer service. Hire me for content writing, development, and startup promotion.",
    url: "https://kalashvasaniya.com/service",
    siteName: "Kalash Vasaniya",
    images: [
      {
        url: "https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg",
        width: 1200,
        height: 630,
        alt: "Service - Writer + Developer",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service - Kalash Vasaniya",
    description: "Writer + Developer service. Hire me for content writing, development, and startup promotion.",
    images: [
      {
        url: "https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg",
        alt: "Service - Writer + Developer",
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

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdvancedSEO page="service" />
      <RichSnippetSEO page="service" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://kalashvasaniya.com" },
          { name: "Service", url: "https://kalashvasaniya.com/service" },
        ]}
      />
      {children}
    </>
  );
}
