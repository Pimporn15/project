import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
// import ProductListingPage from "./pages/productListingPage";
// import Profile from "./pages/profile";
import Address from "./pages/address"

function App() {
  return (
    <ChakraProvider>
      {/* <Profile/> */}
      <Address/>
    
    </ChakraProvider>
  );
}

export default App;
