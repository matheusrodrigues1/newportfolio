import Certification from "./certification/page";
import Contact from "./contact/page";
import Experiencia from "./experience/page";
import Formation from "./formation/page";
import Home from "./home/page";
import Homee from "./homee/page";
import Information from "./info/page";
import Projects from "./projectss/page";

export default function Index() {
  return (
    <>
      <Homee />
      <Projects />
      <Experiencia />
      <Formation />
      <Certification />
      <Information />
      <Contact />
    </>
  );
}
