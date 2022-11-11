import React from 'react'
import { Box, Flex, Text , Spacer,Button, Center} from '@chakra-ui/react';


function CartsPage() {
    return ( 
    
      < Box w = "100vw" h = "100vh" bg = "white" >
         <Flex  justify='center' mt="10vh" >
        <Box w = "70vw" h = "70vh" bg = "#D6BCFA"  position='relative'>
        <Text fontSize='36px' p='5'>Cart</Text>
        <Box  bg= 'pink' >
        <Flex minWidth='max-content' alignItems='center' >
  <Box p='5' py='-0.5'>
    <Box frontSize='18px'>PRODUCT NAME</Box>
  </Box>
  <Spacer />
  <Flex gap='100' p='5' >
    <Text  frontSize='18px'>PRICE</Text>
    <Text  frontSize='18px' >QUANTITY</Text>
    <Text  frontSize='18px'>TOTAL</Text>
  </Flex>
</Flex>

        </Box >
        <Button colorScheme='#CFB9AC'  position-='absolute' top ='250px' left= '800px'>CHECK OUT</Button>
        </Box>
        </Flex>

      <Box>
        <Center pt='20'>
        <Text>Copyright©2022 Watchodile.All Right Reserved.</Text>
        </Center>
     

          </Box>


        </Box>


    )
}

export default CartsPage;