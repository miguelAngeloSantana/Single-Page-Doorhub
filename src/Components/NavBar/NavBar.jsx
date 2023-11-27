import NavWeb from "./Layout/NavWeb.jsx";
import Sidebar from "./Layout/Sidebar.js";

import { useState } from "react";

export default function NavBar() {

	const [isMobile, setIsMobile] = useState(false);

	window.onresize = function(event) {
		if(window.innerWidth <= 980) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}

	return (
		<div>
			{
				isMobile ?
				<Sidebar />:
				<NavWeb />
			}		
		</div>
	)
}