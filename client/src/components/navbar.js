import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Portal } from "@chakra-ui/react";

export function Navbar() {
  return (
    <Center bg="#C7BAB1" justifyContent="center" >
      {/* <Flex position="relative" gap="2" bg="#C7BAB1" > */}
        <Box bg="#D6BE96" w="900px" p="4"  >
      
          <Breadcrumb justifyContent="center" alignSelf='flex-end'>
            <BreadcrumbItem>
              <Text href="#" fontSize="24px" color="#000000">
                HOME
              </Text>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Menu>
                <MenuButton fontSize="24px" color="#000000">
                  PRODUCTS
                </MenuButton>
                <Portal>
                  <MenuList>
                    <MenuItem>New PRODUCTS</MenuItem>
                    <MenuItem>Men</MenuItem>
                    <MenuItem>Women</MenuItem>
                    <MenuItem>KID</MenuItem>
                    <MenuItem>ACCESSORIES</MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Text href="#" fontSize="24px" color="#000000">
                REGISTER
              </Text>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Text href="#" fontSize="24px" color="#000000">
                LOGIN
              </Text>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <Image src="/picture/cart.png" alt="cart" />
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      {/* </Flex> */}
    </Center>
  );
}
