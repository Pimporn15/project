import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Products from "./productItem";
import ProductItem from "./productItem";
import axios from "axios";
import { useEffect, useState } from "react";
// import ProductItem from "./productItem";

// import TryProducts from '../components/tryproduct';

function ProductList() {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const result = await axios.get("http://localhost:4000/products");
    // console.log(result);
    setProduct(result.data.data);
  };
  console.log(product);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {product.map((item) => {
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
