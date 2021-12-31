import React from "react";
import { Spinner } from "react-bootstrap";
const Date = () => {
	const API =
		"https://api.openweathermap.org/data/2.5/weather?q=cordoba&appid=dcd20e9b46ed770b171e69f37ee13d57";

	const [est, setEst] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);
	console.log(est, "EST INICIO");
	console.log(isLoading, "isLoading INICIO");

	React.useEffect(() => {
		fetch(API).then((users) => {
			setLoading(false);
			setEst(users);
			console.log(isLoading, "debe ser false");
		});
		apiGet();
	}, []);

	const apiGet = async () => {
		const data = await fetch(API);
		const users = await data.json();
		setEst(users);
		setLoading(false);
	};

	return (
		<React.Fragment>
			<div className="containerDate">
				<div className="containerDateInfo center">
					<h4 className="center pad-right10">Today</h4>

					<h4 className="center pad-right10 mar-top16"> . </h4>

					<h4 className="center pad-right10">14 jul</h4>
				</div>
				<footer className="center footerdate">
					<img src=".\images\location_on_white_24dp.svg" alt="icon" />

					{/* <h4 className="center">Córdoba</h4> */}
					{isLoading ? (
						<h4 className="center">Cargando</h4>
					) : (
						<h4 className="center">{est.name}</h4>
					)}
				</footer>
			</div>
		</React.Fragment>
	);
};
export default Date;
