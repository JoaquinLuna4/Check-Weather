import React from "react";
import Dates from "./dates";
import PreviewPic from "./preview";
import Type from "./type";
import Grade from "./grade";
import Navbar from "./navbar";
import { Spinner } from "react-bootstrap";

const Resume = (props) => {
	/// CURRENT LOCATION USER!!! /////
	/*
const currentLocation = (lat, lon) => {
	if (navigator.geolocation) {
		//check if geolocation is available
		navigator.geolocation.getCurrentPosition(function (position) {
			return {
				lat: position.coords.latitude,        //ESTA LOGICA NO ESTA MUY CLARA
				lon: position.coords.longitude,
			}
			
			});
			
	}
	
};*/

	/*CONSUMIENDO LA API*/
	let city = "cordoba";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=dcd20e9b46ed770b171e69f37ee13d57&lang=es`;

	const [api, setApi] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);

	const apiGet = async () => {
		const data = await fetch(url);
		const users = await data.json();
		setApi(users);
		setLoading(false);
	};
	console.log(api, " este es api");

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

	const dayjs = require("dayjs");
	const localizedFormat = require("dayjs/plugin/localizedFormat");
	const plugin = dayjs.extend(localizedFormat);

	// console.log(parti(), "ESTO ES EL DAYS");

	const today = dayjs()
		.format("llll")
		.slice(0, -14);
	/*
	const fecha = new Date();
	//El método toDateString() devuelve la fecha en un formato legible por un humano: Mon Aug 22 2022
	const today = fecha.toGMTString().slice(0, -18);
	/*Como solo necesitamos dia, mes y numero usamos slice para eliminar los ultimos 4 caracteres
	de la cadena de string.*/

	return (
		<React.Fragment>
			{isLoading ? (
				<Spinner animation="border" className="center container-resume" />
			) : (
				<div className="container-resume">
					<Navbar />
					<PreviewPic
						state="https://images.vexels.com/media/users/3/234492/isolated/lists/03325d6a72e4f878170e0076f08bab39-cielo-de-tiempo-en-la-nube.png"
						alt="Preview image from weather"
					/>

					{/* COMPONENTE TEMPERATURA  */}
					<Grade dataso={Math.trunc(api.main.temp)} />

					{/*  COMPONENTE TIPO DE CLIMA */}
					<Type dataso={api.weather[0].description} />

					{/*  COMPONENTE FECHA Y CIUDAD*/}
					<Dates day={today} dataso={api.name} />
				</div>
			)}
		</React.Fragment>
	);
};
export default Resume;
