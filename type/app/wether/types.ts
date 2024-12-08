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

export type { CitiesType, CitiesElement, City };
