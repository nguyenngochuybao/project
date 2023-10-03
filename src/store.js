// store.js
import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './redux/orderSlice';
import authReducer from './redux/auth';
import locationReducer from './redux/location.reducer';

import createSagaMiddleware from "redux-saga";

import rootSaga from "./redux/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    order: orderSlice,
    auth: authReducer,
    location: locationReducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
} );
sagaMiddleware.run(rootSaga);

export default store;
