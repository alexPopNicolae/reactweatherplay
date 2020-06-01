import React from "react";
import { Provider } from "react-redux";
import configureStore from "../../store";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { shallow } from "enzyme";
import weatherApi from "../../api/weatherApi";
import WeatherContainer from "./WeatherContainer";
import WeatherComponent from "./WeatherComponent";
import reducer from "./WeatherDuck";
import { getModel } from "./selectors";
import * as actions from "./actions";
import * as actionTypes from "./constants";
import * as helper from "./helper";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("weather component", () => {
  it("should render without crashing - Weather Container", () => {
    shallow(
      <Provider store={configureStore()}>
        <WeatherContainer />
      </Provider>,
    );
  });

  it("should render without crashing - Weather Component", () => {
    const props = {
      model: {
        temperatures: {
          temp: 22,
          feels_like: 21,
          temp_max: 20,
          temp_min: 19,
        },
      },
    };
    shallow(<WeatherComponent {...props} />);
  });
});

describe("weather reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      data: null,
      isLoading: null,
    });
  });

  it("should change the loading status TO false", () => {
    expect(
      reducer({}, { type: actionTypes.SET_LOADING_STATUS, status: false }),
    ).toEqual({ isLoading: false });
  });

  it("should change the loading status TO true", () => {
    expect(
      reducer({}, { type: actionTypes.SET_LOADING_STATUS, status: true }),
    ).toEqual({ isLoading: true });
  });

  it("should change the weather data", () => {
    expect(
      reducer({}, { type: actionTypes.SET_WEATHER, data: "testData" }),
    ).toEqual({ data: "testData" });
  });
});

describe("helper functions", () => {
  it("should convert kelvin degrees into celsius", () => {
    const kelvin = 285.04;
    const celsius = 11;
    expect(helper.kelvinToCelsius(kelvin)).toEqual(celsius);
  });

  it("should return a star in case of undefined", () => {
    expect(helper.kelvinToCelsius(undefined)).toEqual("*");
  });

  it("should return a star in case of empty string", () => {
    expect(helper.kelvinToCelsius("")).toEqual("*");
  });
});

describe("constants", () => {
  it("should equal the  setWeather constants", () => {
    const actionType = "weather/SET_WEATHER";
    expect(actionTypes.SET_WEATHER).toEqual(actionType);
  });

  it("should equal the setLoadingStatus constant", () => {
    const actionType = "weather/SET_WEATHER_FAIL";
    expect(actionTypes.SET_WEATHER_FAIL).toEqual(actionType);
  });

  it("should equal the setLoadingStatus constant", () => {
    const actionType = "weather/SET_LOADING_STATUS";
    expect(actionTypes.SET_LOADING_STATUS).toEqual(actionType);
  });
});

describe("actions", () => {
  it("should return an action with a TRUE loading status", () => {
    const status = true;
    const expectedAction = {
      type: actionTypes.SET_LOADING_STATUS,
      status,
    };
    expect(actions.setLoadingStatus(status)).toEqual(expectedAction);
  });

  it("should return an action with a FALSE loading status", () => {
    const status = false;
    const expectedAction = {
      type: actionTypes.SET_LOADING_STATUS,
      status,
    };
    expect(actions.setLoadingStatus(status)).toEqual(expectedAction);
  });

  it("should return an action with the data received", () => {
    const data = {
      temp: 20,
      maxTemp: 25,
      minTemp: 16,
    };
    const expectedAction = {
      type: actionTypes.SET_WEATHER,
      data,
    };
    expect(actions.setWeather(data)).toEqual(expectedAction);
  });

  it("should return an action with error data", () => {
    const err = {
      info: "some error info",
    };
    const expectedAction = {
      type: actionTypes.SET_WEATHER_FAIL,
      err,
    };
    expect(actions.setWeatherFail(err)).toEqual(expectedAction);
  });
});

describe("async actions", () => {
  it("should get weather data with success and fire the weather succes actions", async () => {
    let res = await weatherApi.getWeather("Cluj");
    const expectedActions = [
      { type: actionTypes.SET_LOADING_STATUS, status: true },
      { type: actionTypes.SET_WEATHER, data: res.data },
      { type: actionTypes.SET_LOADING_STATUS, status: false },
    ];
    const store = mockStore({});
    return store.dispatch(actions.getWeather("Cluj")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should get weather data from an unexisting location and fire error actions", async () => {
    try {
      let res = await weatherApi.getWeather("fasdfasdfasdf");
    } catch (err) {
      let error = err;
      const expectedActions = [
        { type: actionTypes.SET_LOADING_STATUS, status: true },
        { type: actionTypes.SET_LOADING_STATUS, status: false },
        { type: actionTypes.SET_WEATHER_FAIL, err: error },
      ];

      const store = mockStore({});
      return store.dispatch(actions.getWeather("fasdfasdfasdf")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    }
  });
});

describe("selectors ", () => {
  it("should break the state in smaller componentns", () => {
    const state = mockState();
    const model = getModel(state);
    expect(model.weatherDescription).not.toBeUndefined();
    expect(model.temperatures).not.toBeUndefined();
    expect(model.loadingStatus).not.toBeUndefined();
  });

  it("should return undefined model properties for empty state", () => {
    const state = { weather: {} };
    const model = getModel(state);
    const emptyModel = {
      weatherDescription: undefined,
      temperatures: undefined,
      loadingStatus: undefined,
    };
    expect(model).toEqual(emptyModel);
  });
});

function mockState() {
  return {
    weather: {
      data: {
        coord: {
          lon: 26.11,
          lat: 44.43,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        base: "stations",
        main: {
          temp: 293.15,
          feels_like: 290.98,
          temp_min: 293.15,
          temp_max: 293.15,
          pressure: 1010,
          humidity: 52,
        },
        visibility: 10000,
        wind: {
          speed: 3.1,
          deg: 230,
        },
        rain: {
          "1h": 0.14,
        },
        clouds: {
          all: 65,
        },
        dt: 1591008676,
        sys: {
          type: 1,
          id: 6911,
          country: "RO",
          sunrise: 1590978855,
          sunset: 1591033978,
        },
        timezone: 10800,
        id: 683506,
        name: "Bucharest",
        cod: 200,
      },
      isLoading: false,
    },
  };
}
