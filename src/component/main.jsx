import React, { Component } from "react";
import A from "./A";
import B from "./B";
import C from "./C";
import "../app.css";
import randomColor from "./randomColor";

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = { random: 1 };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    this.setState({ random: Math.random() });
  }
  render() {
    return (
      <div className="wrapper">
        <div style={{ backgroundColor: randomColor() }} className="wrapper1">
          W({this.state.random})
          <A randomNum={this.state.random}>
            <B randomNum={this.state.random} />
            <C />
          </A>
        </div>
        <div>
          <button onClick={this.changeColor}>Change Color</button>
        </div>
      </div>
    );
  }
}
