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

	///agregado 4/08 INTENTAMOS AGREGAR FORMULARIO
	// ACTUALMENTE NO SE ACTUALIZA SI SE CAMBIA EL VALOR DEL FORMULARIO
	const [ciudad, setCiudad] = React.useState([]);
	const handleChange = (e) => {
		setCiudad(e.target.value);
	};

	return (
		<React.Fragment>
			<div className="container-resume">
				<PreviewPic
					state="https://images.vexels.com/media/users/3/234492/isolated/lists/03325d6a72e4f878170e0076f08bab39-cielo-de-tiempo-en-la-nube.png"
					alt="Preview image from weather"
				/>
				{/* COMPONENTE TEMPERATURA */}
				{/* <Grade dataso={props.city} />  */}
				{/* COMPONENTE CIUDAD */}
				{/* <Type dataso={props.city} /> */}
				{/* <FormHook /> */}

				{/* COMPONENTE FECHA */}

				{/* INTENTAMOS AGREGAR FORMULARIO PARA ELEGIR CIUDAD QUE QUEREMOS */}
				<input
					type="text"
					placeholder="Search"
					id="ciudad"
					onChange={(e) => handleChange(e)}
				/>

				{/* HASTA ACA FUERON LOS CAMBIOS  */}
				<Date today="Fri, 5 Jun" dataso={ciudad} />
			</div>
		</React.Fragment>
	);
};
export default Resume;
