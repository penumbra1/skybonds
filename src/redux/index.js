import { combineReducers } from "redux";
import moment from "moment";
import indicator from "./indicator";
import period, { periods } from "./period";

export default combineReducers({
  data: (state = {}) => state,
  indicator,
  period
});

export function getDataForPeriod(state) {
  // slice data based on current period
  // switch state.period, slice from (now - period) to now
  let subtractArgs = [];
  switch (state.period) {
    case periods.WEEK:
      subtractArgs = [1, "week"];
      break;
    case periods.MONTH:
      subtractArgs = [1, "month"];
      break;
    case periods.QUARTER:
      subtractArgs = [3, "months"];
      break;
    case periods.YEAR:
      subtractArgs = [1, "year"];
      break;
    default:
      return state.data.indicators;
  }
  const data = state.data.indicators;
  const lastDate = moment(data[data.length - 1].date);
  const showLast = lastDate.diff(lastDate.subtract(...subtractArgs), "days");

  return data.slice(-showLast);
}
