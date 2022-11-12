import { configureStore } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([]);
}

export const createStore = () =>
  configureStore({
    reducer: {
      // validReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  });

export const store = createStore();

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
