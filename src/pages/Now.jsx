function Now() {
    return (
        <div className="section flex-col">
            <p><emph>Last Updated: Nov 27, 2021</emph></p>

	    <p className="title-2">What I've Been Up To</p>

	    <p>For the past year, I've been tinkering with the idea of a podcast. Less because I like the sound of my own voice, and more because I think that writing is one of the best ways to improve the clarity of thought; however, I find I love the medium of podcasting, and believe that I would enjoy the process of writing more if I were publishing it as a podcast. However, I can't find a good open source podcast server. Sorry RSS.com and all the other free podcast servers - I don't trust you with my data. I would absolutely support using <a href="https://transistor.fm">Transistor</a>, but it's more than I would want (I don't expect anyone to listen to my podcast, so I want an easy way to publish it that let's it live on the web). Or at least this is the tortured reasoning I'm following into my next project idea: an RSS server. I would love the ability to host one or more podcasts on my own server, and I'm extremely surprised that I can't find a half decent open source tool to do this.</p>

	    <p>Oh well, that's the joy of being a software engineer; I get to build things I want. I've got a day scheduled for a personal hackathon on this and if I get anywhere I'll publish it.</p>
		
	    <p>Professionally, I started a new job at <a href="https://www.audette.io">Audette.io</a>, a startup that is automating the carbon reduction planning process for existing buildings. I've found the team to be amazing, and it's amazing to feel good about the purpose of your work. I've been working on building up our data ingestion pipeline, and am starting to spend time builing out components of our expert system.</p>
	    
        </div>
    );
}

export default Now;
