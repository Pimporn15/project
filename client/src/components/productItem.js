import React from "react";

import { Box, Center, Flex, Image, Stack, Text, Wrap } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import ProductList from "./productList";

// function ProductItem(item) {
//   return (
//     <Flex direction={"row"}>
//       <Box
//         w="20%"
//         h="40%"
//         borderWidth="5px"
//         borderRadius="20px"
//         overflow="hidden"
//         bg="#ffffff"
//         p="20px"
//         mt="3%"
//         ml="10%"
//       >
//         <Center>
//           <Image
//             src={item.image}
//             alt={item.imageAlt}
//             w="500px"
//             h="300px"
//             justify="center"
//           />
//         </Center>
//         <Box>
//           <Flex>
//             <Image
//               src={item.ImageBrand}
//               alt={item.ImageBrandAlt}
//               w="35px"
//               h="35px"
//               mt="7px"
//               ml="5px"
//             />

//             <Flex direction="column" ml="20px">
//               <Box
//                 mt="1"
//                 fontWeight="semibold"
//                 as="h4"
//                 lineHeight="tight"
//                 noOfLines={1}
//               >
//                 {item.name}
//               </Box>

//               <Wrap direction="row">
//                 <Flex>
//                   <Box color="gray.600" fontSize="sm" pr="2">
//                     price
//                     <Text color="#FF786B">{item.price}</Text>
//                   </Box>
//                 </Flex>

//                 <Box as="span" color="gray.600" fontSize="sm">
//                   Reviews ({item.review} reviews)
//                   <Box display="flex" mt="2" alignItems="center">
//                     {Array(5)
//                       .fill("")
//                       .map((_, i) => (
//                         <StarIcon
//                           key={i}
//                           color={i < item.rating ? "#FFFF00" : "gray.300"}
//                         />
//                       ))}
//                   </Box>
//                 </Box>
//               </Wrap>
//             </Flex>
//           </Flex>
//         </Box>
//       </Box>
//     </Flex>
//   );
// }

export default ProductItem;
