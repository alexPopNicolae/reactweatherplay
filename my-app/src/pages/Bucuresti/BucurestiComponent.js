import React from "react";
import { Weather } from "../../shared/Weather";

const BucurestiComponent = ({ model }) => {
  return (
    <div className="page">
      <h1>Bucuresti</h1>
      <Weather location={"Bucharest"} />
    </div>
  );
};
export default BucurestiComponent;
