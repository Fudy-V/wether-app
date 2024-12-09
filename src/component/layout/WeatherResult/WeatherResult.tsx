import React from "react";

const WeatherResult = ({ city, weather }: { city: string; weather: string }) => {
  return (
    <div>
      <h3>{weather === "" ? "" : `${city}の本日の天候は${weather}です`}</h3>
    </div>
  );
};

export default WeatherResult;
