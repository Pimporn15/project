import { Box, Flex, Image, Wrap } from "@chakra-ui/react";
import ProductItem from "../components/productItem";
import ProductList from "../components/productList";

function ProductListingPage() {
  return (
    <Box w="100%" h="100%" bg="#2F2E2C">
      <ProductList />
      <Box>
        <Image src="picture/footerpro.png" alt="footer" w="100%" h="40%" />
      </Box>
    </Box>
  );
}

export default ProductListingPage;
