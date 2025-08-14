import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': 0,
      'max-image-preview': 'none',
      'max-snippet': 0,
    },
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans p-0 md:p-3">
      {/* Navigation */}
      <nav className="pt-8 pl-8">
        <div className="flex gap-6 text-xl leading-relaxed">
          <a href="/" className="text-blue-600 underline">home</a>
          <a href="/blog" className="text-blue-600 underline">blog</a>
                              <a href="/collection" className="text-blue-600 underline">collection</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-8 pl-8 pr-8 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-8">
          404 - page not found.
        </h1>
        
        <div className="space-y-6 text-xl leading-relaxed">
          <p>
            looks like you're trying to find something that doesn't exist.
          </p>
          
          <p>
            maybe try going back <Link href="/" className="text-blue-600 underline">home</Link>?
          </p>
        </div>
      </main>
    </div>
  );
} 