import { seoConfig } from '../lib/seo-config';

interface RichSnippetSEOProps {
  page?: string;
  customData?: any;
}

export default function RichSnippetSEO({ page, customData }: RichSnippetSEOProps) {
  const baseUrl = 'https://kalashvasaniya.com';

  // Generate comprehensive structured data for rich snippets
  const generateRichSnippetData = () => {
    const baseData: any = {
      "@context": "https://schema.org",
      "@graph": [
        // Person schema
        {
          "@type": "Person",
          "@id": `${baseUrl}#person`,
          "name": "Kalash Vasaniya",
          "description": "Founder, entrepreneur, and creator building things that make life easier",
          "url": baseUrl,
          "image": seoConfig.author.image,
          "jobTitle": "Founder & Creator",
          "worksFor": {
            "@type": "Organization",
            "name": "SuperFast",
            "url": "https://superfa.st"
          },
          "sameAs": [
            seoConfig.social.twitter.url,
            seoConfig.social.github.url,
            seoConfig.social.linkedin.url,
            seoConfig.social.medium.url,
            seoConfig.social.bento.url
          ]
        },
        // Website schema
        {
          "@type": "WebSite",
          "@id": `${baseUrl}#website`,
          "name": "Kalash Vasaniya",
          "description": seoConfig.site.description,
          "url": baseUrl,
          "publisher": {
            "@id": `${baseUrl}#person`
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/blog?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        },
        // Organization schema
        {
          "@type": "Organization",
          "@id": `${baseUrl}#organization`,
          "name": "Kalash Vasaniya",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": seoConfig.site.image
          },
          "description": seoConfig.site.description,
          "founder": {
            "@id": `${baseUrl}#person`
          },
          "sameAs": [
            seoConfig.social.twitter.url,
            seoConfig.social.github.url,
            seoConfig.social.linkedin.url,
            seoConfig.social.medium.url,
            seoConfig.social.bento.url
          ]
        },
        // Breadcrumb schema for site navigation
        {
          "@type": "BreadcrumbList",
          "@id": `${baseUrl}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": baseUrl
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": `${baseUrl}/blog`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Portfolio",
              "item": `${baseUrl}/portfolio`
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Services",
              "item": `${baseUrl}/services`
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Bucket List",
              "item": `${baseUrl}/bucketlist`
            }
          ]
        },
        // Site navigation schema for rich snippets
        {
          "@type": "SiteNavigationElement",
          "@id": `${baseUrl}#navigation`,
          "name": "Main Navigation",
          "hasPart": [
            {
              "@type": "WebPage",
              "name": "Blog",
              "url": `${baseUrl}/blog`,
              "description": "Thoughts on technology, travel, entrepreneurship, and building products"
            },
            {
              "@type": "WebPage",
              "name": "Portfolio",
              "url": `${baseUrl}/portfolio`,
              "description": "Explore my projects, startups, and creations"
            },
            {
              "@type": "WebPage",
              "name": "Services",
              "url": `${baseUrl}/services`,
              "description": "Writer + Developer services for startups and businesses"
            },
            {
              "@type": "WebPage",
              "name": "Bucket List",
              "url": `${baseUrl}/bucketlist`,
              "description": "My personal bucket list and goals"
            }
          ]
        }
      ]
    };

    // Add page-specific schema
    if (page) {
      switch (page) {
        case 'portfolio':
          baseData["@graph"].push({
            "@type": "CreativeWork",
            "@id": `${baseUrl}/portfolio#portfolio`,
            "name": "Kalash Vasaniya Portfolio",
            "description": "Portfolio of projects, startups, and innovations including SuperFast",
            "creator": {
              "@id": `${baseUrl}#person`
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
          });
          break;

        case 'blog':
          baseData["@graph"].push({
            "@type": "Blog",
            "@id": `${baseUrl}/blog#blog`,
            "name": "Kalash Vasaniya Blog",
            "description": "Thoughts on technology, travel, entrepreneurship, and building products",
            "author": {
              "@id": `${baseUrl}#person`
            },
            "publisher": {
              "@id": `${baseUrl}#person`
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
          });
          break;

        case 'services':
          baseData["@graph"].push({
            "@type": "ProfessionalService",
            "@id": `${baseUrl}/services#service`,
            "name": "Kalash Vasaniya - Professional Services",
            "description": "Writer + Developer services. Content writing, startup promotion, web development",
            "provider": {
              "@id": `${baseUrl}#person`
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
          });
          break;
      }
    }

    return baseData;
  };

  const richSnippetData = generateRichSnippetData();

  return (
    <>
      {/* Comprehensive structured data for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(richSnippetData) }}
      />

      {/* FAQ schema for featured snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does Kalash Vasaniya do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kalash Vasaniya is a founder, entrepreneur, and creator who builds things that make life easier. He's the founder of SuperFast, a Next.js boilerplate that helps developers ship faster."
                }
              },
              {
                "@type": "Question",
                "name": "What is SuperFast?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SuperFast is a Next.js boilerplate that helps developers go from idea to revenue in just days. It's designed to ship stupidly fast so you don't have to."
                }
              },
              {
                "@type": "Question",
                "name": "What services does Kalash offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kalash offers writer + developer services, helping startups promote their products and taking on gig work for content writing, development, and startup promotion."
                }
              }
            ]
          })
        }}
      />

      {/* Additional meta tags for enhanced SEO */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bangalore" />
      <meta name="geo.position" content="12.9716;77.5946" />
      <meta name="ICBM" content="12.9716, 77.5946" />
      
      {/* Language and locale meta */}
      <meta name="language" content="English" />
      <meta name="content-language" content="en-US" />
      
      {/* Enhanced social signals */}
      <meta property="og:site_name" content="Kalash Vasaniya" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      
      {/* Twitter enhanced meta */}
      <meta name="twitter:site" content="@amikalash" />
      <meta name="twitter:creator" content="@amikalash" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
