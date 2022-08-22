import React from "react";
import Dates from "./dates";
import PreviewPic from "./preview";
import Type from "./type";
import Grade from "./grade";

// const API =
// 	"https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=dcd20e9b46ed770b171e69f37ee13d57";
// const DEFAULT_QUERY = "redux";

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
	const fecha = new Date();
	//El método toDateString() devuelve la fecha en un formato legible por un humano: Mon Aug 22 2022
	const today = fecha.toDateString().slice(0, -4);
	/*Como solo necesitamos dia, mes y numero usamos slice para eliminar los ultimos 4 caracteres
	de la cadena de string.*/

	const [Search, setSearch] = React.useState("");
	return (
		<React.Fragment>
			<div className="container-resume">
				<form
					className="center"
					onSubmit={(e) => {
						e.preventDefault();
						setSearch(e.target.ciudad.value);
					}}
				>
					<input type="text" name="ciudad" placeholder="Buscar ciudad" />
					<input type="submit" value="search" />
				</form>
				<PreviewPic
					state="https://images.vexels.com/media/users/3/234492/isolated/lists/03325d6a72e4f878170e0076f08bab39-cielo-de-tiempo-en-la-nube.png"
					alt="Preview image from weather"
				/>
				{/* COMPONENTE TEMPERATURA */}
				<Grade dataso={"cordoba"} busqueda={Search} />

				{/* COMPONENTE TIPO DE CLIMA */}
				<Type dataso={"cordoba"} busqueda={Search} />

				{/* COMPONENTE FECHA Y CIUDAD*/}
				<Dates day={today} dataso={"cordoba"} busqueda={Search} />
			</div>
		</React.Fragment>
	);
};
export default Resume;
