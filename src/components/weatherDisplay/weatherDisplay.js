import React from "react";

const WeatherDisplay = ({ weather, title }) => {
  const { place, temp, wind, description, imgIcon } = weather;
  return (
    <div className="col">
      <h1>{title ? title : "Title of Widget"}</h1>

      <div>
        <img
          width="100"
          height="100"
          src={`http://openweathermap.org/img/w/${imgIcon}.png`}
          alt={description}
        />
        <div>
          <p>{place}</p>
          <p>{temp}</p>
          <p>{wind}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
