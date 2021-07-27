import React from "react";
// import "./styles/QuestionPreview.scss";
const API = 'https://sheets.googleapis.com/v4/spreadsheets/16UTNeOr-GXlzUy7cKhrUZnSAB7pJTrlDlQtaWm4y-p0/values/questionsCreated!A%3AH?key=AIzaSyBRgDdE_K_icDtAOst3MTMk2Dax-iLMLls';

class QuestionPreview extends React.Component {

  constructor(props) {
    console.log("1. constructor");
    super(props); // inicializamos la superclase
    this.state = {
      loading: true,
      error: null,
      data: {
        values: [],
      },
    };
  };

  fetchData = async () => {

    this.setState({ loading: true, error: null });

    try {
      //hacemos la llamada
      const response = await fetch(API);

      // //la parametrizamos
      const data = await response.json();

      //seteamos el valor en Data
      this.setState({ loading: false, data: data });

    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidMount() {
    this.fetchData();
    console.log("3. didMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5. didUpdate");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });
  }

  componentWillUnmount() {
    console.log("6. willUnMount");
  }

  render() {
    console.log("2/4. render");
    if (this.state.loading) {
      return "loading...";
    }

    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }

    return (
      <div className="container__questionPreview">
        <div
          name="questionPreview"
          type="text"
          className="label__questionPreview"
        >
          <div className="question__preview__answers">
            { this.state.data.values.map(
              (answerItem) => {
                return (
                  <div key={ answerItem[0] } className="question__Preview__question">
                    <h2 className="title__question__preview">
                      { answerItem[1] }
                    </h2>
                    <div className="question__item"> { answerItem[2] } </div>
                    <div className="answer__item"> { answerItem[3] } </div>
                    <br />
                  </div>

                )
              }
            )
            }

            <div className="answer__item">
              {/* {this.props.answerToShow} */ }

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