import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice( {
    name: 'auth',
    initialState: {
        registerData: { load: false, error: "" },

    },
    reducers: {
        registerRequest: ( state, actions ) =>
        {
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

export const { registerRequest, registerSuccess, registerFail } = authReducer.actions;

export default authReducer.reducer;