import React from "react";

import "./styles/NewQuestion.component.scss";
import AnswerInputComponent from "./AnswerInput.component";

class NewQuestion extends React.Component {
	render() {
		return (
			<div className='container'>
				<h2 className="title">Nueva Pregunta</h2>
				{/* acá va el nombre de referencia de la pregunta */ }
				<input
					type="text"
					name='newQuestion_name'
					placeholder='Nombre de la pregunta'
					onChange={ this.props.onChange }
					value={ this.props.value } />

				{/* acá va la pregunta */ }
				<h3>Pregunta</h3>
				<input
					type='text'
					name='newQuestion_question'
					placeholder='Pregunta...'
					onChange={ this.props.onChange }
					value={ this.props.value} />
				
				{/* acá van las respuestas */ }
				<AnswerInputComponent
					className='answerInputComponent'
					answerData= {this.props.answerData}
					onChange={ this.props.onChange } />
			</div>
		);
	}
}

export default NewQuestion;
