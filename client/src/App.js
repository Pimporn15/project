import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

// import { Landingpage } from "./pages/landingpage";
import { LoginPage } from "./pages/loginPage";



import Register from "./pages/Registerpage";

//สร้าง route
function App() {
  return (
    <ChakraProvider>

      <LoginPage />

      <Register />

    </ChakraProvider>
  );
}

export default App;
