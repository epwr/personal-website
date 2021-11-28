import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="section flex-col">
            <p className="title-2">About Me</p>
            <p>Hi!</p>
            <p>I'm Eric Power. I'm perpetually curious, and try to create things that make the world a better place.</p>
	    <p>This is my home on the web.</p>
	    <p>You can find out what I'm up to on the <Link to="/now">Now</Link> page, or check out some files that I think other people might care about on the <Link to="/files">Files</Link> page.</p>
        </div>
    );
}

export default Home;
