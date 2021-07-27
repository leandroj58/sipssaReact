import React from "react";
import { nanoid } from "nanoid"
import "../styles/newQuestion.page.scss"
import * as config from "../../configValues"
import { GoogleSpreadsheet } from "../../../node_modules/google-spreadsheet";
import NewQuestionComponent from "../newQuestion.component";
// import { config } from "@fortawesome/fontawesome-svg-core";
// const { GoogleSpreadsheet } = require('../../../node_modules/google-spreadsheet');




const doc = new GoogleSpreadsheet(config.SPREADSHEET_ID);

class NewQuestion extends React.Component {
  state = { data: {} };

  // add new row
  appendSpreadsheet = async (row) => {
    try {
      console.log('cargando credenciales');
      await doc.useServiceAccountAuth({
        client_email: config.CLIENT_EMAIL,
        private_key: config.PRIVATE_KEY
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[config.SHEET_ID];
      const result = await sheet.addRow(row);
    } catch (e) {
      console.error('Error: ', e);
    }
  };


  componentDidMount() {
    console.log('didMount');
  }

  sendQuestion = (e) => {
    // acá va el envio de datos
    const newRow = {
      key: nanoid(),
      name: this.state.data.newQuestion_name,
      question: this.state.data.newQuestion_question,
      answer: this.state.data.newQuestion_anwser
    };
    this.appendSpreadsheet(newRow);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div className="newQuestion_page">
        <NewQuestionComponent
          onChange={ this.handleChange }
          values={ this.state.data }
        />
        <button
          className="primary"
          onClick={ this.sendQuestion }>
          Guardar pregunta
        </button>

      </div >
    );
  }
}

export default NewQuestion;
