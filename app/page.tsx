import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans p-0 md:p-3">
      {/* Navigation */}
      <nav className="pt-8 pl-8">
        <div className="flex gap-6 text-base">
          <a href="/" className="text-blue-600 underline">home</a>
          <a target="_blank" href="https://bento.me/kalashvasaniya" className="text-blue-600 underline">find me</a>
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
            i'm just a guy who builds stuff.
          </p>

          <p>
            when i was 17, i had a crazy idea to build a social media platform for college students. it was completely anonymous, so i built <a href="https://www.thepairup.in/" target="_blank" className="text-blue-600 underline">thepairup</a>.
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

          <p>
            i did a bunch of stuff before.
          </p>

          <p>
            founded an online elementary school called zipschool focused on homeschoolers and grew it to 150,000 kiddos, trained a real time cv model that would coach you in overwatch named visor (we got really big actually, then, blizzard banned us oops), was cto at kanga where we built our own models to recommend gamers content they'd enjoy, trained my own open-source deep learning models for esports analytics, built random products for league of legends that got to 1m+ users, built a dumb ar menu app that got no where, and built a bunch of other random stupid shit that was meaningless but fun (lol).
          </p>

          <p>
            some stuff above worked out.
            most of it didn't.
            but, i learned a lot.
          </p>

          <p>
            sometimes i write about my fuck ups building stuff or of when things went really right! if you want me to hyu when i write. drop your email below.
          </p>

          <p className="mt-8">
            p.s: if you wanna contact me, i generally respond to every single email under 300 characters with a clear ask.
          </p>
        </div>
      </main>
    </div>
  );
}
