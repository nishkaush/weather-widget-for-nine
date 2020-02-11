import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CustomForm from "./components/customForm/customForm.js";
import WeatherDisplay from "./components/weatherDisplay/weatherDisplay.js";
import ErrorComp from "./components/ErrorComp/ErrorComp";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [weather, setWeather] = useState({
    place: "Chatswood",
    temp: 59,
    wind: 28,
    imgIcon: "10d",
    description: "Light Rain"
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [tempType, setTempType] = useState("degrees");
  const [wind, setWind] = useState("on");

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     async result => {
  //       const weatherData = await fetchWeather(result.coords);
  //       setWeather(weatherData);
  //     },
  //     error => {
  //       setIsLoading(false);
  //       console.log("error", error);
  //       setError("Error while getting your location");
  //     }
  //   );

  //   const fetchWeather = async ({ latitude, longitude }) => {
  //     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dd62ec40039697031010d5e893f5581e&units=metric`;
  //     try {
  //       let { data } = await axios.get(apiUrl);
  //       setIsLoading(false);
  //       return {
  //         place: data.sys.name,
  //         temp: data.main.temp,
  //         wind: data.wind.speed,
  //         imgIcon: data.weather[0].icon,
  //         description: data.weather[0].description
  //       };
  //     } catch (error) {
  //       setIsLoading(false);
  //       console.log("err in fetching data", error);
  //       setError("Error in getting weather data");
  //     }
  //   };
  // }, []);

  const loadingComp = isLoading && !error && <Loader />;
  const errorComp = !isLoading && error && <ErrorComp error={error} />;
  const MainComp = !isLoading && !error && (
    <div className="row">
      <div className="col-12 col-md-10 col-lg-8 mx-auto d-flex justify-content-between">
        <CustomForm
          title={title}
          setTitle={setTitle}
          tempType={tempType}
          setTempType={setTempType}
          wind={wind}
          setWind={setWind}
        />

        <div style={{ height: "300px", border: "6px solid green" }}></div>
        {Object.keys(weather).length && (
          <WeatherDisplay
            weather={weather}
            title={title}
            tempType={tempType}
            windStatus={wind}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="App">
      <div className="container">
        {loadingComp}
        {errorComp}
        {MainComp}
      </div>
    </div>
  );
};

export default App;
