import {
  Box,
  Button,
  Text,
  Image,
  //ButtonGroup,
  //Container,
  Flex,
  //HStack,
  //IconButton,
  //useBreakpointValue,
  //useColorModeValue,
  Stack,
 
} from "@chakra-ui/react";

import React,{useState} from "react";
import { RatingStar } from "rating-star";
// import Star from "./star";





export function ProductDetail0() {

  let [counter, setCounter] = useState(1);
  
 

  function handleAddCounter() {
      setCounter(counter + 1);
  }

  function handleMinusCounter() {               // ควรตั้ง Logic ว่า ถ้า counter  > 0  ให้กด submit ปุ่ม ADD TO CART ได้
      setCounter(counter - 1)
     
  }


  // let addCart =() => {
  //     bil.push(counter > 0 )

  // }



  return (
      
      // Navbar ==================================================================================
      <Box as = "Big-Box"> 
          <Box as ="nav" bg="bgsurface" boxShadow = "lg" w="100%" >
      <Flex justify = "flex-end">
          <Button  fontSize="15" variant="ghost" color="#AA8B56" >HOME</Button>
          <Button  fontSize="15" variant="ghost" color="#AA8B56">PRODUCTS</Button>
          <Button  fontSize="15" variant="ghost" color="#AA8B56">ACCESSORIES</Button>
          <Button  fontSize="15" variant="ghost" color="#AA8B56">LOG IN</Button>
          <Button  fontSize="15" variant="ghost" color="#AA8B56">   <Image boxSize="30px" src="picture/cart.svg" className="pic2" alt=""/>   </Button>
      </Flex>
  </Box>
      
      {/* รูปใหญ่============================================================================================= */}
       
       <Box boxShadow ="lg" h ={[100,300,500]} w ={[100,300,600]} mt ="175" ml ={[30,70,100]} > 
       <Image boxSize="full" src="picture/Garmin.svg" className="pic1" alt=""/>
        </Box> 
       

        {/* ข้อมูลต่างๆของสินค้า================================================================================== */}

        <Flex bg="white-smoke" w={[100,200,500]} h="500" ml = {[100,400,900]} mt={[-100,-300,-500]} position="relative">
         <Stack spacing={2}>
          
          <Text fontSize={{base:'10px',sm:'20px', md:'20px', lg:'30px'}}> Garmin vivosport </Text>


          <Text fontSize={{base:'10px',sm:'10px', md:'15px', lg:'25px'}}>
              <Flex>
          {/* <Image boxSize="20px" src="picture/ดาวเต็ม.svg" className="pic2" alt=""/>   
          <Image boxSize="20px" src="picture/ดาวเต็ม.svg" className="pic2" alt=""/>  
          <Image boxSize="20px" src="picture/ดาวเต็ม.svg" className="pic2" alt=""/>  
          <Image boxSize="20px" src="picture/ดาวครึ่ง.svg" className="pic2" alt=""/>  
          <Image boxSize="20px" src="picture/ดาวใส.svg" className="pic2" alt=""/>   */}
          {/* <Star/> */}
          

          <Flex position="absolute" ml="150" mt="2.5">  <Button  borderColor="white" size="xs" variant="outline"> <Text fontSize={[5,10,12]}>Read Reviews..</Text> </Button>  </Flex> 
               </Flex>
           </Text>


          <Text fontSize={{base:'10px', md:'15px', lg:'20px'}}> Garmin vivosport สาายรัดข้อมือเพื่อสุขภาพ สี 3 สี <br/> เติมเต็มสไตล์ให้กับคุณ vivosport จุดเด่นที่การออกแบบ
          <br/>ทันสมัย หน้าจอสี ติดตามกิจกรรม, รวมถึงจำนวนก้าวเดิน, <br/>การนอนหลับ มีคุณสมบัติ Movel IQ ตรวจจับเมื่อคุณเริ่มกิจกรรม
          หนึ่งๆได้โดยอัตโนมัติ การแจ้งเตือน Smart notifications </Text>

          <Text fontSize="17"> Price</Text>
          <Box pb="20px" as ="b" color="tomato" fontSize="20">฿ 11,500.00    <Text color="gray" fontSize="12" as="s">฿12,000.00</Text> </Box>
      
          {/* จำนวนสินค้า========================================================================================================================= */}
            <Box m="100"> <Text fontSize="17px"> Quantity <Flex position="absolute" bg="white" display="flex" w="100px" h="30px" ml="70px" mt="-25px" justify="space-between"> <Button onClick={handleMinusCounter} bg="#CFB9AC" size="xs"> - </Button>  <Text as="b" fontSize="18px" >  {counter} </Text>  <Button onClick={handleAddCounter} bg="#CFB9AC" size="xs"> + </Button>      </Flex> </Text></Box>
          </Stack>
        </Flex>


      
        


       {/* ปุ่มกด add to cart ==================================================================================== */}
        <Box ml = {[100,400,900]} >
          
        <Button size="lg" bg="#CFB9AC" color="white">
        <Box onClick mb="0px" mr="2px" > <Image boxSize="25px" src="picture/cart.svg" className="pic2" alt=""/> </Box>    <Box mr="15px">ADD TO CART</Box>
        </Button>
       
        </Box>
        



         {/* Footer============================================================================================= */}

        <Flex justifyContent="center" color= "#AA8B56" ml={[50,100,300]} mt="300">
        <Text fontSize={{base:'15px',sm:'20px', md:'20px', lg:'20px'}}>Copyright©2022 Watchodile.All Right Reserved.</Text>
        </Flex>


        </Box>
        
      



  )
}
