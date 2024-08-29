import Image from "next/image";
import arrowRight from "@/public/assets/arrow-right.svg";
import logo from "@/public/assets/logosaas.png";
import menuIcon from "@/public/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-[0.5rem] md:py-[0.9rem]">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={logo} alt="SaaS Logo" height={40} width={40} />
            <Image
              src={menuIcon}
              alt="Menu Icon"
              height={20}
              width={20}
              className="md:hidden"
            />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="">Projetos</a>
              <a href="">Formação e Certificados</a>
              <a href="">Sobre Mim</a>
              <a href="">Contato</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
