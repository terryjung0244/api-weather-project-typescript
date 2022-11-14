import { takeLatest, put, select } from 'redux-saga/effects';
import { getWeatherByAxios } from '../api/weather';
import { WEATHER_ACTION } from '../const/actionConst';
import { WeatherModel } from '../type/model/weatherModel';
import { WEATHER_REQUEST_TYPE } from './weatherAction.interface';

const { WEATHER_ACTION_REQUEST } = WEATHER_ACTION;

function* weatherRequestFromSaga(action: WEATHER_REQUEST_TYPE): any {
  const weatherData: WeatherModel | Error = yield getWeatherByAxios();
  console.log(weatherData);
}

export function* jphSagaWatcher() {
  //yield takeLaster ()
  yield takeLatest(WEATHER_ACTION_REQUEST, weatherRequestFromSaga);
}
