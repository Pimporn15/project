import React from "react";
import { AuthProvider } from "./contexts/authentication";
import { ChakraProvider } from "@chakra-ui/react";
import { Landingpage } from "./pages/landingpage";
import { LoginPage } from "./pages/loginPage";
import { Register } from "./pages/Registerpage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Landingpage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}

// import { useAuth } from "./contexts/authentication";
// import AuthenticatedApp from "./pages/authenticatedApp";
// import UnauthenticatedApp from "./pages/UnauthenticatedApp";
// import { ChakraProvider } from "@chakra-ui/react";

// function App() {
//   const auth = useAuth();
//   <ChakraProvider>
//     return auth.isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
//   </ChakraProvider>;
// }

export default App;
