// root-reducer which stores all reducers
import { combineReducers } from "redux";
import todoReducer from "./reducer";

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
