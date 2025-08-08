import { Metadata } from 'next';

interface AdvancedSEOProps {
  page?: string;
  customMeta?: Partial<Metadata>;
}

export default function AdvancedSEO({ page, customMeta }: AdvancedSEOProps) {
  // Generate page-specific structured data
  const getPageSpecificSchema = () => {
    const baseUrl = 'https://kalashvasaniya.com';
    
    switch (page) {
      case 'services':
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${baseUrl}/services#service`,
          "name": "Kalash Vasaniya - Professional Services",
          "description": "Writer + Developer services. Content writing, startup promotion, web development, and technical writing.",
          "provider": {
            "@type": "Person",
            "@id": `${baseUrl}#person`,
            "name": "Kalash Vasaniya"
          },
          "areaServed": "Worldwide",
          "serviceType": "Professional Services",
          "url": `${baseUrl}/services`,
          "mainEntityOfPage": `${baseUrl}/services`,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Service Offerings",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Content Writing",
                  "description": "High-engagement articles for tech, startups, and entrepreneurship"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Fast, scalable web applications using Next.js and modern stack"
                }
              }
            ]
          }
        };
      
      case 'portfolio':
        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "@id": `${baseUrl}/portfolio#portfolio`,
          "name": "Kalash Vasaniya Portfolio",
          "description": "Portfolio of projects, startups, and innovations including SuperFast and other creative works",
          "creator": {
            "@type": "Person",
            "@id": `${baseUrl}#person`,
            "name": "Kalash Vasaniya"
          },
          "url": `${baseUrl}/portfolio`,
          "mainEntityOfPage": `${baseUrl}/portfolio`,
          "workExample": [
            {
              "@type": "SoftwareApplication",
              "name": "SuperFast",
              "description": "Next.js boilerplate that helps developers go from idea to revenue in just days",
              "url": "https://superfa.st",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web"
            }
          ]
        };
      
      case 'blog':
        return {
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${baseUrl}/blog#blog`,
          "name": "Kalash Vasaniya Blog",
          "description": "Thoughts on technology, travel, entrepreneurship, and building products as a digital nomad",
          "author": {
            "@type": "Person",
            "@id": `${baseUrl}#person`,
            "name": "Kalash Vasaniya"
          },
          "publisher": {
            "@type": "Person",
            "@id": `${baseUrl}#person`,
            "name": "Kalash Vasaniya"
          },
          "url": `${baseUrl}/blog`,
          "mainEntityOfPage": `${baseUrl}/blog`,
          "inLanguage": "en-US",
          "about": [
            "Technology",
            "Entrepreneurship", 
            "Travel",
            "Digital Nomad Lifestyle",
            "Startup Building"
          ]
        };
      
      default:
        return null;
    }
  };

  const schema = getPageSpecificSchema();

  return (
    <>
      {/* Page-specific structured data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      
      {/* Additional meta tags for enhanced SEO */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bangalore" />
      <meta name="geo.position" content="12.9716;77.5946" />
      <meta name="ICBM" content="12.9716, 77.5946" />
      
      {/* Language and locale meta */}
      <meta name="language" content="English" />
      <meta name="content-language" content="en-US" />
      
      {/* Business schema for local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://kalashvasaniya.com#business",
            "name": "Kalash Vasaniya",
            "description": "Full-stack developer, entrepreneur, and founder of SuperFast",
            "url": "https://kalashvasaniya.com",

            "email": "kalashvasaniya@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "12.9716",
              "longitude": "77.5946"
            },
            "founder": {
              "@type": "Person",
              "name": "Kalash Vasaniya",
              "jobTitle": "Founder & CEO",
              "url": "https://kalashvasaniya.com"
            },
            "serviceArea": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 09:00-18:00"
          })
        }}
      />
    </>
  );
}
