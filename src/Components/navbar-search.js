import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/navbar.css";
import { useState } from "react";

import { useapiContext } from "../ContextApp.js";

const NavbarSearch = ({ setNavbarStatus }) => {
	const datag = useapiContext();
	const [searchCity, setsearchcity] = useState("cordoba");

	// ////
	// // const getAllCitiesWithCertainName = async (cityName) => {
	// // 	const getCities = await axios.get(
	// // 		`https://api.openweathermap.org/geo/1.0/direct?q=${cityName},&limit=5&appid=${app.apiKey}`
	// // 	);
	// // 	const cities = getCities.data.map((city) => city.name);

	// // 	// Remove duplicates from the cities array
	// // 	const uniqueCities = [...new Set(cities)];

	// // 	return uniqueCities;
	// // };
	// const [Cities, setCities] = React.useState([]);
	// const citiesGet = async (cityName) => {
	// 	const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},&limit=5&appid=${datag.apiKey}`;
	// 	const data = await fetch(url);
	// 	const users = await data.json();
	// 	setCities(cityName);
	// };
	////
	const handleChange = (e) => {
		setsearchcity(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(searchCity, "handle submit");
		datag.setUserCity(searchCity);
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
			<form className="navbar__form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="ciudad"
					placeholder="Search for places"
					className="navbar__search"
					onChange={handleChange}
				/>
				<button name="search" value="Search" className="navbar__submit">
					Search
				</button>
			</form>
		</div>
	);
};
export default NavbarSearch;
