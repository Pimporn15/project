import { Flex, Box,FormControl,FormLabel,Input,InputGroup, InputRightElement, Stack, Button, Heading,
  Text, useColorModeValue, Link,Image
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React from 'react'

 

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (

    <Box  bg='white' w='100vw' >
      <Flex direction='row' gap='500px' >
      <Box>
      <Box position="relative" bg='#2C2C2C' w='350px' h='100vh'  ></Box>
      <Box position='absolute' top='100px'>
  <Image src='picture/imagereg.png' alt='watch picture'   />
</Box>
</Box>
<Box>
    <Flex
      
      align={'center'}
      justify={'center'}
     >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={100} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'48px'} textAlign={'center'}>
          Register
          </Heading>
         
        </Stack>
        <Box
          w='500px'
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
         
               
              <Box>
              
                <FormControl id="UserName">
                  {/* <FormLabel fontSize={'20px'} >UserName</FormLabel> */}
                  <Input type="text" variant='flushed' placeholder='UserName'fontSize={'20px'}   isInvalid
    errorBorderColor='#AA8B56'/>
                  {/* <hr color='black' /> */}
                  
                </FormControl>
                <FormControl id="password" isRequired  pt={4}>
              {/* <FormLabel  fontSize={'20px'} >Password</FormLabel> */}
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} variant='flushed' placeholder='password' fontSize={'20px'} isInvalid
    errorBorderColor='#AA8B56' />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'} 
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl> 
              </Box>
              
              <Box>
                <FormControl id="firstName" isRequired>
                  {/* <FormLabel fontSize={'20px'}>First Name</FormLabel> */}
                  <Input type="text" variant='flushed' placeholder='FirstName' fontSize={'20px'}  isInvalid
    errorBorderColor='#AA8B56'/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  {/* <FormLabel fontSize={'20px'} >Last Name</FormLabel> */}
                  <Input type="text" variant='flushed' placeholder='Lastname' fontSize={'20px'} isInvalid
    errorBorderColor='#AA8B56'/>
                </FormControl>
              </Box>
             
           
           
           

            <FormControl id="email" isRequired>
              {/* <FormLabel>Email address</FormLabel> */}
              <Input type="email"  variant='flushed' placeholder='Email' fontSize={'20px'} isInvalid
    errorBorderColor='#AA8B56'/>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="md"
                bg={'#CFB9AC'}
                color={'white'}
                _hover={{
                  bg: '#CFB9AC',
                }} fontSize={'20px'}>
                SUBMIT
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'} fontSize={'20px'}>
                Already a user? <Link color={'#AC4425'} fontSize={'20px'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  </Box>
  </Flex>
    </Box>
  );
}





