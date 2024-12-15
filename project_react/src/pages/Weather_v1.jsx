import React, { useState, useEffect } from 'react';
import { getWeatherByCity } from '../services/weatherService';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Bangkok');
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    getWeatherByCity(city)
      .then((data) => {
        setWeather({
          temp: (data.main.temp - 273.15).toFixed(1),
          description: data.weather[0].description,
          icon: data.weather[0].icon, // เก็บไอคอนจาก API
        });
      })
      .catch((err) => {
        setError(err.response ? err.response.data.message : 'An error occurred');
      });
  }, [city]);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Weather in {city}</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : weather ? (
        <div>
          <p>Temperature: {weather.temp}°C</p>
          <p>Description: {weather.description}</p>
          {weather.icon && ( // แสดงไอคอนสภาพอากาศ
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="Weather Icon"
              style={{ width: '100px', height: '100px' }}
            />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        style={{
          padding: '10px',
          marginTop: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
    </div>
  );
};

export default Weather;