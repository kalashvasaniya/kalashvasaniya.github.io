"use client";

export default function Services() {
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
                    services.
                </h1>

                {/* Body Content */}
                <div className="space-y-6 text-xl leading-relaxed">
                    <p>
                        i'm a writer + developer. if you want to promote your startup or anything, i'm here to help & take your money.
                    </p>

                    <p>
                        i'm also open for gig work. hire me: <a href="https://contra.com/kalashvasaniya" target="_blank" className="text-blue-600 underline">contra</a>
                    </p>

                    <hr className="my-8 border-gray-300" />

                    <h2 className="text-3xl font-bold text-black mb-4">what i do</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-2">content writing</h3>
                            <p>
                                i write high-engagement articles that actually convert. my <a href="https://medium.com/@kalashvasaniya1" target="_blank" className="text-blue-600 underline">medium</a> articles have helped me build a following and generate passive income.
                            </p>
                            <p className="mt-4">
                                i can write about tech, startups, entrepreneurship, or anything that needs compelling copy.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-2">startup promotion</h3>
                            <p>
                                want to get your startup noticed? i can help you create content that actually drives traffic and conversions. i've built products that failed and succeeded, so i know what works.
                            </p>
                            <p className="mt-4">
                                from social media content to blog posts to landing page copy - i'll help you get your message out there.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-2">web development</h3>
                            <p>
                                i build fast, scalable web applications using next.js and modern tech stack. check out <a href="https://www.superfa.st/" target="_blank" className="text-blue-600 underline">superfast</a> - my next.js boilerplate that helps developers ship faster.
                            </p>
                            <p className="mt-4">
                                i can help you build mvp's, landing pages, or full-stack applications.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-2">technical writing</h3>
                            <p>
                                need documentation, tutorials, or technical blog posts? i can break down complex concepts into simple, actionable content.
                            </p>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-300" />

                    <h2 className="text-3xl font-bold text-black mb-4">my approach</h2>

                    <p>
                        i don't just write content or build stuff. i understand the business side too. i've been there - building products, failing, learning, and eventually succeeding.
                    </p>

                    <p>
                        when you hire me, you're not just getting a writer or developer. you're getting someone who understands what it takes to build and promote products that actually work.
                    </p>

                    <p>
                        i'm direct, honest, and i deliver results. no fluff, just work that gets you where you want to be.
                    </p>

                    <hr className="my-8 border-gray-300" />

                    <h2 className="text-3xl font-bold text-black mb-4">ready to work together?</h2>

                    <p>
                        the best way to get started is through <a href="https://contra.com/kalashvasaniya" target="_blank" className="text-blue-600 underline">contra</a>. it's where i handle most of my gig work.
                    </p>

                    <p>
                        or if you prefer, you can <a href="mailto:kalashvasaniya@gmail.com" target="_blank" className="text-blue-600 underline">email me</a> directly.
                    </p>

                    <p>
                        let's build something amazing together.
                    </p>

                    <p>
                        p.s. i'm currently based in bangalore, india, but i work with clients worldwide.
                    </p>

                    <p className="pb-8">
                        <a href="/" className="text-blue-600 underline">← back home</a>
                    </p>

                </div>
            </main>
        </div>
    );
} 
