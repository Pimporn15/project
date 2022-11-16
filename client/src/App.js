import React from "react";
import { AuthProvider } from "./contexts/authentication";
import { ChakraProvider } from "@chakra-ui/react";
import { Landingpage } from "./pages/landingpage";
import { LoginPage } from "./pages/loginPage";
import { Register } from "./pages/Registerpage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {ProductDetail10}  from "./pages/products-detail10";              // อย่าลืม import !!!
// import {ProductDetail} from "./pages/product-detail0";

function App() {
  return (
    <ChakraProvider>
      {/* <Router>
        <AuthProvider>
          <Routes>  */}
            {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Landingpage />} /> */}
            <ProductDetail10/>
            {/* <ProductDetail1/> */}
            
{/*             
          </Routes>
        </AuthProvider>
      </Router> */}
    </ChakraProvider>
    )
}
  export default App

