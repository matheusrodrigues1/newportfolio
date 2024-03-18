import Image from "next/image";
import profile from "@/public/profile.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

const Information = () => {
  return (
    <>
      <div className="flex bg-[#fffc00] border-t-2 border-[#dc2626] flex-col md:flex-row md:gap-10 h-screen w-screen justify-center items-center md:justify-center pt-6">
        <div className="flex flex-col items-center md:w-[30rem] lg:w-[40rem]">
          <div className="flex flex-col gap-[0.35rem] lg:gap-[0.87rem]">
          <p className="text-sm md:text-lg text-black lg:text-lg pl-1"><span className="pl-[0.28rem] md:pl-[1rem]">Hi</span>, I m Matheus from Alagoas, a frontend enthusiast with 2 years of experience. I ve been dedicated to studying technologies like <strong className="font-bold">React</strong>, <strong className="font-bold">HTML</strong>, <strong className="font-bold">CSS</strong>, <strong className="font-bold">SASS</strong>, <strong className="font-bold">JavaScript</strong>, <strong className="font-bold">TailwindCSS</strong>, <strong className="font-bold">MongoDB</strong>, <strong className="font-bold">Node.js</strong>, and <strong className="font-bold">Bootstrap</strong>.<br/></p>
          <p className="text-sm md:text-lg text-black lg:text-lg pl-1">Recently, Ive been exploring <strong className="font-bold">TypeScript</strong> and <strong className="font-bold">Python</strong> to expand my knowledge base. On <strong className="font-bold">Github</strong>, I share projects with React and Python, and on LinkedIn, I engage in discussions about frontend development.<br/></p>
          <p className="text-sm md:text-lg text-black lg:text-lg pl-1">Im seeking challenges and opportunities to contribute to innovative projects. Excited about my continuous growth, Im eager to apply my skills to impactful projects. Lets connect and exchange ideas!</p>
          </div>
          <div className="flex text-black gap-3">
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