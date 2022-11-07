import { Box, Image } from "@chakra-ui/react";

export function Landingpage() {
  return (
    <Box w="100vw" h="100vh" bg="white">
      <Image src="picture/banner.png" alt="watch banner" />
      <Box w="100vw" h="30px"></Box>
      <Box w="736px" h="265px">
        DISCOVER YOUR BEST WATCH 
        From the biggest designer brands, to the best
        of luxury and hidden gems. See our featured brands.
      </Box>
      <Image src="picture/discover-watch.png" alt="Discover your best watch" />
    </Box>
  );
}
