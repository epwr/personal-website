import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="section padded-bottom-medium">
            <Link className="title-1" to="/">ericpower.ca</Link>
            <div className="flex-row padded-top-medium padded-bottom-medium">
                <Link className="margin-right-medium" to="/" >About Me</Link>
                <Link className="margin-right-medium" to="/now" >Now</Link>
                <Link className="margin-right-medium" to="/blog" >Blog</Link>
                <Link className="margin-right-medium" to="/files" >Files</Link>
            </div>
            <div className="hline"/>
        </div>
    );
}

export default Header;
