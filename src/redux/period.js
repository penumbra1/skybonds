const SET_PERIOD = "skybonds/period/SET_PERIOD";

export function setPeriod(period) {
  return { type: SET_PERIOD, period };
}

export const periodFilters = {
  WEEK: "WEEK",
  MONTH: "MONTH",
  QUARTER: "QUARTER",
  YEAR: "YEAR",
  MAX: "MAX"
};

const initialState = {
  period: periodFilters.WEEK
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PERIOD:
      return { period: action.period };
    default:
      return state;
  }
}
