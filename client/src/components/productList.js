import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
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

  return (
    <div>
      {products.map((item) => {
        return (
          <div>
            <img src={item.image}></img>
            {item.product_name}
            {item.description}
            {item.price}
            {item.rating}
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
