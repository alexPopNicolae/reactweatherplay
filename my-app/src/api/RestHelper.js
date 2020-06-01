import axios from "axios";

const base = "http://api.openweathermap.org/data/2.5";

const axiosInstance = axios.create({
  baseURL: base,
});

class RestHelper {
  constructor(instance) {
    this.instance = instance;
  }

  get(url) {
    return this.instance.get(url);
  }
  post(url, params) {
    return this.instance.post(url, params);
  }
}
export default new RestHelper(axiosInstance);
