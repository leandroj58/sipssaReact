import React from "react";
import "./styles/NewQuestion.scss";

class NewQuestion extends React.Component {
  render() {
    return (
      <div className="NewQuestion__container">
        <h2 className="title">Create a new question</h2>
        <input type="text" className="input__text" placeholder="Put your question here..."/>
        <div className="questionsTypes">
          listar aqui los tipos de respuestas que puedo hacer:
          - varias opciones seleccion unica
          - varias opciones sleccion multiple

        </div>
        <div className="answer__container">aca van a estar listadas todas las posibles respuestas</div>
      </div>
    )

  }
}
export default NewQuestion;