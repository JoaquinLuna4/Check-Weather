import React from "react";

class Type extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h2 className="center type-value">{this.props.name}</h2>
			</React.Fragment>
		);
	}
}
export default Type;
