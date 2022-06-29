import { combineReducers } from "redux";
import { todosMange } from "./todo";
const rootReducer = combineReducers(todosMange);
export default rootReducer;
