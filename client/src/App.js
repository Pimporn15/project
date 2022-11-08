import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
// import { Landingpage } from "./pages/landingpage";
import { LoginPage } from "./pages/loginPage";


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <LoginPage />
    </ChakraProvider>
  );
}

export default App;
