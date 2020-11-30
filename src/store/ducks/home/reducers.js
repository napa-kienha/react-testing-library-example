import homeTypes from "./types";

const initialState = {
  countries: [],
  inforUser: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case homeTypes.SAVE_COUNTRIES_DATA:
      return { ...state, countries: action.payload };
    case homeTypes.SAVE_INFOR_USER:
      return { ...state, inforUser: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
