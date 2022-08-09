import React from "react";
import { Spinner } from "react-bootstrap";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

/// CURRENT LOCATION USER!!! /////

// function geoFindMe() {
// 	function success(position) {
// 		const latitude = position.coords.latitude;
// 		const longitude = position.coords.longitude;
// 		// console.log(latitude, "latitud", longitude, "longitud");
// 		return `${latitude},${longitude}`;
// 	}
// 	function error() {
// 		// console.log("Unable to retrieve your location");
// 	}
// 	if (!navigator.geolocation) {
// 		// console.log("Geolocation is not supported by your browser");
// 	} else {
// 		navigator.geolocation.getCurrentPosition(success, error);
// 	}
// 	return success;
// }

const Date = (props) => {
	const defaultCity = props.dataso;
	// console.log(defaultCity, "defaultCity");
	const busquedas = props.busqueda;

	let city = busquedas ? busquedas : defaultCity;
	const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dcd20e9b46ed770b171e69f37ee13d57`;

	const [est, setEst] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			apiGet();
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	});

	const apiGet = async () => {
		const data = await fetch(API);
		const users = await data.json();
		setEst(users);
		setLoading(false);
	};
	// console.log(est.name, "est en el date.js");
	return (
		<React.Fragment>
			<div className="containerDate">
				<div className="containerDateInfo center">
					<h4 className="center pad-right10">Today </h4>

					<h4 className="center pad-right10 mar-botton16"> . </h4>

					<h4 className="center pad-right10">4 mar 2022</h4>
				</div>
				<footer className="center footerdate">
					{isLoading ? (
						<Spinner animation="border" />
					) : (
						<span className="containerDateInfo center">
							<LocationOnOutlinedIcon fontSize="large" />
							<h4 className="center">{est.name}</h4>
						</span>
					)}
				</footer>
			</div>
		</React.Fragment>
	);
};
export default Date;
