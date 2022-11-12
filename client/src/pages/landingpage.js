import {
  Box,
  Flex,
  Image,
  Center,
  Text,
  Spacer,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Navigation } from "../components/navbarV2";
import { Time } from "../components/time";
import { LoginNavigation } from "../components/navbarforLogin";
import { useAuth } from "../contexts/authentication";

export function Landingpage() {
  const auth = useAuth();

  return (
    <Center w="100%" bg="#C7BAB1">
      <Box w="70%">
        {auth.isAuthenticated ? <LoginNavigation /> : <Navigation />}
        {/* <Navigation />
        <LoginNavigation /> */}
        <Image src="picture/header.png" alt="white watch" />
        <Box mt="2%" mb="2%">
          <Image src="picture/banner.png" alt="watch banner" />
        </Box>
        <Box w="100%" h="100%" mt="2%" mb="2%">
          <Flex>
            <Box w="100%" pt="4%" p="4%" bg="#7E5B31">
              <Text fontSize="35%" bold color="#ffffff">
                DISCOVER YOUR BEST WATCH
              </Text>
              <Text fontSize="28%" color="#ffffff">
                From the biggest designer brands, to the best of luxury and
                hidden gems. See our featured brands.
              </Text>
              <Button bg="#D6BE96">SEE MORE</Button>
            </Box>
            <Image
              src="picture/discover-watch.png"
              alt="Discover your best watch"
            />
          </Flex>
        </Box>
        <Box position="absolute" bottom="340px" left="180px">
          <Time />
        </Box>
        <Box position="relative" w="100%">
          <Image src="picture/footer-watch.png" alt="Black watch" />
        </Box>
        <Center>
          <Flex
            direction="row"
            justify="end"
            position="absolute"
            bottom="5%"
            // bgGradient="linear(to-t,RGBA(209, 152, 80 ,0.5),RGBA(255,255,255,0.4))"
          >
            <Image src="picture/logo.png" alt="logo" w="18%" h="30%" />
            <Spacer />
            <Box>
              <Text>SHOP</Text>
              <Text>New Product</Text>
              <Text>Men</Text>
              <Text>Women</Text>
              <Text>Kid</Text>
              <Text>Accessories</Text>
            </Box>
            <Spacer />
            <Box>
              <Text>SECURE PAYMENT</Text>s
              {/* <Img src="pictures/payment.png" alt="payment" /> */}
            </Box>
            <Spacer />
            <Box>
              <Text>CONTACT</Text>
              <Text>0897879876</Text>
              <Text>watchoddile@gmail.com</Text>
              <Spacer />
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
