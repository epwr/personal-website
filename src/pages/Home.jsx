import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="section flex-col">
            <p className="title-2">About Me</p>
            <p>Hi! I'm Eric Power. I'm a software developer and all round nerd who likes talking about everything from 19th century history to the engineering behind gutters.
            I'm perpetually curious, and try to create things that make the world a better place.</p>
            <p>As a developer, I'm passionate about automating workflows and protecting data. I care about how people use the technology I create,
            and I want my tools to make the world a better place. I love simplicity, but I don't think that aesthetics should be more important than <a href="https://jnd.org/affordances_and_design/">design affordances</a>.</p>
            <p>Outside of the world of software, I have a host of hobbies I love. I read voraciously. I cycle as much as possible. I regularly get out of the city to hike and camp. 
            Once this pandemic is over, I'm excited to get back to travelling. But at heart, my real love is learning. Recently I've gone on a deep dive into the post-Napoleonic War reconstruction period, but I also spend time 
            researching statistics, economic and political theory, writing, the science of sleep, marketing, sociology, and more.</p>
            <p>I have a B.Sc. in Computer Science from the University of Victoria, where I focused on building software infrastructure and understanding the 
            effects that software systems can have on our society.</p>
            <p>You can find out what I'm up to on the <Link to="/now">Now</Link> page.</p>
        </div>
    );
}

export default Home;