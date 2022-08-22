import React from "react";
import { Spinner } from "react-bootstrap";

const Type = (props) => {
	const defaultCity = props.dataso;

	const busquedas = props.busqueda;

	let city = busquedas ? busquedas : defaultCity;

	const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=dcd20e9b46ed770b171e69f37ee13d57&lang=es`;

	const [est, setEst] = React.useState([]);
	let [isLoading, setLoading] = React.useState(true);

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

	/////////////////****************** INTENTAMOS PONER CLIMA EN MAYUS */
	const descriptionWeather = est.weather[0].description;
	/*const tipoClima = descriptionWeather.split(" ");
	const mayusculas = () => {
		return tipoClima
			.map((descripcion) => {
				return descripcion[0].toUpperCase() + descripcion.substring(1);
			})
			.join(" ");
	};*/
	return (
		<React.Fragment>
			<div className="containerType footerdate">
				{isLoading ? (
					<Spinner animation="border" className="center" />
				) : (
					<span className="containerDateInfo center">
						<h2 className="center type-value">{descriptionWeather}</h2>
					</span>
				)}
			</div>
		</React.Fragment>
	);
};

export default Type;
