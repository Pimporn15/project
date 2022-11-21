import {
  Box,
  Button,
  Text,
  Image,
  Flex,
  Spacer,
 
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext} from "../App"; 
import { useState } from "react";






export function CART() {

  let contextValue = useContext(CartContext)   
 
  const [counter1, setCounter1] = useState(1)
    function handleAddCounter1() {
      setCounter1(counter1 + 1);
    }

    function handleMinusCounter1() {               
      setCounter1(counter1 - 1)
    }

    const [counter2, setCounter2] = useState(1)
    function handleAddCounter2() {
      setCounter2(counter2 + 1);
    }

    function handleMinusCounter2() {               
      setCounter2(counter2 - 1)
    }

    const [counter3, setCounter3] = useState(1)
    function handleAddCounter3() {
      setCounter3(counter3 + 1);
    }

    function handleMinusCounter3() {               
      setCounter3(counter3 - 1)
    }
  
  
  
  
  // console.log(contextValue)

 
  

  return (
   
    // Navbar ==================================================================================
   
    <Box as = "Big-Box"> 
        <Box as ="nav" bg="bgsurface" boxShadow = "lg" w="100%" >
    <Flex justify = "flex-end">
        <Button  fontSize="15" variant="ghost" color="#AA8B56" >HOME</Button>
        <Button  fontSize="15" variant="ghost" color="#AA8B56">PRODUCTS</Button>
        <Button  fontSize="15" variant="ghost" color="#AA8B56">ACCESSORIES</Button>
        <Button  fontSize="15" variant="ghost" color="#AA8B56">LOG IN</Button>
        <Button  fontSize="15" variant="ghost" color="#AA8B56">   <Image boxSize="30px" src="https://img.icons8.com/dotty/512/favorite-cart.png" className="pic2" alt=""/>    </Button>
    </Flex>
</Box>

<Box position="relative" mt="20" ml={[10,30,250]}> <Text fontSize="40px"> CART</Text> <Text fontSize={[20,25,30]}>Product Name</Text> </Box>
<Box fontSize={[20,25,30]} position="absolute" mt={[-7,-10]} ml={[200,358,1000]} > Price </Box>
<Box fontSize ={[20,25,30]} position="absolute" ml={[300,445,1195]}mt={[-7,-10]} >Quantity</Box>
<Box fontSize ={[20,25,30]} position="absolute" ml={[400,550,1400]} mt={[-7,-10]} >Total</Box>

{contextValue.mycart.map((value)=>{
return(
// กล่อง บรรจุ สินค้า ที่ add มา ========================================================================================
<Box>
  <Box position="relative" h="40" border="1px" borderTopColor="white" borderRightColor="white" borderLeftColor="white"  borderBottomColor="#DEDEDE" > </Box>
<Box position="absolute" boxShadow ="2xl" h ={[50,100,120]} w ={[50,100,200]} mt ={[-130]} ml ={[5]} ><Image boxSize="full" src={value.image} className="pic1" alt=""/>  </Box>
<Box position="absolute" ml={[80,125,280]}  mt={[-90]} as="b" > {value.product_name}</Box>
<Box position="absolute" ml={[50,360,1015]} mt={[-90]} as="b" >{value.price}</Box>
<Box position="absolute" ml={[50,450,1215]} mt={[-90]} as="b" > <Button onClick={handleMinusCounter1} bg="#DEDEDE" size="xs"> - </Button>  <Text as="b" fontSize="18px" >  {counter1} </Text>  <Button onClick={handleAddCounter1} bg="#DEDEDE" size="xs"> + </Button>      
 </Box>
<Box position="absolute" ml={[50,560,1415]} mt={[-90]} as="b" > 2222</Box>

<Box position="relative" h="40" border="1px" borderTopColor="white" borderRightColor="white" borderLeftColor="white"  borderBottomColor="#DEDEDE" > </Box>
<Box position="absolute" boxShadow ="2xl" h ={[50,100,120]} w ={[50,100,200]} mt ={[-130]} ml ={[5]} ><Image boxSize="full" src={value.image} className="pic1" alt=""/>  </Box>
<Box position="absolute" ml={[80,125,280]}  mt={[-90]} as="b" > {value.product_name}</Box>
<Box position="absolute" ml={[50,360,1015]} mt={[-90]} as="b" >{value.price}</Box>
<Box position="absolute" ml={[50,450,1215]} mt={[-90]} > <Button onClick={handleMinusCounter2} bg="#DEDEDE" size="xs"> - </Button>  <Text as="b" fontSize="18px" >  {counter2} </Text>  <Button onClick={handleAddCounter2} bg="#DEDEDE" size="xs"> + </Button>  </Box>
<Box position="absolute" ml={[50,560,1415]} mt={[-90]} as="b" > 2222</Box>

<Box position="relative" h="40" border="1px" borderTopColor="white" borderRightColor="white" borderLeftColor="white"  borderBottomColor="#DEDEDE" > </Box>
<Box position="absolute" boxShadow ="2xl" h ={[50,100,120]} w ={[50,100,200]} mt ={[-130]} ml ={[5]} ><Image boxSize="full" src={value.image} className="pic1" alt=""/>  </Box>
<Box position="absolute" ml={[80,125,280]}  mt={[-90]} as="b" > {value.product_name}</Box>
<Box position="absolute" ml={[50,360,1015]} mt={[-90]} as="b" >{value.price}</Box>
<Box position="absolute" ml={[50,450,1215]} mt={[-90]} as="b" ><Button onClick={handleMinusCounter3} bg="#DEDEDE" size="xs"> - </Button>  <Text as="b" fontSize="18px" >  {counter3} </Text>  <Button onClick={handleAddCounter3} bg="#DEDEDE" size="xs"> + </Button> </Box>
<Box position="absolute" ml={[50,560,1415]} mt={[-90]} as="b" > 2222</Box>

</Box>
)
})}






{/* {contextValue.mycart.map((value,index)=>{
            return(
                <Box key={index} boxShadow ="2xl" h ={[100,300,500]} w ={[100,300,600]} mt ="175" ml ={[30,70,100]} > 
                <Image boxSize="full" src={value.image} className="pic1" alt=""/>
                 </Box> 
            
            )
         })}  */}

          {/* Footer============================================================================================= */}

          <Flex justifyContent="center" color= "#AA8B56" mr="100" ml={[50,100,300]} mt="300">
          <Text fontSize={{base:'15px',sm:'20px', md:'20px', lg:'px'}}>Copyright©2022 Watchodile.All Right Reserved.</Text>
          </Flex>


</Box>



      )




//  console.log(item)


  }

  
   
  