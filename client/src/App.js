import React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
// import { Landingpage } from "./pages/landingpage";
// import CartsPage from "./pages/cartspage";
import ProductList from "./pages/productlist";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>

      < ProductList/>
        {/* <CartsPage/> */}
      {/* <Landingpage /> */}

    </ChakraProvider>
  );
}

export default App;
