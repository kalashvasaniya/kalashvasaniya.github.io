import React from 'react'

const page = () => {
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
          my portfolio.
        </h1>

        {/* Body Content */}
        <div className="space-y-6 text-xl leading-relaxed">
          <p>
            coming soon.
          </p>

          <p className="pb-8">
            <a href="/" className="text-blue-600 underline">← back home</a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default page
