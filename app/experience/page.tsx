import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { NextPage } from "next";

const Experiencia: NextPage = () => {
  return (
    <>
      <Accordion
        allowMultiple
        className="mt-10 pl-5 pr-5 pt-3 pb-3 border-t-2 border-zinc-950 bg-[#C0C0C0] w-screen"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                className="font-bold text-[0.9rem]"
              >
                Experiência Profissional
              </Box>
              <AccordionIcon className="text-[1.3rem]" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className="pl-3 mt-3">
            <span className="font-bold">Starti</span> - 1º empresa Júnior de
            Tecnologia em Alagoas -{" "}
            <span className="font-bold">IFAL campus Arapiraca</span>
            <br /> • Desenvolvedor de software atuando tanto no frontend quanto
            no backend, atualmente trabalhando com backend utilizando GoLang.
          </AccordionPanel>
          <AccordionPanel pb={4} className="pl-3 mt-3">
            <span className="font-bold">Freelancer</span>
            <br /> • Com dois anos de experiência como freelancer na área de
            desenvolvimento full stack, especializei-me em tecnologias como
            JavaScript, Next.js, React, Node.js e MongoDB. Ao longo desse tempo,
            desenvolvi páginas de vendas, plataformas de e-commerce, integrações
            com APIs e interfaces interativas, sempre focando na usabilidade e
            na performance.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Experiencia;
