import React from "react";
import { Weather } from "../../shared/Weather";

const LondonComponent = () => {
  return (
    <div className="page">
      <h1>London</h1>
      <Weather location={"London,uk"} />
    </div>
  );
};
export default LondonComponent;
