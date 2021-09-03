import {Link} from 'react-router-dom';

function BlogPostSummary( ) {
    return (
        <div className="section flex-col">
            <p className="title-2">Blog Post Name</p>
            <div className="secondary-text margin-bottom-small">Jan 27, 2021</div>
            <p>As a developer, I am passionate about securing data properly and automating workflows. I believe that software can
            help everyone increase the...</p>
            <Link className="flex-align-right" to="/post/post-name">Read More</Link>
        </div>
    );
}

export default BlogPostSummary;