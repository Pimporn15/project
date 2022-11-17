import { Box, Button, Center, Flex, Image, Wrap, Link } from "@chakra-ui/react";
import ProductItem from "../components/productItem";
import ProductList from "../components/productList";
import { LoginNavigation } from "../components/navbarBlackModeforLogin.js";
import { Navigation } from "../components/navbarBlackMode";
import { useAuth } from "../contexts/authentication";

function ProductListingPage() {
  const auth = useAuth();
  const productPerPage = 20
  return (
    <Box w="100%" h="100%" bg="#2F2E2C">
      {auth.isAuthenticated ? <LoginNavigation /> : <Navigation />}
      <Center w="95%" h="100%" mr="3%" ml="3%" mt="5%">
        <Wrap>
          <ProductList />
        </Wrap>
      </Center>
      <Center className="pagination" fontSize={"3rem"} pt="10%" pb="3%">
        <Link href="#" color={"white"} pl="5%">
          &laquo;
        </Link>
        <Link href="#" color={"white"} pl="5%">
          1
        </Link>
        <Link href="#" color={"white"} pl="5%">
          2
        </Link>
        <Link href="#" color={"white"} pl="5%">
          3
        </Link>
        <Link href="#" color={"white"} pl="5%">
          &raquo;
        </Link>
      </Center>
      <Box>
        <Image src="picture/footerpro.png" alt="footer" w="100%" h="40%" />
      </Box>
    </Box>
  );
}

export default ProductListingPage;
