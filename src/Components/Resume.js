import React, { Component } from "react";
import Date from "./date";
import PreviewPic from "./preview";
import Type from "./type";
import Grade from "./grade";

const API =
	"https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=dcd20e9b46ed770b171e69f37ee13d57";
const DEFAULT_QUERY = "redux";

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
	// 	],
	// };

	//FORMATO YT
	constructor(props) {
		super(props);

		this.state = {
			data: {
				coord: {},
				weather: [
					{
						description: null,
						base: null,
					},
				],
				base: [],
				main: {},
				visibility: [],
				wind: [],
				clouds: [],
				dt: [],
				sys: [],
				timezone: [],
				id: [],
				name: [],
				cod: [],
			},
		};
	}
	componentDidMount() {
		fetch(API + DEFAULT_QUERY)
			.then((response) => response.json())
			.then((dataJson) => this.setState({ data: dataJson.data }));
	}
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
		const { data } = this.state;
		return (
			<React.Fragment>
				<div className="container-resume">
					{/* {weather.map((e, i) => {
						return <Type name={e.description} key={i} />;
					})} */}

					{/* <PreviewPic
						state="https://images.vexels.com/media/users/3/234492/isolated/lists/03325d6a72e4f878170e0076f08bab39-cielo-de-tiempo-en-la-nube.png"
						alt="Preview image from weather"
					/>
					<Grade number="15 °C" />
					<Type name={"shower"} />
					<Date today="Fri, 5 Jun" /> */}

					{/* EXAMPLE FETCH DATA FUNCIONA */}
					<ul>
						{data.map((e) => (
							<li key={e.id}>
								<a href={e.url}>{e.title}</a>
								{console.log(e.title)}
							</li>
						))}
					</ul>
				</div>
			</React.Fragment>
		);
	}
}
export default Resume;
