import { useEffect, useState } from "react";
import axios from "axios";
const Weather = ({ city }) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  const [weather, setWeather] = useState("");

  useEffect(() => {
    axios.get(url).then((res) => {
      setWeather(res.data);
    });
  });

  return weather ? (
    <>
      <h2>Weather in {city}</h2>
      <p>Temperature {weather.main.temp} Celcius</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={`weather icon for ${weather.weather[0].icon}`}
      ></img>
      <p>Wind {weather.wind.speed} m/s</p>
    </>
  ) : (
    <></>
  );
};

export default Weather;
