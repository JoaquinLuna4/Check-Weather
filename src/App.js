import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "./Components/Resume";
import Weekly from "./Components/Weekly";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Resume />
				<Weekly />
			</React.Fragment>
		);
	}
}
export default App;
