import { Reducer } from '@reduxjs/toolkit';
import { WEATHER_ACTION } from '../const/actionConst';

const { WEATHER_ACTION_REQUEST, WEATHER_ACTION_SUCCESS, WEATHER_ACTION_FAILURE } = WEATHER_ACTION;

const initialState = {
  loading: false,
  error: null,
  result: [],
};

const weatherReducer: Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case WEATHER_ACTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case WEATHER_ACTION_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case WEATHER_ACTION_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default weatherReducer;
