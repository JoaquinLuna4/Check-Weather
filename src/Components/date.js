import React from "react";
import { Spinner } from "react-bootstrap";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const Date = () => {
	const API =
		"https://api.openweathermap.org/data/2.5/weather?q=cordoba&appid=dcd20e9b46ed770b171e69f37ee13d57";

	const [est, setEst] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);

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
			<div className="containerDate">
				<div className="containerDateInfo center">
					<h4 className="center pad-right10">Today</h4>

					<h4 className="center pad-right10 mar-botton16"> . </h4>

					<h4 className="center pad-right10">14 jul</h4>
				</div>
				<footer className="center footerdate">
					{isLoading ? (
						<Spinner animation="border" />
					) : (
						<span className="containerDateInfo center">
							<LocationOnOutlinedIcon fontSize="large" />
							<h4 className="center">{est.name}</h4>
						</span>
					)}
				</footer>
			</div>
		</React.Fragment>
	);
};
export default Date;
