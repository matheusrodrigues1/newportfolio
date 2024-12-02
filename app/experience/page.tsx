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
            <span className="font-bold">
              Suporte Técnico em TI - Toledo Distribuidor
            </span>{" "}
            (10/2024 até o momento)
            <div className="ml-5 mt-[-1rem] lg:pr-10">
              <br /> • Suporte técnico em infraestrutura de redes, solucionando
              problemas de conectividade e desempenho.
              <br /> • Atendimento a usuários em questões relacionadas à
              infraestrutura de computadores e manutenção de dispositivos.
              <br /> • Suporte aos colaboradores no uso do ERP Winthor e
              aplicações como Max Pedido, Fusion e Onblox WMS.
              <br /> • Manutenção de computadores, impressoras e dispositivos
              móveis, assegurando a continuidade das operações.
              <br /> • Organização de tarefas, projeção de atividades e abertura
              de chamados, contribuindo para a eficiência da equipe.
              <br /> • Responsável por compras de ativos, garantindo que a
              equipe tenha os recursos necessários para o desempenho eficaz.
            </div>
          </AccordionPanel>
          <AccordionPanel pb={4} className="pl-3 mt-3">
            <span className="font-bold">Starti</span> - 1ª empresa Júnior de
            Tecnologia em Alagoas -{" "}
            <span className="font-bold">IFAL campus Arapiraca</span> (12/2023
            até o momento)
            <div className="ml-5 mt-[-1rem] lg:pr-10">
              <br /> • Desenvolvedor de software atuando tanto no frontend
              quanto no backend, atualmente trabalhando com backend utilizando
              Golang.
            </div>
          </AccordionPanel>
          <AccordionPanel pb={4} className="pl-3 mt-3">
            <span className="font-bold">Freelancer</span> (08/2022 até o
            momento)
            <div className="ml-5 mt-[-1rem] lg:pr-28">
              <br /> • Com dois anos de experiência como freelancer na área de
              desenvolvimento full stack, especializei-me em tecnologias como
              JavaScript, Next.js, React, Node.js e MongoDB. Ao longo desse
              tempo, desenvolvi páginas de vendas, plataformas de e-commerce,
              integrações com APIs e interfaces interativas, sempre focando na
              usabilidade e na performance.
              <br /> • Criei soluções personalizadas para clientes, adaptando
              tecnologias e frameworks às suas necessidades específicas.
              <br /> • Mantive comunicação constante com clientes, garantindo
              alinhamento nas expectativas e prazos.
            </div>
          </AccordionPanel>
          <AccordionPanel pb={4} className="pl-3 mt-3">
            <span className="font-bold">Telemarketing - AeC</span> (05/2020 até
            05/2024)
            <div className="ml-5 mt-[-1rem] lg:pr-10">
              <br /> • Realização de chamadas para prospecção e atendimento a
              clientes, oferecendo informações sobre produtos e serviços.
              <br /> • Atendimento a dúvidas e reclamações, buscando sempre a
              satisfação do cliente e a resolução rápida de problemas.
              <br /> • Registro e acompanhamento de interações no sistema,
              garantindo um histórico completo de cada atendimento.
              <br /> • Colaboração com a equipe de vendas para atingir metas e
              objetivos, contribuindo para o crescimento da empresa.
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Experiencia;
