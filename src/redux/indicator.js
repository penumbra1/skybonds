const SET_INDICATOR = "skybonds/indicator/SET_INDICATOR";

export function setIndicator(indicator) {
  return {
    type: SET_INDICATOR,
    indicator
  };
}

export const indicators = {
  PRICE: "price",
  YIELD: "currentYield",
  SPREAD: "spread"
};

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_INDICATOR:
      return { indicator: action.indicator };
    default:
      return state;
  }
}
