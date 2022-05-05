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
          {
            text: "Hi MonfaredMan 👋",
            date: "2022-04-22T09:46:50.821",
            type: "concat",
          },
          { text: "hey Tom", date: "2022-04-22T09:46:50.821", type: "user" },
          {
            text: "How are u?",
            date: "2022-04-22T09:46:50.821",
            type: "concat",
          },
        ],
      },
    };
  }
  sendMessage = (text) => {
    const time = new Date();
    this.setState((state) => {
      return {
        data: {
          contactData: [
            ...state.data.contactData,
            { text: text, date: time.toISOString(), type: "user" },
          ],
        },
      };
    });
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
