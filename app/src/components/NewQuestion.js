import React from "react";
import "./styles/NewQuestion.scss";
import QuestionPreview from "./QuestionPreview";

class NewQuestion extends React.Component {

  state = {
    newQuestionInput: "put your questions here...",
    questionType: "1",
    form: {},
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      form: {
        ... this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div className="NewQuestion__container">
        <h2 className="title">Create a new question</h2>
        <input
          name="newQuestionInput"
          onChange={this.handleChange}
          type="text"
          className="input__text"
          placeholder="Put your question here..."
          value={this.state.newQuestionInput} />

        <div className="questionsTypes">
          listar aqui los tipos de respuestas que puedo hacer:
          <select
            onChange={this.handleChange}
            name="questionType"
            id=""
            value={this.state.questionType}
            className="option"
          >
            <option value="1">varias opciones</option>
            <option value="2">solo 1 opcion</option>
          </select>
        </div>
        <div
          className="answer__container">aca van a estar listadas todas las posibles respuestas
        </div>

        <QuestionPreview
          formValues = {this.state.form}
        />
      </div>

    );
  }
}
export default NewQuestion;