import React from "react";

// const getWether = async () => {};

const Button = ({ text, city }: { text: string; city: string }) => {
  const getCityCode = async () => {
    console.log(city);
    const res = await fetch("/api/area");
    if (!res.ok) {
      console.error("area取得に失敗", res);
    }
    try {
      const area = await res.json();
      console.log(area);
    } catch (e) {
      console.log("Areaでerror", e);
    }
  };
  return (
    <button
      className=" block font-bold border-2 text-center border-gray-400 ms-1 p-2"
      onClick={getCityCode}
    >
      {text}
    </button>
  );
};

export default Button;
