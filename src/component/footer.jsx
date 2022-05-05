import React, { Component } from "react";
import "../app.css";

export default class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.sendText = this.sendText.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }
  sendText = () => {
    this.props.click(this.state.input);
  };
  changeInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  render() {
    return (
      <div className="footerChat">
        <div className="inputWrapper">
          <textarea
            value={this.state.input}
            onChange={this.changeInput}
            rows="1"
            className="input"
          />
        </div>
        <div className="sentBtnWrapper">
          <button onClick={this.sendText} className="sentBtn">
            Send
          </button>
        </div>
      </div>
    );
  }
}
