import React from "react";
import { Weather } from "../../shared/Weather";

const ClujComponent = () => {
  return (
    <div className="page">
      <h1>Cluj</h1>
      <Weather location={"Cluj-Napoca"} />
    </div>
  );
};
export default ClujComponent;
