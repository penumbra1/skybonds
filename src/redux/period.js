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

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_PERIOD:
      return { period: action.period };
    default:
      return state;
  }
}
