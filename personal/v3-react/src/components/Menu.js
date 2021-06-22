import './Menu.css';

import React from 'react'
import { Link } from "react-router-dom";


/* menu_hamburger_handler()
 *
 * Changes the contents of the label of hambuger menues (which are checkboxes). Hidding and showing
 * the menu contents is done via CSS (look for .menu_hamburger)
 */


const get_menu_links = () => {
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Me</Link>
        </>
    );
}

class Menu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            render_mobile_menu: window.innerWidth <= 1025,
            mobile_menu_open: false
        };
    
        this.update_on_window_resize = () => {
            this.setState({render_mobile_menu: (window.innerWidth <= 1025)});
        }

        this.menu_hamburger_handler = ( event ) => {
            let checkbox = event.target
            
            let menu_icon = checkbox.parentNode.firstElementChild;
            let submenu = document.getElementById('menu-mobile-submenu');

            if (checkbox.checked) {
                menu_icon.children[0].style.transform   = "rotate(40.5deg)";
                menu_icon.children[0].style.top         = "6px";
                menu_icon.children[0].style.left        = "2px";
                menu_icon.children[1].style.opacity     = "0";
                menu_icon.children[2].style.top         = "6px";
                menu_icon.children[2].style.left        = "2px";
                menu_icon.children[2].style.transform   = "rotate(-40.5deg)";
                submenu.style.height                    = "1.5rem";
            } else {
                menu_icon.children[0].style.transform   = "rotate(0deg)";
                menu_icon.children[0].style.top         = "0px";
                menu_icon.children[0].style.left        = "0px";
                menu_icon.children[1].style.opacity     = "1";
                menu_icon.children[2].style.top         = "10px";
                menu_icon.children[2].style.left        = "0px";
                menu_icon.children[2].style.transform   = "rotate(0deg)";
                submenu.style.height                    = "0rem";
            }
        }
    }


    componentDidMount() {
        window.addEventListener('resize', this.update_on_window_resize);
    }

    componentWillUnmount(){

        window.removeEventListener('resize', this.update_on_window_resize);
    }

    render() {
        if (this.state.render_mobile_menu) {
            return (
                <>
                <div className="main-menu menu-mobile">
                    <div className="menu-hamburger-wrapper">
                        <div className="menu-hamburger-holder">
                            <label htmlFor="menu-hamburger" className="menu-hamburger-icon-holder">
                                <div className="menu-hamburger-icon-line transform-long" style={{top:  0 + "px"}}></div>
                                <div className="menu-hamburger-icon-line" style={{top:  5 + "px"}}></div>
                                <div className="menu-hamburger-icon-line transform-long" style={{top: 10 + "px"}}></div>
                                <div className="menu-hamburger-icon-hidden-wrapper"></div>
                            </label>
                            <input type="checkbox" id="menu-hamburger" onClick={this.menu_hamburger_handler}/>
                        </div>
                    </div>
                    <Link className="font-large" to="/">ericpower.ca</Link>
                </div>
                <div id="menu-mobile-submenu">
                    {get_menu_links()}
                </div>
                </>
            );
        } else {
            return ( 
                <div className="main-menu menu-desktop" >
                    <Link className="font-large" to="/">ericpower.ca</Link>
                    <div className="menu-desktop-submenu">
                        {get_menu_links()}
                    </div>
                </div>
            );
        }
    }
}

export default Menu;
