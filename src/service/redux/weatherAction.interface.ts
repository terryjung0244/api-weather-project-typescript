import { AnyAction } from '@reduxjs/toolkit';
import { WEATHER_ACTION } from '../const/actionConst';
import { WeatherModel } from '../type/model/weatherModel';

const { WEATHER_ACTION_REQUEST, WEATHER_ACTION_SUCCESS, WEATHER_ACTION_FAILURE } = WEATHER_ACTION;

export type WEATHER_REQUEST_TYPE = {
  type: typeof WEATHER_ACTION_REQUEST;
  payload: null;
};

export type WEATHER_SUCCESS_TYPE = {
  type: typeof WEATHER_ACTION_SUCCESS;
  payload: WeatherModel;
};

export type WEATHER_FAILURE_TYPE = {
  type: typeof WEATHER_ACTION_FAILURE;
  payload: Error;
};

export type WEATHER_ACTION_TYPES = AnyAction | WEATHER_REQUEST_TYPE | WEATHER_SUCCESS_TYPE | WEATHER_FAILURE_TYPE;
