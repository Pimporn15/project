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
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../contexts/productContext";

export function CART() {
  const Navigate = useNavigate();
  const contextValue = useContext(CartContext); // mycart  อยู่ในนี้
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
    let itemIndex = contextValue.mycart[index]
    const minusQuantitty = itemIndex.quantity - 1;
    itemIndex.quantity = minusQuantitty;
    if (itemIndex.quantity < 1) {
      itemIndex.quantity = 1;
    }
    console.log(itemIndex);
    setmyCart([...mycart]);
  };

  const getPrice = (value, quantity) => {
    const total = value[0].price * quantity;
    setTotalPrice(total);
  };

  let handleRemove = () => {
    const sum = contextValue.mycart.filter((value) => value.id !== value[1].id);
    contextValue.setmyCart(sum);
  };
  console.log(contextValue.mycart);
  return (
    // Navbar ==================================================================================

    <Box as="Big-Box">
      {/* {contextValue.mycart.map((value)=>{
      return( */}
      <Box position="relative" as="nav" bg="bgsurface" boxShadow="lg" w="100%">
        <Flex justify="flex-end">
          <Button fontSize="15" variant="ghost" color="#AA8B56">
            HOME
          </Button>
          {/* <Button
          
          fontSize="15" variant="ghost" color="#AA8B56">
            PRODUCTS
          </Button> */}
          {/* <Button
          
          fontSize="15" variant="ghost" color="#AA8B56">
            ACCESSORIES
          </Button> */}
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="#ebe4d1"
              pt={"10px"}
              pl={"15px"}
              fontSize={"18px"}
              fontWeight={500}
              color="#ebe4d1"
              _hover={{
                textDecoration: "none",
                color: "#c28f3e",
              }}
            >
              PRODUCTS
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  Navigate(`/products?category=5`);
                }}
              >
                New Products
              </MenuItem>
              <MenuItem
                onClick={() => {
                  Navigate("/products/category/5");
                }}
              >
                New Products
              </MenuItem>
              <MenuItem
                onClick={() => {
                  Navigate("/products");
                }}
              >
                Product{" "}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  Navigate("/products/category/1");
                }}
              >
                Men
              </MenuItem>
              <MenuItem
                onClick={() => {
                  Navigate("/products/category/2");
                }}
              >
                Women
              </MenuItem>
              <MenuItem
                onClick={() => {
                  Navigate("/products/category/3");
                }}
              >
                Kid
              </MenuItem>
              <MenuItem
                onClick={() => {
                  Navigate("/products/category/4");
                }}
              >
                Accessories
              </MenuItem>
            </MenuList>
          </Menu>

          <Button fontSize="15" variant="ghost" color="#AA8B56">
            LOG IN
          </Button>
          <Button
            fontSize="15"
            variant="ghost"
            color="#585858"
            onClick={() => {
              contextValue.setmyCart(
                contextValue.mycart.filter((value) => value.id !== value.id)
              );
            }}
          >
            CLEAR YOUR CART
            <Image
              mt="-1"
              boxSize="30px"
              src="picture/Bin.png"
              className="bin"
              alt="bin"
            />
          </Button>

          {/* <Button  fontSize="15" variant="ghost" color="#AA8B56">   <Image boxSize="30px" src="https://img.icons8.com/dotty/512/favorite-cart.png" className="pic2" alt=""/>    </Button> */}
        </Flex>
      </Box>
      {/* )
    })} */}

      <Box position="relative" mt="20" ml={[10, 30, 250]}>
        <Text fontSize="40px"> CART</Text>
        <Text fontSize={[20, 25, 30]}>Product Name</Text>
      </Box>
      <Box
        fontSize={[20, 25, 30]}
        position="absolute"
        mt={[-7, -10]}
        ml={[200, 358, 1000]}
      >
        Price
      </Box>
      <Box
        fontSize={[20, 25, 30]}
        position="absolute"
        ml={[300, 445, 1195]}
        mt={[-7, -10]}
      >
        Quantity
      </Box>
      <Box
        fontSize={[20, 25, 30]}
        position="absolute"
        ml={[400, 550, 1400]}
        mt={[-7, -10]}
      >
        Total
      </Box>

      {contextValue.mycart.map((value, index) => {
        return (
          // กล่อง บรรจุ สินค้า ที่ add มา ========================================================================================
          <Box>
            <Box
              position="relative"
              h="40"
              border="1px"
              borderTopColor="white"
              borderRightColor="white"
              borderLeftColor="white"
              borderBottomColor="#DEDEDE"
            ></Box>
            <Box
              position="absolute"
              boxShadow="2xl"
              h={[50, 100, 120]}
              w={[50, 100, 200]}
              mt={[-130]}
              ml={[5]}
            >
              <Image boxSize="full" src={value.image} className="pic1" alt="" />
            </Box>
            <Box position="absolute" ml={[80, 125, 280]} mt={[-90]} as="b">
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

            <Box position="absolute" ml={[50, 360, 1015]} mt={[-90]} as="b">
              {value.price}
            </Box>
            <Box position="absolute" ml={[50, 450, 1215]} mt={[-90]} as="b">
              <Button
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
                onClick={() => {
                  handleAddCounter(index);
                }}
                bg="#DEDEDE"
                size="xs"
              >
                +
              </Button>
            </Box>
            <Box position="absolute" ml={[50, 560, 1415]} mt={[-90]} as="b">
              {value.price * value.quantity}
            </Box>
          </Box>
        );
      })}

      {/* Footer============================================================================================= */}
      <Flex direction="column" width="35%" align="start" ml="80%" mt="5%">
        <Text fontSize="1.5rem">Total:</Text>
        <Button
          onClick={() => {
            Navigate("/payment");
          }}
        >
          Check Out
        </Button>
      </Flex>
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
    </Box>
  );
}
