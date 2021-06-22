import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="section footer">
            <Link to="/privacy">Privacy</Link>
            <Link to="/privacy">Contact Me</Link>
        </div>
    );
}

export default Footer;
