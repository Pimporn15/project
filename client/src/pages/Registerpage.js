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
  const [showPassword, setShowPassword] = useState(false);
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

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log("yeah");
  // };

  // const registerUser = async () => {
  //   const response = await axios.post("http://localhost:4000/register");
  // };

  // const registerUser = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:4000/register");
  //     setWatch(response.data.data);
  //     console.log(registerUser);
  //   } catch {}
  // };

  // const registerPost = async () => {
  //   const response = await axios.post("http://localhost:4000/register",{
  //     "username": "nannie",
  //     "firstName":"napassorn",
  //     "lastName": "Boo"
  //   }),
  //   setWatch(response.data.data);
  //   console.log(response.data.data);
  // };

  // useEffect(() => {
  //   registerUser();
  // }, []);

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <Box bg="white" w="100vw">
        <Flex direction="row" gap="500px">
          <Box>
            <Box position="relative" bg="#2C2C2C" w="350px" h="100vh"></Box>
            <Box position="absolute" top="100px">
              <Image src="picture/imagereg.png" alt="watch picture" />
            </Box>
          </Box>
          <Box>
            <Flex align={"center"} justify={"center"}>
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={100} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"48px"} textAlign={"center"}>
                    Register
                  </Heading>
                </Stack>
                <Box
                  w="500px"
                  rounded={"lg"}
                  // bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={8}
                >
                  <Stack spacing={4}>
                    <Box>
                      <FormControl id="UserName">
                        {/* <FormLabel fontSize={'20px'} >UserName</FormLabel> */}
                        <Input
                          type="text"
                          variant="flushed"
                          placeholder="UserName"
                          fontSize={"20px"}
                          isInvalid
                          errorBorderColor="#AA8B56"
                          onChange={(event) => {
                            setUsername(event.target.value);
                          }}
                          value={username}
                        />
                        {/* <hr color='black' /> */}
                      </FormControl>
                      <FormControl id="password" isRequired pt={4}>
                        {/* <FormLabel  fontSize={'20px'} >Password</FormLabel> */}
                        <InputGroup>
                          <Input
                            type={password ? "text" : "password"}
                            variant="flushed"
                            placeholder="password"
                            fontSize={"20px"}
                            isInvalid
                            errorBorderColor="#AA8B56"
                            onChange={(event) => {
                              setPassword(event.target.value);
                            }}
                            value={password}
                          />
                          <InputRightElement h={"full"}>
                            <Button
                              variant={"ghost"}
                              onClick={() =>
                                setPassword((Password) => !Password)
                              }
                            >
                              {password ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
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
                          placeholder="FirstName"
                          fontSize={"20px"}
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
                      <FormControl id="lastName">
                        {/* <FormLabel fontSize={'20px'} >Last Name</FormLabel> */}
                        <Input
                          type="text"
                          variant="flushed"
                          placeholder="Lastname"
                          fontSize={"20px"}
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
                        fontSize={"20px"}
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
