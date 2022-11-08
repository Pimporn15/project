import React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { Landingpage } from "./pages/landingpage";


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Landingpage />
    </ChakraProvider>
  );
}

export default App;
