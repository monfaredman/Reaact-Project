import React, { Component } from "react";
import randomColor from "./randomColor";
import "../app.css";
export default class B extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ backgroundColor: randomColor() }} className="wrapper3">
        B({this.props.randomNum})
      </div>
    );
  }
}
