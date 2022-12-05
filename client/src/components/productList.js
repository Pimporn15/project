
import React from "react";
import { Box, Center, Flex, Image, Wrap } from "@chakra-ui/react";
import ProductItem from "./productItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../contexts/productContext";
import ReactPaginate from "react-paginate";
import { Grid, GridItem } from '@chakra-ui/react'

function ProductList(props) {
  const [categories, setCategories] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const navigate = useNavigate();
  const { categoryId } = props;

  const itemsPerpage = 20;
  const pageVisited = pageNumber * itemsPerpage;
  const displayItems = categories
    .slice(pageVisited, pageVisited + itemsPerpage)
    .map((categories) => {
      console.log(categories);
      return (
        // <Wrap >
          <ProductItem
            // key={index}
            image={categories.image}
            imageBrand={categories.image_brand}
            name={categories.product_name}
            description={categories.description}
            price={categories.price}
            rating={categories.rating}
            product_id={categories.product_id}
          />
        // </Wrap>
      );
    });

  const getProductsByCategory = async (category) => {
    // console.log(category);
    const result = await axios.get(
      `http://localhost:4000/products?category=${category}`
    );

    setCategories(result.data.data.slice(0, 41));
    console.log(categories);
  };

  useEffect(() => {
    getProductsByCategory(categoryId);
  }, [categoryId]);

  const pageCount = Math.ceil(categories.length / itemsPerpage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (

    <Box w="70%" h="100%" >
     
      <Grid  
       templateColumns='repeat(4,5fr)' gap={6}>
  
      {displayItems}
      </Grid>
      <Center w="300px" h="100px" m="5%"  ml="60%" >
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginateButton"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginateDisale"}
        activeLinkClassName={"paginationActive"}
      />
     </Center>
    
    </Box>


  );
}

export default ProductList;