import { Metadata } from 'next';

interface BlogSeoProps {
  post: {
    title: string;
    description: string;
    date: string;
    author: string;
    authorUrl: string;
    authorImage: string;
    tags: string[];
    category: string;
    featuredImage: string;
    featuredImageAlt: string;
    canonicalUrl: string;
    seo?: {
      title?: string;
      description?: string;
      keywords?: string[];
      openGraph?: {
        title?: string;
        description?: string;
        image?: string;
        imageAlt?: string;
        type?: 'article' | 'website';
        publishedTime?: string;
        modifiedTime?: string;
        author?: string;
        section?: string;
      };
      twitter?: {
        card?: 'summary_large_image' | 'summary' | 'player' | 'app';
        title?: string;
        description?: string;
        image?: string;
        imageAlt?: string;
        creator?: string;
        site?: string;
      };
    };
  };
}

export function generateBlogMetadata(post: BlogSeoProps['post']): Metadata {
  const seo = post.seo || {};
  
  return {
    title: seo.title || `${post.title} | Kalash Vasaniya`,
    description: seo.description || post.description,
    keywords: seo.keywords || post.tags,
    authors: [{ name: post.author, url: post.authorUrl }],
    creator: post.author,
    publisher: post.author,
    openGraph: {
      title: seo.openGraph?.title || post.title,
      description: seo.openGraph?.description || post.description,
      url: post.canonicalUrl,
      siteName: 'Kalash Vasaniya',
      images: [
        {
          url: post.featuredImage.startsWith('http') ? post.featuredImage : `https://kalashvasaniya.com${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: seo.openGraph?.imageAlt || post.featuredImageAlt,
        },
      ],
      locale: 'en_US',
      type: (seo.openGraph?.type as 'article' | 'website') || 'article',
      publishedTime: seo.openGraph?.publishedTime || new Date(post.date).toISOString(),
      modifiedTime: seo.openGraph?.modifiedTime || new Date(post.date).toISOString(),
      authors: [seo.openGraph?.author || post.author],
      section: seo.openGraph?.section || post.category,
    },
    twitter: {
      card: (seo.twitter?.card as 'summary_large_image' | 'summary' | 'player' | 'app') || 'summary_large_image',
      title: seo.twitter?.title || post.title,
      description: seo.twitter?.description || post.description,
      images: [{
        url: post.featuredImage.startsWith('http') ? post.featuredImage : `https://kalashvasaniya.com${post.featuredImage}`,
        alt: seo.twitter?.imageAlt || post.featuredImageAlt,
      }],
      creator: seo.twitter?.creator || '@amikalash',
      site: seo.twitter?.site || '@amikalash',
    },
    alternates: {
      canonical: post.canonicalUrl,
    },
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
    other: {
      'article:published_time': new Date(post.date).toISOString(),
      'article:modified_time': new Date(post.date).toISOString(),
      'article:author': post.author,
      'article:section': post.category,
      'article:tag': post.tags.join(', '),
    },
  };
}

export function generateBlogStructuredData(post: BlogSeoProps['post']) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "author": {
          "@type": "Person",
          "name": post.author,
          "url": post.authorUrl,
          "image": post.authorImage
        },
        "publisher": {
          "@type": "Person",
          "name": post.author,
          "url": post.authorUrl,
          "image": post.authorImage
        },
        "datePublished": new Date(post.date).toISOString(),
        "dateModified": new Date(post.date).toISOString(),
        "url": post.canonicalUrl,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": post.canonicalUrl
        },
        "image": {
          "@type": "ImageObject",
          "url": post.featuredImage.startsWith('http') ? post.featuredImage : `https://kalashvasaniya.com${post.featuredImage}`,
          "alt": post.featuredImageAlt
        },
        "articleSection": post.category,
        "keywords": post.tags.join(', '),
        "wordCount": post.description.split(' ').length,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "Blog",
          "name": "Kalash Vasaniya's Blog",
          "url": "https://kalashvasaniya.com/blog"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 