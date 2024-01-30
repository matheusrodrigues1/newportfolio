import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
    <div className="flex font-extrabold pl-7 items-stretch text-5xl flex-col justify-center h-screen w-screen">
      <div className="flex flex-row pl-28 gap-2 mb-4 text-zinc-700">
          <a href="https://www.linkedin.com/in/matheus-rodrigues-1a1899231/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-7" icon={faLinkedin} />
          </a>
          <a href="https://github.com/matheusrodrigues1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-7" icon={faGithub} />
          </a>
          <a href="https://drive.google.com/file/d/1Jfn9RAqFR3YaQbL8j_lJA0z8HHlLI3Xq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-7" icon={faFileLines} />
          </a>
      </div>
      <div>
        <h1>SOFTWARE</h1>
      </div>
      <div>
        <h1>DEVELOPER</h1>
      </div>
      <div className="w-80">
        <p className="font-normal text-[0.65rem]  text-left leading-3">TENHO 23 ANOS SOU DESENVOLVEDOR FULLSTACK COM 2 ANO DE EXPERIÊNCIA TRABALHANDO COMO FREELANCER.</p>
      </div>
    </div>
    </>
  );
}
