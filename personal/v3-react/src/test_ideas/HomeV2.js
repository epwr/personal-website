import './HomeV2.css';
import { Link } from "react-router-dom";

import FadingColumn from './FadingColumn';


function HomeV2() {

        return (
            <div className="ui-main">
                <div className="ui-left">
                    <Link className="font-huge" to="/">ericpower.ca</Link>
                    <Link className="font-extra-large" to="/">Contact Me</Link>
                    <Link className="font-extra-large" to="/">About Me</Link>
                    <Link className="font-extra-large" to="/">Projects</Link>
                </div>
                    <FadingColumn />
            </div>
        );
}

export default HomeV2;
