import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";

const API_KEY = "a780ba9f9b5ed0d42ccf4bb7a05e566e";

function WeatherApp() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then((res) => setWeather(res.data))
            .catch((err) => console.log(err));
    };

    return (
        
        <div className="weather-app">
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Get Weather</button>
            </form>
            {weather && (
                <div className="weather-details">
                    <h2>{weather.name}</h2>
                    <p>{weather.weather[0].description}</p>
                    <p>Temperature: {weather.main.temp} &#8451;</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Wind Speed: {weather.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
}

export default WeatherApp;
