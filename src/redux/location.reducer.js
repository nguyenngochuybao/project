import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, SUCCESS, FAIL, LOCATION_ACTION } from "./constants";

const initialState = {
  cityList: {
    data: [],
    loading: false,
    error: "",
  }
};

const locationReducer = createReducer(initialState, {
  // GET_CITY_LIST
  [REQUEST(LOCATION_ACTION.GET_CITY_LIST)]: (state, action) => {
    return {
      ...state,
      cityList: {
        ...state.cityList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(LOCATION_ACTION.GET_CITY_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      cityList: {
        ...state.cityList,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(LOCATION_ACTION.GET_CITY_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      cityList: {
        ...state.cityList,
        loading: false,
        error: error,
      },
    };
  },
});

export default locationReducer;
