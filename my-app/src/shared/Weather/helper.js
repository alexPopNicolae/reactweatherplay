export const kelvinToCelsius = (kelvinDegrees) => {
  if (kelvinDegrees === undefined) {
    return "*";
  }
  if (kelvinDegrees === "") {
    return "*";
  }
  return Math.floor(kelvinDegrees - 273.15);
};
