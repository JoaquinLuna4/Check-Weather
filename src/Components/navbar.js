import React from "react";
import { useState } from "react";

import DefaultNavbar from "./navbar-default";
import SearchNavbar from "./navbar-search";

import "../styles/navbar.css";

const Navbar = () => {
	// Components
	const [navbarStatus, setNavbarStatus] = useState("default");
	console.log(navbarStatus, "navbar statusss");

	const displayNavbar =
		navbarStatus === "default" ? (
			<DefaultNavbar setNavbarStatus={setNavbarStatus} />
		) : (
			<SearchNavbar setNavbarStatus={setNavbarStatus} />
		);

	return displayNavbar;
};
export default Navbar;
