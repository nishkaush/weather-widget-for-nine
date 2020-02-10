import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CustomForm from "./components/customForm/customForm.js";
import WeatherDisplay from "./components/weatherDisplay/weatherDisplay.js";

const App = () => {
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [temp, setTempType] = useState("degrees");
  const [wind, setWind] = useState("on");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      result => fetchWeather(result.coords),
      error => {
        setIsLoading(false);
        console.log("error", error);
        setError(
          "err in getting your location, please ensure you have given permission to access your location"
        );
      }
    );

    const fetchWeather = async ({ latitude, longitude }) => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dd62ec40039697031010d5e893f5581e&units=metric`;
      try {
        let { data } = await axios.get(apiUrl);
        setIsLoading(false);
        let weatherData = {
          place: data.sys.name,
          temp: data.main.temp,
          wind: data.wind.speed,
          imgIcon: data.weather[0].icon,
          description: data.weather[0].description
        };
        setWeather(weatherData);
      } catch (error) {
        setIsLoading(false);
        console.log("err in fetching data", error);
        setError("err in fetching data");
      }
    };
  }, []);

  const loadingComp = isLoading && !error && (
    <div className="row">Loading...</div>
  );
  const errorComp = !isLoading && error && <div className="error">{error}</div>;
  const MainComp = !isLoading && !error && (
    <div className="row">
      <CustomForm
        title={title}
        setTitle={setTitle}
        temp={temp}
        setTempType={setTempType}
        wind={wind}
        setWind={setWind}
      />
      {Object.keys(weather).length && (
        <WeatherDisplay weather={weather} title={title} />
      )}
    </div>
  );

  return (
    <div className="App">
      <div className="container" style={{ marginTop: "5%" }}>
        {loadingComp}
        {errorComp}
        {MainComp}
      </div>
    </div>
  );
};

export default App;
