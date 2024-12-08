import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";
import { CitiesElement, CitiesType } from "../../../../type/app/weather/types";

export async function GET() {
  try {
    const res = await fetch("https://weather.tsukumijima.net/primary_area.xml");

    if (!res.ok) {
      console.error("fetchに失敗しました");
    }

    const xmlWeather = await res.text();
    const weather = await parseStringPromise(xmlWeather);

    const cities: CitiesType = weather?.rss?.channel?.[0]?.["ldWeather:source"]?.[0]?.pref;

    const areaData: object[] = cities.flatMap((elm: CitiesElement) => {
      const cities = elm.city;
      return cities.map((city) => {
        const id = city?.$?.id;
        const title = city?.$?.title;

        return { id, title };
      });
    });

    return NextResponse.json({ areaData });
  } catch (e) {
    console.error("データ取得に失敗しました", e);
  }
}
