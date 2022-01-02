import React from "react";
import axios from "axios";

const URL =
	"https://api.openweathermap.org/data/2.5/weather?q=cordoba&appid=dcd20e9b46ed770b171e69f37ee13d57";

const SearchCard = () => {
	const [usuarios, setUsuarios] = React.useState([]);
	const [tablaUsuarios, setTablaUsuarios] = React.useState([]);
	const [busqueda, setBusqueda] = React.useState("");

	const peticionesGet = async () => {
		await axios
			.get(URL)
			.then((response) => {
				setUsuarios(response.data.data);
				console.log(usuarios);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleChange = (e) => {
		console.log(e.target.value);
		// setBusqueda(e.target.value);
		// filtrar(e.target.value);
	};
	// const filtrar = (terminoBusqueda) => {
	// 	var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
	// 		if (
	// 			elemento.name
	// 				.toString()
	// 				.toLowerCase()
	// 				.includes(terminoBusqueda.toLowerCase()) ||
	// 			elemento.company.name
	// 				.toString()
	// 				.toLowerCase()
	// 				.includes(terminoBusqueda.toLowerCase())
	// 		) {
	// 			return elemento;
	// 		}
	// 	});
	// 	setUsuarios(resultadosBusqueda);
	// };
	React.useEffect(() => {
		peticionesGet();
	}, []);
	return (
		<React.Fragment>
			<div className="containerBusqueda">
				<input
					className="form-control inputBuscar"
					// value={busqueda}
					// placeholder="Búsqueda por Nombre o Empresa"
					onChange={handleChange}
				/>
			</div>
			<button className="btn btn-success">Submiteo</button>
			<h1>Hello world </h1>
		</React.Fragment>
	);
};

export default SearchCard;
