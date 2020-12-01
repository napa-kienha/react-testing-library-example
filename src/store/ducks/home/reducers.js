import homeTypes from "./types";

const initialState = {
  countries: [],
  inforUser: { email: "admin@test.net", password: "123" },
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
