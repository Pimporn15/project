import {
    Box,
    Button,
    Text,
    Image,
    Flex,
    Stack,
   
  } from "@chakra-ui/react";
  
  import{useEffect, useState} from "react";
  import { StarIcon } from "@chakra-ui/icons";

  import axios from 'axios'
  import React from "react";
  import { RatingStar } from "rating-star";

  function Star5() {
  let [rating5, setRating5] = React.useState(5);
  

  let onRatingChange = (score) => {
    setRating5(score);
  };

  return (
    <div className="App">
      {/* <h1>  </h1> */}
      <RatingStar
        clickable
        maxScore={5}
        id="123"
        rating={rating5}
        onRatingChange={onRatingChange}
      />
    </div>
  );
}

  
  



  
  export function ProductDetail8() {
    let [datas, setDatas] = useState([]);
    let [iserror, setError] = useState(null);
    let [isloading, setLoading] = useState(null);
    
    // let [textInfo, setTextInfo] = useState("");

    useEffect(()=>{
        getPosts()
    }, []);
    let getPosts = async () => {
    try{
        setError(false)
        setLoading(true)
       let response = await axios.get (`http://localhost:4000/products/11 `)
       setDatas(response.data.data)
       setLoading(false)
        } catch (err){
            setError(true)

        }
    }



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
         {datas.map((value,index)=>{
            return(
                <Box key={index} boxShadow ="2xl" h ={[100,300,500]} w ={[100,300,600]} mt ="175" ml ={[30,70,100]} > 
                <Image boxSize="full" src={value.image} className="pic1" alt=""/>
                 </Box> 
            
            )
         })} 
      
          {/* ข้อมูลต่างๆของสินค้า================================================================================== */}
          {datas.map((value, index)=>{
            return(
                <Flex key={index} bg="white-smoke" w={[100,200,500]} h="500" ml = {[100,400,900]} mt={[-100,-300,-500]} position="relative">
           <Stack spacing={2}>
            
            <Text fontSize={{base:'10px',sm:'20px', md:'20px', lg:'30px'}}> {value.product_name} </Text>


            <Text fontSize={{base:'10px',sm:'10px', md:'15px', lg:'25px'}}>
                <Flex> 
            
                <Box as="span" color="gray.600" fontSize="xl">
                  <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < value.rating ? "#fdd835" : "gray.300"}
                        />
                      ))}
                  </Box>
                </Box>
          

            <Flex position="absolute" ml="150" mt="2.5">  <Button  borderColor="white" size="xs" variant="outline"> <Text fontSize={[5,10,12]}>{value.rating} Points and Reviews.. </Text> </Button>  </Flex> 
                 </Flex>
             </Text>


            <Text fontSize={{base:'10px', md:'15px', lg:'20px'}}> {value.description}</Text>

            <Text fontSize="17"> Price</Text>
            <Box pb="20px" as ="b" color="tomato" fontSize="20"> ฿ {value.price} </Box>
         
            {/* จำนวนสินค้า========================================================================================================================= */}
              <Box m="100"> <Text fontSize="17px"> Quantity <Flex position="absolute" bg="white" display="flex" w="100px" h="30px" ml="70px" mt="-25px" justify="space-between"> <Button onClick={handleMinusCounter} bg="#CFB9AC" size="xs"> - </Button>  <Text as="b" fontSize="18px" >  {counter} </Text>  <Button onClick={handleAddCounter} bg="#CFB9AC" size="xs"> + </Button>      </Flex> </Text></Box>
            </Stack>
          </Flex>
            )
          })}

          


        
          


         {/* ปุ่มกด add to cart ==================================================================================== */}
          <Box ml = {[100,400,900]} >
            
          <Button size="lg" bg="#CFB9AC" color="white">
          <Box onClick mb="0px" mr="2px" > <Image boxSize="25px" src="picture/cart.svg" className="pic2" alt=""/> </Box>    <Box mr="15px">ADD TO CART</Box>
          </Button>
         
          </Box>
          



           {/* Footer============================================================================================= */}

          <Flex justifyContent="center" color= "#AA8B56" mr="100" ml={[50,100,300]} mt="300">
          <Text fontSize={{base:'15px',sm:'20px', md:'20px', lg:'px'}}>Copyright©2022 Watchodile.All Right Reserved.</Text>
          </Flex>


          </Box>
          
        



    )
   
}



 



   