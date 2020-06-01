import React, { Component } from "react";
import WeatherComponent from "./WeatherComponent";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getWeather } from "./actions";
import { getModel } from "./selectors";

class WeatherContainer extends Component {
  componentWillMount() {
    this.props.getWeather(this.props.location);
  }

  render() {
    return <WeatherComponent {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  const model = getModel(state);
  return { model };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: bindActionCreators(getWeather, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
