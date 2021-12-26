import React, { Component } from "react";
import Date from "./date";
import PreviewPic from "./preview";
import Type from "./type";
import Grade from "./grade";

class Resume extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-resume">
					<PreviewPic
						state="https://images.vexels.com/media/users/3/234492/isolated/lists/03325d6a72e4f878170e0076f08bab39-cielo-de-tiempo-en-la-nube.png"
						alt="Preview image from weather"
					/>
					<Grade number="15° C" />
					<Type name="Shower" />
					<Date today="Fri, 5 Jun" />
				</div>
			</React.Fragment>
		);
	}
}
export default Resume;
