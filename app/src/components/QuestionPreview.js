import React from "react";
// import "./styles/QuestionPreview.scss";

class QuestionPreview extends React.Component {

  constructor(props) {
    console.log("1. constructor");
    super(props);
    this.state = {
      TemporalAnswerToShow: [
        {
          Key: "1",
          Answer: "respuesta 1",
        },
        {
          Key: "2",
          Answer: "respuesta 2",
        },
        {
          Key: "3",
          Answer: "respuesta 3",
        },
      ]
    }
  }

  componentDidMount() {
    console.log("3. didMount");
    setTimeout(() => {
      this.setState({
        TemporalAnswerToShow: [
          {
            Key: "1",
            Answer: "respuesta 1.1",
          },
          {
            Key: "2",
            Answer: "respuesta 2.2",
          },
          {
            Key: "3",
            Answer: "respuesta 3.3",
          },
        ],
      });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5. didUpdate");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log("6. willUnMount");
  }

  render() {
    console.log("2/4. render");
    return (
      <div className="container__questionPreview">
        <h2 className="title__question__preview">
          Question preview
        </h2>
        <div
          name="questionPreview"
          type="text"
          className="label__questionPreview"
        >
          <div className="question__Preview__question">
            {this.props.questionToShow}
          </div>
          <div className="question__preview__answers">
            {this.state.TemporalAnswerToShow.map(
              (answerItem) => {
                return (
                  <div
                    className="answer__item"
                    key={answerItem.Key}
                  >
                    {answerItem.Answer}
                  </div>
                )
              }
            )
            }

            <div className="answer__item">
              {/* {this.props.answerToShow} */}

            </div>
            {/* <div className="answer2">
              {this.props.questionValues.answer2}
            </div>
            <div className="answer3">
              {this.props.questionValues.answer3}
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}
export default QuestionPreview;