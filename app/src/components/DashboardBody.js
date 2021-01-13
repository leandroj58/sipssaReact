import React from "react";
import "./styles/DashboardBody.scss";

class DashboardBody extends React.Component {
	state = {};

	handleClick = (e) => {
		console.log({value:e.target })
	}


	render() {
		return (
			<div className="dashboard__container">
				<div value="myQuestions" className="inner__containder">mis preguntas</div>
				<div name="newQuestionContainer" value="newQuestion" onClick={this.handleClick} className="inner__containder">nueva pregunta</div>

				{/* <input value={this.state.questionInput} name="questionInput" onChange={this.handleChange} type="text" className="inputTest" /> */}
				{/* <button name="NombreDelBoton" onClick={this.handleClick} className="buttonTest">este es el boton</button> */}
			</div>
		);
	}
}

export default DashboardBody;
