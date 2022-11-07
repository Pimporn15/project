import React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { Landingpage } from "./pages/landingpage";
import { Navbar } from "./components/navbar";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Navbar />
      <Landingpage />
    </ChakraProvider>
  );
}

export default App;
