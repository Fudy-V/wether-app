import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

export async function GET() {
  try {
    const res = await fetch("https://weather.tsukumijima.net/primary_area.xml");

    if (!res.ok) {
      console.error("fetchに失敗しました");
    }

    const xmlWeather = await res.text();
    const weather = await parseStringPromise(xmlWeather);

    const cities: [] = weather?.rss?.channel?.[0]?.["ldWeather:source"]?.[0]?.pref;

    return NextResponse.json({ cities });
  } catch (e) {
    console.error("データ取得に失敗しました", e);
  }
}
