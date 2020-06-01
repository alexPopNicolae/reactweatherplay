import React from "react";
import { shallow } from "enzyme";
import ClujComponent from "./ClujComponent";
import ClujContainer from "./ClujContainer";

describe("Bucuresti page component", () => {
  it("renders without crashing container ", () => {
    shallow(<ClujContainer />);
  });

  it("renders without crashing component ", () => {
    shallow(<ClujComponent />);
  });
});
