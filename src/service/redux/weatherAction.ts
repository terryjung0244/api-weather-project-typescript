import { WEATHER_ACTION } from '../const/actionConst';
import { WeatherModel } from '../type/model/weatherModel';
import { WEATHER_REQUEST_TYPE, WEATHER_SUCCESS_TYPE, WEATHER_FAILURE_TYPE } from './weatherAction.interface';

const { WEATHER_ACTION_REQUEST, WEATHER_ACTION_SUCCESS, WEATHER_ACTION_FAILURE } = WEATHER_ACTION;

export const getWeatherRequestAction = (): WEATHER_REQUEST_TYPE => {
  return {
    type: WEATHER_ACTION_REQUEST,
    payload: null,
  };
};

export const getWeatherSuccessAction = (dataFromServer: WeatherModel): WEATHER_SUCCESS_TYPE => {
  return {
    type: WEATHER_ACTION_SUCCESS,
    payload: dataFromServer,
  };
};

export const getWeatherFailureAction = (dataFromServer: any): WEATHER_FAILURE_TYPE => {
  return {
    type: WEATHER_ACTION_FAILURE,
    payload: dataFromServer,
  };
};
