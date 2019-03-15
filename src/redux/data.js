import generateResponse from "../generator";

const SET_DATA = "skybonds/data/GET_DATA";
const SET_ISIN = "skybonds/data/SET_ISIN";

export function setIsin(isin) {
  return { type: SET_ISIN, isin };
}

export function setData(data) {
  return { type: SET_DATA, data };
}

export function fetchData(isin) {
  return function(dispatch) {
    const data = generateResponse(isin);
    dispatch(setData(data));
  };
}

const defaultState = {
  isin: "ABCDEF123456",
  name: "",
  issuer: "",
  currency: "",
  rating: "",
  coupon: 0,
  maturity: "",
  dataPoints: []
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case SET_ISIN:
      return { ...state, isin: action.isin };
    case SET_DATA:
      return action.data;
    default:
      return state;
  }
}
