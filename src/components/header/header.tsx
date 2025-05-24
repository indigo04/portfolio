import { Navigation } from "../navigation/navigation";

export default async function Header() {
  return (
    <header className="bg-[url(/home_image_2.jpg)] w-screen h-screen bg-cover bg-no-repeat bg-center flex flex-col">
      <Navigation />
      <div className="flex flex-col justify-center items-center text-center h-[50%] gap-5">
        <h2 className="text-3xl xl:text-5xl text-gray-800 font-bold text-center">
          Vladyslav Shylin
        </h2>
        <h1 className="text-3xl xl:text-6xl text-gray-800 font-bold text-center">
          Fullstack Developer
        </h1>
      </div>
    </header>
  );
}
