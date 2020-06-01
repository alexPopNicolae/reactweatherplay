import React from "react";
import { shallow } from "enzyme";
import BucurestiComponent from "./BucurestiComponent";
import BucurestiContainer from "./BucurestiContainer";

describe("Bucuresti page component", () => {
  it("renders without crashing container ", () => {
    shallow(<BucurestiContainer />);
  });

  it("renders without crashing component ", () => {
    shallow(<BucurestiComponent />);
  });
});
