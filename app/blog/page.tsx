"use client";

import { useState } from "react";

export default function Blog() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showAllPosts, setShowAllPosts] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubscribed(true);
        setEmail("");
      } else {
        // Handle specific error cases
        if (response.status === 409) {
          alert('This email is already subscribed!');
        } else {
          alert(data.error || 'Failed to subscribe. Please try again.');
        }
      }
    } catch (error) {
      console.error("Failed to subscribe:", error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans p-0 md:p-3">
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
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold text-black mb-8">
          my blog.
        </h1>

        {/* Body Content */}
        <div className="text-xl leading-relaxed">
          <p className="text-gray-700">
            i'm working on something special here. a place where i'll share my thoughts on technology, 
            travel experiences, and the journey of building products.
          </p>

          {/* Blog Posts List */}
          <div className="space-y-12 my-16">
            {[
              {
                title: "i reached 5 million views on twitter in a week",
                description: "accidentally went viral and learned about social media algorithms, content creation, and authentic storytelling.",
                date: "august 6, 2025",
                readTime: "3 min read",
                slug: "i-reached-5-million-views-on-twitter-in-a-week"
              }
            ].slice(0, showAllPosts ? undefined : 2).map((post, index) => (
              <article key={index} className="border-l-4 border-gray-300 pl-8 py-4 hover:border-gray-400 transition-colors">
                <h2 className="text-3xl font-semibold mb-4 leading-tight">
                  <a href={`/blog/${post.slug}`} className="text-blue-600 underline hover:text-blue-800 transition-colors">
                    {post.title}
                  </a>
                </h2>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                  <span>{post.date}</span>
                  <span className="text-gray-400">•</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
            {!showAllPosts && (
              <div className="pt-8">
                <button
                  onClick={() => setShowAllPosts(true)}
                  className="px-8 py-4 bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors font-medium text-lg border border-gray-200 hover:border-gray-300"
                >
                  show more posts
                </button>
              </div>
            )}
          </div>

          {/* Email Subscription Section */}
          <div className="space-y-6 py-8 border-t border-gray-200">
            <h2 className="text-3xl font-semibold text-black">get notified</h2>
            <p className="text-gray-700">
              want to be the first to know when i post? drop your email below and i'll 
              let you know when the blog goes live.
            </p>
            
            {isSubscribed ? (
              <div className="text-green-600 text-lg font-medium">
                thanks! you'll be notified when the blog launches.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-6">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your email address"
                    className="w-full px-6 py-4 border-2 border-gray-300 focus:outline-none focus:border-gray-600 text-lg font-medium transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="px-8 py-4 bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-lg border-2 border-black hover:border-gray-800"
                >
                  {isLoading ? "subscribing..." : "notify me"}
                </button>
              </form>
            )}
          </div>

          <div className="pb-8">
            <a href="/" className="text-blue-600 underline text-lg">← back home</a>
          </div>
        </div>
      </main>
    </div>
  );
} 