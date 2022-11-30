import { Box, Button, Text, Image, Flex, Spacer,Menu,MenuButton,MenuList,MenuItem, Center      } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CART() {
  const Navigate = useNavigate()
  const contextValue = useContext(CartContext); // mycart  อยู่ในนี้
  const {
    mycart,
    setmyCart,
    cartItem,
    setTotalPrice,
    totalPrice,
    totalQuantity,
    quantity,
    handleAddCounter,
    handleMinusCounter,
    addProductToCart,
  } = useContext(CartContext);

  // const [counter1, setCounter1] = useState(1);
  // function handleAddCounter1() {
  //   if (counter1 >= 10) {
  //     return;
  //   }
  //   setCounter1(counter1 + 1);
  // }

  // function handleMinusCounter1() {
  //   if (counter1 === 1) {
  //     return;
  //   }
  //   setCounter1(counter1 - 1);
  // }

  // const [counter2, setCounter2] = useState(1);
  // function handleAddCounter2() {
  //   if (counter2 >= 10) {
  //     return;
  //   }
  //   setCounter2(counter2 + 1);
  // }

  // function handleMinusCounter2() {
  //   if (counter2 === 1) {
  //     return;
  //   }
  //   setCounter2(counter2 - 1);
  // }

  // const [counter3, setCounter3] = useState(1);
  // function handleAddCounter3() {
  //   if (counter3 >= 10) {
  //     return;
  //   }
  //   setCounter3(counter3 + 1);
  // }

  // function handleMinusCounter3() {
  //   if (counter3 === 1) {
  //     return;
  //   }
  //   setCounter3(counter3 - 1);
  // }

  const getPrice = (value, quantity) => {
    const total = value[0].price * quantity;
    setTotalPrice(total);
  };

  let handleRemove = () => {
    const sum = contextValue.mycart.filter((value) => value.id !== value[1].id);
    contextValue.setmyCart(sum);
  };

  return (
    // Navbar ==================================================================================

    <Box as="Big-Box" >
      {/* {contextValue.mycart.map((value)=>{
      return( */}
      <Box position="relative" as="nav" bg="bgsurface" boxShadow="lg" w="100%"   h="55px" >
        <Flex ml={[10, 20, 100]} mt="10px"  w="50px"   h="50px"  position="absolute" >
        <Text className="logo"  fontSize="1.5rem" color="#D6BE96"  >
            WOD
          </Text>
           </Flex>


        <Flex justify="flex-end">
        <Box   onClick={() => {
            
            Navigate("/");
          }} >
    <Button  
             variant="ghost" color="#AA8B56"  
            pt={"15px"}
            fontSize={"18px"}
            fontWeight='bold'
            _hover={{
              textDecoration: "none",
              color: "#c28f3e",
            }}   
           
    >HOME
        </Button>
       </Box>
         
          <Menu>
  <MenuButton as={Button} colorScheme='#ebe4d1'  
                  pt={"15px"}
                  pl={"15px"}
                  fontSize={"18px"}
                  fontWeight='bold'
                  color="#AA8B56"
                 _hover={{
                  textDecoration: "none",
                  color: "#c28f3e",
                }} >
  PRODUCTS
  </MenuButton>
  <MenuList>
    <MenuItem  onClick={() => {
                  Navigate(`/products?category=5`);
                }} >New Products
      </MenuItem>
      
        <MenuItem  onClick={() => {
                  Navigate("/products");
                }} 
        >Product </MenuItem>
        <MenuItem   onClick={() => {
                  Navigate("/products/category/1");
                }}    
        >Men</MenuItem>
        <MenuItem   onClick={() => {
                  Navigate("/products/category/2");
                }} 
        >Women</MenuItem>
        <MenuItem    onClick={() => {
                  Navigate("/products/category/3");
                }} 
        >Kid</MenuItem> 
        <MenuItem    onClick={() => {
                  Navigate("/products/category/4");
                }} 
        >Accessories</MenuItem> 
  
    </MenuList>
</Menu>
<Button
            colorScheme='#ebe4d1'
                  pt={"15px"}
                  pl={"15px"}
                  fontSize={"18px"}
                  fontWeight='bold'
                  color="#AA8B56"
              _hover={{
                textDecoration: "none",
              color: "#c28f3e",
              }}
              onClick={() => {
                Navigate("/login");
              }} 
              
          >
            LOG IN
          </Button>
          <Button
           
           colorScheme='#ebe4d1'
           pt={"15px"}
           pl={"15px"}
           fontSize={"18px"}
           fontWeight='bold'
           color="#AA8B56"
            _hover={{
              textDecoration: "none",
              color: "#c28f3e",
              }}

              onClick={() => {
                Navigate("/register");
              }} 
          >
            REGISTER
          </Button>





          
          <Button
          mr="10px"
          pt={"15px"}
          colorScheme='#ebe4d1'
            fontSize="18"
            variant="ghost"
            color="#AA8B56"
            onClick={() => {
              contextValue.setmyCart(
                contextValue.mycart.filter((value) => value.id !== value.id)
              );
            }}
          >
            CLEAR YOUR CART
            <Image
              ml="15px"
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

       <Flex w="60%"  h="40%" direction="column">
      <Box position="relative" mt="20" ml={[100, 250,250]}  mb="200px">
        <Flex>
        <Text fontSize="40px"  as='b' > CART</Text>
        </Flex>
        <Text fontSize={[20, 25, 30]}  as='b' >Product Name</Text>
      </Box>
      <Box
        as='b'
        fontSize="30px"
        position="absolute"
        // mt={[-7, -10]}
        ml={[200, 358, 920]}
        mt="130px"
      >
        Price
      </Box>
      <Box
        as='b'
        fontSize={[20, 25, 30]}
        position="absolute"
        ml={[300, 445, 1130]}
        // mt={[-7, -10]}
        mt="130px"
      >
        Quantity
      </Box>


      <Box
        as='b'
        fontSize={[20, 25, 30]}
        position="absolute"
        ml={[300, 445, 1400]}
        // mt={[-7, -10]}
        mt="130px"
        
      >
        Total
      </Box>

      {contextValue.mycart.map((value) => {
        return (
          // กล่อง บรรจุ สินค้า ที่ add มา ========================================================================================
          
          
          <Box >
          <Flex   ml={[100, 250, 200]} >
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
                src={value[0].image}
                className="pic1"
                alt="product"
              />
            </Box>
            <Box position="absolute" ml={[80, 125, 280]} mt={[-90]} as="b"   fontSize="25px" >
              {value[0].product_name}
            </Box>

            {/* <Button flex position="absolute" size="xs"  bg="#585858" ml="220" mt="-140" color="tomato" onClick={()=> handleRemove(value.id)}> <Text  fontSize="20"> x </Text> </Button>  */}

            <Box position="absolute" ml={[20, 500, 730]} mt={[-90]} as="b">
              {value[0].price}
            </Box>
            <Box position="absolute" ml={[20, 500, 950]} mt={[-90]} as="b" >
              <Button 
               m="5px"
                onClick={() => {
                  handleMinusCounter(value[0].product_id);
                }}
                bg="#DEDEDE"
                size="xs"
              >
                -
              </Button>
              <Text as="b" fontSize="18px">
                {quantity}
              </Text>
              <Button
                m="5px"
                onClick={() => {
                  handleAddCounter(value[0].product_id);
                }}
                bg="#DEDEDE"
                size="xs"
              >
                +
              </Button>
            </Box>
            <Box position="absolute" ml={[20, 500, 1210]} mt={[-90]} as="b">
              {value[0].price * quantity}
            </Box>
          </Flex>
          </Box>
        );
      })}

      {/* {contextValue.mycart.map((value)=>{
return(
  <Box>
<Box position="relative" h="40" border="1px" borderTopColor="white" borderRightColor="white" borderLeftColor="white"  borderBottomColor="#DEDEDE" > </Box>
<Box position="absolute" boxShadow ="2xl" h ={[50,100,120]} w ={[50,100,200]} mt ={[-130]} ml ={[5]} ><Image boxSize="full" src={value[0].image} className="pic1" alt=""/>  </Box>
<Box position="absolute" ml={[80,125,280]}  mt={[-90]} as="b" > {value[0].product_name}</Box>
<Box position="absolute" ml={[50,360,1015]} mt={[-90]} as="b" >{value[0].price}</Box>
<Box position="absolute" ml={[50,450,1215]} mt={[-90]} > <Button onClick={handleMinusCounter2} bg="#DEDEDE" size="xs"> - </Button>  <Text as="b" fontSize="18px" >  {counter2} </Text>  <Button onClick={handleAddCounter2} bg="#DEDEDE" size="xs"> + </Button>  </Box>
<Box position="absolute" ml={[50,560,1415]} mt={[-90]} as="b" > 2222</Box>
</Box>
)
})} */}

      {/* <Box position="relative" h="40" border="1px" borderTopColor="white" borderRightColor="white" borderLeftColor="white"  borderBottomColor="#DEDEDE" > </Box>
<Box position="absolute" boxShadow ="2xl" h ={[50,100,120]} w ={[50,100,200]} mt ={[-130]} ml ={[5]} ><Image boxSize="full" src={value.image} className="pic1" alt=""/>  </Box>
<Box position="absolute" ml={[80,125,280]}  mt={[-90]} as="b" > {value.product_name}</Box>
<Box position="absolute" ml={[50,360,1015]} mt={[-90]} as="b" >{value.price}</Box>
<Box position="absolute" ml={[50,450,1215]} mt={[-90]} as="b" ><Button onClick={handleMinusCounter3} bg="#DEDEDE" size="xs"> - </Button>  <Text as="b" fontSize="18px" >  {counter3} </Text>  <Button onClick={handleAddCounter3} bg="#DEDEDE" size="xs"> + </Button> </Box>
<Box position="absolute" ml={[50,560,1415]} mt={[-90]} as="b" > 2222</Box>  */}

      {/* </Box> */}

      {/* {contextValue.mycart.map((value,index)=>{
            return(
                <Box key={index} boxShadow ="2xl" h ={[100,300,500]} w ={[100,300,600]} mt ="175" ml ={[30,70,100]} > 
                <Image boxSize="full" src={value.image} className="pic1" alt=""/>
                 </Box> 
            
            )
         })}  */}

      {/* Footer============================================================================================= */}
      <Flex direction="column" width="35%" align="start"  mt="2%" ml={[300, 550, 680]}>
        

     
        <Center  >
        <Text fontSize="25px" m="10px"   fontWeight='bold'>Total:</Text>
        </Center>
       

        <Button 
        w="331px"
        h="53px"
          // loadingText="Submitting"
          size="md"
          bg={"#CFB9AC"}
          color={"white"}
        
          _hover={{
            bg: "#CFB9AC",
          }}
          fontSize={"30px"}
          type="submit"
            onClick={() => {
                  Navigate("/payment");
                }}>Proceed to Check out</Button>
                

      </Flex>
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
