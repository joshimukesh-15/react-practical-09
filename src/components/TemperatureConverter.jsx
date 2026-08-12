import React, { useState } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convertToFahrenheit = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value !== "") {
      setFahrenheit((value * 9) / 5 + 32);
    } else {
      setFahrenheit("");
    }
  };

  const convertToCelsius = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value !== "") {
      setCelsius(((value - 32) * 5) / 9);
    } else {
      setCelsius("");
    }
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <input
        type="number"
        value={celsius}
        onChange={convertToFahrenheit}
        placeholder="Celsius"
      />
      <input
        type="number"
        value={fahrenheit}
        onChange={convertToCelsius}
        placeholder="Fahrenheit"
      />
    </div>
  );
}

export default TemperatureConverter;