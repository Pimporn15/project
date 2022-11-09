import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import { Register } from "./pages/Registerpage";

//สร้าง route
function App() {
  return (
    <ChakraProvider>
      <Register />
    </ChakraProvider>
  );
}

export default App;
