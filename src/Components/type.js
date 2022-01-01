import React from "react";
import { Spinner } from "react-bootstrap";

const Type = () => {
	const API =
		"https://api.openweathermap.org/data/2.5/weather?q=cordoba&appid=dcd20e9b46ed770b171e69f37ee13d57&lang=es";

	const [est, setEst] = React.useState([]);
	let [isLoading, setLoading] = React.useState(true);
	console.log(isLoading);

	React.useEffect(() => {
		fetch(API).then((users) => {
			setLoading(false);
			setEst(users);
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
			<div className="containerType footerdate">
				{/* {isLoading ? (
					<Spinner animation="border" className="center" />
				) : (
					<span className="containerDateInfo center">
						<h2 className="center type-value">{est.weather[0].description}</h2>
						<h2 className="center type-value">Shower</h2>
					</span>
				)} */}
				<h2 className="center type-value">{est.weather[0].description}</h2>
				{/* <Spinner animation="border" className="center" /> */}
			</div>
		</React.Fragment>
	);
};

export default Type;
