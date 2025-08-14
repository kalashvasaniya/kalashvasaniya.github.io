import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateBlogMetadata, generateBlogStructuredData } from "../../components/BlogSeo";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

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
  return generateBlogMetadata(post);
}

export default async function BlogPost(props: Props) {
  const { params } = props;
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans p-0 md:p-3">
      {/* Breadcrumbs for this post */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://kalashvasaniya.com" },
          { name: "Blog", url: "https://kalashvasaniya.com/blog" },
          { name: post.title, url: `https://kalashvasaniya.com/blog/${post.slug}` },
        ]}
      />
      {/* Structured Data */}
      {generateBlogStructuredData(post)}
      
      {/* Navigation */}
      <nav className="pt-8 pl-8">
        <div className="flex gap-6 text-xl leading-relaxed">
          <a href="/" className="text-blue-600 underline hover:text-blue-800 transition-colors">home</a>
          <a href="/blog" className="text-blue-600 underline hover:text-blue-800 transition-colors">blog</a>
                                  <a href="/collection" className="text-blue-600 underline hover:text-blue-800 transition-colors">collection</a>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="pt-8 pl-8 pr-8 max-w-3xl">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-gray-600 text-lg">
            <span className="font-medium">{post.date}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">{post.readTime}</span>
          </div>
          
          <hr className="my-8 border-gray-300" />
        </header>
        
        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="space-y-8 text-xl leading-relaxed text-gray-800">
            {post.content.split('\n\n').map((paragraph: string, index: number) => (
              <div key={index} className="mb-8 leading-8" dangerouslySetInnerHTML={{ __html: paragraph.trim() }} />
            ))}
          </div>
        </article>
        
        {/* End of Blog */}
        <hr className="my-8 border-gray-300" />
        
        {/* Share and Navigation */}
        <div className="mt-8 pb-8 space-y-4">
          <div className="text-xl leading-relaxed text-gray-800">
            <p>
              if you enjoyed this post, consider sharing it on{' '}
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${post.title}" by @amikalash`)}&url=${encodeURIComponent(`https://kalashvasaniya.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 transition-colors"
              >
                twitter
              </a>
              .
            </p>
          </div>
          
          <div className="pt-4">
            <a href="/blog" className="text-blue-600 underline hover:text-blue-800 transition-colors text-xl">
              ← back to blog
            </a>
          </div>
        </div>
      </main>
    </div>
  );
} 