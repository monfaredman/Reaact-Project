import React from "react";
import "./app.css";
import Cards from "./cards";
import Input from "./input";

// export default function State() {
//   const cardData = [
//     { id: 0, name: "box 1", check: false },
//     { id: 1, name: "box 2", check: false },
//     { id: 2, name: "box 3", check: true },
//     { id: 3, name: "box 4", check: false },
//     { id: 4, name: "box 5", check: true },
//   ];
//   function handleClick(id) {
//     const item = cardData.find((x) => x.id === id);
//     item.check = !item.check;
//   }
//   const card = cardData.map((element) => <Cards item={element} key={element.id} />);
//   const input = cardData.map((element) => (
//     <Input handleClick={handleClick} item={element} key={element.id} />
//   ));
//   return (
//     <div className="container">
//       <h1>Hi MonfaredMan</h1>
//       <div className="wrap">
//         <div className="inputs">{input}</div>
//         <div className="cards">{card}</div>
//       </div>
//     </div>
//   );
// }
export default class State extends React.Component {
  state = {
    cardData: [
      { id: 0, name: "box 1", check: false },
      { id: 1, name: "box 2", check: false },
      { id: 2, name: "box 3", check: false },
      { id: 3, name: "box 4", check: false },
      { id: 4, name: "box 5", check: false },
    ],
  };

  handleClick = (id) => {
    const item = this.state.cardData.find((x) => x.id === id);
    item.check = !item.check;
    this.setState((state) => {
      return { ...state };
    });
  };

  componentDidMount() {
    console.log(this.state.cardData);
  }

  render() {
    const card = this.state.cardData.map((element) => (
      <Cards item={element} key={element.id} />
    ));
    const input = this.state.cardData.map((element) => (
      <Input handleClick={this.handleClick} item={element} key={element.id} />
    ));
    return (
      <div className="container">
        <h1>Hi MonfaredMan</h1>
        <div className="wrap">
          <div className="inputs">{input}</div>
          <div className="cards">{card}</div>
        </div>
      </div>
    );
  }
}
