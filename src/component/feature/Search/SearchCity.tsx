"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import WeatherResult from "@/component/layout/WeatherResult/WeatherResult";

const SearchCity = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  return (
    <>
      <div className="flex-row text-center">
        <span>都市名</span>
        <input
          id="search"
          type="text"
          className="m-2  border-2 border-black rounded-sm"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setWeather("");
          }}
        />
        <Button text="検索" city={city} getWeather={setWeather} />
      </div>

      <WeatherResult city={city} weather={weather} />
    </>
  );
};

export default SearchCity;
