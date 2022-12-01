import {
  Box,
  Button,
  Text,
  Image,
  Flex,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PayMentCard } from "../components/paymentcard";
import { NewNavCartLogin } from "../components/newnavbar/newnavcartlogin";
import { NewNavCart } from "../components/newnavbar/newnavcart";
import { useAuth } from "../contexts/authentication";
import { useProduct } from "../contexts/productContext";

export function CART() {
  const Navigate = useNavigate();
  const auth = useAuth();
  const contextValue = useContext(CartContext);
  const { deleteCartItem, cart } = useProduct();
  const { setTotalPrice, setmyCart, mycart } = useContext(CartContext);

  const handleAddCounter = (index) => {
    let itemIndex = contextValue.mycart[index];
    const plusQuantitty = itemIndex.quantity + 1;
    itemIndex.quantity = plusQuantitty;
    console.log(itemIndex);
    setmyCart([...mycart]);
  };

  const handleMinusCounter = (index) => {
    let itemIndex = contextValue.mycart[index];
    const minusQuantitty = itemIndex.quantity - 1;
    itemIndex.quantity = minusQuantitty;
    if (itemIndex.quantity < 1) {
      itemIndex.quantity = 1;
    }
    console.log(itemIndex);
    setmyCart([...mycart]);
  };

  let handleRemove = () => {
    const sum = contextValue.mycart.filter((value) => value.id !== value[1].id);
    contextValue.setmyCart(sum);
  };

  return (
    // Navbar ==================================================================================

    <Box as="Big-Box">
      <Box w="100%">
        {auth.isAuthenticated ? <NewNavCartLogin /> : <NewNavCart />}
      </Box>
      <Flex w="60%" h="40%" direction="column">
        <Box position="relative" mt="20" ml={[100, 250, 250]} mb="200px">
          <Flex>
            <Text fontSize="40px" as="b">
              {" "}
              CART
            </Text>
          </Flex>
          <Text fontSize={[20, 25, 30]} as="b">
            Product Name
          </Text>
        </Box>
        <Box
          as="b"
          fontSize="30px"
          position="absolute"
          // mt={[-7, -10]}
          ml={[200, 358, 920]}
          mt="130px"
        >
          Price
        </Box>
        <Box
          as="b"
          fontSize={[20, 25, 30]}
          position="absolute"
          ml={[300, 445, 1130]}
          // mt={[-7, -10]}
          mt="130px"
        >
          Quantity
        </Box>
        <Box
          as="b"
          fontSize={[20, 25, 30]}
          position="absolute"
          ml={[300, 445, 1400]}
          // mt={[-7, -10]}
          mt="130px"
        >
          Total
        </Box>

        {contextValue.mycart.map((value, index) => {
          return (
            // กล่อง บรรจุ สินค้า ที่ add มา =======================================================================================
            <Box>
              <Flex ml={[100, 250, 200]}>
                <Box
                  position="relative"
                  h="40"
                  border="2px"
                  borderTopColor="white"
                  borderRightColor="white"
                  borderLeftColor="white"
                  borderBottomColor="#DEDEDE"
                ></Box>
                <Box
                  borderRadius="20px"
                  position="absolute"
                  boxShadow="2xl"
                  h={[50, 100, 120]}
                  w={[50, 100, 200]}
                  mt={[-130]}
                  ml={[5]}
                >
                  <Image
                    borderRadius="20px"
                    boxSize="full"
                    src={value.image}
                    className="pic1"
                    alt="product"
                  />
                </Box>
                <Box
                  position="absolute"
                  ml={[80, 125, 280]}
                  mt={[-90]}
                  as="b"
                  fontSize="25px"
                >
                  {value.product_name}
                </Box>
                <Button
                  flex
                  position="absolute"
                  size="xs"
                  bg="#585858"
                  ml="220"
                  mt="-140"
                  color="tomato"
                  onClick={() => deleteCartItem(value.product_id)}
                >
                  {" "}
                  <Text fontSize="20"> x </Text>{" "}
                </Button>

                <Box position="absolute" ml={[20, 500, 730]} mt={[-90]} as="b">
                  {value.price}
                </Box>
                <Box position="absolute" ml={[20, 500, 950]} mt={[-90]} as="b">
                  <Button
                    m="5px"
                    onClick={() => {
                      handleMinusCounter(index);
                    }}
                    bg="#DEDEDE"
                    size="xs"
                  >
                    -
                  </Button>
                  <Text as="b" fontSize="18px">
                    {value.quantity}
                  </Text>
                  <Button
                    m="5px"
                    onClick={() => {
                      handleAddCounter(index);
                    }}
                    bg="#DEDEDE"
                    size="xs"
                  >
                    +
                  </Button>
                </Box>
                <Box position="absolute" ml={[20, 500, 1210]} mt={[-90]} as="b">
                  {value.price * value.quantity}
                </Box>
              </Flex>
            </Box>
          );
        })}

        {/* Footer============================================================================================= */}
        <Flex
          direction="column"
          width="35%"
          align="start"
          mt="2%"
          ml={[300, 550, 680]}
        >
          <Flex direction="column" align="center">
            <Text fontSize="25px" m="10px" fontWeight="bold">
              Total:
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {/* //-------------card-------------// */}
      <PayMentCard />
      {/* _______________________________________Toggle ________________________________________ */}
      <Flex
        justifyContent="center"
        color="#AA8B56"
        mr="100"
        ml={[50, 100, 300]}
        mt="300"
      >
        <Text fontSize={{ base: "15px", sm: "20px", md: "20px", lg: "px" }}>
          Copyright©2022 Watchodile.All Right Reserved.
        </Text>
      </Flex>
      //{" "}
    </Box>
  );
}
