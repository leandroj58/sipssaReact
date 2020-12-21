import React from "react";
import "./styles/DashboardBody.scss";

class DashboardBody extends React.Component {
	render() {
		return (
			<div className="dashboard__container">
				<div className="inner__containder">mis preguntas</div>
				<div className="inner__containder">nueva pregunta</div>
			</div>
		);
	}
}

export default DashboardBody;
