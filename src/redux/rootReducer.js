import { combineReducers } from "redux";
import indicator from "./indicator";
import period from "./period";

export default combineReducers({
  data: (state = {}) => state,
  indicator,
  period
});
