import React from "react";
import { Spinner } from "react-bootstrap";

const Type = (props) => {
	const descriptionWeather = props.dataso;

	const busquedas = props.busqueda;

	/////////////////*  INTENTAMOS PONER CLIMA EN MAYUS */
	//const descriptionWeather = est.weather[0].description;
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
				<span className="containerDateInfo center">
					<h2 className="center type-value">
						{descriptionWeather.weather[0].description}
					</h2>
				</span>
			</div>
		</React.Fragment>
	);
};

export default Type;
