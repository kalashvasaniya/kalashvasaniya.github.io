import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy - Kalash Vasaniya",
  description: "Security policy and responsible disclosure guidelines for Kalash Vasaniya's website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SecurityPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans p-4">
      {/* Navigation */}
      <nav className="pt-8 pl-8">
        <div className="flex gap-6 text-base">
          <a href="/" className="text-blue-600 underline">home</a>
          <a target="_blank" href="https://bento.me/kalashvasaniya" className="text-blue-600 underline">find me</a>
          <a href="/portfolio" className="text-blue-600 underline">portfolio</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-8 pl-8 pr-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-black mb-8">Security Policy</h1>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            If you discover a security vulnerability on this website, please report it responsibly.
          </p>
          
          <h2 className="text-2xl font-bold mt-8">How to Report</h2>
          <p>
            Please email security issues to: <a href="mailto:admin@kalashvasaniya.com" className="text-blue-600 underline">admin@kalashvasaniya.com</a>
          </p>
          
          <h2 className="text-2xl font-bold mt-8">What to Include</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>A clear description of the vulnerability</li>
            <li>Steps to reproduce the issue</li>
            <li>Potential impact assessment</li>
            <li>Your contact information</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8">Response</h2>
          <p>
            I will acknowledge receipt within 48 hours and provide updates on the resolution timeline.
          </p>
          
          <h2 className="text-2xl font-bold mt-8">Scope</h2>
          <p>
            This policy applies to the main website at kalashvasaniya.com and its subdomains.
          </p>
        </div>
      </main>
    </div>
  );
} 