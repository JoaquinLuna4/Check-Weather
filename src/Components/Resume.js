import React from "react";
import Dates from "./dates";
import PreviewPic from "./preview";
import Type from "./type";
import Grade from "./grade";
import Navbar from "./navbar";
import { Spinner } from "react-bootstrap";

import { useapiContext } from "../ContextApp";

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

	const datag = useapiContext();

	/*CONSUMIENDO LA API*/
	let key = datag.data.apikey;
	let city = datag.userCity ? datag.userCity : datag.data.defaultCity;

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=es`;

	const [api, setApi] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);
	console.log(datag.userCity, "usercity en resume");
	const apiGet = async () => {
		const data = await fetch(url);
		const users = await data.json();
		setApi(users);
		setLoading(false);
	};

	React.useEffect(() => {
		const timer = setTimeout(() => {
			apiGet();
			//Si no pongo este timer react no llega a cargar los nodos que se necesitan
			//para los valores de type y grade
		}, 1);

		return () => {
			setLoading(false);
			clearTimeout(timer);
		};
	}, []);

	const dayjs = require("dayjs");
	const localizedFormat = require("dayjs/plugin/localizedFormat");
	const plugin = dayjs.extend(localizedFormat);

	const today = dayjs()
		.format("llll")
		.slice(0, -15);
	/*
	// const fecha = new Date();
	// //El método toDateString() devuelve la fecha en un formato legible por un humano: Mon Aug 22 2022
	// const today = fecha.toGMTString().slice(0, -18);
	// /*Como solo necesitamos dia, mes y numero usamos slice para eliminar los ultimos 4 caracteres
	// de la cadena de string.*/
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
