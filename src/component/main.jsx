import React, { Component } from "react";
import Sidebar from "./sidebar";
import Article from "./article";
import Todo from "./todo";
import "../app.css";
export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      comments: null,
      currentComments: 5,
    };
  }

  async getPosts() {
    const getPost = await fetch("http://localhost:3000/posts");
    const posts = await getPost.json();
    return posts;
  }
  async getComments() {
    const getPost = await fetch("http://localhost:3000/comments");
    const comments = await getPost.json();
    return comments;
  }
  componentDidMount() {
    this.getPosts().then((data) => {
      this.setState({
        posts: data,
      });
    });
    this.getComments().then((data) => {
      this.setState({
        comments: data,
      });
    });
  }

  handleClick = (id) => {
    this.setState({ currentComments: id });
  };

  render() {
    const commentsList = this.state.comments
      ? this.state.comments.map((x, index) => {
          return (
            <Sidebar
              commentClick={this.handleClick}
              key={index}
              data={x.email}
              id={x.id}
            />
          );
        })
      : null;
    const postLists = this.state.posts ? (
      <Article data={this.state.posts[this.state.currentComments].title} />
    ) : null;

    return (
      <div className="wrapper">
        <div>{commentsList}</div>
        <div>{postLists}</div>
        <Todo id={this.state.currentComments} />
      </div>
    );
  }
}
