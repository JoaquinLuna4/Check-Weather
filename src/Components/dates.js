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

const Dates = (props) => {
	const defaultCity = props.dataso;

	return (
		<React.Fragment>
			<div className="containerDate">
				<div className="containerDateInfo center">
					<h4 className="center pad-right10">Today </h4>

					<h4 className="center pad-right10 mar-botton16"> . </h4>

					<h4 className="center pad-right10">{props.day}</h4>
				</div>
				<footer className="center footerdate">
					<span className="containerDateInfo center">
						<LocationOnOutlinedIcon fontSize="large" />
						<h4 className="center">{defaultCity}</h4>
					</span>
				</footer>
			</div>
		</React.Fragment>
	);
};
export default Dates;
