import React, { Component } from "react";
import Date from "./date";
import PreviewPic from "./preview";
import Type from "./type";
import Grade from "./grade";

class Resume extends Component {
	// state = {
	// 	data: [
	// 		{
	// 			id: 245722,
	// 			weather_state_name: "Light Cloud",
	// 			weather_state_abbr: "lc",
	// 			wind_direction_compass: "NE",
	// 			created: "2013-04-23T05:47:24.233130Z",
	// 			applicable_date: "2013-04-27",
	// 			min_temp: 17,
	// 			max_temp: 23,
	// 			the_temp: null,
	// 			wind_speed: 8,
	// 			wind_direction: 44.99999999999999,
	// 			air_pressure: null,
	// 			humidity: null,
	// 			visibility: null,
	// 			predictability: 70,
	// 		},
	// 		{
	// 			id: 240750,
	// 			weather_state_name: "Light Cloud",
	// 			weather_state_abbr: "lc",
	// 			wind_direction_compass: "NE",
	// 			created: "2013-04-23T04:47:20.758240Z",
	// 			applicable_date: "2013-04-27",
	// 			min_temp: 17,
	// 			max_temp: 23,
	// 			the_temp: null,
	// 			wind_speed: 8,
	// 			wind_direction: 44.99999999999999,
	// 			air_pressure: null,
	// 			humidity: null,
	// 			visibility: null,
	// 			predictability: 70,
	// 		},
	// 		{
	// 			id: 246417,
	// 			weather_state_name: "Light Cloud",
	// 			weather_state_abbr: "lc",
	// 			wind_direction_compass: "NE",
	// 			created: "2013-04-23T03:47:18.134000Z",
	// 			applicable_date: "2013-04-27",
	// 			min_temp: 17,
	// 			max_temp: 23,
	// 			the_temp: null,
	// 			wind_speed: 8,
	// 			wind_direction: 44.99999999999999,
	// 			air_pressure: null,
	// 			humidity: null,
	// 			visibility: null,
	// 			predictability: 70,
	// 		},
	// 		{
	// 			id: 246290,
	// 			weather_state_name: "Light Cloud",
	// 			weather_state_abbr: "lc",
	// 			wind_direction_compass: "NE",
	// 			created: "2013-04-23T02:47:15.064740Z",
	// 			applicable_date: "2013-04-27",
	// 			min_temp: 17,
	// 			max_temp: 23,
	// 			the_temp: null,
	// 			wind_speed: 8,
	// 			wind_direction: 44.99999999999999,
	// 			air_pressure: null,
	// 			humidity: null,
	// 			visibility: null,
	// 			predictability: 70,
	// 		},
	// 		{
	// 			id: 238639,
	// 			weather_state_name: "Light Cloud",
	// 			weather_state_abbr: "lc",
	// 			wind_direction_compass: "NE",
	// 			created: "2013-04-23T01:47:12.348460Z",
	// 			applicable_date: "2013-04-27",
	// 			min_temp: 17,
	// 			max_temp: 23,
	// 			the_temp: null,
	// 			wind_speed: 8,
	// 			wind_direction: 44.99999999999999,
	// 			air_pressure: null,
	// 			humidity: null,
	// 			visibility: null,
	// 			predictability: 70,
	// 		},
	// 	],
	// };

	//FORMATO YT

	state = {};
	componentDidMount() {
		fetch(
			"https://www.metaweather.com/api/location/search/?query=buenos%20aires",
			{ mode: "no-cors" }
		)
			.then((response) => response.json())
			.then((dataJson) => this.setState({ data: dataJson }));
	}

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
					<Grade number="15 °C" />
					<Type name="Shower" />
					<Date today="Fri, 5 Jun" />
				</div>
			</React.Fragment>
		);
	}
}
export default Resume;
