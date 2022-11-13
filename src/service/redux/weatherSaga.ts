import { takeLatest, put, select } from 'redux-saga/effects';
import { WEATHER_ACTION } from '../const/actionConst';

const { WEATHER_ACTION_REQUEST } = WEATHER_ACTION;

export function* weatherRequestFromSaga(action: any): any {}

export function* jphSagaWatcher() {
  //yield takeLaster ()
  yield takeLatest(WEATHER_ACTION_REQUEST, weatherRequestFromSaga);
}
