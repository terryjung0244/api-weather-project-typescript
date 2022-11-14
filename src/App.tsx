import React from 'react';
import { useAppDispatch } from './components/reusable/hook/useAppDispatch';
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
  // const {} = useAppSelector((state) => state.weatherReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // getCurrentLocation();
  }, []);

  const onClickFunc = () => {
    dispatch(getWeatherRequestAction());
  };

  return (
    <div>
      <button onClick={() => onClickFunc()}>GET WEATHER</button>
    </div>
  );
};

export default App;
