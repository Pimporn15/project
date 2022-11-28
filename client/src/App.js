import React, { createContext, useEffect, useState } from "react";
import { AuthProvider } from "./contexts/authentication";
import { ChakraProvider } from "@chakra-ui/react";
import { Landingpage } from "./pages/landingpage";
import { LoginPage } from "./pages/loginPage";
import { Register } from "./pages/Registerpage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetail1 } from "./pages/products-detail1"; // อย่าลืม import !!!
import { CART } from "./pages/inCart";

let cartFromLocalStorage = JSON.parse(localStorage.getItem("mycart") || "[]");
export const CartContext = createContext();
function App() {
  const [mycart, setmyCart] = useState(cartFromLocalStorage);
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantity, setToalQuantity] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // const addProductToCart = (product, numOfQuantity) => {
  //   const checkInCart = cartItem.find((item) => item.id === product.id);
  //   if (checkInCart) {
  //     setTotalPrice(
  //       (priceForItem) => priceForItem + product.price * numOfQuantity
  //     );
  //     setToalQuantity((quantityOfItem) => quantityOfItem + numOfQuantity);

  //     const updateCartItems = cartItem.map((cartProduct) => {
  //       if (cartProduct.id === product.id)
  //         return {
  //           ...cartProduct,
  //           numOfQuantity: cartProduct.numOfQuantity + numOfQuantity,
  //         };
  //     });
  //     setCartItem(updateCartItems);
  //   } else {
  //     // product.numOfQuantity = numOfQuantity;
  //     setCartItem([...cartItem, { ...product }]);
  //   }
  //   window.alert(`${quantity}  added to the cart`);
  // };

  function handleAddCounter() {
    setQuantity((beforeAdd) => beforeAdd + 1);
  }

  function handleMinusCounter() {
    setQuantity((beforeMinus) => {
      if (beforeMinus - 1 < 1) return 1;
      return beforeMinus - 1;
    });
  }

  useEffect(() => {
    localStorage.setItem("mycart", JSON.stringify(mycart));
  }, [mycart]);

  return (
    <CartContext.Provider
      value={{
        mycart,
        setmyCart,
        cartItem,
        totalPrice,
        totalQuantity,

        quantity,
        handleAddCounter,
        handleMinusCounter,
        // addProductToCart
      }}
    >
      <ChakraProvider>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Landingpage />} />
              <Route path="/products/:id" element={<ProductDetail1 />} />
              <Route path="/cart" element={<CART />} />
            </Routes>
          </AuthProvider>
        </Router>
      </ChakraProvider>
    </CartContext.Provider>
  );
}
export default App;
