import * as actionTypes from "./constants";
import weatherApi from "../../api/weatherApi";

export const setLoadingStatus = (status) => {
  return {
    type: actionTypes.SET_LOADING_STATUS,
    status,
  };
};

export const setWeather = (data) => {
  return {
    type: actionTypes.SET_WEATHER,
    data,
  };
};

export const setWeatherFail = (err) => {
  return {
    type: actionTypes.SET_WEATHER_FAIL,
    err,
  };
};

export const getWeather = (location) => {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    return weatherApi
      .getWeather(location)
      .then((res) => {
        dispatch(setWeather(res.data));
        dispatch(setLoadingStatus(false));
      })
      .catch((err) => {
        dispatch(setLoadingStatus(false));
        dispatch(setWeatherFail(err));
      });
  };
};
