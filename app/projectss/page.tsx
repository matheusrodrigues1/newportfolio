"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import banner2 from "@/public/300.jpg";
import banner5 from "@/public/002.jpg";
import banner6 from "@/public/003.jpg";
import banner7 from "@/public/gc.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
      image: banner7,
      title: "GoldCard 💳",
      description: `E-commerce integrado com Next.js, React, Node.js, MongoDB e Stripe. Com um design moderno e responsivo, o projeto oferece uma experiência de usuário envolvente e eficiente.`,
      technologies: "Tecnologias",
      badges: [
        {
          src: "https://img.shields.io/badge/-React.js-black?style=for-the-badge&logo=react&logoColor=61DAFB&color=000000",
          alt: "reactjs",
        },
        {
          src: "https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=next.js&logoColor=white&color=000000",
          alt: "nextjs",
        },
        {
          src: "https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logo=node.js&logoColor=green&color=000000",
          alt: "nodejs",
        },
        {
          src: "https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=06B6D4",
          alt: "tailwindcss",
        },
      ],
      repoLink: "https://github.com/matheusrodrigues1/cardgld",
      liveLink: "https://cardgld.vercel.app/",
    },
    {
      image: banner2,
      title: "E-commerce - Estilo Urbano 🛍️",
      description: `E-commerce integrado com Next.js, React, Node.js, MongoDB e Stripe. Com um design moderno e responsivo, o projeto oferece uma experiência de usuário envolvente e eficiente.`,
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
      repoLink: "https://github.com/matheusrodrigues1/e-commerce-store",
      liveLink: "https://e-commerce-store-mwtk.onrender.com/",
    },
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
      repoLink: "https://streaming-ntflx.onrender.com/",
      liveLink: "https://github.com/matheusrodrigues1/streaming-NTFLX",
    },
    {
      image: banner6,
      title: "Página de Destino ⚛️",
      description: `Landing page que captura a atenção e deixa uma impressão
      duradoura. Com animações impressionantes e design responsivo
      usando ferramentas de ponta como React, Next.js, TailwindCSS e
      Framer Motion.`,
      technologies: "Tecnologias",
      badges: [
        {
          src: "https://img.shields.io/badge/-JavaScript-black?style=for-the-badge&logo=javascript&logoColor=F7DF1E&color=000000",
          alt: "javascript",
        },
        {
          src: "https://img.shields.io/badge/-React.js-black?style=for-the-badge&logo=react&logoColor=61DAFB&color=000000",
          alt: "reactjs",
        },
        {
          src: "https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=next.js&logoColor=white&color=000000",
          alt: "nextjs",
        },
        {
          src: "https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logo=node.js&logoColor=green&color=000000",
          alt: "nodejs",
        },
        {
          src: "https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=06B6D4",
          alt: "tailwindcss",
        },
      ],
      repoLink: "https://github.com/matheusrodrigues1/PaginaDeDestino-SaaS",
      liveLink: "https://pagina-de-destino-saas.vercel.app/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: (
      <CustomArrow
        direction="next"
        className="slick-next"
        style={{}}
        onClick={() => {}}
      />
    ),
    prevArrow: (
      <CustomArrow
        direction="prev"
        className="slick-prev"
        style={{}}
        onClick={() => {}}
      />
    ),
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
      <div className="mt-20 rounded">
        <Slider {...settings} className="">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white h-[480px] lg:h-[500px] text-white flex flex-col"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover rounded"
              />
              <div className="flex flex-col justify-between flex-grow bg-black p-4 rounded-b-sm rounded-t-none">
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
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-center w-full bg-green-500 shadow-sm  mt-6 rounded"
                >
                  Acesse o link do projeto aqui!
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-center bg-zinc-50 mt-1 mb-2 rounded items-center flex justify-center"
                >
                  Ver Repositório
                  <FontAwesomeIcon
                    className="w-7 md:w-10 lg:w-16 transition-transform transform hover:-translate-y-1 hover:text-white"
                    icon={faGithub}
                  />
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
