import React from "react";

// import "./styles/CreateNewQuestion.scss";
import AnswerInput from "./AnswerInput";

class CreateNewQuestion extends React.Component {
	render() {
		return (
			<div className='CreateNewQuestion__container'>
				<h3 className='sub_title'>Ingresá tu pregunta:</h3>
				{/* acá va la pregunta */}
				<input
					name='newQuestionInput'
					placeholder='Pregunta...'
					type='text'
					className='input is-small primary'
					onChange={this.props.onChange}
					value={this.props.values.newQuestionInput}
				/>
				{/* acá van las respuestas */}
				<AnswerInput className='answer__input__container' onChange={this.props.onChange} />
			</div>
		);
	}
}

export default CreateNewQuestion;
