import React from "react";
const Type = (props) => {
	const descriptionWeather = props.dataso;

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
					<h2 className="center type-value">{descriptionWeather}</h2>
				</span>
			</div>
		</React.Fragment>
	);
};

export default Type;
