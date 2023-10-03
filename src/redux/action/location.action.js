import { createAction } from "@reduxjs/toolkit";

import { LOCATION_ACTION, REQUEST } from "../constants";

export const getCityListAction = createAction(
  REQUEST(LOCATION_ACTION.GET_CITY_LIST)
);