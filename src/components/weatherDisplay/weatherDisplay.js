import React from "react";

const windDirections = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

const findWindDirection = degrees => {
  degrees = (degrees += 25 < 0)
    ? 360 - (Math.abs(degrees) % 360)
    : degrees % 360;
  return windDirections[parseInt(degrees / 45)];
};

const WeatherDisplay = ({ weather, title, tempType, windStatus }) => {
  const { place, temp, wind, windDegrees, description, imgIcon } = weather;
  return (
    <div
      className="col bg-white py-5 mb-0 px-2 mx-5"
      style={{
        boxShadow: "2px 2px 10px 1px #cecece",
        overflow: "hidden",
        wordWrap: "break-word"
      }}
    >
      <p className="h6 py-2 px-4 text-left">
        {title ? title.toUpperCase() : "TITLE OF WIDGET"}
      </p>

      <div className="d-flex justify-content-around align-items-center px-2">
        <img
          width="100"
          height="100"
          src={`http://openweathermap.org/img/w/${imgIcon}.png`}
          alt={description}
        />
        <div className="text-left">
          <p className="mb-0 h6 text-dark">{place}</p>
          <p className="h1 mb-0">
            {tempType === "degrees" ? temp : 1.8 * parseInt(temp) + 32}
            <span dangerouslySetInnerHTML={{ __html: "&#176;" }}></span>
          </p>
          {windStatus === "on" && (
            <p className="small mb-0">
              <b>Wind</b> {findWindDirection(windDegrees)} {wind}km/h
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
