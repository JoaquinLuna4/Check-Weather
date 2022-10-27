import React from "react";
import { useState, useContext } from "react";

const apiContext = React.createContext();
export function useapiContext() {
	return useContext(apiContext);
}

export function AppProvider(props) {
	const [actualLocation, setActualLocation] = useState(null);
	const [UserCity, setUserCity] = useState(null);
	console.log(UserCity, "esto es user city");

	const data = {
		apikey: "dcd20e9b46ed770b171e69f37ee13d57",
		defaultCity: "london",
	};

	return (
		<apiContext.Provider value={{ data, UserCity, setUserCity }}>
			{props.children}
		</apiContext.Provider>
	);
}
