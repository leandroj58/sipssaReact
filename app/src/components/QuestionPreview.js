import React from "react";
// import "./styles/QuestionPreview.scss";

class QuestionPreview extends React.Component {

  state = {
    //Questionpreview: "Aca va a aparecer la pregunta",
  }

  render() {
    return (
      <div className="container__questionPreview">
        <h2 className="title__question__preview">
          Question preview
        </h2>
        <div
          name="questionPreview"
          type="text"
          className="label__questionPreview"
          value={this.props.formValues.newQuestionInput}
        >
          {this.props.formValues.newQuestionInput}
        </div>

      </div>
    )
  }
}
export default QuestionPreview;