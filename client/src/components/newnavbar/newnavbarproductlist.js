import { Box, Button, Flex, Spacer,Text, Menu,Avatar, Divider, Stack,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Image, } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";


export function NewNavBlack() {
    const Navigate = useNavigate();
    return (  
        <Box >
    <Flex w="100%" h="55px" bg="#2F2E2C" >
        
      <Flex w="18%" justify="space-between" align="center" ml='3%'  >

        <Text className="logo"  fontSize="1.5rem" color="#D6BE96">
          WOD
        </Text>
         <Box 
         pt={"10px"}
                pl={"15px"}
                fontSize={"18px"}
                fontWeight={500}
                color="#ebe4d1"
                href=""
                _hover={{
                  textDecoration: "none",
                  color: "#c28f3e",
                }}  >
        <Link   onClick={() => {
                  Navigate("/");
                }} 
         >HOME
            </Link>
           </Box>
  
           <Menu>
  <MenuButton as={Button} colorScheme='#ebe4d1'  
                  pt={"10px"}
                  pl={"15px"}
                  fontSize={"18px"}
                  fontWeight={500}
                  color="#ebe4d1"
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
                  Navigate("#");
                }}    
        >Men</MenuItem>
        <MenuItem   onClick={() => {
                  Navigate("#");
                }} 
        >Women</MenuItem>
        <MenuItem    onClick={() => {
                  Navigate("#");
                }} 
        >Kid</MenuItem> 
        <MenuItem    onClick={() => {
                  Navigate("#");
                }} 
        >Accessories</MenuItem> 
  
    </MenuList>
</Menu>
      </Flex>
      <Spacer />
      <Stack
          mt="15px" 
          flex=""
          justify="flex-end"
          direction="row"
          spacing={5}
        >
          <Button
          
            as={"a"}
            w={"70%"}
            h={"30px"}
            fontSize={"sm"}
            fontWeight={600}
            color={"black"}
            borderRadius={"3xl"}
            bg={"#D6BE96"}
            _hover={{
              bg: "#d5b178",
            }}
            onClick={() => {
              Navigate("/login");
            }}
          >
            LOG IN
          </Button>
          <Button
            mt="20%"
            w={"70%"}
            h={"30px"}
            fontSize={"sm"}
            fontWeight={500}
            borderRadius={"3xl"}
            bg={"#2F2E2C"}
            color={"white"}
            border={"2px"}
            borderColor={"#D6BE96"}
            href={"#"}
            _hover={{
              color: "#d5b178",
            }}
            onClick={() => {
              Navigate("/register");
            }}
          >
            REGISTER
          </Button>
        </Stack>


      
      <Flex>
        <Button w="75%" h="50%" mt="15px" colorScheme="#2F2E2C" 
         onClick={() => {
          Navigate(" ");
        }} 
        > 
       <Image  src="picture/iconcart.png"   />
        </Button>
      

      </Flex>
    </Flex>
    <Divider orientation='horizontal' borderColor="#dddddd"  />
    </Box>
    )};