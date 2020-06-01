import RestHelper from "./RestHelper";
const APPID = "97d19f95cc7115dcd23d051593dd6fe6";

class WeatherApi {
  getWeather(location) {
    const url = `/weather?q=${location}&APPID=${APPID}`;
    return RestHelper.get(url);
  }
}
export default new WeatherApi();
