export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://kalashvasaniya.com/#person",
        "name": "Kalash Vasaniya",
        "description": "Creator, entrepreneur, and founder of SuperFast. I love creating things for others. From selling Dragon Ball Z games at 13 to building companies that impact millions.",
        "url": "https://kalashvasaniya.com",
        "image": "https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg",
        "sameAs": [
          "https://bento.me/kalashvasaniya",
          "https://twitter.com/kalashvasaniya",
          "https://github.com/kalashvasaniya",
          "https://linkedin.com/in/kalashvasaniya"
        ],
        "jobTitle": "Founder & Creator",
        "worksFor": {
          "@type": "Organization",
          "name": "SuperFast",
          "description": "Next.js boilerplate that helps developers go from idea to revenue in just days"
        },
        "founder": {
          "@type": "Organization",
          "name": "SuperFast"
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
          "Innovation"
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
          }
        ],
        "nationality": "Indian",
        "birthPlace": "India"
      },
      {
        "@type": "WebSite",
        "@id": "https://kalashvasaniya.com/#website",
        "url": "https://kalashvasaniya.com",
        "name": "Kalash Vasaniya - Entrepreneur, Founder & Creator",
        "description": "Hi, I'm Kalash. I love creating things for others. Founder of SuperFast, entrepreneur, and creator. From selling Dragon Ball Z games at 13 to building companies that impact millions.",
        "publisher": {
          "@id": "https://kalashvasaniya.com/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://kalashvasaniya.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://kalashvasaniya.com/#organization",
        "name": "SuperFast",
        "description": "Next.js boilerplate that helps developers go from idea to revenue in just days",
        "founder": {
          "@id": "https://kalashvasaniya.com/#person"
        },
        "url": "https://superfast.dev"
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