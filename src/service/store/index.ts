import { configureStore } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import weatherReducer from '../redux/weatherReducer';
import createSagaMiddleware from 'redux-saga';
import { weatherSagaWatcher } from '../redux/weatherSaga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([weatherSagaWatcher()]);
}

export const createStore = () =>
  configureStore({
    reducer: {
      // validReducer
      weatherReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  });

export const store = createStore();

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
