import React from "react";

import Date from "./date";
import FormHook from "./formulario";
import PreviewPic from "./preview";
import Type from "./type";
import Grade from "./grade";

// const API =
// 	"https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=dcd20e9b46ed770b171e69f37ee13d57";
// const DEFAULT_QUERY = "redux";

const Resume = (props) => {
	// componentDidMount() {
	// 	fetch(API + DEFAULT_QUERY)
	// 		.then((response) => response.json())
	// 		.then((dataJson) => this.setState({ data: dataJson.data }));
	// }
	// componentDidMount() {
	// 	fetch(API + DEFAULT_QUERY)
	// 		.then((response) => response.json())
	// 		.then((data) => console.log(data));
	// }

	//FORMATO JONY
	// componentDidMount() {
	// 	this.fetchData(
	// 		"https://www.metaweather.com/api/location/search/?query=buenos%20aires"
	// 	);
	// }
	// fetchData = async (url) => {
	// 	const response = await fetch(url);
	// 	const data = await response.json();
	// 	console.log(data, "lo que trae la api");
	// 	this.setState({
	// 		data: data,
	// 	});
	// };
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
				{/* <Grade dataso={"cordoba"} busqueda={Search} /> */}
				{
					//******************* ESTO NO ESTA ANDANDO, QUEDA TILDADO EN EL ULTIMO QUE SE PONGA */
				}

				{/* COMPONENTE TIPO DE CLIMA */}
				{/* <Type dataso={"cordoba"} busqueda={Search} /> */}
				{/* <FormHook /> */}

				{/* BUSQUEDA SE LOGRA PARA COMPONENT DATE, NO IMPACTA EN GRADE */}

				{/* COMPONENTE FECHA Y CIUDAD*/}
				<Date today="Fri, 5 Jun" dataso={"cordoba"} busqueda={Search} />
			</div>
		</React.Fragment>
	);
};
export default Resume;
