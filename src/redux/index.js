import { combineReducers } from "redux";
import { createSelector } from "reselect";
import data from "./data";
import indicator from "./indicator";
import period, { getPeriodInDays } from "./period";

export default combineReducers({
  data,
  indicator,
  period
});

const dataPointsSelector = state => state.data.dataPoints;
const periodSelector = state => state.period;

export const getDataForPeriod = createSelector(
  [dataPointsSelector, periodSelector],
  (dataPoints, period) => {
    if (!dataPoints.length) return [];
    const untilDate = dataPoints[dataPoints.length - 1].date;
    const periodInDays = getPeriodInDays(period, untilDate);
    return dataPoints.slice(-periodInDays);
  }
);
