import React, { Component } from "react";
import LondonComponent from "./LondonComponent";

class LondonContainer extends Component {
  render() {
    return <LondonComponent {...this.props} />;
  }
}
export default LondonContainer;
