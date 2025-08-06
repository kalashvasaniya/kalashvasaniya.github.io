import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Helper to dynamically import the post file
async function getPost(slug: string) {
  try {
    // Dynamic import based on slug
    const mod = await import(`../posts/${slug}`);
    if (mod && mod.post) return mod.post;
    return null;
  } catch (e) {
    return null;
  }
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params } = props;
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: `${post.title} - Kalash Vasaniya`,
    description: post.description,
    keywords: [
      "blog",
      "Kalash Vasaniya",
      "entrepreneur",
      "founder",
      "SuperFast",
      "startup",
      "technology",
      "digital nomad",
      "product development",
      "business insights",
      "tech entrepreneur",
      "innovation",
      "startup journey",
      "entrepreneurship tips",
      "social media",
      "content creation",
      "viral content",
      "Twitter growth",
      "personal branding"
    ],
    authors: [{ name: "Kalash Vasaniya", url: "https://kalashvasaniya.com" }],
    creator: "Kalash Vasaniya",
    publisher: "Kalash Vasaniya",
    category: "Technology",
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} - Kalash Vasaniya`,
      description: post.description,
      url: `https://kalashvasaniya.com/blog/${post.slug}`,
      siteName: 'Kalash Vasaniya',
      images: [
        {
          url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/jpeg',
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} - Kalash Vasaniya`,
      description: post.description,
      creator: '@amikalash',
      site: '@amikalash',
      images: [{
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg',
        alt: post.title,
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
}

export default async function BlogPost(props: Props) {
  const { params } = props;
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }
  // Structured data for the blog post
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": "https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg",
    "author": {
      "@type": "Person",
      "@id": "https://kalashvasaniya.com/#person",
      "name": "Kalash Vasaniya",
      "url": "https://kalashvasaniya.com",
      "sameAs": [
        "https://twitter.com/kalashvasaniya",
        "https://github.com/kalashvasaniya",
        "https://linkedin.com/in/kalashvasaniya"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://kalashvasaniya.com/#organization",
      "name": "Kalash Vasaniya",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://kalashvasaniya.com/blog/${post.slug}`
    },
    "url": `https://kalashvasaniya.com/blog/${post.slug}`,
    "isPartOf": {
      "@type": "Blog",
      "@id": "https://kalashvasaniya.com/blog/#blog"
    },
    "wordCount": post.content.split(' ').length,
    "genre": ["Technology", "Entrepreneurship", "Personal Development"],
    "keywords": "entrepreneur, startup, technology, digital nomad, SuperFast, social media, content creation"
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans p-0 md:p-3">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navigation */}
      <nav className="pt-8 pl-8">
        <div className="flex gap-6 text-xl leading-relaxed">
          <a href="/" className="text-blue-600 underline">home</a>
          <a href="/blog" className="text-blue-600 underline">blog</a>
          <a href="/portfolio" className="text-blue-600 underline">portfolio</a>
        </div>
      </nav>
      {/* Main Content */}
      <main className="pt-8 pl-8 pr-8 max-w-2xl">
        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-lg">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>
        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="space-y-6 text-xl leading-relaxed text-gray-800">
            {post.content.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index} className="mb-6">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </article>
        {/* Back to Blog */}
        <div className="mt-12 pb-8">
          <a href="/blog" className="text-blue-600 underline text-xl">
            ← back to blog
              </a>
            </div>
      </main>
    </div>
  );
} 