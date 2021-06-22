/* 
 * Author: 		Eric Power
 * Description: Normal JS to provide some simple functionality for my site.	
 */

function create_icon_hamburger() {
	let icon = document.createElement('div');
	icon.class = "menu-hamburger-icon";
	icon.innerHTML = '<div class="menu-hamburger-icon">\n<div class="menu-hamburger-icon-line"></div>\n<div class="menu-hamburger-icon-line"></div>\n<div class="menu-hamburger-icon-line"></div>\n</div>'

	return icon;
}


/* menu_hamburger_handler()
 *
 * Changes the contents of the label of hambuger menues (which are checkboxes). Hidding and showing
 * the menu contents is done via CSS (look for .menu_hamburger)
 */
function menu_hamburger_handler( checkbox ){

	let menu_icon = checkbox.parentNode.firstElementChild;

	if (checkbox.checked) {
		menu_icon.children[0].style.transform 	= "rotate(45deg)";
		menu_icon.children[0].style.top		 	= "7px";
		menu_icon.children[1].style.opacity 	= "0";
		menu_icon.children[2].style.top		 	= "7px";
		menu_icon.children[2].style.transform 	= "rotate(-45deg)";
		/*menu_icon.innerHTML = '<div class="menu-hamburger-icon-line absolute" style="transform: rotate(45deg); top: 7px;"></div>' + 
							  '<div class="menu-hamburger-icon-line absolute" style="transform: rotate(-45deg); top: 7px;"></div>';*/
	} else {
		menu_icon.children[0].style.transform 	= "rotate(0deg)";
		menu_icon.children[0].style.top		 	= "0px";
		menu_icon.children[1].style.opacity 	= "1";
		menu_icon.children[2].style.top		 	= "12px";
		menu_icon.children[2].style.transform 	= "rotate(0deg)";
		/*menu_icon.innerHTML = '<div class="menu-hamburger-icon-line"></div>' + 
							  '<div class="menu-hamburger-icon-line"></div>' + 
							  '<div class="menu-hamburger-icon-line" style="margin: 0;"></div>';*/
	}

}