import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({ todoReducer });

export default allReducers;
