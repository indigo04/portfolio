import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
import Header from "@/components/header/header";
import Technologies from "@/components/technologies/technologies";

export const metadata = {
  title: "Vladyslav Shylin | Fullstack Developer",
  description: "Portfolio of a fullstack web developer",
};

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-hidden gap-10 xl:gap-25">
      <Header />
      <About />
      <Technologies />
      <Experience />
      <Contact />
    </main>
  );
}
