import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

<<<<<<< HEAD
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
=======
// import { Landingpage } from "./pages/landingpage";
import { LoginPage } from "./pages/loginPage";

import Register from "./pages/Registerpage";
>>>>>>> c523b63 ( edit config after merge)

//สร้าง route
function App() {
  return (
    <ChakraProvider>
<<<<<<< HEAD
<<<<<<< HEAD
      <ProductListingPage />
      {/* <CartsPage/> */}
      {/* <Landingpage /> */}
      <Navbar />
      <Landingpage /> <Register />
=======
=======
      <LoginPage />

>>>>>>> c523b63 ( edit config after merge)
      <Register />
>>>>>>> 8e92e5a (updatestate)
    </ChakraProvider>
  );
}

export default App;
