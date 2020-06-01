import * as actionTypes from "./constants";

const initialState = {
  data: null,
  isLoading: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_LOADING_STATUS:
      return { ...state, isLoading: action.status };
    case actionTypes.SET_WEATHER:
      return { ...state, data: action.data };
    default:
      return state;
  }
}
