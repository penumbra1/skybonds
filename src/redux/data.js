const GET_DATA = "skybonds/data/GET_DATA";

export function getData(isin) {
  // Should be a thunk that calls the data generator
  return { type: GET_DATA, isin };
}

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_DATA:
      return state;
    default:
      return state;
  }
}
