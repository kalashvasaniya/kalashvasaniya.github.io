import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy",
  description: "Security policy and responsible disclosure guidelines for Kalash Vasaniya's website. Learn how to report security vulnerabilities responsibly.",
  keywords: [
    "security policy",
    "responsible disclosure",
    "vulnerability reporting",
    "bug bounty",
    "security guidelines",
    "cybersecurity",
    "website security",
    "Kalash Vasaniya security"
  ],
  alternates: {
    canonical: '/security-policy',
  },
  openGraph: {
    title: "Security Policy - Kalash Vasaniya",
    description: "Security policy and responsible disclosure guidelines for Kalash Vasaniya's website. Learn how to report security vulnerabilities responsibly.",
    url: 'https://kalashvasaniya.com/security-policy',
    siteName: 'Kalash Vasaniya',
    images: [
      {
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalash Vasaniya Security Policy - Responsible Disclosure Guidelines',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Security Policy - Kalash Vasaniya",
    description: "Security policy and responsible disclosure guidelines for Kalash Vasaniya's website.",
    images: [{
      url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1754392328/linko/frdzbk94fqxbjsxupinc.jpg',
      alt: 'Kalash Vasaniya Security Policy - Responsible Disclosure Guidelines',
    }],
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
    },
  },
};

export default function SecurityPolicy() {
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
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold text-black mb-8">
          security policy.
        </h1>
        
        <div className="space-y-6 text-xl leading-relaxed">
          <p>
            found a bug? cool! just don't break my stuff. we're all friends here.
          </p>
          
          <h2 className="text-2xl font-bold mt-8">how to report</h2>
          <p>
            shoot me an email: <a href="mailto:admin@kalashvasaniya.com" className="text-blue-600 underline">admin@kalashvasaniya.com</a>
          </p>
          
          <h2 className="text-2xl font-bold mt-8">what to include</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>what's broken (in plain english, please)</li>
            <li>how to make it break again</li>
            <li>how bad is it? (1-10 scale)</li>
            <li>your name (so i can thank you properly)</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8">response time</h2>
          <p>
            i'll get back to you within 48 hours. promise!
          </p>
          
          <h2 className="text-2xl font-bold mt-8">scope</h2>
          <p className="pb-8">
            this covers kalashvasaniya.com and all its little subdomains.
          </p>
        </div>
      </main>
    </div>
  );
} 