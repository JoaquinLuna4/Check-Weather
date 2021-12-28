import React, { useState } from "react";

const Type = () => {
	const API =
		"https://api.openweathermap.org/data/2.5/weather?q=cordoba&appid=dcd20e9b46ed770b171e69f37ee13d57";
	// const API = "https://jsonplaceholder.typicode.com/users";
	const [est, setEst] = React.useState([]);
	// let carga;
	React.useEffect(() => {
		apiGet();
		// setEst((carga = true));
	}, []);

	const apiGet = async () => {
		const data = await fetch(API);
		const users = await data.json();
		setEst(users);
		// setEst((carga = false));
	};
	return (
		<React.Fragment>
			{/* <h2 className="center type-value">Shower</h2> */}
			<h2 className="center type-value">{est.weather[0].description}</h2>
		</React.Fragment>
	);
};

export default Type;
