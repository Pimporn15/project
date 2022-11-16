import { Box, Center, Flex, Image, Wrap } from "@chakra-ui/react";
import ProductItem from "../components/productItem";
import ProductList from "../components/productList";

function ProductListingPage() {
  return (
    <Box w="100%" h="100%" bg="#2F2E2C">
      <Center>
        <Wrap w="95%" h="95%">
          {/* <Flex direction="column" w="1000%" h="80%" justify="center"> */}
          <ProductList />
          {/* </Flex> */}
        </Wrap>
      </Center>
      <Box>
        <Image src="picture/footerpro.png" alt="footer" w="100%" h="40%" />
      </Box>
    </Box>
  );
}

export default ProductListingPage;
