import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { NextPage } from "next";

const Formation: NextPage = () => {
  return (
    <>
      <Accordion
        allowMultiple
        className="mt-[0.1rem] pl-5 pr-5 pt-3 pb-3 border-t-2 bg-[#C0C0C0] w-screen"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                className="font-bold text-[0.9rem]"
              >
                Formação
              </Box>
              <AccordionIcon className="text-[1.3rem]" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className="pl-3 mt-3">
            • Cursando - Superior em Sistemas de Informação
            <br />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Formation;
