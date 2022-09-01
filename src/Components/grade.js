import React from "react";
import { Spinner } from "react-bootstrap";

const Grade = (props) => {
	const defaultCity = props.dataso;

	/*const busquedas = props.busqueda;

	let city = busquedas ? busquedas : defaultCity;

	const API = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=metric&appid=dcd20e9b46ed770b171e69f37ee13d57`;

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
	console.log(est.main, "valor del numero", est.name, "valor del nombre");*/
	return (
		<React.Fragment>
			{/* {isLoading ? (
				<Spinner animation="border" />
			) : ( */}
			<h2 className="center grade-value">{defaultCity}°C</h2>
			{/* )} */}
		</React.Fragment>
	);
};

export default Grade;
