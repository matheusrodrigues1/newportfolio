'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faArrowUp, faCircleDown, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


const Home = () => {
  const [isIconUp, setIsIconUp] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsIconUp((prev) => !prev);
    }, 350);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
    <div className="flex bg-[#fffc00] border-b-2 border-[#22c55e] font-extrabold pl-14 md:pl-[4rem] md:pt-20 text-5xl flex-col justify-center md:items-center md:justify-center lg:items-center lg:justify-center h-screen w-screen">
      <div className="flex flex-row items-center pl-20 md:pl-0 gap-2 md:gap-[1.18rem] lg:gap-[0.7rem] mb-3 md:mb-8 text-[#808080]">
          <a href="https://www.linkedin.com/in/matheus-rodrigues-1a1899231/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-7 md:w-10 lg:w-16 transition-transform transform hover:-translate-y-1 hover:text-[#0e76a8]" icon={faLinkedin} />
          </a>
          <a href="https://github.com/matheusrodrigues1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-7 md:w-10 lg:w-16 transition-transform transform hover:-translate-y-1 hover:text-white" icon={faGithub} />
          </a>
          <a href="https://drive.google.com/file/d/1toXe3NRzzJkPKXKLfh-UbgzwFWvZoVhF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-[1.4rem] md:w-[1.8rem] lg:w-[2rem] transition-transform transform hover:-translate-y-1 hover:text-[#0000CD]" icon={faFileLines} />
          </a>
          <a href="https://www.instagram.com/math.eusrrodrigues/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-7 md:w-10 lg:w-16 transition-transform transform hover:-translate-y-1 hover:text-[#3f729b]" icon={faInstagram} />
          </a>
      </div>
      <div className='text-black md:text-[7rem] lg:text-[8.6rem] md:font-extrabold'>
        <h1 translate="no" className='mb-[-10px] md:mb-[-23px] lg:mb-[-35px]'>SOFTWARE</h1>
        <h1 translate="no">DEVELOPER</h1>
      </div>
      <div className="w-80 md:w-[27rem] lg:w-[32rem] md:ml-[17rem] lg:ml-[25rem] mt-1 mb-8 md:mt-0">
        <p className="font-normal text-[#363636] md:font-bold text-[0.75rem] md:text-[0.90rem] lg:text-base text-left leading-3">I AM 23 YEARS OLD, I AM A FULLSTACK DEVELOPER WITH 2 YEARS OF EXPERIENCE WORKING AS A FREELANCER.</p>
      </div>
      <div className="flex items-end md:justify-start md:items-center md:mt-10 pt-[8rem] md:pt-[4.5rem] pl-[9rem] md:pl-0">
          <FontAwesomeIcon className={`text-white w-9 lg:w-11 text-6xl mr-2 cursor-pointer transition-transform transform ${
          isIconUp ? '-translate-y-1' : 'translate-y-1'
        }`} icon={faCircleDown} />
      </div>
    </div>
    </>
  );
}
 
export default Home;