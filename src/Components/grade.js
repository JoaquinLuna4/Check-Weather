import React from "react";

const Grade = () => {
	const API =
		"https://api.openweathermap.org/data/2.5/weather?q=cordoba&units=metric&appid=dcd20e9b46ed770b171e69f37ee13d57&lang=es";
	const [est, setEst] = React.useState([]);

	const [isLoading, setLoading] = React.useState(true);
	console.log(isLoading, "el loading abajo del estate");
	console.log(est, "el est abajo del true");
	React.useEffect(() => {
		setLoading(true);
		fetch(API).then((users) => {
			setLoading(false);
			setEst(false);
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
			{isLoading ? (
				<h2 className="center grade-value">CARGANDO CARNAL</h2>
			) : (
				<h2 className="center grade-value">{Math.trunc(est.main.temp)}°C</h2>
			)}

			{/* <h2 className="center grade-value">{Math.trunc(est.main.temp)}°C</h2> */}
		</React.Fragment>
	);
};

export default Grade;
