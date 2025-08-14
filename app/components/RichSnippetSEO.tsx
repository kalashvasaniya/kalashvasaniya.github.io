// No imports required; this component emits page-specific JSON-LD only

interface RichSnippetSEOProps {
  page?: 'portfolio' | 'blog' | 'service' | 'collection';
  customData?: Record<string, unknown> | Record<string, unknown>[];
}

export default function RichSnippetSEO({ page, customData }: RichSnippetSEOProps) {
  const baseUrl = 'https://kalashvasaniya.com';

  const buildPageGraph = (): Array<Record<string, unknown>> => {
    const graph: Array<Record<string, unknown>> = [];

    switch (page) {
      case 'portfolio':
        graph.push({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "@id": `${baseUrl}/portfolio#portfolio`,
          "name": "Kalash Vasaniya Portfolio",
          "description": "Portfolio of projects, startups, and innovations including SuperFast",
          "creator": { "@type": "Person", "@id": `${baseUrl}#person` },
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
        });
        break;
      case 'blog':
        graph.push({
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${baseUrl}/blog#blog`,
          "name": "Kalash Vasaniya Blog",
          "description": "Thoughts on technology, travel, entrepreneurship, and building products",
          "author": { "@type": "Person", "@id": `${baseUrl}#person` },
          "publisher": { "@type": "Person", "@id": `${baseUrl}#person` },
          "url": `${baseUrl}/blog`,
          "mainEntityOfPage": `${baseUrl}/blog`,
          "inLanguage": "en-US",
          "about": [
            'Technology',
            'Entrepreneurship',
            'Travel',
            'Digital Nomad Lifestyle',
            'Startup Building'
          ]
        });
        break;
      case 'service':
        graph.push({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${baseUrl}/service#service`,
          "name": "Kalash Vasaniya - Professional Service",
          "description": "Writer + Developer service. Content writing, startup promotion, web development",
          "provider": { "@type": "Person", "@id": `${baseUrl}#person` },
          "areaServed": "Worldwide",
          "serviceType": "Professional Service",
          "url": `${baseUrl}/service`,
          "mainEntityOfPage": `${baseUrl}/service`,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Service Offerings",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Content Writing", "description": "High-engagement articles for tech, startups, and entrepreneurship" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Web Development", "description": "Fast, scalable web applications using Next.js and modern stack" }
              }
            ]
          }
        });
        break;
      case 'collection':
        graph.push({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
                      "@id": `${baseUrl}/collection#collection`,
            "name": "Collection",
            "description": "Curated collection of books, must-watch videos, and resources",
            "url": `${baseUrl}/collection`,
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Books", "url": `${baseUrl}/collection#books` },
              { "@type": "ListItem", "position": 2, "name": "Must Watch Videos", "url": `${baseUrl}/collection#videos` }
            ]
          }
        });
        break;
      default:
        break;
    }

    if (customData) {
      const customArray = Array.isArray(customData) ? customData : [customData];
      graph.push(...customArray);
    }

    return graph;
  };

  const graph = buildPageGraph();

  if (!graph.length) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
    />
  );
}
