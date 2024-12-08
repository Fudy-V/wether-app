import React from "react";
import { CitiesList } from "../../../../type/app/weather/types";

// const getWeather = async () => {};

const Button = ({ text, city }: { text: string; city: string }) => {
  const getCityCode = async () => {
    console.log(city);
    const res = await fetch("/api/area");
    if (!res.ok) {
      console.error("area取得に失敗", res);
    }
    try {
      const area = await res.json();
      const areaList: CitiesList = area.areaData;
      console.log(areaList);

      //SearchCityのinputで入力された値で検索かけたID
      const areaId = areaList.filter((elm) => elm.title === city)[0].id;

      console.log(areaId);

      try {
        const res = await fetch("/api/weather", {
          method: "POST",
          body: JSON.stringify(areaId),
        });
        // 取得してきた地点のお天気情報
        const weatherObj = await res.json();
        console.log(weatherObj);
      } catch (e) {
        console.error("idから天気取得に失敗", e);
      }
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
