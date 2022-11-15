import React from "react";
import { AuthProvider } from "./contexts/authentication";
import { ChakraProvider } from "@chakra-ui/react";
import { Landingpage } from "./pages/landingpage";
import { LoginPage } from "./pages/loginPage";
import { Register } from "./pages/Registerpage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ProductDetail1}  from "./pages/product-detail1";

function App() {
  return (
    <ChakraProvider>
      {/* <Router>
        <AuthProvider>
          <Routes> */}
            {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Landingpage />} /> */}
            <Router path="/products" elememt = {<ProductDetail1/>} />
            
          {/* </Routes>
        </AuthProvider>
      </Router> */}
    </ChakraProvider>
    )
}
  export default App

// import { useAuth } from "./contexts/authentication";
// import Authentication from "./pages/authenticatedApp";
// import Unauthentication from "./pages/unauthenticatedApp";

// function App() {
//   const auth = useAuth();
//   return auth.isAuthenticated ? <Authentication /> : <Unauthentication />;
// }

// export default App;
