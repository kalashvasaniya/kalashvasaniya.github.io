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