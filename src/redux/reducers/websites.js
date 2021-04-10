import { SET_WEBSITES } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEBSITES:
      const websites = action.payload;
      return websites;

    default:
      return state;
  }
};

export default reducer;
