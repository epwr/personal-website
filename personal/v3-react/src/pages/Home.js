import './pages.css';
import ep_forest from '../images/ep_forest.jpg';

function Home() {
    return (
        <div className="section surface">
            <img src={ep_forest} alt="Eric on a hike." className="full-width" />
            <div className="padded">
                Here is a whole bunch of text. You know, some words. Followed by some more words, which might even have some other words after that. 
                Just a normal sized paragraph here, nothing special. But then there is another sentence, usually followed by another. That second 'another'
                is this sentence.
            </div>
            <div style={{height: 1000 + "px"}}>
            </div>
        </div>
    );
}

export default Home;
