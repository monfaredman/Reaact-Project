import React, { Component } from "react";

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
    };
  }
  async getIp() {
    const api = await fetch("https://api.ipify.org?format=json");
    return (await api.json()).ip;
  }
  async sendIp() {
    const ip = await this.getIp();
    const getData = await fetch(`http://ipwho.is/${ip}`);
    return await getData.json();
  }
  componentDidMount() {
    this.sendIp().then((data) => {
      this.setState({
        info: data,
      });
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.info?.country}</h1>
        <h2>{this.state.info?.capital}</h2>
      </>
    );
  }
}
