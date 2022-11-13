import { CoordFromResponse, MainFromResponse, WeatherFromResponse, WeatherResponse } from '../response/weatherResponse';

export interface WeatherModel {
  coord: CoordFromResponse | number;
  weather: WeatherFromResponse | number | string;
  main: MainFromResponse | number;
  id: number;
  name: string;
}

export const parsedWeatherData = (weatherData: WeatherResponse) => {};

//jph같이 처음에 받아올때 배열이 아니라, object일때는 어떻게 responsed, WeatherModel을 구성해야 하는지,
//weatherData: WeatherResponse <- 이런식으로 사용해야 하는지 원래는 weatherResponse[]인데;
