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

export function LoginForm() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack w="400px" p="50px" bg="white" boxShadow="lg" maxW={"md"}>
          <Heading fontSize="40px">
            <center>LOG IN</center>
          </Heading>
          <FormControl id="email">
            <FormLabel fontSize="20px">Email</FormLabel>
            <Input type="email" bg="#EEEEEE" />
          </FormControl>
          <FormControl id="password">
            <FormLabel fontSize="20px">Password</FormLabel>
            <Input type="password" bg="#EEEEEE" />
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
            <Button bg="#CFB9AC" variant={"solid"}>
              Log in
            </Button>
            <Link>
              <center>Create account</center>
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
