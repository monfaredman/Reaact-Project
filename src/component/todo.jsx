import "../app.css";
import React, { Component } from "react";

export default class todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: null,
    };
  }
  async getTodos() {
    const getTodo = await fetch(`http://localhost:3000/todos/${this.props.id}`);
    const posts = await getTodo.json();
    return posts;
  }
  componentDidMount() {
    this.getTodos().then((data) => {
      this.setState({
        todos: data,
      });
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id != this.props.id) {
      this.getTodos().then((data) => {
        this.setState({
          todos: data,
        });
      });
    }
  }
  render() {
    return <div>{this.state.todos?.title}</div>;
  }
}
