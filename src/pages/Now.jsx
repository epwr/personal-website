function Now() {
    return (
        <div className="section flex-col">
            <p>Last Updated: Sept 22, 2021</p>
            <p className="title-2">What I've Been Up To</p>
            <p>Recently a lot of my time has been spent working on a new project: Easel Dashboard. Easel is a leightweight, flexible dashboard that is designed to make managing individual servers easy.
            Most of the existing dashboards focus on managing networks (which is great), but there's no easy tool that you can plug into whatever server you're in charge of and use to monitor the
            server's health, performance, and whatever other statistics you're interested in.</p>
            <p>Everything about the dashboard is customizable through a YAML file, which means you can copy your configuration between servers in an instance, or quickly edit the dashboard to give you the functionality
            you need.</p>
            <p>Easel is built in Ruby, and is currently being published as a Ruby Gem, although I'm looking into using  <a href="https://github.com/pmq20/ruby-packer">Ruby Packer</a> to build binaries to make
            it even easier to install.</p>

            <p>Over the last couple months, I've been doing a lot of fun things. Specifically, I:</p>
            <ul className="padding-bottom-none">
                <l
                <li><p>Wrote a custom programming language called <a href="https://github.com/epwr/lazy-linear-algebra">Lazy Linear Algebra</a>. I chose to write each part of it
                from scratch, so there's a bespoke lexer, parser, interpreter, and REPL. The language provides a clean and flexible syntax, and everything you need for basic quantum
                computation - from complex number addition to tensor multiplication.</p>
                <p>Lazy Linear Algebra is written in Ruby 3 to let me experiment with Ruby 3's pattern matching features.</p></li>
                <li>Designed and built a deck for my parents. I'm really happy with how it turned out:</li>
            </ul>
                <img className="main padded-bottom-medium" src="/img/parents-back-deck.jpg" alt="A large cedar deck in a sunny yard."></img>
                <ul>
                <li>Read a bunch of books, mostly focusing on 19th century history (specifically the post-Napoleonic War reconstruction period), but also including some ancient Roman history, economics, political philosophy, and statistics.</li>
                <li>Spent time learning about <a className="external-link" href="http://paulgraham.com/weird.html">weird programming languages</a> (mostly Clojure) to grow my understanding of what a programming language can be.</li>
            </ul>
            <p className="title-2">What's Next</p>
            <p>I'm trying to figure out how I want to spend my time moving forwards. One important part of this is figuring out I want to do for work. I'm interested in software
            infrastructure and DevOps, and am actively searching for the right job. The other is what side project to take on next. Most of the ideas on my to-do list
            involve automating workflows, setting up open source tools on servers that I run, or building a product that I can share with the world.</p>
            <p>Another big decision I'm working on is where to live. Right now I'm living in Victoria, BC, but I'd love to move back to Montreal for a while, or somewhere new!</p>
        </div>
    );
}

export default Now;
