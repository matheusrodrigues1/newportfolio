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
                <p className="text-[#DCDCDC] text-sm mt-3">The snapchatapp project is an application that aims to replicate the main functionalities of the Snapchat app, providing a platform for exchange of instant messages and multimedia among users.</p>
                <p className="text-white text-md mt-2 he">Technologies: <span className="text-[#FF4500]">NextJS</span>, <span  className="text-[#1E90FF]">Typescript</span>, <span className="text-[#4682B4]">Tailwindcss</span>, <span className="text-[#00FF00]">MongoDB</span>.</p>
                <a href="https://github.com/matheusrodrigues1/snapchatapp" target="_blank" rel="noopener noreferrer" className="text-center bg-white text-black py-2  rounded-lg font-semibold mt-9 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Github Repository</a>
                <a href="https://snapchatapp.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-center bg-blue-400 text-black py-2  rounded-lg font-semibold mt-1 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Project Link</a>
              </div>
            </div>
            <div className="card">
              <div className="p-5 h-full bg-[#1C1C1C] border border-[#fffc00] rounded-2xl flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner2} alt="banner"/>
                </div>
                <h5 className="text-2xl text-white md:text-3xl font-medium mt-3">Evently</h5>
                <p className="text-[#DCDCDC] text-sm mt-3">Evently is an online events platform, offering registration and participation in a variety of activities. With integrations of Next.js, Stripe, Clerk, and MongoDB, along with the use of the Tailwind CSS framework, it provides a simplified and secure experience for organizers and participants.</p>
                <p className="text-white text-md mt-2 he">Technologies: <span className="text-[#FF4500]">NextJS</span>, <span className="text-[#1E90FF]">Typescript</span>, <span className="text-[#4682B4]">Tailwindcss</span>, <span className="text-[#00FF00]">MongoDB</span>, <span className="text-[#FF69B4]">Stripe</span>, <span className="text-[#7B68EE]">Clerk</span>.</p>
                <a href="https://github.com/matheusrodrigues1/evently" target="_blank" rel="noopener noreferrer" className="text-center bg-white text-black py-2  rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Github Repository</a>
                <a href="https://evently-chi-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-center bg-blue-400 text-black py-2  rounded-lg font-semibold mt-1 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Project Link</a>
              </div>
            </div>
            <div className="card">
              <div className="p-5 rounded-2xl h-full border border-[#22c55e] bg-[#1C1C1C] flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner4} alt="banner"/>
                </div>
                <h5 className="text-2xl text-white md:text-3xl font-medium mt-3">Study.Async</h5>
                <p className="text-[#DCDCDC] text-sm mt-3">Interactive Study Platform for Various Areas of Knowledge.</p>
                <p className="text-md mt-2 he text-white">Technologies: <span className="text-[#00FF00]">Python</span>, <span className="text-[#228B22]">Django</span>, <span className="text-[#1E90FF]">SQLite</span>.</p>
                <a href="https://github.com/matheusrodrigues1/study.Async" target="_blank" rel="noopener noreferrer" className="text-center bg-white text-black py-2  rounded-lg font-semibold mt-[7.5rem] hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Github Repository</a>
                <a href="https://github.com/matheusrodrigues1/study.Async" target="_blank" rel="noopener noreferrer" className="text-center bg-blue-400 text-black py-2  rounded-lg font-semibold mt-1 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Project Link</a>
              </div>
            </div>
            <div className="card">
              <div className="p-5 h-full bg-[#1C1C1C] border border-[#fffc00] rounded-2xl flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner3} alt="banner"/>
                </div>
                <h5 className="text-2xl text-white md:text-3xl font-medium mt-3">Mecajato</h5>
                <p className="text-[#DCDCDC] text-sm mt-3">A service order system developed with Python and Django, using SQLite as the database. Clients can select services, such as oil change, set the pickup date, and view the cost. Employees can generate PDFs with order details, such as vehicle plate, customer name, and service cost, using the fpdf library.</p>
                <p className="text-md mt-2 he text-white">Technologies: <span className="text-[#00FF00]">Python</span>, <span className="text-[#228B22]">Django</span>, <span className="text-[#1E90FF]">SQLite</span>.</p>
                <a href="https://github.com/matheusrodrigues1/mecajato" target="_blank" rel="noopener noreferrer" className="text-center bg-white text-black py-2  rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Github Repository</a>
                <a href="https://github.com/matheusrodrigues1/mecajato" target="_blank" rel="noopener noreferrer" className="text-center bg-blue-400 text-black py-2  rounded-lg font-semibold mt-1 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Project Link</a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
 
export default Projects;