import moment from "moment";

const SET_PERIOD = "skybonds/period/SET_PERIOD";

export function setPeriod(period) {
  return { type: SET_PERIOD, period };
}

export const periods = {
  WEEK: "WEEK",
  MONTH: "MONTH",
  QUARTER: "QUARTER",
  YEAR: "YEAR",
  MAX: "MAX"
};

export function getPeriodInDays(state, untilDate) {
  let subtractArgs = [];
  switch (state) {
    case periods.WEEK:
      subtractArgs = [1, "weeks"];
      break;
    case periods.MONTH:
      subtractArgs = [1, "months"];
      break;
    case periods.QUARTER:
      subtractArgs = [3, "months"];
      break;
    case periods.YEAR:
      subtractArgs = [1, "years"];
      break;
    default:
      return state;
  }
  const end = moment(untilDate);
  const start = end.clone().subtract(...subtractArgs);
  const periodInDays = end.diff(start, "days");
  return periodInDays;
}

export default function reducer(state = periods.WEEK, action = {}) {
  switch (action.type) {
    case SET_PERIOD:
      return action.period;
    default:
      return state;
  }
}
