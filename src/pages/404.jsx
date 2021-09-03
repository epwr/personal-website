import {Link} from 'react-router-dom';

function Error404() {
    return (
        <>
        <div className="section">
            <p className="title-2">404 Error</p>
            <p>A mistake was made.</p>
            <p>If this link worked before,</p>
            <p>The page was mislaid.</p>
        </div>
        <div className="section">
            <Link to="/">Return Home</Link>
        </div>
        </>
    );
}

export default Error404;