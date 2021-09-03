function Now() {
    return (
        <div className="section flex-col">
            <p className="title-2">What I've Been Up To</p>
            <p>After wrapping up my degree, I took a short break where I worked on a couple projects and had some fun in nature! In the last two months I:</p>
            <ul>
                <li><p>Wrote a custom programming language called <a href="https://github.com/epwr/lazy-linear-algebra">Lazy Linear Algebra</a>. I chose to write each part of it
                from scratch, so there's a bespoke lexer, parser, interpreter, and REPL. The language provides a clean and flexible syntax, and everything you need for basic quantum
                computation - from complex number addition to tensor multiplication.</p>
                <p>Lazy Linear Algebra is written in Ruby 3 to let me experiment with Ruby 3's pattern matching features.</p></li>
                <li><p>Designed and built a deck for my parents. I'm very happy with how it turned out:</p>
                <img className="main" src="/img/parents-back-deck.jpg"></img></li>
                <li>Read a bunch of books, mostly focusing on 19th century history (specifically the post-Napoleonic War reconstruction period), but also including some ancient Roman history, economics, political philosophy, and statistics.</li>
                <li>Spent time learning about <a className="external-link" href="http://paulgraham.com/weird.html">weird programming languages</a> (mostly Clojure) to get outside of
                the standard concept of what programming is.</li>
            </ul>
            <p className="title-2">What's Next</p>
            <p>I'm trying to figure out how I want to spend my time moving forwards. One important part of this is figuring out I want to do for work. I'm interested in software 
            infrastructure and DevOps, and am actively searching for the right job. The other is what side project to take on next. Most of the ideas on my to-do list 
            involve automating workflows, setting up open source tools on servers that I run, or building a product that I can share with the world.</p>
            <p>Another big decision I'm working on is where to live. Right now I'm living in Victoria, BC, but I'd love to move back to Montreal for a while, or somewhere new!</p>
            <p>Last Updated: Sept 3, 2021</p>
        </div>
    );
}

export default Now;