import React from "react";
import { shallow } from "enzyme";
import HeaderContainer from "./HeaderContainer";
import HeaderComponent from "./HeaderComponent";

describe("header component", () => {
  it("should render withouth crashing - HeaderContainer", () => {
    shallow(<HeaderContainer />);
  });

  it("should render withouth crashing - HeaderComponent", () => {
    shallow(<HeaderComponent />);
  });
});
