import axios, { AxiosResponse } from 'axios';
import { parsedWeatherData, WeatherModel } from '../type/model/weatherModel';

const url = `https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=${process.env.REACT_APP_WEATHER_API}`;

export const getWeatherByAxios = async (): Promise<WeatherModel | Error> => {
  try {
    const response: WeatherModel = await axios
      .get<Promise<AxiosResponse>>(url)
      .then((response: AxiosResponse) => parsedWeatherData(response.data));
    return response;
  } catch (err) {
    return err as Error;
  }
};

//Where should I use 'console.log' to check the response data from Axios?
