import React from "react";

const Date = () => {
	const API =
		"https://api.openweathermap.org/data/2.5/weather?q=cordoba&appid=dcd20e9b46ed770b171e69f37ee13d57";

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
			<div className="containerDate">
				<h4 className="center">Today</h4>
				<h4 className="center"> . </h4>
				<h4 className="center">14 jul</h4>
				<footer className="center footerdate">
					{/* <span class="material-icons-outlined">place</span> */}
					{/* <h4 className="center">Córdoba</h4> */}
					<h4 className="center">{est.name}</h4>
				</footer>
				{/* METER ESTO EN GRID SERA MAS
					FACIL */}
			</div>
		</React.Fragment>
	);
};
export default Date;
