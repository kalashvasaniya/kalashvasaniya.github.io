"use client";

export default function Home() {
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
          hi i'm kalash.
        </h1>

        {/* Body Content */}
        <div className="space-y-6 text-xl leading-relaxed">
          <p>
            i'm just a guy who builds stuff. <a target="_blank" href="https://bento.me/kalashvasaniya" className="text-blue-600 underline">find me</a>.
          </p>

          <p>
            when i was 17, i had an idea to build a social media platform for college students. i wanted it anonymous, so i built <a href="https://www.thepairup.in/" target="_blank" className="text-blue-600 underline">thepairup</a>.
          </p>

          <p>
            ok, i'm not done yet.
          </p>

          <p>
            <a href="https://www.thepairup.in/" target="_blank" className="text-blue-600 underline">thepairup</a> brutally failed. i thought i was the next mark zuckerberg. went all in for 3 months, coding 12–14 hours a day. and i was the only one who signed up.
          </p>

          <p>
            back to the present, i'm the founder of <a href="https://www.superfa.st/" target="_blank" className="text-blue-600 underline">superfast</a>, a next.js boilerplate that helps developers go from idea to revenue in just days.
          </p>

          <p>check out the <a href="https://youtu.be/24O-ncDicHk?si=lwPjYdYBdTIjCGuv" target="_blank" className="text-blue-600 underline">promo</a>.</p>

          <p>
            superfast gives you everything you need to launch fast. no complex setup, no endless config, just powerful tools that work out of the box. focus on your product while we handle the heavy lifting. learn more <a href="https://www.superfa.st/about" target="_blank" className="text-blue-600 underline">here</a>.
          </p>

          <p>
            superfast is special. really special.
            if you're a developer trying to ship faster, read the <a href="https://docs.superfa.st/" target="_blank" className="text-blue-600 underline">docs</a> and see what you can build.
          </p>

          <p>
            and i finally made money out of it. first sale is always special.
          </p>

          <img src="/img/0708A321-F5BA-4C89-AD06-8C8D9C4681E0_1_105_c.jpeg" alt="first sale screenshot" className="mt-4 rounded-lg shadow-md" />

          <p>2025 is my year.</p>

          <p>
            all started in feb when i found out about <a href="https://x.com/marc_louvion" target="_blank" className="text-blue-600 underline">marc lou</a>, the legend.
          </p>

          <p>
            i always wanted to build a product that helps people. solo, no team, because at the same time i want to travel the world. like a nomad. check my  <a href="/bucketlist" className="text-blue-600 underline">bucket list</a>.
          </p>

          <p>
            i was like, "i can do this too".
          </p>


          <p>
            some stuff above worked out.
            most of it didn't.
            but i learned a lot.
          </p>

          <p>
            sometimes i write about my fuck ups building stuff, or those rare times when things actually went right. if you want me to hit you up when i write, follow me on <a href="https://x.com/amikalash" target="_blank" className="text-blue-600 underline">twitter</a>.
          </p>

          <p className="pb-8">
            p.s. if you wanna contact me, i usually reply to every email under 300 characters with a clear ask. <a href="mailto:kalashvasaniya@gmail.com" target="_blank" className="text-blue-600 underline">email</a>
          </p>


        </div>
      </main>
    </div>
  );
}
