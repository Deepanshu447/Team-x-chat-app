import React, { useState } from 'react';
import './App.css';

const WeatherReport = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      setError('');
      setWeather(null);
      const apiKey = 'f51e6e3a8c0377fe66349623dac8f1c7';
      const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const response = await fetch(api);
      const data = await response.json();

      if (response.ok) {
        setWeather({
          temp: data.main.temp,
        });
      } else {
        setError(data.message || 'City not found');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Something went wrong!');
    }
  };

  return (
    <div className="div-weather m-auto mt-8">
      <h1>Weather Report</h1>

      <input
        type="text"
        value={city}
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {weather && <p><span>Temperature:</span> {weather.temp}°C</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default WeatherReport;
