import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Wrap,
  Link,
  Text,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import ProductList from "../components/productList";
import { LoginNavigation } from "../components/navigationBar/navbarBlackModeforLogin";
import { Navigation } from "../components/navigationBar/navbarBlackMode";
import { useAuth } from "../contexts/authentication";
import {useState} from "react"
import {useParams} from "react-router-dom"


function ProductListingPage() {
  const params =useParams();
  const categoryId = params.id
  console.log(categoryId)
  const [categories, setCategories] = useState([]);
  const auth = useAuth();
  const productPerPage = 20;

  return (
    <Box w="100%" h="100%" bg="#2F2E2C">
      {auth.isAuthenticated ? <LoginNavigation setCategories= {setCategories}/> : <Navigation />}
      <Center w="95%" h="100%" mr="3%" ml="8%" mt="5%">
        <Wrap>
          <ProductList  categoryId={categoryId}/>
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
        <Flex direction="row" position="absolute" w="90%" m="5%" mt="20%">
          <Flex direction="column" align="center" mt="10px">
            <Text fontSize="20px" color="#ffffff">
              CONTACT
            </Text>
            <Box w="100%" h="5%">
              <Link href="#">
                <IconButton
                  aria-label="twitter"
                  size="lg"
                  icon={<BsTwitter size="28px" />}
                  _hover={{
                    bg: "blue.500",
                    color: "white",
                  }}
                  isRound
                />
              </Link>
              <Link href="#">
                <IconButton
                  aria-label="instagram"
                  size="lg"
                  icon={<BsInstagram size="28px" />}
                  _hover={{
                    bg: "blue.500",
                    color: "white",
                  }}
                  isRound
                />
              </Link>
              <Link href="#">
                <IconButton
                  aria-label="facebook"
                  size="lg"
                  icon={<BsFacebook size="28px" />}
                  _hover={{
                    bg: "blue.500",
                    color: "white",
                  }}
                  isRound
                />
              </Link>
            </Box>
          </Flex>
          <Spacer />
          <Flex direction="column" align="center">
            <Text fontSize="20px" color="#ffffff">
              SECURE PAYMENT
            </Text>
            <Image
              boxSize="100px"
              w="200px"
              h="45px"
              src="picture/payment.png"
              alt="payment"
            />
          </Flex>
          <Spacer />
          <Flex align="center">
            <Image src="picture/brand.png" alt="brand" />
          </Flex>
        </Flex>
        <Box align="center">
          <Image src="picture/footerpro.png" alt="footer" w="100%" h="40%" />
        </Box>
      </Box>
    </Box>
  );
}

export default ProductListingPage;
