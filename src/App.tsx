import React from 'react';
import { useAppDispatch } from './components/reusable/hook/useAppDispatch';
import useAppSelector from './components/reusable/hook/useAppSelector';
import { useEffect } from 'react';
import { getWeatherRequestAction } from './service/redux/weatherAction';
// import useAppSelector from './components/reusable/hook/useAppSelector';

const App = () => {
  // const getCurrentLocation = () => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const lat = position.coords.latitude;
  //     const lon = position.coords.longitude;
  //   });
  // };
  const { loading, error, result } = useAppSelector((state) => state.weatherReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // getCurrentLocation();
  }, []);

  const onClickFunc = () => {
    dispatch(getWeatherRequestAction());
  };

  console.log(result);

  return (
    <div>
      <button onClick={() => onClickFunc()}>GET WEATHER</button>
      {loading && <div>I'm Loading!</div>}
      {error && <div>{error.message}</div>}
      {result && <div>{result.main.temp}</div>}
    </div>
  );
};

export default App;
