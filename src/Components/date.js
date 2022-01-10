import React from "react";
import { Spinner } from "react-bootstrap";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

/// CURRENT LOCATION USER!!! /////
// if (navigator.geolocation) { //check if geolocation is available
// 	navigator.geolocation.getCurrentPosition(function(position){
// 	console.log(position);
// 	});
// 	}

const Date = (props) => {
	// const city = "cordoba";

	const validationLocation = () => {
		if (!props.dataso) {
			city = "cordoba";
		} else city = props.dataso;
	};
	const city = validationLocation();
	console.log(city, "city en el date");
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
	}, []);

	const apiGet = async () => {
		const data = await fetch(API);
		const users = await data.json();
		setEst(users);
		setLoading(false);
	};

	return (
		<React.Fragment>
			<div className="containerDate">
				<div className="containerDateInfo center">
					<h4 className="center pad-right10">Today </h4>

					<h4 className="center pad-right10 mar-botton16"> . </h4>

					<h4 className="center pad-right10">14 jul</h4>
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
