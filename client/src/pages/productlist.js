import React from 'react'
import {Box,Flex,Image} from '@chakra-ui/react'
import Products from '../components/products';

function ProductList() {
  return (
    <Box>
   
   
      <Box w="100vw" h="100vh" bg="#2F2E2C">
        <Flex  justify='center'  >

       


          <Box w="80vw" h="80vh" bg="#CBA0AE" position='relative' mt="25vh" >
             <Products/>
              
              </Box>
          </Flex>
          
  <Box  justify='center'>
       <Image src='picture/footerpro.png' alt='footer' />
       </Box>




      
      </Box>
</Box>
  )
}

export default ProductList;
