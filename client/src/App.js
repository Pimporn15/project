import React, { createContext, useEffect, useState } from "react";
import { AuthProvider } from "./contexts/authentication";
import { ChakraProvider } from "@chakra-ui/react";
import { Landingpage } from "./pages/landingpage";
import { LoginPage } from "./pages/loginPage";
import { Register } from "./pages/Registerpage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetail1 } from "./pages/products-detail1"; // อย่าลืม import !!!
import { CART } from "./pages/inCart";
import { ProductListingPage } from "./pages/productListingPage";
import { ShowProfile } from "./pages/showProfile";
import { Address } from "./pages/address";

import { ProductProvider } from "./contexts/productContext";
import Success from "./components/successresult";


let cartFromLocalStorage = JSON.parse(localStorage.getItem("mycart") || "[]");

export const CartContext = createContext();

function App() {
  const [mycart, setmyCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("mycart", JSON.stringify(mycart));
  }, [mycart]);

  return (
    <CartContext.Provider
      value={{
        mycart,
        setmyCart,
      }}
    >
      <ChakraProvider>
        <Router>
          <ProductProvider>
            <AuthProvider>
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Landingpage />} />
                <Route path="/products" element={<ProductListingPage />} />
                <Route
                  path="/products/category/:id"
                  element={<ProductListingPage />}
                />
                <Route path="/profile" element={<ShowProfile />} />
                <Route path="/address" element={<Address />} />
                <Route path="/products/:id" element={<ProductDetail1 />} />
                <Route path="/cart" element={<CART />} />
                <Route path="/payment" element={<Success />} />
              </Routes>
            </AuthProvider>
          </ProductProvider>
        </Router>
      </ChakraProvider>
    </CartContext.Provider>
  );
}
export default App;
