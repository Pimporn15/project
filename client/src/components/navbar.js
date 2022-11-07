import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Heading,
  Image,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Portal,
} from "@chakra-ui/react";

export function Navbar() {
  return (
    <Flex position="relative" gap="2">
      <Box bg="#D6BE96" w="100%" p="5">
        <Breadcrumb justifyContent="center">
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
    </Flex>
  );
}
