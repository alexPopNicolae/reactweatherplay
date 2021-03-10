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
      <p>MAi adaugaam niste modificari si pe aici ca sa vedem cum merge treaaba</p>
      <p>Mai adauga doar ceea ce ma intereseza pe brnachul feature from develop</p>
    </div>
  );
};
export default WeatherComponent;
