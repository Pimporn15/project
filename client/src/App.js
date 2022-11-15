import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

<<<<<<< HEAD
import {Register} from "./pages/Registerpage";
=======
import { Register } from "./pages/Registerpage";
>>>>>>> 8e92e5a (updatestate)

function App() {
  return (
    <ChakraProvider>
<<<<<<< HEAD
      <ProductListingPage />
      {/* <CartsPage/> */}
      {/* <Landingpage /> */}
      <Navbar />
      <Landingpage /> <Register />
=======
      <Register />
>>>>>>> 8e92e5a (updatestate)
    </ChakraProvider>
  );
}

export default App;
