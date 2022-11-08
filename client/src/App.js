import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Register from "./pages/Registerpage";
import { Register } from "./pages/Registerpage";

function App() {
  return (
    <ChakraProvider>
      <Register />
    </ChakraProvider>
  );
}

export default App;
