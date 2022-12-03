
import { Box, Button, Flex, Heading, Spacer,Text, Menu,Image,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  

  export function NewNavLanding() {
    const Navigate = useNavigate()

    return (
      <Box>
      <Flex w="100%" h="55px" bg="#ebe4d1">
        <Flex w="25%" justify="space-between" align="center" ml="6%">
          <Text className="logo"  fontSize="1.5rem" color="#D6BE96">
            WOD
          </Text>
           <Box   onClick={() => {
            
                  Navigate("/");
                }} >
          <Button  
                  bg="#ebe4d1"  
                  pt={"10px"}
                  pl={"20px"}
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
    <MenuItem 
     onClick={() => {
                  Navigate(`/products?category=5`);
                }} >New Products
      </MenuItem>
    
        <MenuItem 
         onClick={() => {
                  Navigate("/products");
                }} 
        >Products 
        </MenuItem>
        <MenuItem   
        onClick={() => {
                  Navigate("/products/category/1");
                }}    
        >Men
        </MenuItem>
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
  
        <Flex w="25%" mr="2%">

         <Button w="55%" h="50%" mt="10px" colorScheme="#2F2E2C" 
         onClick={() => {
                  Navigate("/cart");
                }} > 
       <Image  src="picture/iconcart.png"  />
        </Button>



          
          <Button
            h="60%"
            w="65%" 
            m="2%"
            fontSize="0.9rem"
            borderRadius="3xl"
            bg="#D6BE96"
            color="#ffffff"
            _hover={{
            bg: "#d5b178",
              }}
              onClick={() => {
                Navigate("/login");
              }} 
              
          >
            LOG IN
          </Button>
          <Spacer />
          <Button
            h="60%"
            w="60%"
            borderRadius="3xl"
            bg="#EBE4D1"
            border="2px"
            borderColor="#D6BE96"
            color="#9A7352"
            m="2%"
            fontSize="0.9rem"
            _hover={{
                color: "#d5b178",
              }}

              onClick={() => {
                Navigate("/register");
              }} 
          >
            REGISTER
          </Button>


          
        </Flex>
      </Flex>
      </Box>
    );
  }
  
  
  