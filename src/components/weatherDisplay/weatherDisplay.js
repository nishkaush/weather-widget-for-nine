import React from "react";

const WeatherDisplay = ({ weather, title, tempType, windStatus }) => {
  const { place, temp, wind, description, imgIcon } = weather;
  return (
    <div
      className="col"
      style={{
        maxWidth: "350px",
        // height: "300px",
        padding: "2%",
        boxShadow: "1px 1px 1px 1px grey",
        background: "white"
      }}
    >
      <p className="h5"> {title ? title : "Title of Widget"}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <img
          width="100"
          height="100"
          src={`http://openweathermap.org/img/w/${imgIcon}.png`}
          alt={description}
        />
        <div className="text-left">
          <p>{place}</p>
          <p className="h1">
            {tempType === "degrees"
              ? `${temp} C`
              : `${1.8 * parseInt(temp) + 32} F`}
          </p>
          {windStatus === "on" && (
            <p>
              <b>Wind</b> {wind} km/hr
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
