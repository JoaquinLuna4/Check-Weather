import React from "react";

const Grade = () => {
	const API =
		"https://api.openweathermap.org/data/2.5/weather?q=cordoba&units=metric&appid=dcd20e9b46ed770b171e69f37ee13d57&lang=es";
	const [est, setEst] = React.useState([]);
	const [isLoading, setLoading] = React.useState(false);

	React.useEffect(() => {
		apiGet();
	}, []);

	const apiGet = async () => {
		const data = await fetch(API);
		const users = await data.json();
		setEst(users);
		setLoading(true);
	};
	return (
		<React.Fragment>
			{isLoading ? (
				<h2 className="center grade-value">CARGANDO</h2>
			) : (
				<h2 className="center grade-value">{Math.trunc(est.main.temp)}°C</h2>
			)}
		</React.Fragment>
	);
};

export default Grade;
