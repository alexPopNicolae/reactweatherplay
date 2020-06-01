import React, { Component } from "react";
import BucurestiComponent from "./BucurestiComponent";

class BucurestiContainer extends Component {
  render() {
    return <BucurestiComponent {...this.props} />;
  }
}
export default BucurestiContainer;
