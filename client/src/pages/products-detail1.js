import { Box, Button, Text, Image, Flex, Stack } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import React from "react";
import { useAuth } from "../contexts/authentication";
import { StarIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { NewNavLanding } from "../components/newnavbar/newnavlandingpage";
import { NewNavLandingLogin } from "../components/newnavbar/newnavlangpagelogin";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../App";
import { useProduct } from "../contexts/productContext";

export function ProductDetail1() {
  const { text, addProductToCart, deleteCartItem } = useProduct();
  const contextValue = useContext(CartContext);
  const Navigate = useNavigate();
  const auth = useAuth();
  let [datas, setDatas] = useState([]);
  const [counter, setCounter] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    getPosts();
  }, []);

  let getPosts = async () => {
    try {
      let response = await axios.get(`http://localhost:4000/products/${id}`);
      setDatas(response.data.data); // [{ product }]
      // datas -> [ { product_id: 'a', quantity: 1 } ]
      //      value -> { product_id: 'a', quantity: 1 }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddCounter = (value) => {
    value = value + 1;
    if (value > 10) {
      return 10;
    }
    setCounter(value);
    console.log(value);
  };

  const handleMinusCounter = (value) => {
    value = value - 1;
    if (value < 1) {
      return 1;
    }
    setCounter(value);
  };
  // Todo (1st)
  // 1) create handleAddCounter
  //     -  value -> { product_id: 'a', quantity: 2 }
  // 2) create handleSubtractCounter
  //     -  value -> { product_id: 'a', quantity: 1 }

  return (
    <Box as="Big-Box">
      {auth.isAuthenticated ? <NewNavLandingLogin /> : <NewNavLanding />}
      {/* <Box as="nav" bg="bgsurface" boxShadow="lg" w="100%">
        <Flex justify="flex-end">
          <Button fontSize="15" variant="ghost" color="#AA8B56">
            HOME
          </Button>
          <Button fontSize="15" variant="ghost" color="#AA8B56">
            PRODUCTS
          </Button>
          <Button fontSize="15" variant="ghost" color="#AA8B56">
            ACCESSORIES
          </Button>
          <Button fontSize="15" variant="ghost" color="#AA8B56">
            LOG IN
          </Button>
          <Button fontSize="15" variant="ghost" color="#AA8B56">
            {" "}
            <Image
              boxSize="30px"
              src="picture/cart.svg"
              className="pic2"
              alt=""
            />{" "}
          </Button>
        </Flex>
      </Box> */}

      {/* รูปใหญ่============================================================================================= */}
      {datas.map((value, index) => {
        return (
          <Box
            key={index}
            boxShadow="2xl"
            h={[100, 300, 500]}
            w={[100, 300, 600]}
            mt="175"
            ml={[30, 70, 100]}
          >
            <Image boxSize="full" src={value.image} className="pic1" alt="" />
          </Box>
        );
      })}

      {/* ข้อมูลต่างๆของสินค้า================================================================================== */}
      {datas.map((value, index) => {
        return (
          <Flex
            key={index}
            bg="white-smoke"
            w={[100, 200, 500]}
            h="500"
            ml={[100, 400, 900]}
            mt={[-100, -300, -500]}
            position="relative"
          >
            <Stack spacing={2}>
              <Text
                fontSize={{ base: "10px", sm: "20px", md: "20px", lg: "30px" }}
              >
                {value.product_name}
              </Text>
              <Text
                fontSize={{ base: "10px", sm: "10px", md: "15px", lg: "25px" }}
              >
                <Flex>
                  <Box as="span" color="gray.600" fontSize="xl">
                    <Box display="flex" mt="2" alignItems="center">
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            color={i < value.rating ? "#fdd835" : "gray.300"}
                          />
                        ))}
                    </Box>
                  </Box>

                  <Flex position="absolute" ml="150" mt="2.5">
                    <Button borderColor="white" size="xs" variant="outline">
                      <Text fontSize={[5, 10, 12]}>
                        {value.rating} Points and Reviews..
                      </Text>
                    </Button>
                  </Flex>
                </Flex>
              </Text>

              <Text fontSize={{ base: "10px", md: "15px", lg: "20px" }}>
                {value.description}
              </Text>

              <Text fontSize="17"> Price</Text>
              <Box pb="20px" as="b" color="tomato" fontSize="20">
                ฿ {value.price}
              </Box>
              <Box m="100">
                <Text fontSize="17px">
                  Quantity
                  <Flex
                    position="absolute"
                    bg="white"
                    display="flex"
                    w="100px"
                    h="30px"
                    ml="70px"
                    mt="-25px"
                    justify="space-between"
                  >
                    <Button
                      bg="#CFB9AC"
                      size="xs"
                      onClick={() => {
                        handleMinusCounter(counter);
                      }}
                    >
                      -
                    </Button>
                    <Text as="b" fontSize="18px">
                      {counter}
                    </Text>
                    <Button
                      onClick={() => {
                        handleAddCounter(counter);
                      }}
                      bg="#CFB9AC"
                      size="xs"
                    >
                      +
                    </Button>
                  </Flex>
                </Text>
              </Box>
            </Stack>
            <Box ml={[100, 400, 900]}>
              <Button
                onClick={() => {
                  value.quantity = counter;
                  // `value` send into addProductToCard
                  addProductToCart(value);
                  Navigate("/cart");
                  console.log(value);
                }}
                size="lg"
                bg="#CFB9AC"
                color="white"
              >
                <Box>
                  <Image
                    boxSize="35px"
                    src="https://img.icons8.com/nolan/512/shopping-cart.png"
                    className="pic2"
                    alt=""
                  />
                </Box>
                <Box mr="15px">ADD TO CART</Box>
              </Button>
            </Box>
          </Flex>
        );
      })}
      {/* ปุ่มกด add to cart ==================================================================================== */}
      {/* {datas.map((value, index)=>{ */}
      {/* console.log(contextValue.mycart) */}
      {/* return( */}

      {/* <Box ml={[100, 400, 900]}>
        <Button
          onClick={() => {
            contextValue.setmyCart([...contextValue.mycart, value]);
            Navigate("/cart");
            console.log(contextValue.mycart);
          }}
          // onClick={(product, numOfQuantity) => {
          //   addProductToCart();
          // }}
          size="lg"
          bg="#CFB9AC"
          color="white"
        >
          <Box>
            <Image
              boxSize="35px"
              src="https://img.icons8.com/nolan/512/shopping-cart.png"
              className="pic2"
              alt=""
            />
          </Box>
          <Box mr="15px">ADD TO CART</Box>
        </Button>
      </Box> 
     
               */}

      {/* Footer============================================================================================= */}
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
