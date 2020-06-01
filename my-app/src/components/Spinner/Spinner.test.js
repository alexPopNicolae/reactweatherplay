import React from "react";
import { shallow } from "enzyme";
import Spinner from "./Spinner";

describe("Spinner component", () => {
  it("renders without crashing", () => {
    shallow(<Spinner />);
  });
});
