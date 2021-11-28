
function Now() {
    return (
        <div className="section flex-col">
            <p><emph>Last Updated: Nov 28, 2021</emph></p>

	    <p className="title-2">What I've Been Up To</p>

	    <p>Probably the most noteworthy change in my life recently has been starting a new job with <a href="https://www.audette.io">Audette.io</a>. Audette is a startup that is automating the carbon reduction planning process for existing buildings, and I've been really enjoying my time with them. The team is amazing, the company's vision is something I feel good supporting, and I'm getting to tinker with new tools and technologies. I started by taking responsiblity of Audette's data ingestion pipeline, and now I'm adding R&amp;D to the role. I get to work alongside our team of building scientists to discover and prototype tools that can speed them up, or automate parts of their process.</p>
	    <p>Outside of work, there are two ideas that I can't get out of my head: functional programming makes way more sense than OO for most problem domains, and why isn't there an open source tool for running your own RSS/podcast server. I've got a personal hackathon scheduled in my calendar to combine these two ideas by throwing together a v0.1 of an RSS/podcast server in Clojure (a functional programming language that runs on the JVM).</p>
	    
        </div>
    );
}

export default Now;
