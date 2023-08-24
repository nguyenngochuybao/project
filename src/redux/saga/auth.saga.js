import { put, takeEvery } from "redux-saga/effects"
import axios from "axios"
import { registerRequest } from "../auth"


function* registerSaga (action)
{
    try
    { 
        const { data } = action.payload;
        
    }
    catch ( e )
    {
        yield
    }
}

export default function* authSaga ()
{
    yield takeEvery(registerRequest, registerSaga)
}