import { Header } from "./header/page";
import Certification from "./certification/page";
import Contact from "./contact/page";
import Formation from "./formation/page";
import Home from "./home/page";
import Information from "./info/page";
import Projects from "./projects/page";

export default function Index() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Formation />
      <Certification />
      <Information />
      <Contact />
    </>
  );
}
