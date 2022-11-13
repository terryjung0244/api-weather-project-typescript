import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';

const App = () => {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return <div>App</div>;
};

export default App;
