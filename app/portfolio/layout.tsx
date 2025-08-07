import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore my portfolio of projects, startups, and creations. From SuperFast to innovative solutions that impact millions of users worldwide.",
  keywords: [
    "portfolio", 
    "projects", 
    "SuperFast", 
    "startups", 
    "entrepreneur", 
    "technology", 
    "innovation",
    "web development",
    "product development",
    "software engineering",
    "Next.js projects",
    "React applications",
    "tech entrepreneur portfolio"
  ],
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: "Portfolio - Kalash Vasaniya",
    description: "Explore my portfolio of projects, startups, and creations. From SuperFast to innovative solutions that impact millions of users worldwide.",
    url: 'https://kalashvasaniya.com/portfolio',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754520436/linko/kxuvewrtsjtp9vksbnd6.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalash Vasaniya Portfolio - Projects, Startups, and Innovations',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Portfolio - Kalash Vasaniya",
    description: "Explore my portfolio of projects, startups, and creations. From SuperFast to innovative solutions that impact millions of users worldwide.",
    images: [{
      url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754520436/linko/kxuvewrtsjtp9vksbnd6.jpg',
      alt: 'Kalash Vasaniya Portfolio - Projects, Startups, and Innovations',
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

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
} 