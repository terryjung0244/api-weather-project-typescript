import { MainFromResponse, WeatherResponse, WindFromResponse } from '../response/weatherResponse';

export interface WeatherModel {
  main: MainFromResponse;
  wind: WindFromResponse;
}

export const parsedWeatherData = (weatherData: WeatherResponse): WeatherModel => {
  return {
    main: weatherData.main ?? null,
    wind: weatherData.wind ?? null,
  };
};
