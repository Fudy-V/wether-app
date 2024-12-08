interface City {
  $: {
    id: string;
    title: string;
    sourse: string;
  };
}

interface CitiesElement {
  $: object; //
  city: City[];
  warn?: object[];
}

// Array1の型定義
type CitiesType = CitiesElement[];

//地点名とidをプロパティに持つオブジェクトの型定義
type CitiesList = { id: string; title: string }[];

export type { CitiesType, CitiesElement, City, CitiesList };
