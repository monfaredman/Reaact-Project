import React from "react";
import ReactDOM from "react-dom";
import Main from "./component/Main";
import { Provider } from "react-redux";
import store from "./redux/todoStore.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
