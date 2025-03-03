import { useState, useEffect } from 'react';

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('/api/weather?lat=-7.983908&lon=112.621391')
      .then(res => res.json())
      .then(data => setWeather(data.current_weather));
  }, []);

  return (
    <div>
      <h1>Cuaca Saat Ini di Kota Malang</h1>
      {weather ? (
        <div>
          <p>Suhu: {weather.temperature}°C</p>
          <p>Kecepatan Angin: {weather.windspeed} km/h</p>
          <p>Kondisi: {weather.weathercode}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}