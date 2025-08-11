import type { Metadata } from "next";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Security Policy",
  description: "Security policy and responsible disclosure guidelines for Kalash Vasaniya's website and projects. Information about vulnerability reporting and security practices.",
  keywords: [
    "security policy", 
    "responsible disclosure", 
    "vulnerability reporting", 
    "security guidelines", 
    "cybersecurity",
    "data protection",
    "privacy policy",
    "web security",
    "information security",
    "security practices",
    "bug bounty",
    "security contact"
  ],
  authors: [{ name: "Kalash Vasaniya", url: "https://kalashvasaniya.com" }],
  creator: "Kalash Vasaniya",
  publisher: "Kalash Vasaniya",
  category: "Legal",
  alternates: {
    canonical: '/security-policy',
  },
  openGraph: {
    title: "Security Policy - Kalash Vasaniya",
    description: "Security policy and responsible disclosure guidelines for Kalash Vasaniya's website and projects.",
    url: 'https://kalashvasaniya.com/security-policy',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalash Vasaniya Security Policy',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Security Policy - Kalash Vasaniya",
    description: "Security policy and responsible disclosure guidelines for Kalash Vasaniya's website and projects.",
    creator: '@kalashvasaniya',
    site: '@kalashvasaniya',
    images: [{
      url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg',
      alt: 'Kalash Vasaniya Security Policy',
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

export default function SecurityPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://kalashvasaniya.com" },
          { name: "Security Policy", url: "https://kalashvasaniya.com/security-policy" },
        ]}
      />
      {children}
    </>
  );
}