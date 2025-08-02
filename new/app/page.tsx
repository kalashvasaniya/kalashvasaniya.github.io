import Image from "next/image";

export default function Home() {
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
      <main className="pt-8 pl-8 pr-8 max-w-2xl">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-8">
          hi i'm kalash.
        </h1>

        {/* Body Content */}
        <div className="space-y-6 text-xl leading-relaxed">
          <p>
            i'm just a guy that loves creating things for others.
          </p>
          
          <p>
            i started my first company at 13 when i sold dragon ball z tenkaichi budokai 2 in 2009 on ebay.
          </p>
          
          <p>
            selling stuff online turned into my high school obsession and i grew that company to $100K in revenue per year by expanding to products like <a href="#" className="text-blue-600 underline">these</a> and <a href="#" className="text-blue-600 underline">these</a>.
          </p>
          
          <p>
            been making stuff ever since.
          </p>
          
          <p>
            most recently, i was the founder of <a href="#" className="text-blue-600 underline">buildspace</a> — it was the largest school in the world for people working on their own ideas from youtube videos to edm music to companies.
          </p>
          
          <p>
            during the company we scaled <a href="#" className="text-blue-600 underline">nights & weekends</a> online to over 100,000 students, <a href="#" className="text-blue-600 underline">raised from a16z/yc</a>, constructed a <a href="#" className="text-blue-600 underline">physical campus</a> in sf for those that wanted to go full-time on their ideas, grew <a href="#" className="text-blue-600 underline">content</a> to millions, and built an ai social product to help people find others like themselves trying to build stuff.
          </p>
          
          <p>
            worked on the co for five years. but, i ended up closing it down. here's a letter i wrote about it.
          </p>
          
          <p>
            buildspace was special. really special.
            if you were a fan. thank you. you changed our lives.
          </p>
          
          <p>
            did a bunch of stuff before.
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
            p.s: if you wanna contact me ping farza@humansongs.so, i generally respond to every single email under 300 characters with a clear ask.
          </p>
        </div>
      </main>
    </div>
  );
}
