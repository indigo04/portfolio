import Image from "next/image";

export default async function Contact() {
  const imageStyles = "hover:scale-125 duration-500";
  const textStyles = "duration-500 hover:-translate-y-0.5";
  return (
    <section
      className="flex container mx-auto border-2 border-black rounded-t-3xl p-4 justify-between items-center flex-wrap flex-col xl:flex-row gap-2 xl:gap-0"
      id="contact"
    >
      <h1 className="text-3xl font-semibold text-gray-800">Contact Me:</h1>
      <div className="relative">
        <a href="mailto:fs.shylin.vladyslav@gmail.com" className="flex gap-2">
          <Image
            src={"/portfolio" + "/gmail.png"}
            alt="mail_link"
            width={20}
            height={20}
            className={imageStyles}
            aria-label="Send email to Vladyslav"
          />
          <p className={textStyles}>fs.shylin.vladyslav@gmail.com</p>
        </a>
      </div>
      <div>
        <a href="tel:+380935522576" className="flex gap-2">
          <Image
            src={"/portfolio" + "/phone_icon.png"}
            alt="phone_link"
            width={20}
            height={20}
            className={imageStyles}
            aria-label="Call to Vladyslav"
          />
          <p className={textStyles}>+380935522576</p>
        </a>
      </div>
      <div className="relative">
        <a href="https://web.telegram.org/k/#@xeomzi" className="flex gap-2">
          <Image
            src={"/portfolio" + "/telegram_icon.webp"}
            alt="telegram_link"
            width={20}
            height={20}
            className={imageStyles}
            aria-label="Send message to Vladyslav"
          />
          <p className={textStyles}>@xeomzi</p>
        </a>
      </div>
    </section>
  );
}
