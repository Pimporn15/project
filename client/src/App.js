import React from "react";
import { AuthProvider } from "./contexts/authentication";
import { ChakraProvider } from "@chakra-ui/react";
import { Landingpage } from "./pages/landingpage";
import { LoginPage } from "./pages/loginPage";
import { Register } from "./pages/Registerpage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {ProductDetail1}  from "./pages/products-detail1";              // อย่าลืม import !!!

import {CART} from "./pages/inCart";





function App() {
  return (
    <ChakraProvider>
      <Router>
        <AuthProvider>
          <Routes> 
            {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Landingpage />} />
            <Route path="/products/:id" element= {<ProductDetail1/>} /> */}
            <Route path="/cart" element={<CART/>}/>
            
           </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
    )
}
  export default App

