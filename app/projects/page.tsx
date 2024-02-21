import Image from "next/image";
import banner from '@/public/01.png';
import banner2 from '@/public/02.png';
import banner3 from '@/public/03.png';
import banner4 from '@/public/04.png';

const Projects = () => {
  return (
    <>
        <div className="flex items-center justify-center min-h-screen container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner} alt="banner"/>
                </div>
                <h5 className="text-2xl md:text-3xl font-medium mt-3">Project 1</h5>
                <p className="text-slate-500 text-lg mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ut dolorum veritatis labore doloribus sapiente, ratione facere expedita fugit a maiores in repudiandae amet, minus sit minima! Accusamus, impedit fugiat?</p>
                <a href="#" className="text-center bg-blue-400 text-blue-700 py-2  rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Explore</a>
              </div>
            </div>
            <div className="card">
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner2} alt="banner"/>
                </div>
                <h5 className="text-2xl md:text-3xl font-medium mt-3">Project 1</h5>
                <p className="text-slate-500 text-lg mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ut dolorum veritatis labore doloribus sapiente, ratione facere expedita fugit a maiores in repudiandae amet, minus sit minima! Accusamus, impedit fugiat?</p>
                <a href="#" className="text-center bg-blue-400 text-blue-700 py-2  rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Explore</a>
              </div>
            </div>
            <div className="card">
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner3} alt="banner"/>
                </div>
                <h5 className="text-2xl md:text-3xl font-medium mt-3">Project 1</h5>
                <p className="text-slate-500 text-lg mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ut dolorum veritatis labore doloribus sapiente, ratione facere expedita fugit a maiores in repudiandae amet, minus sit minima! Accusamus, impedit fugiat?</p>
                <a href="#" className="text-center bg-blue-400 text-blue-700 py-2  rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Explore</a>
              </div>
            </div>
            <div className="card">
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={banner4} alt="banner"/>
                </div>
                <h5 className="text-2xl md:text-3xl font-medium mt-3">Project 1</h5>
                <p className="text-slate-500 text-lg mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ut dolorum veritatis labore doloribus sapiente, ratione facere expedita fugit a maiores in repudiandae amet, minus sit minima! Accusamus, impedit fugiat?</p>
                <a href="#" className="text-center bg-blue-400 text-blue-700 py-2  rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Explore</a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
 
export default Projects;