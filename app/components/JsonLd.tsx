export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://kalashvasaniya.com/#person",
        "name": "Kalash Vasaniya",
        "description": "Creator, entrepreneur, and founder of SuperFast. I love creating things for others.",
        "url": "https://kalashvasaniya.com",
        "image": "https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg",
        "sameAs": [
          "https://bento.me/kalashvasaniya",
          "https://twitter.com/amikalash",
          "https://github.com/kalashvasaniya",
          "https://linkedin.com/in/kalashvasaniya",
          "https://medium.com/@kalashvasaniya1"
        ],
        "jobTitle": "Founder & Creator",
        "worksFor": {
          "@type": "Organization",
          "name": "SuperFast",
          "description": "Next.js boilerplate that helps developers go from idea to revenue in just days",
          "url": "https://superfa.st"
        },
        "founder": {
          "@type": "Organization",
          "name": "SuperFast",
          "url": "https://superfa.st"
        },
        "knowsAbout": [
          "Entrepreneurship",
          "Startups",
          "Technology",
          "Product Development",
          "Software Engineering",
          "Next.js",
          "React",
          "Web Development",
          "SaaS",
          "Digital Nomad Lifestyle",
          "Travel",
          "Innovation",
          "Social Media Marketing",
          "Content Creation"
        ],
        "hasOccupation": [
          {
            "@type": "Occupation",
            "name": "Founder & CEO",
            "description": "Founded SuperFast, a Next.js boilerplate that helps developers go from idea to revenue in just days",
            "occupationLocation": "Global (Digital Nomad)"
          },
          {
            "@type": "Occupation", 
            "name": "Entrepreneur",
            "description": "Started first company at 13, grew to $100K revenue by high school. Building products that impact millions of users worldwide."
          },
          {
            "@type": "Occupation",
            "name": "Content Creator",
            "description": "Viral content creator with 5M+ views on social media. Sharing insights on entrepreneurship, technology, and building in public."
          }
        ],
        "nationality": "Indian",
        "birthPlace": "India",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Computer Science Student"
        },
        "memberOf": [
          {
            "@type": "Organization",
            "@id": "https://kalashvasaniya.com/#organization"
          }
        ],
        "award": [
          "5M+ social media views",
          "Successful product launch of SuperFast",
          "Monetized Twitter account"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://kalashvasaniya.com/#website",
        "url": "https://kalashvasaniya.com",
        "name": "Kalash Vasaniya",
        "description": "hi, im kalash, i build things that make your life easier and i'm the founder of superfast, shipping stupidly fast so you don't have to.",
        "publisher": {
          "@id": "https://kalashvasaniya.com/#person"
        },
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": "https://kalashvasaniya.com"
          }
        ],
        "datePublished": "2025-08-07",
        "dateModified": "2025-08-07"
      },
      {
        "@type": "Organization",
        "@id": "https://kalashvasaniya.com/#organization",
        "name": "SuperFast",
        "description": "Next.js boilerplate that helps developers go from idea to revenue in just days",
        "founder": {
          "@id": "https://kalashvasaniya.com/#person"
        },
        "url": "https://superfa.st",
        "foundingDate": "2025",
        "industry": "Software Development",
        "numberOfEmployees": "1-10"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://kalashvasaniya.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kalashvasaniya.com"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://kalashvasaniya.com/blog/#collection",
        "name": "Blog",
        "description": "Thoughts on technology, travel, entrepreneurship, and building products as a digital nomad",
        "url": "https://kalashvasaniya.com/blog",
        "mainEntity": {
          "@type": "Blog",
          "@id": "https://kalashvasaniya.com/blog/#blog",
          "name": "Kalash Vasaniya's Blog",
          "description": "Insights from founding SuperFast and creating impactful solutions",
          "author": {
            "@id": "https://kalashvasaniya.com/#person"
          },
          "publisher": {
            "@id": "https://kalashvasaniya.com/#person"
          },
          "blogPost": [
            {
              "@type": "BlogPosting",
              "headline": "I got 5m views in a week just by tweeting",
              "description": "Accidentally went viral and learned about social media algorithms, content creation, and authentic storytelling.",
              "author": {
                "@id": "https://kalashvasaniya.com/#person"
              },
              "publisher": {
                "@id": "https://kalashvasaniya.com/#person"
              },
              "datePublished": "2025-08-06",
              "dateModified": "2025-08-06",
              "url": "https://kalashvasaniya.com/blog/i-got-5m-views-in-a-week-just-by-tweeting",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://kalashvasaniya.com/blog/i-got-5m-views-in-a-week-just-by-tweeting"
              },
              "image": "https://kalashvasaniya.com/blog/1_z43IuIWFOXqOnWeiV_GRNA.png",
              "articleSection": "Social Media",
              "keywords": ["viral tweet", "social media", "content creation", "twitter", "growth", "authenticity"]
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://kalashvasaniya.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is Kalash Vasaniya?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kalash Vasaniya is a full-stack developer, entrepreneur, and founder of SuperFast - a Next.js boilerplate that helps developers go from idea to revenue in just days. He's also a content creator with 5M+ social media views."
            }
          },
          {
            "@type": "Question",
            "name": "What is SuperFast?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SuperFast is a Next.js boilerplate created by Kalash Vasaniya that provides developers with everything they need to launch fast - no complex setup, no endless config, just powerful tools that work out of the box."
            }
          },
          {
            "@type": "Question",
            "name": "What services does Kalash Vasaniya offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kalash offers content writing, startup promotion, web development, and technical writing services. He helps startups promote their products and takes on gig work through platforms like Contra."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact Kalash Vasaniya?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can contact Kalash via email at kalashvasaniya@gmail.com, through Contra for gig work, or find him on social media platforms like Twitter (@amikalash), GitHub, and LinkedIn."
            }
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://kalashvasaniya.com/services/#services",
        "serviceType": "Professional Services",
        "provider": {
          "@id": "https://kalashvasaniya.com/#person"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Kalash Vasaniya Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Content Writing",
                "description": "High-engagement articles that actually convert, covering tech, startups, and entrepreneurship."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Startup Promotion",
                "description": "Content creation that drives traffic and conversions, from social media to blog posts to landing page copy."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": "Fast, scalable web applications using Next.js and modern tech stack. MVPs, landing pages, and full-stack applications."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical Writing",
                "description": "Documentation, tutorials, and technical blog posts that break down complex concepts into actionable content."
              }
            }
          ]
        },
        "areaServed": "Worldwide",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://contra.com/kalashvasaniya",
          "serviceLocation": {
            "@type": "Place",
            "name": "Remote/Global"
          }
        }
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