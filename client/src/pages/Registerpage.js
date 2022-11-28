import {
  Flex,
  Box,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React from "react";
import axios from "axios";
import { useAuth } from "../contexts/authentication.js";

export function Register() {
  // const [showPassword, setShowPassword] = useState(false);
  // const [userProfile,setUserProfile] = useState({})
  const [username, setUsername] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [watch, setWatch] = useState([]);
  



  const { register } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
      firstName,
      lastName,
      email,
    };
    register(data);
    // console.log(register);
  };

  // const validatePassword = () => {
  //   let valid = document.getElementById("inputPassword").value;
  //   let text;
  //   if (valid == "" || valid.lenght < 8 || valid.lenght > 15) {
  //     text = "Input not valid";
  //   } else {
  //     text = "Input OK";
  //   }
  //   return text
  // };

  return (
    <form
      className="registerForm"
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <Box bg="white" w="100%" h="100%">
        <Flex direction="row" gap="30%">
          <Box>
            <Box position="relative" bg="#2C2C2C" w="300px" h="100%"></Box>
            <Box position="absolute" top="15%">
              <Image src="picture/imagereg.png" alt="watch picture" w="70%" />
            </Box>
          </Box>
          <Box>
            <Flex align={"center"} justify={"center"}>
              <Stack spacing={"5%"} mx={"auto"} maxW={"lg"} py={"25%"}>
                <Box w="150%">
                  <Stack spacing={4}>
                    <Box>
                      <Text fontSize={"3rem"} textAlign={"center"} pb="10%">
                        Register
                      </Text>
                      <FormControl id="UserName" isRequired>
                        {/* <FormLabel fontSize={'20px'} >UserName</FormLabel> */}
                        <Input
                          type="text"
                          variant="flushed"
                          placeholder="Username"
                          fontSize={"1.2rem"}
                          isInvalid
                          errorBorderColor="#AA8B56"
                          onChange={(event) => {
                            setUsername(event.target.value);
                          }}
                          value={username}
                        />
                        {/* <hr color='black' /> */}
                      </FormControl>
                      <FormControl
                        id="password"
                        isRequired
                        pt={"5%"}
                        // validate={validatePassword}
                      >
                        {/* <FormLabel  fontSize={'20px'} >Password</FormLabel> */}
                        <InputGroup>
                          <Input
                            // type={password ? "text" : "password"}
                            type="password"
                            variant="flushed"
                            placeholder="password"
                            fontSize={"1.2rem"}
                            isInvalid
                            errorBorderColor="#AA8B56"
                            onChange={(event) => {
                              setPassword(event.target.value);
                            }}
                            value={password}
                          />
                          <InputRightElement h={"full"}>
                            {/* <Button
                              // variant={"ghost"}
                              onClick={() =>
                                setPassword((Password) => !Password)
                              }
                            > */}
                              {/* {setPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                            {/* </Button> */}
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl id="firstName" isRequired>
                        {/* <FormLabel fontSize={'20px'}>First Name</FormLabel> */}
                        <Input
                          type="text"
                          variant="flushed"
                          placeholder="Firstname"
                          fontSize={"1.2rem"}
                          isInvalid
                          errorBorderColor="#AA8B56"
                          onChange={(event) => {
                            setFirstname(event.target.value);
                          }}
                          value={firstName}
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName" isRequired>
                        {/* <FormLabel fontSize={'20px'} >Last Name</FormLabel> */}
                        <Input
                          type="text"
                          variant="flushed"
                          placeholder="Lastname"
                          fontSize={"1.2rem"}
                          isInvalid
                          errorBorderColor="#AA8B56"
                          onChange={(event) => {
                            setLastname(event.target.value);
                          }}
                          value={lastName}
                        />
                      </FormControl>
                    </Box>

                    <FormControl id="email" isRequired>
                      {/* <FormLabel>Email address</FormLabel> */}
                      <Input
                        type="email"
                        variant="flushed"
                        placeholder="Email"
                        fontSize={"1.2rem"}
                        isInvalid
                        errorBorderColor="#AA8B56"
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                        value={email}
                      />
                    </FormControl>

                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Submitting"
                        size="md"
                        bg={"#CFB9AC"}
                        color={"white"}
                        _hover={{
                          bg: "#CFB9AC",
                        }}
                        fontSize={"20px"}
                        type="submit"
                        // onClick={() => {
                        //   validatePassword()
                        // }}
                      >
                        SUBMIT
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text align={"center"} fontSize={"20px"}>
                        Already a user?{" "}
                        <Link href="/login" color={"#AC4425"} fontSize={"20px"}>
                          Login
                        </Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </form>
  );
}
