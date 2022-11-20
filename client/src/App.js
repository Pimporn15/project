import React from "react";
import { AuthProvider } from "./contexts/authentication";
import { ChakraProvider } from "@chakra-ui/react";
import Profile from "./pages/profile";
import Address from "./pages/address";

import { Landingpage } from "./pages/landingpage";
import { LoginPage } from "./pages/loginPage";
import { Register } from "./pages/Registerpage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListingPage from "./pages/productListingPage";

import { ProductDetail1 } from "./pages/products-detail1"; // อย่าลืม import !!!
import ShowProfile from "./pages/showProfile";
import { ProductProvider } from "./contexts/product";

function App() {
  return (
    <ChakraProvider>
      {/* <Profile/> */}

      <Router>
        <AuthProvider>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LoginPage />} />

              <Route path="/" element={<Landingpage />} />
              <Route path="/products/:id" element={<ProductDetail1 />} />
              <Route path="/userprofile" element={<Profile />} />
              <Route path="/profile" element={<ShowProfile />} />
              <Route path="/address" element={<Address />} />

              <Route path="/" element={<Landingpage />} />
              <Route path="/products" element={<ProductListingPage />} />
            </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}
export default App;
