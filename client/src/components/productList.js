import React from "react";
import { Box, Flex, Image, Wrap } from "@chakra-ui/react";
import Products from "./productItem";
import ProductItem from "./productItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../contexts/productContext";

function ProductList(props) {
  // const {products} = useProduct
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { categoryId } = props;

  // const getProducts = async () => {
  //   const result = await axios.get("http://localhost:4000/products");
  //   setProducts(result.data.data);
  // };
  // useEffect(() => {
  //   getProducts();
  // }, []);

  const getProductsByCategory = async (category) => {
    // console.log(category);
    const result = await axios.get(
      `http://localhost:4000/products?category=${category}`
    );

    setCategories(result.data.data);
    console.log(categories);
  };
  useEffect(() => {
    getProductsByCategory(categoryId);
  }, [categoryId]);

  return (
    <>
      {products.map((item, index) => {
        return (
          <Flex>
            <ProductItem
              key={index}
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
      })}

      {categories.map((item, index) => {
        return (
          <Flex>
            <ProductItem
              key={index}
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
      })}
    </>
  );
}

export default ProductList;
