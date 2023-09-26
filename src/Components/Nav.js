import React, { useEffect, useState } from "react";
import "../Components/Nav.css";
function Nav() {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
		// useEffect(() => {
		// 		window.addEventListener("scroll", () => {
		// 			if (window.scrollY > 100) {
		// 				handleShow(true);
		// 			} else handleShow(false);
		// 		});
		// return () => {
		// 	window.removeEventListener("scroll");
		// }; // ?when I turn this on the whole thing is gone down...why is that?
	}, []);
	return (
		<div className={`nav ${show && "nav__black"}`}>
			<img
				className="nav__logo"
				src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
				alt="Netflix Logo"
			/>
			<img
				className="nav__avatar"
				src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
				alt="Avatar Logo"
			/>
		</div>
	);
}

export default Nav;
