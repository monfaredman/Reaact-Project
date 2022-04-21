import React, { Component } from "react";
import Header from "./header.jsx";
import Body from "./body";
import Footer from "./footer";
import "../app.css";

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        contactData: [
          { text: "Hi MonfaredMan 👋", date: "df25jsdf", type: "user" },
          { text: "dlfksdf", date: "df25jsdf", type: "concat" },
          { text: "dlfksdf", date: "df25jsdf", type: "user" },
        ],
      },
    };
  }
  sendMessage = (text) => {
    this.state.contactData.push({ text: text, date: new Date(), type: "user" });
  };
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Header />
          <Body data={this.state.data} />
          <Footer click={this.sendMessage} />
        </div>
      </div>
    );
  }
}
