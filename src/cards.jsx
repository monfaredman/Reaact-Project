import React from "react";
import "./app.css";

class Cards extends React.Component {
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   state: false,
  // };
  // }
  render() {
    return (
      <div className={this.props.item.check ? "cardActive" : "card"}>
        <h3>{this.props.item.name}</h3>
      </div>
    );
  }
}

// function Cards(props) {
//   return (
//     <div className="card">
//       <h3>{props.item.name}</h3>
//     </div>
//   );
// }

export default Cards;
