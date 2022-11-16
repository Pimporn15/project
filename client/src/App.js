import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
// import ProductListingPage from "./pages/productListingPage";
import Profile from "./pages/profile";

function App() {
  return (
    <ChakraProvider>
      <Profile/>
    
    </ChakraProvider>
  );
}

export default App;
