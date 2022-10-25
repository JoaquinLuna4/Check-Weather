import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/navbar.css";

const NavbarSearch = ({ setNavbarStatus }) => {
	const handleSubmit = (e) => {
		e.preventDefault();

		// custom form handling here
	};
	const changeNavbarStatus = () => {
		setNavbarStatus("default");
	};
	return (
		<div className="navbar__container ">
			<header className="navbar__header mt-3">
				<button className="navbar__close " onClick={changeNavbarStatus}>
					<CloseIcon />
				</button>
			</header>
			<form className="navbar__form">
				{/* <SearchIcon fontSize="small" /> */}
				<input
					type="text"
					name="ciudad"
					placeholder="Search for places"
					className="navbar__search"
				/>
				<button
					name="search"
					value="Search"
					className="navbar__submit"
					onSubmit={handleSubmit}
				>
					Search
				</button>
			</form>
		</div>
	);
};
export default NavbarSearch;
