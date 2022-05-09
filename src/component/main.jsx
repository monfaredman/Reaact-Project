import React, { Component } from "react";

export default class main extends Component {
  constructor(props) {
    super(props);
    this.userName = React.createRef();
  }
  componentDidMount() {
    this.userName.current.focus();
  }
  render() {
    return (
      <div className="wrapper">
        <input ref={this.userName} />
      </div>
    );
  }
}
