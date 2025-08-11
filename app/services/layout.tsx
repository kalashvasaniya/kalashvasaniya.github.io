import type { Metadata } from "next";
import AdvancedSEO from "../components/AdvancedSEO";
import RichSnippetSEO from "../components/RichSnippetSEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Services",
  description: "Writer + Developer services. I help startups promote their products and take on gig work. Hire me for content writing, development, and startup promotion.",
  keywords: [
    "Kalash Vasaniya",
    "writer",
    "developer",
    "startup promotion",
    "content writing",
    "gig work",
    "freelance",
    "startup marketing",
    "technical writing",
    "web development"
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Services | Kalash Vasaniya",
    description: "Writer + Developer services. I help startups promote their products and take on gig work.",
    url: 'https://kalashvasaniya.com/services',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalash Vasaniya - Writer and Developer Services',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Services | Kalash Vasaniya",
    description: "Writer + Developer services. I help startups promote their products and take on gig work.",
    images: [{
      url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg',
      alt: 'Kalash Vasaniya - Writer and Developer Services',
    }],
    creator: '@amikalash',
    site: '@amikalash',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
