import React from "react";
import { shallow } from "enzyme";
import LondonComponent from "./LondonComponent";
import LondonContainer from "./LondonContainer";

describe("Bucuresti page component", () => {
  it("renders without crashing container ", () => {
    shallow(<LondonContainer />);
  });

  it("renders without crashing component ", () => {
    shallow(<LondonComponent />);
  });
});
