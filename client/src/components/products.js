import React from 'react'

import { Box,Center,Flex,Image,Stack,Text, Wrap } from '@chakra-ui/react'
import {StarIcon } from '@chakra-ui/icons'



   const property = {
        name:'Garmin vivomove HR สีดำ',
        imageUrl: 'picture/1.png',
        imageAlt: 'Vaadeland',
        ImageBrand:'picture/casio.png',
        ImageBrandAlt:'casio',
        title: 'dui maecenas tristique est et tempus semper est quam pharetra magna ac',
        formattedPrice: '฿7,011.00',
        reviewCount: 10,
        rating: 3,


        // name:'name',
        // brandPicture: 'ImageBrand',
        // imageUrl: 'image',
        // imageAlt: 'nameImage',
        // title: 'description',
        // formattedPrice: 'price',
        // reviewCount: 'review',
        // rating: 'ratings',
      }
function Products() {
  return (
         
        <Box  w='30%' boxShadow='sm' borderWidth='5px' borderRadius='20px'  overflow='hidden'  bg='#ffffff' p='20px' >
          <Center  >
          <Image src={property.imageUrl} alt={property.imageAlt}  justify='center' />
          </Center>
          <Box >
            <Flex >
              
          <Image src={property.ImageBrand} alt={property.ImageBrandAlt} w='35px' h='35px' mt ='7px' ml='5px' />
         
          <Flex direction='column' ml='20px' >
        
            <Box
             
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              {property.name}
            </Box>

            
            <Wrap direction='row'>
             <Flex  >
            
              <Box color='gray.600' fontSize='sm' pr='2'>
                price
              <Text color='#FF786B'>
              {property.formattedPrice}
              </Text> 
              </Box>
             
           </Flex>
            
              <Box as='span' color='gray.600' fontSize='sm' >Reviews (
                {property.reviewCount} reviews)
            <Box display='flex' mt='2' alignItems='center' >
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? '#FFFF00' : 'gray.300'}
                  />
                ))}

            </Box>
            </Box>
             </Wrap>
          </Flex>
          </Flex>
          </Box>
        </Box>

      )
    }
   
  

export default Products;

