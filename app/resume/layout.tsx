import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Kalash Vasaniya's professional resume. Founder of SuperFast, entrepreneur, full-stack developer, and digital nomad. Experience in building products that impact millions of users worldwide.",
  keywords: [
    "resume", 
    "CV", 
    "Kalash Vasaniya", 
    "entrepreneur", 
    "founder", 
    "SuperFast", 
    "full-stack developer",
    "software engineer",
    "digital nomad",
    "startup founder",
    "product development",
    "tech entrepreneur",
    "Next.js developer",
    "React developer",
    "innovation",
    "technology leadership"
  ],
  authors: [{ name: "Kalash Vasaniya", url: "https://kalashvasaniya.com" }],
  creator: "Kalash Vasaniya",
  publisher: "Kalash Vasaniya",
  category: "Professional",
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: "Resume - Kalash Vasaniya",
    description: "Kalash Vasaniya's professional resume. Founder of SuperFast, entrepreneur, full-stack developer, and digital nomad.",
    url: 'https://kalashvasaniya.com/resume',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754520303/linko/tlzppa3rqe0omlbimksq.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalash Vasaniya Resume - Entrepreneur and Full-Stack Developer',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Resume - Kalash Vasaniya",
    description: "Kalash Vasaniya's professional resume. Founder of SuperFast, entrepreneur, full-stack developer, and digital nomad.",
    creator: '@kalashvasaniya',
    site: '@kalashvasaniya',
    images: [{
      url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754520303/linko/tlzppa3rqe0omlbimksq.jpg',
      alt: 'Kalash Vasaniya Resume - Entrepreneur and Full-Stack Developer',
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

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}