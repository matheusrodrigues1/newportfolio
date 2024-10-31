"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faArrowUp,
  faCircleDown,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Roboto } from "next/font/google"; // Importando a fonte

const roboto = Roboto({ subsets: ["latin"], weight: "900" });

const Homee = () => {
  const [isIconUp, setIsIconUp] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsIconUp((prev) => !prev);
    }, 350);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="flex bg-[#fffc00] flex-col w-full h-full items-center justify-center">
        <div className="flex text-4xl gap-3 text-[#808080] mt-20">
          <a
            href="https://www.linkedin.com/in/matheus-rodrigues-1a1899231/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="w-7 md:w-10 lg:w-16 transition-transform transform hover:-translate-y-1 hover:text-[#0e76a8]"
              icon={faLinkedin}
            />
          </a>
          <a
            href="https://github.com/matheusrodrigues1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="w-7 md:w-10 lg:w-16 transition-transform transform hover:-translate-y-1 hover:text-white"
              icon={faGithub}
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1Wt26GmlvhTULOGIfbBJem_yJdCoxEmQw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="w-[1.4rem] md:w-[1.8rem] lg:w-[2rem] transition-transform transform hover:-translate-y-1 hover:text-[#0000CD]"
              icon={faFileLines}
            />
          </a>
          <a
            href="https://www.instagram.com/math.eusrrodrigues/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="w-7 md:w-10 lg:w-16 transition-transform transform hover:-translate-y-1 hover:text-[#3f729b]"
              icon={faInstagram}
            />
          </a>
        </div>
        <div className="">
          <h1
            translate="no"
            className={`${roboto.className} mb-[-10px] text-6xl font-bold md:mb-[-23px] lg:mb-[-35px]`}
          >
            SOFTWARE
          </h1>
          <h1
            translate="no"
            className={`${roboto.className} text-6xl font-bold`}
          >
            DEVELOPER
          </h1>
        </div>
        <div className="">
          <p className="font-normal text-[#363636] pl-10 md:font-bold text-[0.75rem] md:text-[0.90rem] lg:text-base text-left leading-3">
            TENHO 24 ANOS, SOU DESENVOLVEDOR FULLSTACK COM 2 ANOS DE EXPERIÊNCIA
            TRABALHANDO COMO FREELANCER.
          </p>
        </div>
        <div className="flex items-center justify-start mt-40">
          <Link href="/projectss">
            <FontAwesomeIcon
              className={`text-white w-9 lg:w-11 text-6xl mr-2 cursor-pointer transition-transform transform ${
                isIconUp ? "-translate-y-1" : "translate-y-1"
              }`}
              icon={faCircleDown}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homee;
