import React from "react";
import "./styles/Footer.scss";

class Footer extends React.Component {
  render() {
    return (
    <div className="footer-container">
      created with 🤍 by {this.props.owner} on {this.props.date}
      </div>)
  }
}

export default Footer;