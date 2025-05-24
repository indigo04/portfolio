import Image from "next/image";

export default async function About() {
  return (
    <section
      id="about"
      className="flex container mx-auto items-center flex-wrap gap-5 lg:gap-0"
    >
      <div className="flex flex-col w-[100%] lg:w-[50%] gap-5">
        <h1 className="text-gray-800 font-semibold text-3xl text-center xl:text-left">
          About me
        </h1>
        <p className="font-medium text-center xl:text-left">
          Hey, i am Vladyslav. Full Stack Developer developer with hands-on
          experience in both frontend and backend development. Proficient in
          JavaScript, TypeScript, React, Redux Toolkit, Node.js, Express, and
          PostgreSQL, with expertise in REST APIs, WebSockets, and SQL
          databases. Built real-time chat apps, authentication APIs, and
          interactive UIs, applying OOP, scalable architecture, and performance
          optimization. Passionate about solving complex problems, writing clean
          code, and delivering high-quality digital experiences.
        </p>
      </div>
      <div className="flex justify-center items-center w-[100%] lg:w-[50%]">
        <Image
          src={'/portfolio' + "/my_photo.png"}
          alt="photo"
          width={175}
          height={175}
          className="rounded-full"
        />
      </div>
    </section>
  );
}
