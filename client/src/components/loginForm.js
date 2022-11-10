import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../contexts/authentication.js";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({
      username,
      password,
    });
  };
  const loginUser = async () => {
    const response = await axios.post("http://localhost:4000/auth/login");
    setUser(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    loginUser();
  }, []);

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack w="400px" p="50px" bg="white" boxShadow="lg" maxW={"md"}>
            <Heading fontSize="40px">
              <center>LOG IN</center>
            </Heading>
            <FormControl id="username">
              <FormLabel fontSize="20px">Username</FormLabel>
              <Input
                type="username"
                bg="#EEEEEE"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                value={username}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel fontSize="20px">Password</FormLabel>
              <Input
                type="password"
                bg="#EEEEEE"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
            </FormControl>
            <Text fontSize="sm" color="red">
              Validate Password?
            </Text>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button bg="#CFB9AC" variant={"solid"} type="submit">
                Log in
              </Button>
              <Link>
                <center>Create account</center>
              </Link>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </form>
  );
}
