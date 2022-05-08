import React, { Component } from "react";

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date().toLocaleString() };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date().toLocaleString(),
      });
      console.log(this.state.date);
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return <h1>{this.state.date}</h1>;
  }
}
