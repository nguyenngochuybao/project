import { put, takeEvery } from "redux-saga/effects"
import axios from "axios"
import {  AUTH_ACTION, REQUEST, SUCCESS, FAIL } from "../constants"
import { notification } from "antd";


function* loginSaga ( action )
{
    try
    {
        const { data, callback } = action.payload;
        console.log(data)
        const result = yield axios.post( "http://localhost:4000/login", data );
        yield localStorage.setItem( "accessToken", result.data.accessToken )
        yield callback();
        yield put( {
            type: SUCCESS(AUTH_ACTION.LOGIN),
            payload: {
                data: result.data,
            }

        } );
        notification.success( {
            message: "Đăng nhập thành công"
        } )
    }
    catch ( e )
    {
        yield put( {
            type: FAIL(AUTH_ACTION.LOGIN),
            payload: {
                error: "Email hoặc mật khẩu không đúng",
            }
        } )
    }
}


function* registerSaga ( action )
{
    try
    {
        const { data, callback } = action.payload;
        const result = yield axios.post( "http://localhost:4000/register", data );
        yield callback();
        yield put( {
            type: SUCCESS(AUTH_ACTION.REGISTER),
            payload: {
                data: result.data,
            }

        } );
        notification.success( {
            message: "Đăng ký thành công"
        } )
    }
    catch ( e )
    {
        yield put( {
            type: FAIL(AUTH_ACTION.REGISTER),
            payload: {
                error: e.response.data,
            }
        } )
    }
}



function* getUserInfoSaga ( action )
{
    try
    {
        const { id } = action.payload;
        const result = yield axios.get( `http://localhost:4000/users/${ id }` );
        yield put( {
            type: SUCCESS(AUTH_ACTION.GET_USER_INFO),
            payload: {
                data: result.data,
            }

        } );
    }
    catch ( e )
    {
        yield put( {
            type: FAIL(AUTH_ACTION.GET_USER_INFO),
            payload: {
                error: "lỗi",
            }
        } )
    }
}
export default function* authSaga ()
{
    yield takeEvery( REQUEST(AUTH_ACTION.REGISTER), registerSaga )
    yield takeEvery( REQUEST(AUTH_ACTION.LOGIN), loginSaga )
    yield takeEvery( REQUEST(AUTH_ACTION.GET_USER_INFO), getUserInfoSaga )
}