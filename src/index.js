import React from "react";
import ReactDOM from "react-dom";
import Main from "./component/Main";
import { createStore } from "redux";
const initState = [
  { id: 0, title: "clean room", completed: true },
  { id: 1, title: "go class", completed: true },
];

const todos = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { title: action.title, id: action.id, completed: false },
      ];
    case "COMPLETE_TODO":
      return state.map((x) => {
        if (x.id !== action.id) {
          return x;
        }
        return { ...x, completed: !x.completed };
      });
    default:
  }
};
const store = createStore(todos);
store.dispatch({
  type: "ADD_TODO",
  id: 2,
  title: "go class2",
  completed: true,
});
ReactDOM.render(<Main store={store} />, document.getElementById("root"));
