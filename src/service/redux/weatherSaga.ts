/* eslint-disable no-prototype-builtins */
import { put, takeLatest } from 'redux-saga/effects';
import { getWeatherByAxios } from '../api/weather';
import { WEATHER_ACTION } from '../const/actionConst';
import { WeatherModel } from '../type/model/weatherModel';
import { getWeatherFailureAction, getWeatherSuccessAction } from './weatherAction';
import { WEATHER_REQUEST_TYPE } from './weatherAction.interface';

const { WEATHER_ACTION_REQUEST } = WEATHER_ACTION;

function* weatherRequestFromSaga(action: WEATHER_REQUEST_TYPE): any {
  console.log('123');
  const weatherData: WeatherModel | Error = yield getWeatherByAxios();
  console.log(weatherData);
  if (!weatherData.hasOwnProperty('code')) {
    //object로 받아오기때문에 length는 안쓴다.
    yield put(getWeatherSuccessAction(weatherData as WeatherModel));
  } else {
    yield put(getWeatherFailureAction(weatherData as Error));
  }
}

export function* weatherSagaWatcher() {
  //yield takeLaster ()
  yield takeLatest(WEATHER_ACTION_REQUEST, weatherRequestFromSaga);
}
