import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { duck as weatherReducer } from "../shared/Weather";

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default function configureStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
