import {
  Box,
  Flex,
  Image,
  Center,
  Text,
  UnorderedList,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import { Navbar } from "../components/navbar";
import { Time } from "../components/time";

export function Landingpage() {
  return (
    <Box>
      <Center w="100vw" bg="#C7BAB1">
        <Flex>
          <Box w="900px">
            <Navbar />
            <Image src="picture/header.png" alt="white watch" />
            <Box mt="20px" mb="20px">
              <Image src="picture/banner.png" alt="watch banner" />
            </Box>
            <Box mt="20px" mb="20px">
              <Flex>
                <Box w="400px" h="350px" pt="10px" p="35px" bg="#7E5B31">
                  <Text fontSize="25px" bold color="#ffffff">
                    DISCOVER YOUR BEST WATCH
                  </Text>
                  <Text fontSize="20px" color="#ffffff">
                    From the biggest designer brands, to the best of luxury and
                    hidden gems. See our featured brands.
                  </Text>
                </Box>
                <Image
                  src="picture/discover-watch.png"
                  alt="Discover your best watch"
                />
              </Flex>
            </Box>
            <Time />
            <Image src="picture/footer-watch.png" alt="Black watch" />
            <Flex direction="row" justify="end">
              <Box>
                <Box>
                  <Text>Shop</Text>
                  <UnorderedList>
                    <ListItem>New Product</ListItem>
                    <ListItem>Men</ListItem>
                    <ListItem>Women</ListItem>
                    <ListItem>Kid</ListItem>
                    <ListItem>Accessories</ListItem>
                  </UnorderedList>
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
                {/* <Img src="pictures/logo.png" alt="logo" /> */}
              </Box>
            </Flex>
            <Center w="900px" h="60px" bg=" #D6BE96">
              Copyright©2022 Watchodile.All Right Reserved.
            </Center>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
}
