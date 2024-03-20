import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { NextPage } from 'next';

const Certification: NextPage = () => {
  return (
    <>
      <Accordion allowMultiple className='mt-10 pl-5 pr-5 pt-3 pb-3 border-t-2 border-t-yellow-300 bg-[#C0C0C0] w-screen'>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left' className='font-bold text-[0.9rem]'>
                Certificados e Licenças
              </Box>
              <AccordionIcon className='text-[1.3rem]'/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className='pl-3 mt-3'>
            • Fullstack Javascript - <span className='font-bold'>OneBitCode</span><br/>
            • Soft Skills para Carreiras de TI - <span className='font-bold'>4Linux</span><br/>
            • Curso Excel Avançado 2.0 - <span className='font-bold'>Sigma Treinamentos</span><br/>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
 
export default Certification;