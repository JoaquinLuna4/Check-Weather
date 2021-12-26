import React from "react";

class PreviewPic extends React.Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className="center">
					<img
						src={this.props.state}
						alt="preview"
						className="center previewimg"
					/>
				</div>
			</React.Fragment>
		);
	}
}
export default PreviewPic;
