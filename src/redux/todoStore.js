import { createStore } from "react";
import rootReducer from "./todoReducer";
const store = createStore(rootReducer);
export default store;
