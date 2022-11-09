import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Register from "./pages/Registerpage";

function App() {
  return (
    <ChakraProvider>
      <ProductListingPage />
      {/* <CartsPage/> */}
      {/* <Landingpage /> */}
      <Navbar />
      <Landingpage /> <Register />
    </ChakraProvider>
  );
}

export default App;
