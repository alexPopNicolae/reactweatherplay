import React, { Component } from "react";
import { Header } from "../../shared/Header";
import { Route } from "react-router-dom";

class PageRoute extends Component {
  render() {
    let { component: Component, ...rest } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Route {...rest} render={(props) => <Component {...props} />} />
      </React.Fragment>
    );
  }
}
export default PageRoute;
