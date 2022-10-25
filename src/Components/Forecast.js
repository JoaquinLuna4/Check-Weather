import React from "react";
import { Spinner } from "react-bootstrap";

// https://api.openweathermap.org/data/2.5/forecast?q=london&cnt=5&appid=dcd20e9b46ed770b171e69f37ee13d57
// ESTE LINK TIENE LA API CON EL DETALLE SEMANALLLLL https://openweathermap.org/forecast5#limit ---> API DOCUMENTACION
function Forecast() {
	/*CONSUMIENDO LA API*/
	let city = "cordoba";
	const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=50&appid=dcd20e9b46ed770b171e69f37ee13d57&units=metric`;

	const [api, setApi] = React.useState([]);

	const [isLoading, setLoading] = React.useState(true);

	const apiGet = async () => {
		const data = await fetch(url);
		const users = await data.json();
		setApi(users);
		setLoading(false);
	};
	React.useEffect(() => {
		const timer = setTimeout(() => {
			//Si no pongo este timer react no llega a cargar los nodos que se necesitan
			//para los valores de type y grade
			apiGet();
		}, 0);

		return () => {
			clearTimeout(timer);
		};
	}, []);
	const fecha = new Date();
	//El método toDateString() devuelve la fecha en un formato legible por un humano: Mon Aug 22 2022
	// const today = fecha.toGMTString().slice(0, -18);
	/*Como solo necesitamos dia, mes y numero usamos slice para eliminar los ultimos 4 caracteres
	de la cadena de string.*/

	// console.log(api.list[0].dt_txt, "api del forecast");

	const dayjs = require("dayjs");
	const localizedFormat = require("dayjs/plugin/localizedFormat");
	const plugin = dayjs.extend(localizedFormat);

	return (
		<React.Fragment>
			{isLoading ? (
				<div className="container-weekly center">
					<div className="center loading">
						<Spinner animation="border" />
					</div>
				</div>
			) : (
				<div className="extend-weather center">
					<div className="days-cards">
						{/* <header>{api.list[0].dt_txt.slice(0, -8)}</header> */}
						<header>
							{dayjs(api.list[6].dt_txt)
								.format("llll")
								.slice(0, -14)}
						</header>

						<footer>
							<div className="max-temp">
								{Math.round(api.list[6].main.temp_max) + 1}° C
							</div>
							<div className="min-temp">
								{Math.round(api.list[6].main.temp_min)}° C
							</div>
						</footer>
					</div>
					<div className="days-cards">
						<header>
							{dayjs(api.list[12].dt_txt)
								.format("llll")
								.slice(0, -14)}
						</header>

						<footer>
							<div className="max-temp">
								{Math.round(api.list[12].main.temp_max) + 1}° C
							</div>
							<div className="min-temp">
								{Math.round(api.list[12].main.temp_min)}° C
							</div>
						</footer>
					</div>
					<div className="days-cards">
						<header>
							{dayjs(api.list[22].dt_txt)
								.format("llll")
								.slice(0, -14)}
						</header>

						<footer>
							<div className="max-temp">
								{Math.round(api.list[22].main.temp_max) + 1}° C
							</div>
							<div className="min-temp">
								{Math.round(api.list[22].main.temp_min)}° C
							</div>
						</footer>
					</div>
					<div className="days-cards">
						<header>
							{dayjs(api.list[30].dt_txt)
								.format("llll")
								.slice(0, -14)}
						</header>

						<footer>
							<div className="max-temp">
								{Math.round(api.list[30].main.temp_max) + 1}° C
							</div>
							<div className="min-temp">
								{Math.round(api.list[30].main.temp_min)}° C
							</div>
						</footer>
					</div>
					<div className="days-cards">
						<header>
							{dayjs(api.list[36].dt_txt)
								.format("llll")
								.slice(0, -14)}
						</header>

						<footer>
							<div className="max-temp">
								{Math.round(api.list[36].main.temp_max) + 1}° C
							</div>
							<div className="min-temp">
								{Math.round(api.list[36].main.temp_min)}° C
							</div>
						</footer>
					</div>
				</div>
			)}
		</React.Fragment>
	);
}
export default Forecast;
