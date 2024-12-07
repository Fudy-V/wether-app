"use client";
import React, { useState } from "react";
import Button from "../Button/Button";

const SearchCity = () => {
  const [city, setCity] = useState("");

  return (
    <>
      <div className="flex-row text-center">
        <span>都市名</span>
        <input
          id="search"
          type="text"
          className="m-2  border-2 border-black rounded-sm"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button text="検索" city={city} />
      </div>
    </>
  );
};

export default SearchCity;
