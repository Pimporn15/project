import { Box, Flex,  Center, Heading,Stack,Text,Input,Button } from "@chakra-ui/react";

function Address() {
    return ( 

        <Box w="100%" h="100%" bg="#dddddd" position='relative' >
         <Center  >
           <Heading text='#000000' mt='5%'>ADDRESS</Heading>
          </Center>
          <Flex direction="row" align="center" justify="center" >
          <Center>
             <Flex  w='500px' h='300px' bgPosition="center"  direction='column' m='50px'>
             <Stack spacing={3} direction='row'>
                  <Text fontSize='20px' w='150px' m='15px'>House No.</Text>
                  <Input variant='flushed' w='300px'  isInvalid errorBorderColor='#AA8B56'/>
             </Stack>
             <Stack spacing={3} direction='row'>
                  <Text fontSize='20px' w='150px' m='15px'>Village</Text>
                  <Input variant='flushed' w='300px'isInvalid errorBorderColor='#AA8B56' />
             </Stack>
             <Stack spacing={3} direction='row'>
                  <Text fontSize='20px' w='150px' m='15px' >Lane/Soi</Text>
                  <Input variant='flushed' w='300px' isInvalid errorBorderColor='#AA8B56' />
             </Stack>
             <Stack spacing={3} direction='row'>
                  <Text fontSize='20px' w='150px' m='15px'>Road/Street</Text>
                  <Input variant='flushed' w='300px' isInvalid errorBorderColor='#AA8B56'/>
             </Stack>
             </Flex>
            </Center>  
            
            <Center  >
             <Flex  w='550px' h='300px' bgPosition="center"  direction='column'>
             <Stack spacing={3} direction='row'>
                  <Text fontSize='20px' w='200px' m='15px'>Sub-district/Sub-area</Text>
                  <Input variant='flushed' w='300px'  isInvalid errorBorderColor='#AA8B56'/>
             </Stack>
             <Stack spacing={3} direction='row'>
                  <Text fontSize='20px' w='200px' m='15px'>District/Area</Text>
                  <Input variant='flushed' w='300px'isInvalid errorBorderColor='#AA8B56' />
             </Stack>
             <Stack spacing={3} direction='row'>
                  <Text fontSize='20px' w='200px' m='15px' >Province</Text>
                  <Input variant='flushed' w='300px' isInvalid errorBorderColor='#AA8B56' />
             </Stack>
             <Stack spacing={3} direction='row'>
                  <Text fontSize='20px' w='200px' m='15px'>Postal Code/Zip Code</Text>
                  <Input variant='flushed' w='300px' isInvalid errorBorderColor='#AA8B56'/>
             </Stack>
             </Flex>
            </Center>
           </Flex>
          <Center>
         <Button text='#000000' variant='solid' bg='#CFB9AC' w='100px' >SUBMIT</Button>
           </Center>
        </Box>
        
    )};

    export default Address;