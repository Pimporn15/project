import { Box, Flex, Image, Center } from "@chakra-ui/react";
import { Navbar } from "../components/navbar";

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
                <Box w="400px" h="350px" p="15px" bg="#7E5B31">
                  <h1 fontSize="40px" color="#ffffff">
                    DISCOVER YOUR BEST WATCH
                  </h1>
                  <p fontSize="32px" color="#ffffff">
                    From the biggest designer brands, to the best of luxury and
                    hidden gems. See our featured brands.
                  </p>
                </Box>
                <Image
                  src="picture/discover-watch.png"
                  alt="Discover your best watch"
                />
              </Flex>
            </Box>
            <Image src="picture/footer-watch.png" alt="Black watch" />
            <Center w="900px" h="60px" bg=" #D6BE96">
              Copyright©2022 Watchodile.All Right Reserved.
            </Center>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
}
