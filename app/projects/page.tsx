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
              <div className="p-5 flex h-full bg-[#1C1C1C] rounded-3xl flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner} alt="banner"/>
                </div>
                <h5 className="text-2xl text-white md:text-3xl font-medium mt-3">SnapchatApp</h5>
                <p className="text-white text-lg mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ut dolorum veritatis labore doloribus sapiente, ratione facere expedita fugit a maiores in repudiandae amet, minus sit minima! Accusamus, impedit fugiat?</p>
                <a href="#" className="text-center bg-blue-400 text-blue-700 py-2  rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Explore</a>
              </div>
            </div>
            <div className="card">
              <div className="p-5 h-full bg-[#1C1C1C] rounded-lg flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner2} alt="banner"/>
                </div>
                <h5 className="text-2xl text-white md:text-3xl font-medium mt-3">Evently</h5>
                <p className="text-white text-sm mt-3">Evently é uma plataforma de eventos online, oferecendo cadastro e participação em uma variedade de atividades. Com integrações Next.js, Stripe, Clerk e MongoDB, além da utilização do framework Tailwind CSS, proporciona uma experiência simplificada e segura para organizadores e participantes.</p>
                <a href="#" className="text-center bg-blue-400 text-blue-700 py-2  rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Explore</a>
              </div>
            </div>
            <div className="card">
              <div className="p-5 rounded-lg h-full bg-[#1C1C1C] flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner4} alt="banner"/>
                </div>
                <h5 className="text-2xl text-white md:text-3xl font-medium mt-3">Study.Async</h5>
                <p className="text-white text-lg mt-3">
Plataforma de Estudo Interativa para Diversas Áreas de Conhecimento</p>
                <a href="#" className="text-center bg-blue-400 text-blue-700 py-2  rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Explore</a>
              </div>
            </div>
            <div className="card">
              <div className="p-5 h-full bg-[#1C1C1C] rounded-lg flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner3} alt="banner"/>
                </div>
                <h5 className="text-2xl text-white md:text-3xl font-medium mt-3">Mecajato</h5>
                <p className="text-white text-sm mt-3">Um sistema de ordens de serviço desenvolvido com Python e Django, usando SQLite como banco de dados. Os clientes podem selecionar serviços, como troca de óleo, definir a data de retirada e visualizar o valor. Os funcionários podem gerar PDFs com detalhes da ordem, como placa do veículo, nome do cliente e valor do serviço, usando a biblioteca fpdf.</p>
                <a href="#" className="text-center bg-blue-400 text-blue-700 py-2  rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Explore</a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
 
export default Projects;