import Time from "./Time";

import React, { Component } from "react";

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = { showDate: true };
  }
  hideTime = () => {
    this.setState((state) => {
      return { showDate: !state.showDate };
    });
  };

  render() {
    return (
      <>
        {this.state.showDate && <Time />}
        <btn onClick={this.hideTime}>clean</btn>
      </>
    );
  }
}
