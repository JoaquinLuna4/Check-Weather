import React from "react";
import GraphicBar from "./bar-graphic";
import { Spinner } from "react-bootstrap";
import Forecast from "./Forecast";

// https://api.openweathermap.org/data/2.5/forecast?q=london&cnt=5&appid=dcd20e9b46ed770b171e69f37ee13d57
// ESTE LINK TIENE LA API CON EL DETALLE SEMANALLLLL https://openweathermap.org/forecast5#limit ---> API DOCUMENTACION
function Weekly() {
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
					<div className="cont-week-content">
						<Forecast />

						<h2>Today's Highlights</h2>
						<div className="container-highlight center">
							<div className="highlight-card1 highlight ">
								<div className="highlight-content">
									<h6>Wind Status</h6>
									<h3>{api.wind.speed} mph</h3>
								</div>
							</div>
							<div className="highlight-card2 highlight ">
								<div className="highlight-content">
									<h6>Humidity</h6>
									<h3> {api.main.humidity + "%"} </h3>
									<div className="bar-graphic">
										<div className="scale-graphic">
											<h6 className="scale-value">0</h6>
											<h6 className="scale-value">50</h6>
											<h6 className="scale-value">100</h6>
										</div>
										<GraphicBar value={api.main.humidity + "%"} />
									</div>
								</div>
							</div>
							<div className="highlight-card3 highlight">
								<div className="highlight-content">
									<h6>Visibility</h6>
									<h3> {api.visibility} miles</h3>
								</div>
							</div>
							<div className="highlight-card4 highlight">
								<div className="highlight-content">
									<h6>Air Pressure</h6>
									<h3> {api.main.pressure} mb</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
}
export default Weekly;
