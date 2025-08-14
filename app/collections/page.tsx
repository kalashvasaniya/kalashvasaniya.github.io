"use client";

export default function Collections() {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans p-0 md:p-3">
            {/* Navigation */}
            <nav className="pt-8 pl-8">
                <div className="flex gap-6 text-xl leading-relaxed">
                    <a href="/" className="text-blue-600 underline">home</a>
                    <a href="/blog" className="text-blue-600 underline">blog</a>
                    <a href="/collections" className="text-blue-600 underline">collections</a>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-8 pl-8 pr-8 max-w-2xl">
                {/* Main Heading */}
                <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold text-black mb-8">
                    my collections.
                </h1>
                <p className="text-gray-700 mb-6 text-xl leading-relaxed">
                    this is a living library of books i’ve read, must-watch videos, and movies i love. i add new things over time. if you’re curious about what i want to experience next, check out
                    <a href="/bucketlist" className="text-blue-600 underline ml-1">my bucket list</a>.
                </p>
                <p className="mb-6 text-xl leading-relaxed">the pieces of content in <span className="text-red-600">red</span> either hit me hard or are things i really want so badly.</p>
                <hr className="my-8 border-gray-300" />

                {/* Body Content */}
                <div className="space-y-10 text-xl leading-relaxed">
                    <section id="books">
                        <h2 className="text-3xl font-bold text-black mb-4">books i read</h2>
                        <div className="space-y-3">
                            <p>
                                <a href="https://www.goodreads.com/book/show/30186948-think-and-grow-rich" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">think & grow rich</a> napoleon hill
                            </p>
                            <p>
                                <a href="https://www.goodreads.com/book/show/18050143-zero-to-one" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">zero to one</a> peter thiel
                            </p>
                            <p>
                                <a href="https://www.goodreads.com/book/show/28257707-the-subtle-art-of-not-giving-a-f-ck" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">the subtle art of not giving a f*ck</a> mark manson
                            </p>
                            <p>
                                <a href="https://www.goodreads.com/book/show/4865-how-to-win-friends-and-influence-people" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">how to win friends and influence people</a> dale carnegie
                            </p>
                        </div>
                    </section>

                    <hr className="my-8 border-gray-300" />

                    <section id="videos">
                        <h2 className="text-3xl font-bold text-black mb-4">must watch videos</h2>
                        <div className="space-y-2">
                            <div>
                                <a href="https://youtu.be/KdtPNRzuKrk?feature=shared" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">hacking harvard's facebooks</a>
                                <span className="text-gray-500 ml-2 text-lg">(08:25)</span>
                            </div>
                            <div>
                                <a href="https://youtu.be/B3PdMPVHe3E?feature=shared&t=2110" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">tamasha fanmeet</a>
                                <span className="text-gray-500 ml-2 text-lg">(05:40)</span>
                            </div>
                            <div>
                                <a href="https://youtu.be/aUxGRjgpgaE?feature=shared" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">avicii's wake me up</a>
                                <span className="text-gray-500 ml-2 text-lg">(04:04)</span>
                            </div>
                            <div>
                                <a href="https://youtu.be/RRTo2TuQ0sI?feature=shared" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">tamasha ending</a>
                                <span className="text-gray-500 ml-2 text-lg">(05:02)</span>
                            </div>
                            <div>
                                <a href="https://youtu.be/RnK9wokdySM?feature=shared" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">mein udna chahta hoon</a>
                                <span className="text-gray-500 ml-2 text-lg">(01:25)</span>
                            </div>
                            <div>
                                <a href="https://youtu.be/x5ug-5o-ROo?feature=shared" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">the founder ending</a>
                                <span className="text-gray-500 ml-2 text-lg">(05:37)</span>
                            </div>
                            <div>
                                <a href="https://youtu.be/4VxdufqB9zg?feature=shared" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">something in the way</a>
                                <span className="text-gray-500 ml-2 text-lg">(03:51)</span>
                            </div>
                        </div>
                    </section>

                    <hr className="my-8 border-gray-300" />

                    <section id="songs">
                        <h2 className="text-3xl font-bold text-black mb-4">songs i like</h2>
                        <div className="space-y-2">
                            <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/28sMFPjXvuKx0zVkHlkBud?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </section>

                    <hr className="my-8 border-gray-300" />

                    <section id="movies">
                        <h2 className="text-3xl font-bold text-black mb-4">movies i love</h2>
                        <div className="space-y-2">
                            <div>
                                <a href="https://en.wikipedia.org/wiki/Rockstar_(2011_film)" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">rockstar</a> imtiaz ali
                                <span className="text-gray-500 ml-2 text-lg">(159m)</span>
                            </div>
                            <div>
                                <a href="https://en.wikipedia.org/wiki/The_Social_Network" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">the social network</a> david fincher
                                <span className="text-gray-500 ml-2 text-lg">(120m)</span>
                            </div>
                            <div>
                                <a href="https://en.wikipedia.org/wiki/Tamasha_(2015_film)" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">tamasha</a> imtiaz ali
                                <span className="text-gray-500 ml-2 text-lg">(139m)</span>
                            </div>
                            <div>
                                <a href="https://en.wikipedia.org/wiki/Dear_Zindagi" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">dear zindagi</a> gauri shinde
                                <span className="text-gray-500 ml-2 text-lg">(151m)</span>
                            </div>
                            <div>
                                <a href="https://en.wikipedia.org/wiki/Yeh_Jawaani_Hai_Deewani" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">yeh jawaani hai deewani</a> ayan mukerji
                                <span className="text-gray-500 ml-2 text-lg">(160m)</span>
                            </div>
                            <div>
                                <a href="https://en.wikipedia.org/wiki/Zindagi_Na_Milegi_Dobara" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">zindagi na milegi dobara</a> zoya akhtar
                                <span className="text-gray-500 ml-2 text-lg">(153m)</span>
                            </div>
                        </div>
                    </section>

                    <hr className="my-8 border-gray-300" />

                    <section id="i-need">
                        <h2 className="text-3xl font-bold text-black mb-4">i need</h2>
                        <div className="space-y-2">
                            <div>
                                <a href="https://www.porsche.com/international/models/718/718-cayman-gt4-rs/718-cayman-gt4-rs/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">porsche 718 cayman gt4 rs</a>
                            </div>
                            <div>
                                <a href="https://shop.avicii.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">avicii official merchandise</a>
                            </div>
                        </div>
                    </section>

                    <hr className="my-8 border-gray-300" />

                    <section>
                        <p className="text-xl leading-relaxed mt-2">
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">never gonna give you up</a>
                        </p>
                    </section>



                    <p className="pb-8">
                        <a href="/" className="text-blue-600 underline">← back home</a>
                    </p>
                </div>
            </main>
        </div>
    );
}


