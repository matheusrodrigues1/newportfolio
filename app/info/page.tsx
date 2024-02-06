import Image from "next/image";
import profile from "@/public/profile.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

const Information = () => {
  return (
    <>
      <div className="flex border-t-2 flex-col md:flex-row md:gap-10 h-screen w-screen justify-center items-center md:justify-center mt-6 pt-6">
        <div className="flex flex-col items-center md:w-[30rem] lg:w-[40rem]">
          <div className="flex flex-col gap-[0.35rem] lg:gap-[0.87rem]">
            <p className="text-sm lg:text-lg pl-1"><span className="pl-[0.28rem] md:pl-[1rem]">Oi</span>, sou Matheus de Alagoas, um entusiasta de frontend com 2 anos de experiência. Tenho me dedicado ao estudo de tecnologias como <strong className="font-bold">React</strong>, <strong className="font-bold">HTML</strong>, <strong className="font-bold">CSS</strong>, <strong className="font-bold">SASS</strong>, <strong className="font-bold">JavaScript</strong>, <strong className="font-bold">Tailwind</strong>, <strong className="font-bold">MongoDB</strong>, <strong className="font-bold">Node.js</strong> e <strong className="font-bold">Bootstrap</strong>.<br/></p>
            <p className="text-sm lg:text-lg pl-1">Recentemente, estou explorando <strong className="font-bold">TypeScript</strong> e <strong className="font-bold">Python</strong> para ampliar minha base de conhecimento. No <strong className="font-bold">Github</strong>, compartilho projetos com React e Python, e no LinkedIn, participo de discussões sobre desenvolvimento frontend.<br/></p>
            <p className="text-sm lg:text-lg pl-1">Busco desafios e oportunidades para contribuir em projetos inovadores. Animado com meu crescimento contínuo, estou ansioso para aplicar minhas habilidades em projetos impactantes. Vamos conectar e trocar ideias!</p>
          </div>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/matheus-rodrigues-1a1899231/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="w-7 h-20 transition-transform transform hover:-translate-y-1 hover:text-teal-500" icon={faLinkedin} />
            </a>
            <a href="https://github.com/matheusrodrigues1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="w-7 h-20 transition-transform transform hover:-translate-y-1 hover:text-teal-500" icon={faGithub} />
            </a>
            <a href="https://drive.google.com/file/d/1Jfn9RAqFR3YaQbL8j_lJA0z8HHlLI3Xq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="w-[1.4rem] h-20 transition-transform transform hover:-translate-y-1 hover:text-teal-500" icon={faFileLines} />
            </a>
          </div>
        </div>
        <Image className="w-32 md:w-52 lg:w-72 h-32 md:h-64 lg:h-80 md:mb-20 rounded-sm" src={profile} alt="profile"/>
      </div>
    </>
  );
}
 
export default Information;