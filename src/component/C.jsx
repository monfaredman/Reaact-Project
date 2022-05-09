import React, { Component } from "react";
import randomColor from "./randomColor";
import "../app.css";
export default class C extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ backgroundColor: randomColor() }} className="wrapper3">
        C
      </div>
    );
  }
}
