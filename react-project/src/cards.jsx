import React from "react";
import "./app.css";

// export default function Card() {
//   function handleClick() {
//     console.log(25);
//   }
//   const x = (e) => console.log(e);
//   return (
//     <div>
//       <h1>Hi MonfaredMan</h1>
//       <button onClick={x}>click me</button>
//     </div>
//   );
// }

export default class ToggleBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div>
        <h1>Hi MonfaredMan</h1>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>click me</button>{" "}
      </div>
    );
  }
  handleClick() {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  }
}
