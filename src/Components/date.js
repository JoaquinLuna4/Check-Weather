import React from "react";

class Date extends React.Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className="containerDate">
					<h4 className="center">Today</h4>
					<h4 className="center"> . </h4>
					<h4 className="center">{this.props.today}</h4>
					{/* METER ESTO EN GRID SERA MAS
					FACIL */}
				</div>
			</React.Fragment>
		);
	}
}
export default Date;
