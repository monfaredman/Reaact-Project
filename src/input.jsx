import React from "react";
import "./app.css";

class Input extends React.Component {
  render() {
    return (
      <div className="inputItem">
        <input
          type="checkbox"
          className="input"
          onClick={(e) => this.props.handleClick(this.props.item.id)}
        />
        <p className="inputName">{this.props.item.name}</p>
      </div>
    );
  }
}

// function Input() {
//   return (
//     <div className="inputItem">
//       <input type="checkbox" className="input" />
//       <p className="inputName">title</p>
//     </div>
//   );
// }

export default Input;
