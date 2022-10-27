import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const NavbarDefault = ({ setNavbarStatus }) => {
	const changeNavbarStatus = () => {
		setNavbarStatus("search");
	};
	return (
		<div>
			<header className="header-resume center">
				<button onClick={changeNavbarStatus} className="search-bar">
					Search for places
				</button>

				<button className="location mt-3 ">
					<LocationOnOutlinedIcon fontSize="medium" className="center" />
				</button>
			</header>
		</div>
	);
};
export default NavbarDefault;
