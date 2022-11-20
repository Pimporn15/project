import {
  Box,
  Flex,
  Image,
  Center,
  Text,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { Navigation } from "../components/navigationBar/navbar";
import { LoginNavigation } from "../components/navigationBar/navbarforLogin";
import { useAuth } from "../contexts/authentication";

export function Landingpage() {
  const auth = useAuth();

  return (
    <Center w="100%" bg="#C7BAB1">
      <Box w="70%">
        {auth.isAuthenticated ? <LoginNavigation /> : <Navigation />}
        <Image src="picture/header.png" alt="white watch" />
        <Box mt="2%" mb="2%">
          <Image src="picture/banner.png" alt="watch banner" />
        </Box>
        <Box w="100%" h="100%" mt="2%" mb="2%">
          <Flex
            w={["100%", "100%", "100%", "100%"]}
            direction={["column", "column", "column", "row"]}
          >
            <Box w="100%" pt="4%" p="4%" bg="rgb(233, 229, 226,0.5)">
              <Text fontSize="2rem" bold color="#ffffff">
                DISCOVER YOUR BEST WATCH
              </Text>
              <Text fontSize="1.2rem" color="#ffffff">
                From the biggest designer brands, to the best of luxury and
                hidden gems. See our featured brands.
              </Text>
              <Button
                w="40%"
                h="14%"
                mt="6%"
                borderradius="25px"
                bg="rgb(174, 144, 118,0.4)"
              >
                <Text fontSize={"1rem"} color="#ffffff">
                  SEE MORE
                </Text>
              </Button>
            </Box>
            <Image
              src="picture/discover-watch.png"
              alt="Discover your best watch"
            />
          </Flex>
        </Box>
        <Box position="absolute" bottom="340px" left="180px"></Box>
        <Box position="relative" w="100%">
          <Image src="picture/footer-watch.png" alt="Black watch" />
        </Box>
        <Center>
          <Flex
            w="55%"
            direction="row"
            justify="space-between"
            position="absolute"
            bottom="5%"
          >
            <Image src="picture/logo.png" alt="logo" w="12%" h="22%" />
            <Box w="18%">
              <Text fontSize={"0.8rem"}>SHOP</Text>
              <Text fontSize={"0.8rem"}>New Product</Text>
              <Text fontSize={"0.8rem"}>Men</Text>
              <Text fontSize={"0.8rem"}>Women</Text>
              <Text fontSize={"0.8rem"}>Kid</Text>
              <Text fontSize={"0.8rem"}>Accessories</Text>
            </Box>
            <Box w="20%">
              <Text fontSize={"0.8rem"}>SECURE PAYMENT</Text>
              <Image src="picture/payment.png" alt="payment-method" w="70%" />
            </Box>
            <Box w="20%">
              <Text fontSize={"0.8rem"}>CONTACT</Text>
              <Text fontSize={"0.8rem"}>0897879876</Text>
              <Text fontSize={"0.8rem"}>watchoddile@gmail.com</Text>
            </Box>
          </Flex>
        </Center>
        <Center w="100%" h="60px" bg="#ebe4d1">
          Copyright©2022 Watchodile.All Right Reserved.
        </Center>
      </Box>
    </Center>
  );
}
