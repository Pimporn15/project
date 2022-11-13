import React from 'react'
import {Box,Flex,Image} from '@chakra-ui/react'
import Products from '../components/products';

// import TryProducts from '../components/tryproduct';

function ProductList() {
  return (
    <Box>

   
      <Box w="100vw" h="100vh" bg="#2F2E2C">
        <Flex  justify='center'   >

         <Box w="80%" h="80%" bg="#CBA0A" position='relative' mt="25vh" bgGradient="linear(to-t, #F7A4A4, #FEBE8C)" > 
          <Products/>
         </Box>  
          
          
             
              {/* <TryProducts/> */}
          </Flex>
  <Box  justify='center'>
       <Image src='picture/footerpro.png' alt='footer' />
       </Box>

      </Box>
</Box>
  )
}

export default ProductList;
