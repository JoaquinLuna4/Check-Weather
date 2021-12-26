import React from "react";

class Grade extends React.Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<h2 className="center grade-value">{this.props.number}</h2>
			</React.Fragment>
		);
	}
}
export default Grade;
