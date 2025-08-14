export const seoConfig = {
  // Site information
  site: {
    name: "Kalash Vasaniya",
    title: "Kalash Vasaniya",
    description: "hi, i'm kalash, i build things that make your life easier and i'm the founder of superfast, shipping stupidly fast so you don't have to.",
    url: "https://kalashvasaniya.com",
    image: "https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg",
    imageAlt: "Kalash Vasaniya - Founder of SuperFast, Entrepreneur, and Creator",
    locale: "en_US",
    type: "website",
  },

  // Author information
  author: {
    name: "Kalash Vasaniya",
    title: "Founder & Creator",
    description: "Creator, entrepreneur, and founder of SuperFast.",
    image: "https://res.cloudinary.com/dwb211sw5/image/upload/v1754519733/linko/zv6li1rehrmnrbrpcl1l.jpg",
    url: "https://kalashvasaniya.com",
  },

  // Social media links
  social: {
    twitter: {
      handle: "@amikalash",
      url: "https://twitter.com/amikalash",
    },
    github: {
      handle: "kalashvasaniya",
      url: "https://github.com/kalashvasaniya",
    },
    linkedin: {
      handle: "kalashvasaniya",
      url: "https://linkedin.com/in/kalashvasaniya",
    },
    medium: {
      handle: "@kalashvasaniya1",
      url: "https://medium.com/@kalashvasaniya1",
    },
    bento: {
      url: "https://bento.me/kalashvasaniya",
    },
  },

  // Company/Startup information
  company: {
    name: "SuperFast",
    description: "Next.js boilerplate that helps developers go from idea to revenue in just days",
    url: "https://superfa.st",
    foundingDate: "2025",
    industry: "Software Development",
    numberOfEmployees: "1-10",
  },

  // SEO keywords
  keywords: [
    "Kalash Vasaniya",
    "SuperFast",
    "entrepreneur",
    "founder",
    "creator",
    "startup",
    "technology",
    "Next.js",
    "boilerplate",
    "digital nomad",
    "product development",
    "software engineer",
    "innovation",
    "tech entrepreneur",
    "social media",
    "content creator",
    "viral content",
    "building in public",
    "SaaS",
    "web development",
    "React",
    "JavaScript",
    "TypeScript",
  ],

  // Technical SEO settings
  technical: {
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // verification: {
    //   google: 'your-google-verification-code', // Add when Google Search Console is set up
    // },
    performance: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
      referrer: 'origin-when-cross-origin',
      cacheControl: 'public, max-age=31536000, immutable',
    },
  },

  // Open Graph defaults
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kalash Vasaniya",
  },

  // Twitter Card defaults
  twitter: {
    card: "summary_large_image",
    creator: "@amikalash",
    site: "@amikalash",
  },

  // Blog settings
  blog: {
    title: "Blog",
    description: "Thoughts on technology, travel, entrepreneurship, and building products as a digital nomad",
    url: "https://kalashvasaniya.com/blog",
    categories: [
      "Social Media",
      "Entrepreneurship",
      "Technology",
      "Product Development",
      "Digital Nomad",
      "Content Creation",
    ],
  },

  // Page-specific SEO
  pages: {
    home: {
      title: "Kalash Vasaniya",
      description: "hi, i'm kalash, i build things that make your life easier and i'm the founder of superfast, shipping stupidly fast so you don't have to.",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
      'security-policy': {
        title: "Security Policy | Kalash Vasaniya",
        description: "Security policy and responsible disclosure guidelines for Kalash Vasaniya's website and projects.",
        priority: 0.3,
        changeFrequency: "yearly" as const,
      },
    portfolio: {
      title: "Portfolio | Kalash Vasaniya",
      description: "Explore my projects, startups, and creations. From SuperFast to viral content, see what I've built and what I'm working on next.",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    blog: {
      title: "Blog | Kalash Vasaniya",
      description: "Thoughts on technology, travel, entrepreneurship, and building products as a digital nomad. Real insights from building in public.",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    services: {
      title: "Services | Kalash Vasaniya",
      description: "Writer + Developer services. I help startups promote their products and take on gig work. Hire me for content writing, development, and startup promotion.",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    bucketlist: {
      title: "Bucket List | Kalash Vasaniya",
      description: "My personal bucket list and goals. Things I want to achieve, places I want to visit, and experiences I want to have.",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
          collection: {
      title: "Collection | Kalash Vasaniya",
      description: "Curated collection: books, must-watch videos, and resources I recommend.",
        priority: 0.9,
        changeFrequency: "weekly" as const,
      },
  },

  // Enhanced structured data for rich snippets
  structuredData: {
    // Breadcrumb schema for better navigation understanding
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kalashvasaniya.com"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Blog",
          "item": "https://kalashvasaniya.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
                  "name": "Collection",
        "item": "https://kalashvasaniya.com/collection"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Services",
          "item": "https://kalashvasaniya.com/services"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Portfolio", 
          "item": "https://kalashvasaniya.com/portfolio"
        }
      ]
    },

    // FAQ schema for common questions
    faq: {
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
    },

    // Organization schema for better business understanding
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Kalash Vasaniya",
      "url": "https://kalashvasaniya.com",
      "logo": "https://res.cloudinary.com/dwb211sw5/image/upload/v1754603136/linko/bq7qv9tolwefvb6fbwqq.jpg",
      "description": "Founder, entrepreneur, and creator building things that make life easier",
      "founder": {
        "@type": "Person",
        "name": "Kalash Vasaniya"
      },
      "sameAs": [
        "https://twitter.com/amikalash",
        "https://github.com/kalashvasaniya",
        "https://linkedin.com/in/kalashvasaniya",
        "https://medium.com/@kalashvasaniya1",
        "https://bento.me/kalashvasaniya"
      ]
    }
  }
} as const;

// Helper functions for SEO
import type { Metadata } from 'next';

export function generatePageMetadata(page: keyof typeof seoConfig.pages): Metadata {
  const pageConfig = seoConfig.pages[page];
  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: [...seoConfig.keywords],
    openGraph: {
      title: pageConfig.title,
      description: pageConfig.description,
      url: `${seoConfig.site.url}/${page === 'home' ? '' : page}`,
      siteName: seoConfig.site.name,
      images: [
        {
          url: seoConfig.site.image,
          width: 1200,
          height: 630,
          alt: seoConfig.site.imageAlt,
          type: 'image/jpeg',
        },
      ],
      locale: seoConfig.site.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageConfig.title,
      description: pageConfig.description,
      images: [{
        url: seoConfig.site.image,
        alt: seoConfig.site.imageAlt,
      }],
      creator: seoConfig.twitter.creator,
      site: seoConfig.twitter.site,
    },
    alternates: {
      canonical: `${seoConfig.site.url}/${page === 'home' ? '' : page}`,
    },
    robots: {
      index: seoConfig.technical.robots.index,
      follow: seoConfig.technical.robots.follow,
      nocache: seoConfig.technical.robots.nocache,
      googleBot: {
        index: seoConfig.technical.robots.googleBot.index,
        follow: seoConfig.technical.robots.googleBot.follow,
        noimageindex: seoConfig.technical.robots.googleBot.noimageindex,
        'max-video-preview': seoConfig.technical.robots.googleBot['max-video-preview'],
        'max-image-preview': 'large',
        'max-snippet': seoConfig.technical.robots.googleBot['max-snippet'],
      }
    },
  };
}

export function generateStructuredData(type: 'person' | 'website' | 'organization' | 'blog') {
  const baseData = {
    "@context": "https://schema.org",
  };

  switch (type) {
    case 'person':
      return {
        ...baseData,
        "@type": "Person",
        name: seoConfig.author.name,
        description: seoConfig.author.description,
        url: seoConfig.author.url,
        image: seoConfig.author.image,
        sameAs: [
          seoConfig.social.bento.url,
          seoConfig.social.twitter.url,
          seoConfig.social.github.url,
          seoConfig.social.linkedin.url,
          seoConfig.social.medium.url,
        ],
        jobTitle: seoConfig.author.title,
        worksFor: {
          "@type": "Organization",
          name: seoConfig.company.name,
          description: seoConfig.company.description,
          url: seoConfig.company.url,
        },
      };
    case 'website':
      return {
        ...baseData,
        "@type": "WebSite",
        name: seoConfig.site.title,
        description: seoConfig.site.description,
        url: seoConfig.site.url,
        publisher: {
          "@type": "Person",
          name: seoConfig.author.name,
        },
      };
    case 'organization':
      return {
        ...baseData,
        "@type": "Organization",
        name: seoConfig.company.name,
        description: seoConfig.company.description,
        url: seoConfig.company.url,
        foundingDate: seoConfig.company.foundingDate,
        industry: seoConfig.company.industry,
        numberOfEmployees: seoConfig.company.numberOfEmployees,
      };
    case 'blog':
      return {
        ...baseData,
        "@type": "Blog",
        name: seoConfig.blog.title,
        description: seoConfig.blog.description,
        url: seoConfig.blog.url,
        author: {
          "@type": "Person",
          name: seoConfig.author.name,
          url: seoConfig.author.url,
        },
        publisher: {
          "@type": "Person",
          name: seoConfig.author.name,
          url: seoConfig.author.url,
        },
      };
    default:
      return baseData;
  }
} 