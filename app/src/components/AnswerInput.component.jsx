import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./styles/AnswerInput.component.scss";

class AnswerInput extends React.Component {

  state = {}

  render() {
    return (
      <div className="answer-container">
        {/* generar los inputText automaticamente a partir del boton pluss */ }
        <h3>Opciones</h3>
        <div className="columns is-mobile">
          <div className="column">
            <input
              name="newQuestion_anwser"
              onChange={ this.props.onChange }
              value={ this.props.answerData }
              type="text"
              placeholder="opción 1...">
            </input>
          </div>
          <div className="column is-narrow-mobile">
            <button className="button">
              <span className="icon is-small">
                <FontAwesomeIcon icon={ ['fa', 'plus'] } color="#1D3557" />
              </span>
            </button>
          </div>
        </div>
        {/* <div className="columns is-mobile">
          <div className="column">
            <input
              name="answer2"
              onChange={this.props.onChange}
              value={this.props.answer2}
              className="input is-small"
              type="text"
              placeholder="ingrese respuesta">
            </input>
          </div>
          <div className="column is-narrow-mobile">
            <button className="button">
              <span className="icon is-small">
                <FontAwesomeIcon icon={['fa', 'plus']} color="#1D3557" />
              </span>
            </button>
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column">
            <input
              name="answer3"
              onChange={this.props.onChange}
              value={this.props.answer3}
              className="input is-small"
              type="text"
              placeholder="ingrese respuesta">
            </input>
          </div>
          <div className="column is-narrow-mobile">
            <button className="button">
              <span className="icon is-small">
                <FontAwesomeIcon icon={['fa', 'plus']} color="#1D3557" />
              </span>
            </button>
          </div>
        </div> */}
      </div>

    );
  }
}
export default AnswerInput;