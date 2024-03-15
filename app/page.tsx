
import Certification from "./certification/page";
import Contact from "./contact/page";
import Home from "./home/page";
import Information from "./info/page";
import Projects from "./projects/page";

export default function Index() {
  return (
    <>
      <Home/>
      <Projects/>
      <Certification/>
      <Information/>
      <Contact/>
    </>
  );
}
