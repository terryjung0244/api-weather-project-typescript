import React from 'react';
import { useEffect } from 'react';

const App = () => {
  // const getCurrentLocation = () => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const lat = position.coords.latitude;
  //     const lon = position.coords.longitude;
  //   });
  // };

  useEffect(() => {
    // getCurrentLocation();
  }, []);

  const onClickFunc = () => {
    console.log('123');
  };

  return (
    <div>
      <button onClick={() => onClickFunc()}>GET WEATHER</button>
    </div>
  );
};

export default App;
