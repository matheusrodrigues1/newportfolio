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
      <Accordion allowMultiple className='mt-10 pl-5 pr-5 pt-3 pb-3 border-t-2 border-t-yellow-300 bg-[#808080]'>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left' className='font-bold text-[0.9rem]'>
                Certificates and Licenses
              </Box>
              <AccordionIcon className='text-[1.3rem]'/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg='aliceblue'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum nemo deserunt, laudantium id voluptate quo labore quidem quaerat ab sint impedit dignissimos non ut rerum architecto reprehenderit distinctio repudiandae? Voluptas dignissimos asperiores accusantium illum similique labore, quis, ut veniam ducimus impedit nisi incidunt laborum id voluptatibus maiores doloremque aliquid iste.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
 
export default Certification;