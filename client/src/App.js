import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ProductListingPage from "./pages/productListingPage";

function App() {
  return (
    <ChakraProvider>
      <ProductListingPage />
      {/* <CartsPage/> */}
      {/* <Landingpage /> */}
    </ChakraProvider>
  );
}

export default App;
