import SearchCity from "@/component/feature/Search/SearchCity";

export default function Home() {
  return (
    <div>
      <header className=" flex justify-center items-baseline bg-gray-200 py-4">
        <h1 className=" text-2xl font-bold">お天気アプリ</h1>
      </header>
      <main className=" flex flex-col items-center py-4">
        <label htmlFor="search">どこの天気がしりたいですか？</label>
        <SearchCity />
      </main>
    </div>
  );
}
