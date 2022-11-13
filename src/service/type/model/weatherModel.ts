import { MainFromResponse, WeatherResponse } from '../response/weatherResponse';

export interface WeatherModel {
  main: MainFromResponse | number;
}

export const parsedWeatherData = (weatherData: WeatherResponse): WeatherModel => {
  return {
    main: weatherData.main ?? '123',
  };
};
