import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "./Components/Resume";
import Weekly from "./Components/Weekly";
import { AppProvider } from "./ContextApp";
const App = () => {
	return (
		<AppProvider>
			<Resume />

			<Weekly />
		</AppProvider>
	);
};
export default App;
