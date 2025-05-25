import Image from "next/image";
import { twMerge } from "tailwind-merge";
import technologies from "../../../public/technologies.json";

export default async function Technologies() {
  const styles = "flex border-2 px-4 py-2 gap-1 rounded-3xl items-center";
  return (
    <section className="flex flex-col gap-5 container mx-auto xl:max-w-[1200px]" id="technologies">
      <h1 className="text-3xl font-semibold text-gray-800 text-center lg:text-left">
        Technologies
      </h1>
      <ul className="flex flex-wrap gap-1 lg:gap-3">
        {technologies.map(({ name, icon, border, width = 15, height = 15 }) => (
          <li key={name} className={twMerge(styles, border)}>
            <Image
              src={'/portfolio' + icon}
              alt={`${name.toLowerCase()}-icon`}
              width={width}
              height={height}
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
