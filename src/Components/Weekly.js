import React from "react";
import { Spinner } from "react-bootstrap";

const Weekly = () => {
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
	return (
		<React.Fragment>
			{isLoading ? (
				<div className="container-weekly center">
					<div className="center loading">
						<Spinner animation="border" />
					</div>
				</div>
			) : (
				<div className="container-weekly">
					<h2 className="title-weekly ">Today's Highlights</h2>
					<div className="container-highlight center">
						<div className="highlight-card1 highlight ">
							<h6>Wind Status</h6>
							<h3>Speed {api.wind.speed} mph</h3>
						</div>
						<div className="highlight-card2 highlight">
							<h6>Humidity</h6>
							<h3> {api.main.humidity} %</h3>
						</div>
						<div className="highlight-card3 highlight">
							<h6>Visibility</h6>
							<h3> {api.visibility} miles</h3>
						</div>
						<div className="highlight-card4 highlight">
							<h6>Air Pressure</h6>
							<h3> {api.main.pressure} mb</h3>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};
export default Weekly;
