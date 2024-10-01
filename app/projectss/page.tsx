"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import banner0 from "@/public/001.jpg";
import banner from "@/public/01.png";
import banner2 from "@/public/02.png";
import banner5 from "@/public/002.jpg";
import banner6 from "@/public/003.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CustomArrowProps {
  className: string;
  style: React.CSSProperties;
  onClick: () => void;
  direction: "next" | "prev";
}

const CustomArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
  direction,
}) => (
  <div
    className={className}
    style={{ ...style, display: "block", color: "red", fontSize: "24px" }}
    onClick={onClick}
  >
    {direction === "next" ? (
      <FontAwesomeIcon icon={faChevronRight} className="text-zinc-950" />
    ) : (
      <FontAwesomeIcon icon={faChevronLeft} className="text-zinc-950" />
    )}
  </div>
);

const Projects = () => {
  const projects = [
    {
      image: banner5,
      title: "Clone da Netflix 🎬",
      description: `Este projeto visa criar uma plataforma de streaming semelhante à Netflix, permitindo aos usuários buscar, assistir e descobrir filmes e programas de TV. Utilizando uma stack moderna e eficiente, o projeto oferece uma experiência de usuário envolvente e responsiva.`,
      technologies: "Tecnologias",
      badges: [
        {
          src: "https://img.shields.io/badge/-React.js-black?style=for-the-badge&logo=react&logoColor=61DAFB&color=000000",
          alt: "reactjs",
        },
        {
          src: "https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logo=node.js&logoColor=green&color=000000",
          alt: "nodejs",
        },
        {
          src: "https://img.shields.io/badge/-Express.js-black?style=for-the-badge&logo=express&logoColor=white&color=000000",
          alt: "expressjs",
        },
        {
          src: "https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logo=mongodb&logoColor=47A248&color=000000",
          alt: "mongodb",
        },
        {
          src: "https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=06B6D4",
          alt: "tailwindcss",
        },
      ],
      repoLink: "link",
      liveLink: "link",
    },
    {
      image: banner6,
      title: "Página de Destino",
      description: `Landing page que captura a atenção e deixa uma impressão
      duradoura. Com animações impressionantes e design responsivo
      usando ferramentas de ponta como React, Next.js, TailwindCSS e
      Framer Motion.`,
      technologies: "Tecnologias",
      badges: [
        {
          src: "https://img.shields.io/badge/-React.js-black?style=for-the-badge&logo=react&logoColor=61DAFB&color=000000",
          alt: "reactjs",
        },
        {
          src: "https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logo=node.js&logoColor=green&color=000000",
          alt: "nodejs",
        },
        {
          src: "https://img.shields.io/badge/-Express.js-black?style=for-the-badge&logo=express&logoColor=white&color=000000",
          alt: "expressjs",
        },
        {
          src: "https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logo=mongodb&logoColor=47A248&color=000000",
          alt: "mongodb",
        },
        {
          src: "https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=06B6D4",
          alt: "tailwindcss",
        },
      ],
      repoLink: "link",
      liveLink: "link",
    },
    {
      image: banner0,
      title: "Imaginify",
      description: ` Uma plataforma de imagens de IA destacada que se destaca em
      recursos de processamento de imagens, integra uma infraestrutura
      de pagamento segura, oferece funcionalidades avançadas de
      pesquisa de imagens e suporta vários recursos de IA, incluindo
      restauração de imagens, recoloração, remoção de objetos, pintura
      generativa e remoção de fundo.`,
      technologies: "Tecnologias",
      badges: [
        {
          src: "https://img.shields.io/badge/-React.js-black?style=for-the-badge&logo=react&logoColor=61DAFB&color=000000",
          alt: "reactjs",
        },
        {
          src: "https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logo=node.js&logoColor=green&color=000000",
          alt: "nodejs",
        },
        {
          src: "https://img.shields.io/badge/-Express.js-black?style=for-the-badge&logo=express&logoColor=white&color=000000",
          alt: "expressjs",
        },
        {
          src: "https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logo=mongodb&logoColor=47A248&color=000000",
          alt: "mongodb",
        },
        {
          src: "https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=06B6D4",
          alt: "tailwindcss",
        },
      ],
      repoLink: "link",
      liveLink: "link",
    },
    {
      image: banner0,
      title: "Imaginify",
      description: `Uma plataforma de imagens de IA destacada que se destaca em
      recursos de processamento de imagens, integra uma infraestrutura
      de pagamento segura, oferece funcionalidades avançadas de
      pesquisa de imagens e suporta vários recursos de IA, incluindo
      restauração de imagens, recoloração, remoção de objetos, pintura
      generativa e remoção de fundo.`,
      technologies: "Tecnologias",
      badges: [],
      repoLink: "link",
      liveLink: "link",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomArrow direction="next" className="slick-next" />,
    prevArrow: <CustomArrow direction="prev" className="slick-prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings} className="">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white h-[480px] text-white flex flex-col "
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="flex flex-col justify-between flex-grow bg-black p-4">
                <h5 className="font-bold text-center">{project.title}</h5>
                <p className="text-sm overflow-hidden max-h-[80px] mb-4">
                  {project.description}
                </p>
                <p className="text-center">{project.technologies}</p>
                <div className="badge-container mt-2 overflow-hidden">
                  <div className="badge-content flex">
                    {Array.isArray(project.badges) &&
                    project.badges.length > 0 ? (
                      <>
                        {/* Renderizando badges originais */}
                        {project.badges.map((badge, idx) => (
                          <img
                            key={idx}
                            src={badge.src}
                            alt={badge.alt}
                            className="h-6"
                          />
                        ))}
                        {/* Duplicando badges para o efeito de rolagem infinita */}
                        {project.badges.map((badge, idx) => (
                          <img
                            key={idx + project.badges.length}
                            src={badge.src}
                            alt={badge.alt}
                            className="h-6"
                          />
                        ))}
                      </>
                    ) : (
                      <p>Nenhuma tecnologia disponível.</p>
                    )}
                  </div>
                </div>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-center w-full bg-zinc-50 mt-8"
                >
                  Acesse o link do projeto aqui!
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-center bg-zinc-50 mt-1"
                >
                  Ver Repositório 🐙
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
