import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {Register} from "./pages/Registerpage";
=======
import { Register } from "./pages/Registerpage";
>>>>>>> 8e92e5a (updatestate)
=======
import Register from "./pages/Registerpage";
>>>>>>> 7bd36fd (rebase)
=======
import { Register } from "./pages/Registerpage";
>>>>>>> c743d2c (git merge 11-09-65)

//สร้าง route
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
