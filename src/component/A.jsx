import React, { Component } from "react";
import "../app.css";
import randomColor from "./randomColor";

export default class A extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.randomNum !== nextProps.randomNum) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <div style={{ backgroundColor: randomColor() }} className="wrapper1">
        A({this.props.randomNum}) {this.props.children}
      </div>
    );
  }
}
