import { WEATHER_ACTION } from '../const/actionConst';

const { WEATHER_ACTION_REQUEST, WEATHER_ACTION_SUCCESS, WEATHER_ACTION_FAILURE } = WEATHER_ACTION;

export const weatherRequestAction = () => {
  return {
    type: WEATHER_ACTION_REQUEST,
    payload: null,
  };
};

export const weatherSuccessAction = (dataFromServer: any) => {
  return {
    type: WEATHER_ACTION_SUCCESS,
    payload: dataFromServer,
  };
};

export const weatherFailureAction = (dataFromServer: any) => {
  return {
    type: WEATHER_ACTION_FAILURE,
    payload: dataFromServer,
  };
};
