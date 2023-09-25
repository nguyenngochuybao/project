import { createAction } from "@reduxjs/toolkit";
import { AUTH_ACTION, REQUEST } from "../constants";

export const loginAction = createAction(REQUEST(AUTH_ACTION.LOGIN));

export const registerAction = createAction(REQUEST(AUTH_ACTION.REGISTER));

export const loguotAction = createAction(REQUEST(AUTH_ACTION.LOGOUT));

export const updateUserInfoAction = createAction(
  REQUEST(AUTH_ACTION.UPDATE_USER_INFO)
);

export const getUserInfoAction = createAction(
  REQUEST(AUTH_ACTION.GET_USER_INFO)
);

export const changePasswordAction = createAction(
  REQUEST(AUTH_ACTION.CHANGE_PASSWORD)
);