import { Box, Flex, Image } from "@chakra-ui/react";

export function Landingpage() {
  return (
    <Box>
      <Box w="100vw" h="100vh" bg="white">
        <Image src="picture/header.png" alt="white watch" />
        <Box m="30px">
          <Image src="picture/banner.png" alt="watch banner" />
        </Box>
        <Box mt="30px" mb="30px">
          <Flex>
            <Box w="736px" h="265px" ml="55px" mr="15px" p="40px">
              <h1>DISCOVER YOUR BEST WATCH</h1>
              <p>
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
        <Box w="100vw" h="80px" bg=" #D6BE96" center>
          Copyright©2022 Watchodile.All Right Reserved.
        </Box>
      </Box>
    </Box>
  );
}
