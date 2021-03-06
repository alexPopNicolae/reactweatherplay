import React from "react";
import { kelvinToCelsius } from "./helper";
import { Spinner } from "../../components/Spinner";
import "./style.scss";

const WeatherComponent = ({ model }) => {
  const temp = model.temperatures && model.temperatures.temp;
  const feelTemp = model.temperatures && model.temperatures.feels_like;
  const max = model.temperatures && model.temperatures.temp_max;
  const min = model.temperatures && model.temperatures.temp_min;

  if (model.loadingStatus) {
    return (
      <div className="weather-component vertical-align">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="weather-component">
      <div>Temp: {kelvinToCelsius(temp)}</div>
      <div>Feels like: {kelvinToCelsius(feelTemp)}</div>
      <div>Max: {kelvinToCelsius(max)}</div>
      <div>Max: {kelvinToCelsius(min)}</div>
    </div>
  );
};
export default WeatherComponent;
