import React from "react";

const Type = () => {
	const API =
		"https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=dcd20e9b46ed770b171e69f37ee13d57";
	// const API = "https://jsonplaceholder.typicode.com/users";
	const [est, setEst] = React.useState([]);
	React.useEffect(() => {
		apiGet();
	}, []);

	const apiGet = async () => {
		const data = await fetch(API);
		const users = await data.json();
		setEst(users);
	};
	return (
		<React.Fragment>
			{/* <h2 className="center type-value">Shower</h2> */}
			<h2 className="center type-value">{est.weather[0].main}</h2>
		</React.Fragment>
	);
};

export default Type;
