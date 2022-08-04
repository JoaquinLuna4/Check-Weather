import React, { Component, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchCard from "./Components/searchResult.js";

import Resume from "./Components/Resume";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Resume city="london" />

				{/* <SearchCard /> */}
			</React.Fragment>
		);
	}
}
export default App;
