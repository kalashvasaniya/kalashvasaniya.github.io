export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kalash Vasaniya",
    "description": "Creator, entrepreneur, and founder of SuperFast. I love creating things for others.",
    "url": "https://kalashvasaniya.com",
    "sameAs": [
      "https://bento.me/kalashvasaniya"
    ],
    "jobTitle": "Creator & Entrepreneur",
    "worksFor": {
      "@type": "Organization",
      "name": "SuperFast"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "SuperFast"
    },
    "knowsAbout": [
      "Entrepreneurship",
      "Startups",
      "Technology",
      "Education",
      "Computer Vision",
      "Machine Learning",
      "Gaming",
      "Next.js",
      "Web Development",
      "SaaS"
    ],
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "Founder",
        "description": "Founded SuperFast, a Next.js boilerplate that helps developers go from idea to revenue in just days"
      },
      {
        "@type": "Occupation", 
        "name": "Entrepreneur",
        "description": "Started first company at 13, grew to $100K revenue by high school"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 