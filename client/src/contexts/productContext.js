import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../App";

export const ProductContext = React.createContext();
export const useProduct = () => { return React.useContext(ProductContext) }

function ProductProvider(props) {
  const [text, setText] = useState("Hello world");
  const contextValue = useContext(CartContext);
  //   const { mycart, setmyCart, cartItem, setTotalPrice } = CartContext();

  const addProductToCart = (value) => {
    const checkProductInCart = contextValue.mycart.find(
      (item) => item.product_id === value.product_id
    );

    let itemIndex = contextValue.mycart.findIndex(
      (item) => item.product_id === value.product_id
    );

    if (checkProductInCart) {
      let tempCartItems = [...contextValue.mycart];
      // Todo (2nd)
      // tempCartItems[itemIndex].quantity = tempCartItems[itemIndex].quantity + (x is `value.quantity`);
      tempCartItems[itemIndex].quantity =
        tempCartItems[itemIndex].quantity + value.quantity;
      contextValue.setmyCart(tempCartItems);
    } else {
      let tempProduct = {};
      tempProduct = {
        ...value,
        quantity: value.quantity,
      };

      contextValue.setmyCart([...contextValue.mycart, tempProduct]);
    }
  };

  const deleteCartItem = (itemId) => {
    const newCartItems = contextValue.mycart.filter(
      (item) => item.product_id !== itemId
    );
    contextValue.setmyCart(newCartItems);
    console.log(itemId);
  };

  return (
    <ProductContext.Provider value={{ text, addProductToCart, deleteCartItem }}>
      {props.children}
    </ProductContext.Provider>
  );

  // const useProduct = () => {
  //   return React.useContext(ProductContext);
  // }
}

export { ProductProvider };
