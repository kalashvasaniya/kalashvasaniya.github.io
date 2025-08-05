"use client";

import { useState } from "react";

export default function Blog() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call - you can replace this with your actual email service
    try {
      // For now, we'll just simulate a successful subscription
      // You can integrate with services like Mailchimp, ConvertKit, or your own backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      setEmail("");
    } catch (error) {
      console.error("Failed to subscribe:", error);
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
        <div className="space-y-6 text-xl leading-relaxed">
          <p>
            i'm working on something special here. a place where i'll share my thoughts on technology, 
            travel experiences, and the journey of building products.
          </p>

          <p>
            coming soon.
          </p>

          {/* Email Subscription Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">get notified</h2>
            <p>
              want to be the first to know when i start posting? drop your email below and i'll 
              let you know when the blog goes live.
            </p>
            
            {isSubscribed ? (
              <div className="text-gray-600">
                thanks! you'll be notified when the blog launches.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? "subscribing..." : "notify me"}
                </button>
              </form>
            )}
          </div>

          <p className="pb-8">
            <a href="/" className="text-blue-600 underline">← back home</a>
          </p>
        </div>
      </main>
    </div>
  );
} 