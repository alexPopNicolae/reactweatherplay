import { createSelector } from "reselect";

const getWeatherDescription = ({ weather }) => {
  return weather.data && weather.data.weather[0];
};

const getTemperatures = ({ weather }) => {
  return weather.data && weather.data.main;
};

const getLoadingStatus = ({ weather }) => {
  return weather.isLoading;
};

export const getModel = createSelector(
  [getWeatherDescription, getTemperatures, getLoadingStatus],
  (weatherDescription, temperatures, loadingStatus) => {
    return { weatherDescription, temperatures, loadingStatus };
  },
);
