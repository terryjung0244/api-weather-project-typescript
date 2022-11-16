import { WeatherModel } from '../type/model/weatherModel';

export interface WEATHER_STATE_TYPE {
  loading: boolean;
  error: Error | null;
  result: WeatherModel | null;
}
