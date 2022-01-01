import React, { Component } from "react";

import Date from "./date";
import PreviewPic from "./preview";
import Type from "./type";
import Grade from "./grade";

// const API =
// 	"https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=dcd20e9b46ed770b171e69f37ee13d57";
// const DEFAULT_QUERY = "redux";

class Resume extends Component {
	// componentDidMount() {
	// 	fetch(API + DEFAULT_QUERY)
	// 		.then((response) => response.json())
	// 		.then((dataJson) => this.setState({ data: dataJson.data }));
	// }
	// componentDidMount() {
	// 	fetch(API + DEFAULT_QUERY)
	// 		.then((response) => response.json())
	// 		.then((data) => console.log(data));
	// }

	//FORMATO JONY
	// componentDidMount() {
	// 	this.fetchData(
	// 		"https://www.metaweather.com/api/location/search/?query=buenos%20aires"
	// 	);
	// }
	// fetchData = async (url) => {
	// 	const response = await fetch(url);
	// 	const data = await response.json();
	// 	console.log(data, "lo que trae la api");
	// 	this.setState({
	// 		data: data,
	// 	});
	// };

	render() {
		return (
			<React.Fragment>
				<div className="container-resume">
					<PreviewPic
						state="https://images.vexels.com/media/users/3/234492/isolated/lists/03325d6a72e4f878170e0076f08bab39-cielo-de-tiempo-en-la-nube.png"
						alt="Preview image from weather"
					/>

					{/* <Grade /> */}
					<Type />
					{/* <Date today="Fri, 5 Jun" /> */}
				</div>
			</React.Fragment>
		);
	}
}
export default Resume;
