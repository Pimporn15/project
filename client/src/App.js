import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Landingpage } from "./pages/landingpage";

function App() {
  return (
    <ChakraProvider>
      <ProductListingPage />
      {/* <CartsPage/> */}
      {/* <Landingpage /> */}
      <Navbar />
      <Landingpage />
    </ChakraProvider>
  );
}

export default App;
