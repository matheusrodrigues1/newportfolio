import Image from "next/image";
import banner0 from "@/public/001.jpg";
import banner from "@/public/01.png";
import banner2 from "@/public/02.png";
import banner5 from "@/public/002.jpg";
import banner6 from "@/public/003.jpg";

const Projects = () => {
  return (
    <>
      <div className="flex items-center bg-white justify-center min-h-screen container mx-auto">
        <div className="grid grid-cols-1 mt-7 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card">
            <div className="p-5 flex h-full bg-[#1C1C1C] border border-[#22c55e] rounded-2xl flex-col">
              <div className="rounded-xl overflow-hidden">
                <Image src={banner5} alt="banner" />
              </div>
              <h5
                translate="no"
                className="text-2xl text-white md:text-3xl font-medium mt-3"
              >
                Clone da Netflix
              </h5>
              <p className="text-[#DCDCDC] text-sm mt-3">
                Este projeto visa criar uma plataforma de streaming semelhante à
                Netflix, permitindo aos usuários buscar, assistir e descobrir
                filmes e programas de TV. Utilizando uma stack moderna e
                eficiente, o projeto oferece uma experiência de usuário
                envolvente e responsiva.
              </p>
              <p className="text-white text-md mt-2 he">
                Tecnologias: <span className="text-[#FF4500]">React JS</span>,{" "}
                <span className="text-[#1E90FF]">Node JS</span>,{" "}
                <span className="text-[#4682B4]">Express JS</span>,{" "}
                <span className="text-[#00FF00]">MongoDB</span> e{" "}
                <span className="text-[#1E90FF]">Tailwind CSS</span>.
              </p>
              <a
                href="https://github.com/matheusrodrigues1/streaming-NTFLX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-white text-black py-2  rounded-lg font-semibold mt-9 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
              >
                Repositório
              </a>
              <a
                href="https://streaming-ntflx.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-blue-400 text-black py-2  rounded-lg font-semibold mt-1 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
              >
                Link
              </a>
            </div>
          </div>
          <div className="card">
            <div className="p-5 flex h-full bg-[#1C1C1C] border border-[#22c55e] rounded-2xl flex-col">
              <div className="rounded-xl overflow-hidden">
                <Image src={banner6} alt="banner" />
              </div>
              <h5
                translate="no"
                className="text-2xl text-white md:text-3xl font-medium mt-3"
              >
                Página de Destino
              </h5>
              <p className="text-[#DCDCDC] text-sm mt-3">
                Landing page que captura a atenção e deixa uma impressão
                duradoura. Com animações impressionantes e design responsivo
                usando ferramentas de ponta como React, Next.js, TailwindCSS e
                Framer Motion.
              </p>
              <p className="text-white text-md mt-2 he">
                Tecnologias: <span className="text-[#FF4500]">React JS</span>,{" "}
                <span className="text-[#1E90FF]">Next JS</span>,{" "}
                <span className="text-[#4682B4]">Javascript</span>,{" "}
                <span className="text-[#00FF00]">Typescript</span> e{" "}
                <span className="text-[#1E90FF]">Tailwind CSS</span>.
              </p>
              <a
                href="https://github.com/matheusrodrigues1/PaginaDeDestino-SaaS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-white text-black py-2  rounded-lg font-semibold mt-9 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
              >
                Repositório
              </a>
              <a
                href="https://pagina-de-destino-saas.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-blue-400 text-black py-2  rounded-lg font-semibold mt-1 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
              >
                Link
              </a>
            </div>
          </div>
          <div className="card">
            <div className="p-5 flex h-full bg-[#1C1C1C] border border-[#22c55e] rounded-2xl flex-col">
              <div className="rounded-xl overflow-hidden">
                <Image src={banner0} alt="banner" />
              </div>
              <h5
                translate="no"
                className="text-2xl text-white md:text-3xl font-medium mt-3"
              >
                Imaginify
              </h5>
              <p className="text-[#DCDCDC] text-sm mt-3">
                Uma plataforma de imagens de IA destacada que se destaca em
                recursos de processamento de imagens, integra uma infraestrutura
                de pagamento segura, oferece funcionalidades avançadas de
                pesquisa de imagens e suporta vários recursos de IA, incluindo
                restauração de imagens, recoloração, remoção de objetos, pintura
                generativa e remoção de fundo.
              </p>
              <p className="text-white text-md mt-2 he">
                Tecnologias: <span className="text-[#FF4500]">NextJS</span>,{" "}
                <span className="text-[#1E90FF]">Typescript</span>,{" "}
                <span className="text-[#4682B4]">Tailwindcss</span>,{" "}
                <span className="text-[#00FF00]">MongoDB</span> e{" "}
                <span className="text-[#1E90FF]">Stripe</span>.
              </p>
              <a
                href="https://github.com/matheusrodrigues1/Imaginefy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-white text-black py-2  rounded-lg font-semibold mt-9 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
              >
                Repositório
              </a>
              <a
                href="https://imaginefy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-blue-400 text-black py-2  rounded-lg font-semibold mt-1 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
              >
                Link
              </a>
            </div>
          </div>
          <div className="card">
            <div className="p-5 flex h-full bg-[#1C1C1C] border border-[#dc2626] rounded-2xl flex-col">
              <div className="rounded-xl overflow-hidden">
                <Image src={banner} alt="banner" />
              </div>
              <h5
                translate="no"
                className="text-2xl text-white md:text-3xl font-medium mt-3"
              >
                SnapchatApp
              </h5>
              <p className="text-[#DCDCDC] text-sm mt-3">
                O projeto snapchatapp é um aplicativo que visa replicar as
                principais funcionalidades do app Snapchat, disponibilizando uma
                plataforma para troca de mensagens instantâneas e multimídia
                entre os usuários.
              </p>
              <p className="text-white text-md mt-2 he">
                Tecnologias: <span className="text-[#FF4500]">NextJS</span>,{" "}
                <span className="text-[#1E90FF]">Typescript</span>,{" "}
                <span className="text-[#4682B4]">Tailwindcss</span> e{" "}
                <span className="text-[#00FF00]">MongoDB</span>.
              </p>
              <a
                href="https://github.com/matheusrodrigues1/snapchatapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-white text-black py-2  rounded-lg font-semibold mt-9 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
              >
                Repositório
              </a>
              <a
                href="https://snapchatapp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-blue-400 text-black py-2  rounded-lg font-semibold mt-1 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
              >
                Link
              </a>
            </div>
          </div>
          <div className="card">
            <div className="p-5 h-full bg-[#1C1C1C] border border-[#fffc00] rounded-2xl flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <Image src={banner2} alt="banner" />
              </div>
              <h5
                translate="no"
                className="text-2xl text-white md:text-3xl font-medium mt-3"
              >
                Evently
              </h5>
              <p className="text-[#DCDCDC] text-sm mt-3">
                Evently é uma plataforma de eventos online que oferece inscrição
                e participação em diversas atividades. Com integrações de
                Next.js, Stripe, Clerk e MongoDB, juntamente com o uso da
                estrutura Tailwind CSS, fornece uma experiência simplificada e
                segura para organizadores e participantes.
              </p>
              <p className="text-white text-md mt-2 he">
                Tecnologias: <span className="text-[#FF4500]">NextJS</span>,{" "}
                <span className="text-[#1E90FF]">Typescript</span>,{" "}
                <span className="text-[#4682B4]">Tailwindcss</span>,{" "}
                <span className="text-[#00FF00]">MongoDB</span>,{" "}
                <span className="text-[#FF69B4]">Stripe</span> e{" "}
                <span className="text-[#7B68EE]">Clerk</span>.
              </p>
              <a
                href="https://github.com/matheusrodrigues1/evently"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-white text-black py-2  rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
              >
                Repositório
              </a>
              <a
                href="https://evently-chi-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-blue-400 text-black py-2  rounded-lg font-semibold mt-1 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
