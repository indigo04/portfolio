import Image from "next/image";
import projects from "../../../public/projects.json";

export default async function Experience() {
  const front = [...projects].slice(0, 3);
  const back = [...projects].slice(3);
  const titleStyles =
    "text-xl font-semibold text-gray-800 text-center xl:text-left";
  const techStyles =
    "text-xl font-semibold text-gray-600 text-center xl:text-left";
  const wrapperStyles =
    "flex flex-col xl:flex-row gap-5 items-center flex-wrap justify-center xl:justify-start";
  const iconsStyles = "flex gap-2 items-center";
  return (
    <section className="flex container mx-auto flex-col gap-5" id="experience">
      <h1 className="text-3xl font-semibold text-gray-800 text-center xl:text-left">
        Experience
      </h1>
      <h2 className="text-xl font-semibold text-gray-600 text-center xl:text-left">
        Fullstack Developer | From 2023 | Freelance, Leetcode, Codewars
      </h2>
      <article className="flex flex-col gap-5">
        {front.map((project) => (
          <div key={project.id}>
            <h3 className={titleStyles}>{project.title}</h3>
            <div className={wrapperStyles}>
              <p className={techStyles}>{project.technologies}</p>
              <div className={iconsStyles}>
                <a href={project.github}>
                  <Image
                    src={'/portfolio' + "/github.png"}
                    width={20}
                    height={20}
                    alt="link"
                  />
                </a>
                {project.live && (
                  <a href={project.live}>
                    <Image
                      src={'/portfolio' + "/eye.png"}
                      width={25}
                      height={25}
                      alt="link"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-2 text-center xl:text-left">
          <p>
            - Developed responsive and dynamic user interfaces using React and
            TypeScript
          </p>
          <p>
            - Implemented reusable components and optimized performance for
            better UX
          </p>
          <p>
            - Applied BEM methodology for scalable and maintainable CSS
            architecture
          </p>
          <p>
            - Ensured cross-browser compatibility and accessibility best
            practices
          </p>
          <p>
            - Used state management solutions (e.g., Context API, Redux) for
            efficient data flow
          </p>
        </div>
      </article>

      <article className="flex flex-col gap-5">
        {back.map((project) => (
          <div key={project.id}>
            <h3 className={titleStyles}>{project.title}</h3>
            <div className={wrapperStyles}>
              <p className={techStyles}>{project.technologies}</p>
              <div className={iconsStyles}>
                <a href={project.github}>
                  <Image
                    src={'/portfolio' + "/github.png"}
                    width={20}
                    height={20}
                    alt="link"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-2 text-center xl:text-left">
          <p>
            - Designed and implemented RESTful APIs for scalable web
            applications
          </p>
          <p>- Developed real-time communication features using WebSocket</p>
          <p>
            - Managed PostgreSQL databases with Sequelize ORM for efficient data
            handling
          </p>
          <p>
            - Ensured secure authentication and authorization for user data
            protection
          </p>
          <p>
            - Optimized server performance and handled error logging/debugging
          </p>
        </div>
      </article>
    </section>
  );
}
