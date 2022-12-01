
import { Box, Button, Flex, Heading, Spacer,Text, Menu,Image,Avatar,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  import { CartContext } from "../../App";
  import { useContext } from "react";
  import { useAuth } from  "../../contexts/authentication"

  export function  NewNavCartLogin() {

    const { logout } = useAuth();
    const Navigate = useNavigate()
    const contextValue = useContext(CartContext);
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
    

    return (
      <Box>
      <Flex w="100%" h="55px" bg="#ebe4d1">
        <Flex w="18%" justify="space-between" align="center" ml="5%">
          <Text className="logo"  fontSize="1.5rem" color="#D6BE96">
            WOD
          </Text>
           <Box   onClick={() => {
            
                  Navigate("/");
                }} >
          <Button  
                  bg="#ebe4d1"  
                  pt={"10px"}
                  pl="50px"
                  fontSize={"18px"}
                  fontWeight={500}
                  color="#9a7352"
                  href=""
                  _hover={{
                    textDecoration: "none",
                    color: "#c28f3e",
                  }}   
                 
          >HOME
              </Button>
             </Box>
    
             <Menu>
    <MenuButton as={Button} colorScheme='#ebe4d1'  
                    pt={"10px"}
                    pl={"15px"}
                    fontSize={"18px"}
                    fontWeight={500}
                    color="#9a7352"
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
  
        </Flex>
        
        <Spacer />
  
        <Flex w="20%" mr="2%">

         <Button w="55%" h="50%" mt="10px" colorScheme="#2F2E2C" 
         onClick={() => {
                  Navigate("/cart");
                }} > 
       <Image  src="picture/iconcart.png"  />
        </Button>

          
          <Flex ml="5px">
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
         </Flex>
         <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                mr="5px"
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList >
                <MenuItem onClick={() => {
                  Navigate("/profile");
                }}
                >My Profile</MenuItem>
                <MenuItem  onClick={() => {
                  Navigate("");
                }} 
                >My favorite</MenuItem>
                <MenuItem  onClick={() => {
                  logout();
                  Navigate("/login");
                }}
                >Log out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        




        </Flex>
      </Flex>
      </Box>
    );
  }
  
  
  