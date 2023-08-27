import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice( {
    name: 'auth',
    initialState: {
        registerData: { load: false, error: "" },
        loginData: { load: false, error: "" },
        userInfo: {load:false, error:"", data: ""}

    },
    reducers: {

         loginRequest: ( state, actions ) =>
        {
            const {data} = actions.payload
            return {
                ...state,
                loginData: {
                    ...state.loginData,
                    load: true,
                    error: "",
                }
            }
        },
        loginSuccess: ( state, actions ) =>
        {
            const {data} = actions.payload
            return {
                ...state,
                loginData: {
                    ...state.loginData,
                    load: false,
                },
                userInfo: {
                    ...state.userInfo,
                    data: data.user,
                }
            }
        },
        loginFail: ( state, actions ) =>
        {
            return {
                ...state,
                loginData: {
                    ...state.loginData,
                    load: false,
                    error: "error",
                }
            }
        },

        // register
        registerRequest: ( state, actions ) =>
        {
            const {data} = actions.payload
            return {
                ...state,
                registerData: {
                    ...state.registerData,
                    load: true,
                    error: "",
                }
            }
        },
        registerSuccess: ( state, actions ) =>
        {
            return {
                ...state,
                registerData: {
                    ...state.registerData,
                    load: false,
                }
            }
        },
        registerFail: ( state, actions ) =>
        {
            return {
                ...state,
                registerData: {
                    ...state.registerData,
                    load: false,
                    error: "error",
                }
            }
        }
    }
} )

export const { registerRequest, registerSuccess, registerFail,loginRequest,loginFail,loginSuccess } = authReducer.actions;

export default authReducer.reducer;