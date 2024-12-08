import { NextResponse } from "next/server";

export async function POST(area: Request) {
  try {
    const areaId: string = await area.json();

    // console.log(areaId);

    const res = await fetch(`https://weather.tsukumijima.net/api/forecast/city/${areaId}`);

    if (!res.ok) {
      console.error("天気情報の取得に失敗しました");
    }

    const weather = await res.json();

    return NextResponse.json(weather);
  } catch (e) {
    console.error("データ取得に失敗しました", e);
  }
}
