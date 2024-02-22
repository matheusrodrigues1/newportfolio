import Image from "next/image";
import banner from '@/public/01.png';
import banner2 from '@/public/02.png';
import banner3 from '@/public/03.png';
import banner4 from '@/public/04.png';

const Projects = () => {
  return (
    <>
       <div className="flex items-center bg-white justify-center min-h-screen container mx-auto">
          <div className="grid grid-cols-1 mt-7 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="p-5 flex h-full bg-[#1C1C1C] border border-[#dc2626] rounded-2xl flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner} alt="banner"/>
                </div>
                <h5 className="text-2xl text-white md:text-3xl font-medium mt-3">SnapchatApp</h5>
                <p className="text-[#DCDCDC] text-sm mt-3">O projeto snapchatapp é uma aplicação que visa replicar as principais funcionalidades do aplicativo Snapchat, oferecendo uma plataforma para troca de mensagens instantâneas e multimídia entre os usuários.</p>
                <p className="text-white text-md">Tecnologias: NextJS, Typescript, Tailwindcss, MongoDB</p>
                <a href="#" className="text-center bg-white text-black py-2  rounded-lg font-semibold mt-9 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Github</a>
                <a href="#" className="text-center bg-blue-400 text-black py-2  rounded-lg font-semibold mt-1 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Link do Projeto</a>
              </div>
            </div>
            <div className="card">
              <div className="p-5 h-full bg-[#1C1C1C] border border-[#fffc00] rounded-2xl flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner2} alt="banner"/>
                </div>
                <h5 className="text-2xl text-white md:text-3xl font-medium mt-3">Evently</h5>
                <p className="text-[#DCDCDC] text-sm mt-3">Evently é uma plataforma de eventos online, oferecendo cadastro e participação em uma variedade de atividades. Com integrações Next.js, Stripe, Clerk e MongoDB, além da utilização do framework Tailwind CSS, proporciona uma experiência simplificada e segura para organizadores e participantes.</p>
                <p className="text-white text-md">Tecnologias: NextJS, Typescript, Tailwindcss, Stripe, Clerk, MongoDB</p>
                <a href="#" className="text-center bg-white text-black py-2  rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Github</a>
                <a href="#" className="text-center bg-blue-400 text-black py-2  rounded-lg font-semibold mt-1 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Link do Projeto</a>
              </div>
            </div>
            <div className="card">
              <div className="p-5 rounded-2xl h-full border border-[#22c55e] bg-[#1C1C1C] flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner4} alt="banner"/>
                </div>
                <h5 className="text-2xl text-white md:text-3xl font-medium mt-3">Study.Async</h5>
                <p className="text-[#DCDCDC] text-sm mt-3">Plataforma de Estudo Interativa para Diversas Áreas de Conhecimento.</p>
                <p className="text-md text-white">Tecnologias: Python, Django, SQLite.</p>
                <a href="#" className="text-center bg-white text-black py-2  rounded-lg font-semibold mt-[7.5rem] hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Github</a>
                <a href="#" className="text-center bg-blue-400 text-black py-2  rounded-lg font-semibold mt-1 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Link do Projeto</a>
              </div>
            </div>
            <div className="card">
              <div className="p-5 h-full bg-[#1C1C1C] border border-[#fffc00] rounded-2xl flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner3} alt="banner"/>
                </div>
                <h5 className="text-2xl text-white md:text-3xl font-medium mt-3">Mecajato</h5>
                <p className="text-[#DCDCDC] text-sm mt-3">Um sistema de ordens de serviço desenvolvido com Python e Django, usando SQLite como banco de dados. Os clientes podem selecionar serviços, como troca de óleo, definir a data de retirada e visualizar o valor. Os funcionários podem gerar PDFs com detalhes da ordem, como placa do veículo, nome do cliente e valor do serviço, usando a biblioteca fpdf.</p>
                <p className="text-md text-white">Tecnologias: Python, Django, SQLite</p>
                <a href="#" className="text-center bg-white text-black py-2  rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Github</a>
                <a href="#" className="text-center bg-blue-400 text-black py-2  rounded-lg font-semibold mt-1 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Link do Projeto</a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
 
export default Projects;