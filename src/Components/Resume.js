import React from "react";
import Dates from "./dates";
import PreviewPic from "./preview";
import Type from "./type";
import Grade from "./grade";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

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

	const apiGet = async () => {
		const data = await fetch(url);
		const users = await data.json();
		setApi(users);
	};
	console.log(api, " este es api");

	const [Search, setSearch] = React.useState("");
	console.log(Search, "esto es el search");
	React.useEffect(() => {
		apiGet();
	}, []);

	const fecha = new Date();
	//El método toDateString() devuelve la fecha en un formato legible por un humano: Mon Aug 22 2022
	const today = fecha.toDateString().slice(0, -4);
	/*Como solo necesitamos dia, mes y numero usamos slice para eliminar los ultimos 4 caracteres
	de la cadena de string.*/

	return (
		<React.Fragment>
			<div className="container-resume">
				<header className="header-resume">
					<form
						className="form "
						onSubmit={(e) => {
							e.preventDefault();
							setSearch(e.target.ciudad.value);
						}}
					>
						<input
							type="text"
							name="ciudad"
							placeholder="Search for places"
							className="search mt-3 "
						/>
						{/* <input type="submit" value="search" /> */}
					</form>
					<a className="location  mt-3">
						{/* <img
							alt="current-location"
							name="current-location"
							src="/Check-Weather/src/Components/images/location_on_white_24dp.svg"
							className="location mt-3"
						>
							location
						</img> */}

						<LocationOnOutlinedIcon fontSize="large" />
					</a>
				</header>
				<PreviewPic
					state="https://images.vexels.com/media/users/3/234492/isolated/lists/03325d6a72e4f878170e0076f08bab39-cielo-de-tiempo-en-la-nube.png"
					alt="Preview image from weather"
				/>
				{/* COMPONENTE TEMPERATURA */}
				<Grade dataso={api.name} busqueda={Search} />

				{/* COMPONENTE TIPO DE CLIMA */}
				<Type dataso={api} busqueda={Search} />

				{/* COMPONENTE FECHA Y CIUDAD*/}
				<Dates day={today} dataso={api.name} busqueda={Search} />
			</div>
		</React.Fragment>
	);
};
export default Resume;
