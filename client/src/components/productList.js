import React from "react";
import { Box, Flex, Image, Wrap } from "@chakra-ui/react";
import Products from "./productItem";
import ProductItem from "./productItem";
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const getProducts = async () => {
    const result = await axios.get("http://localhost:4000/products");
    setProducts(result.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products.map((item) => {
    return (
      <Flex>
        <ProductItem
          image={item.image}
          imageBrand={item.image_brand}
          name={item.product_name}
          description={item.description}
          price={item.price}
          rating={item.rating}
          product_id={item.product_id}
        />
      </Flex>
    );
  });
}

export default ProductList;
