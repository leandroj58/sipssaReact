import React from "react";

import CreateNewQuestion from "../CreateNewQuestion";
import QuestionPreview from "../QuestionPreview";

class NewQuestion extends React.Component {
  state = { data: {} };

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
      <div className="NewQuestion__container">
        <CreateNewQuestion
          onChange={this.handleChange}
          values={this.state.data}
        />
        <QuestionPreview
          questionToShow={this.state.newQuestionInput}
          answerToShow={this.state.answer1}
        />
      </div >
    );
  }
}

export default NewQuestion;
