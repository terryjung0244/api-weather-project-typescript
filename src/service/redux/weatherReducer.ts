import { Reducer } from '@reduxjs/toolkit';
import { WEATHER_ACTION } from '../const/actionConst';
import { WEATHER_ACTION_TYPES } from './weatherAction.interface';
import { WEATHER_STATE_TYPE } from './weatherReducer.interface';

const { WEATHER_ACTION_REQUEST, WEATHER_ACTION_SUCCESS, WEATHER_ACTION_FAILURE } = WEATHER_ACTION;

const initialState: WEATHER_STATE_TYPE = {
  loading: false,
  error: null,
  result: null,
};

const weatherReducer: Reducer<WEATHER_STATE_TYPE, WEATHER_ACTION_TYPES> = (
  state = initialState,
  action: WEATHER_ACTION_TYPES,
): WEATHER_STATE_TYPE => {
  switch (action.type) {
    case WEATHER_ACTION_REQUEST:
      console.log('123');
      return {
        ...state,
        loading: true,
      };
    case WEATHER_ACTION_SUCCESS:
      console.log('success');
      return {
        ...state,
        loading: false,
        result: action.payload,
      };
    case WEATHER_ACTION_FAILURE:
      console.log('failure');
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
