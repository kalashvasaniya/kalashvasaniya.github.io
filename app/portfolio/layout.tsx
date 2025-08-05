import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Kalash Vasaniya",
  description: "Explore my portfolio of projects, startups, and creations. From SuperFast to innovative solutions that impact millions of users worldwide.",
  keywords: ["portfolio", "projects", "SuperFast", "startups", "entrepreneur", "Kalash Vasaniya", "technology", "innovation"],
  authors: [{ name: "Kalash Vasaniya" }],
  creator: "Kalash Vasaniya",
  publisher: "Kalash Vasaniya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kalashvasaniya.com'),
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
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalash Vasaniya Portfolio - Projects and Startups',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Portfolio - Kalash Vasaniya",
    description: "Explore my portfolio of projects, startups, and creations. From SuperFast to innovative solutions that impact millions of users worldwide.",
    images: ['https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg'],
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
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
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