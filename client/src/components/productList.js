import React from "react";
import { Box, Flex, Image, Wrap } from "@chakra-ui/react";
import Products from "./productItem";
import ProductItem from "./productItem";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const result = await axios.get("http://localhost:4000/products");
    // console.log(result);
    setProducts(result.data.data);
  };
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return products.map((item) => {
    return (
      <>
        <ProductItem
          image={item.image}
          name={item.product_name}
          description={item.description}
          price={item.price}
          rating={item.rating}
        />
      </>
    );
  });
}

export default ProductList;
