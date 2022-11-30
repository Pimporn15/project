import React from "react";

import { Box, Center, Flex, Image, Stack, Text, Wrap } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function ProductItem(property) {
  const Navigate = useNavigate(); //เรียกใช้ navigate เพื่อจะส่งไปหน้า product detail

  return (
    <Flex direction="row" justify="Center">
      <Box
        w="300px"
        h="320px"
        borderRadius="20px"
        overflow="hidden"
        bg="#ffffff"
        p="15px"
        m="5%"
      >
        <Center>
          <Image
            boxSize="100px"
            src={property.image}
            alt={property.imageAlt}
            w="300px"
            h="200px"
            justify="center"
            onClick={() => {
              Navigate(`/products/${property.product_id}`); //navigateไป productที่ product_id เดียวกับหน้า product lis
            }}
          />
        </Center>
        <Box>
          <Flex>
            <Image
              src={property.imageBrand}
              alt={property.ImageBrandAlt}
              w="35px"
              h="35px"
              mt="7px"
              ml="5px"
            />

            <Flex direction="column" ml="20px">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {property.name}
              </Box>

              <Wrap direction="row">
                <Flex>
                  <Box color="gray.600" fontSize="sm" pr="2">
                    price
                    <Text color="#FF786B">฿ {property.price}</Text>
                  </Box>
                </Flex>

                <Box as="span" color="gray.600" fontSize="sm">
                  Reviews ({property.review} reviews)
                  <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "#FFBF00" : "gray.300"}
                        />
                      ))}
                  </Box>
                </Box>
              </Wrap>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
export default ProductItem;
