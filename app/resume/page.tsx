import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download and view Kalash Vasaniya's resume. Entrepreneur, founder of SuperFast, and creator with experience building products that impact millions of users worldwide.",
  keywords: [
    "resume", 
    "CV", 
    "Kalash Vasaniya resume", 
    "entrepreneur resume", 
    "founder resume", 
    "SuperFast founder", 
    "tech resume",
    "startup founder CV",
    "software engineer resume",
    "product development resume"
  ],
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: "Resume - Kalash Vasaniya",
    description: "Download and view Kalash Vasaniya's resume. Entrepreneur, founder of SuperFast, and creator with experience building products that impact millions of users worldwide.",
    url: 'https://kalashvasaniya.com/resume',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalash Vasaniya Resume - Entrepreneur and Founder',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Resume - Kalash Vasaniya",
    description: "Download and view Kalash Vasaniya's resume. Entrepreneur, founder of SuperFast, and creator with experience building products that impact millions of users worldwide.",
    images: [{
      url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg',
      alt: 'Kalash Vasaniya Resume - Entrepreneur and Founder',
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

export default function ResumePage() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/Resume-Kalash-Vasaniya.pdf"
        className="w-full h-full"
        title="Kalash Vasaniya Resume"
      />
    </div>
  );
} 