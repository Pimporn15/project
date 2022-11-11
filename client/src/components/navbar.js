import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  Portal,
  Spacer,
  MenuList,
  UnorderedList,
  ListItem,
  Center,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../contexts/authentication.js";
import { useNavigate } from "react-router-dom";
export function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Center bg="#C7BAB1" justifyContent="center">
      {/* <Flex position="relative" gap="2" bg="#C7BAB1" > */}
      <Box bg="#D6BE96" w="900px" p="4">
        <Breadcrumb justifyContent="center" alignSelf="flex-end">
          <BreadcrumbItem>
            <Button bg="#D6BE96" fontSize="24px" color="#000000">
              HOME
            </Button>
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
            <Button
              bg="#D6BE96"
              href="#"
              fontSize="24px"
              color="#000000"
              onClick={() => {
                navigate("/register");
              }}
            >
              REGISTER
            </Button>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Button
              bg="#D6BE96"
              fontSize="24px"
              color="#000000"
              onClick={() => {
                navigate("/login");
              }}
            >
              LOGIN
            </Button>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Button
              bg="#D6BE96"
              fontSize="24px"
              color="#000000"
              onClick={() => {
                logout();
              }}
            >
              LOGOUT
            </Button>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Button bg="#D6BE96">
                <Image src="/picture/cart.png" alt="cart" />
              </Button>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      {/* </Flex> */}
    </Center>
  );
}
